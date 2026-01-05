import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { supabase } from "../lib/supabaseClient";
import Swal from "sweetalert2";
import { 
  Send, Loader2, Mail, MessageCircle, User, Globe, Sparkles, Pin 
} from "lucide-react";
import { SiGithub, SiLinkedin, SiInstagram, SiWhatsapp } from "react-icons/si";

const Contact = () => {
  // --- STATE MANAGEMENT ---
  const [contactData, setContactData] = useState({ name: "", email: "", message: "" });
  const [loadingContact, setLoadingContact] = useState(false);
  
  const [commentData, setCommentData] = useState({ name: "", message: "" });
  const [comments, setComments] = useState([]);
  const [loadingComment, setLoadingComment] = useState(false);

  // --- LOGIC (FETCH & REALTIME) ---
  useEffect(() => {
    fetchComments();

    const subscription = supabase
      .channel('public:comments')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'comments' }, (payload) => {
        if(payload.eventType === 'INSERT') {
            setComments((prev) => [payload.new, ...prev]);
        }
        if(payload.eventType === 'UPDATE') {
            fetchComments();
        }
      })
      .subscribe();

    return () => { supabase.removeChannel(subscription); };
  }, []);

  const fetchComments = async () => {
    const { data, error } = await supabase
      .from('comments')
      .select('*')
      .order('is_pinned', { ascending: false }) 
      .order('created_at', { ascending: false }); 

    if (!error) setComments(data);
  };

  // --- HANDLERS (Contact Form) ---
  const handleContactChange = (e) => setContactData({ ...contactData, [e.target.name]: e.target.value });
  
  const handleContactSubmit = async (e) => {
    e.preventDefault();
    setLoadingContact(true);
    try {
      const { error } = await supabase.from('contacts').insert([contactData]);
      if (error) throw error;
      Swal.fire({ title: 'Terkirim!', text: 'Pesan Anda telah saya terima.', icon: 'success', confirmButtonColor: '#3b82f6', background: '#0f172a', color: '#fff' });
      setContactData({ name: "", email: "", message: "" });
    } catch (error) {
      Swal.fire({ title: 'Error', text: 'Gagal mengirim pesan.', icon: 'error', background: '#0f172a', color: '#fff' });
    } finally {
      setLoadingContact(false);
    }
  };

  // --- HANDLERS (Guestbook) ---
  const handleCommentChange = (e) => setCommentData({ ...commentData, [e.target.name]: e.target.value });

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    setLoadingComment(true);
    try {
      const { error } = await supabase.from('comments').insert([{ ...commentData, is_pinned: false }]);
      if (error) throw error;
      setCommentData({ name: "", message: "" });
    } catch (error) {
      Swal.fire({ title: 'Error', text: 'Gagal komentar.', icon: 'error', background: '#0f172a', color: '#fff' });
    } finally {
      setLoadingComment(false);
    }
  };

  const formatDate = (dateString) => {
    const options = { hour: '2-digit', minute: '2-digit', day: 'numeric', month: 'short' };
    return new Date(dateString).toLocaleDateString('id-ID', options);
  };

  const socialLinks = [
    { icon: <SiGithub />, href: "https://github.com/alwznx", color: "hover:bg-slate-800" },
    { icon: <SiLinkedin />, href: "https://linkedin.com/in/ahmad-alwi-tio-wicaksono", color: "hover:bg-blue-700" },
    { icon: <SiInstagram />, href: "https://instagram.com/alwitiow_", color: "hover:bg-pink-600" },
    { icon: <SiWhatsapp />, href: "https://wa.me/628123456789", color: "hover:bg-green-600" },
  ];

  return (
    <section id="contact" className="py-24 bg-slate-950 relative overflow-hidden min-h-screen flex items-center">
      
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-600/5 rounded-full blur-[120px] -z-10"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[100px] -z-10"></div>

      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Section Header */}
        <div className="text-center mb-16">
           <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-blue-400 text-xs font-bold uppercase tracking-wider mb-4 shadow-lg shadow-blue-900/20"
           >
              <Sparkles className="w-3 h-3" /> Connect & Discuss
           </motion.div>
           <motion.h2 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.1 }}
             className="text-4xl md:text-5xl font-bold text-white"
           >
             Let's Build Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">Amazing</span>
           </motion.h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          
          {/* --- LEFT: CONTACT FORM --- */}
          <motion.div 
             initial={{ opacity: 0, x: -50 }}
             whileInView={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.6 }}
             className="relative"
          >
             <div className="bg-slate-900/60 backdrop-blur-2xl border border-slate-800 p-8 md:p-10 rounded-3xl shadow-2xl relative overflow-hidden group">
                {/* Glow Effect */}
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl group-hover:bg-blue-500/20 transition-all duration-700"></div>

                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
                    <Mail className="w-6 h-6 text-blue-500" /> Hubungi
                  </h3>
                  <p className="text-slate-400 mb-8 text-sm">
                  Ada yang ingin didiskusikan? Kirim saya pesan dan mari kita bicara.
                  </p>

                  <form onSubmit={handleContactSubmit} className="space-y-5">
                    <div className="grid md:grid-cols-2 gap-5">
                      <div className="space-y-2">
                         <label className="text-xs font-semibold text-slate-500 ml-1">YOUR NAME</label>
                         <div className="relative">
                            <User className="absolute left-4 top-3.5 w-4 h-4 text-slate-500" />
                            <input 
                              type="text" name="name" value={contactData.name} onChange={handleContactChange} required placeholder="Nama Anda" 
                              className="w-full bg-slate-950/80 border border-slate-800 rounded-xl py-3 pl-10 pr-4 text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                            />
                         </div>
                      </div>
                      <div className="space-y-2">
                         <label className="text-xs font-semibold text-slate-500 ml-1">YOUR EMAIL</label>
                         <div className="relative">
                            <Mail className="absolute left-4 top-3.5 w-4 h-4 text-slate-500" />
                            <input 
                              type="email" name="email" value={contactData.email} onChange={handleContactChange} required placeholder="Email Anda" 
                              className="w-full bg-slate-950/80 border border-slate-800 rounded-xl py-3 pl-10 pr-4 text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                            />
                         </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-xs font-semibold text-slate-500 ml-1">MESSAGE</label>
                        <div className="relative">
                           <MessageCircle className="absolute left-4 top-3.5 w-4 h-4 text-slate-500" />
                           <textarea 
                             name="message" value={contactData.message} onChange={handleContactChange} required rows="5" placeholder="Tuliskan Pesan Anda..." 
                             className="w-full bg-slate-950/80 border border-slate-800 rounded-xl py-3 pl-10 pr-4 text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all resize-none"
                           ></textarea>
                        </div>
                    </div>

                    <button type="submit" disabled={loadingContact} className="w-full py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-bold rounded-xl shadow-lg shadow-blue-500/20 flex items-center justify-center gap-2 transition-all transform active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed">
                      {loadingContact ? <Loader2 className="animate-spin w-5 h-5" /> : <><Send className="w-5 h-5" /> Send Message</>}
                    </button>
                  </form>

                  <div className="mt-8 pt-8 border-t border-slate-800 flex justify-between items-center">
                      <p className="text-sm text-slate-500 font-medium">Or find me on:</p>
                      <div className="flex gap-2">
                         {socialLinks.map((social, idx) => (
                            <a key={idx} href={social.href} target="_blank" rel="noreferrer" className={`w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center text-slate-300 transition-all ${social.color} hover:text-white`}>
                               {React.cloneElement(social.icon, { size: 18 })}
                            </a>
                         ))}
                      </div>
                  </div>
                </div>
             </div>
          </motion.div>

          {/* --- RIGHT: GUESTBOOK --- */}
          <motion.div 
             initial={{ opacity: 0, x: 50 }}
             whileInView={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.6, delay: 0.2 }}
             className="flex flex-col h-[650px]"
          >
            <div className="flex-1 bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden flex flex-col shadow-2xl relative">
               
               {/* Header Guestbook */}
               <div className="p-5 border-b border-slate-800 bg-slate-950/50 backdrop-blur-md flex justify-between items-center sticky top-0 z-20">
                  <div className="flex items-center gap-3">
                     <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center">
                        <Globe className="w-5 h-5 text-blue-500" />
                     </div>
                     <div>
                        <h3 className="font-bold text-white text-sm">Public Guestbook</h3>
                        <div className="flex items-center gap-1.5">
                           <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                           <span className="text-[10px] text-slate-400">System Online</span>
                        </div>
                     </div>
                  </div>
                  <div className="px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-xs text-slate-300 font-mono">
                     {comments.length} Posts
                  </div>
               </div>

               {/* Messages Area */}
               <div className="flex-1 overflow-y-auto p-5 space-y-4 scroll-smooth bg-slate-950/30">
                  {comments.length === 0 ? (
                    <div className="h-full flex flex-col items-center justify-center text-slate-600 space-y-2">
                       <MessageCircle className="w-10 h-10 opacity-20" />
                       <p className="text-sm">No messages yet. Start the conversation!</p>
                    </div>
                  ) : (
                    comments.map((comment) => (
                      <div 
                        key={comment.id} 
                        className={`flex gap-3 animate-in fade-in slide-in-from-bottom-2 duration-500 ${comment.is_pinned ? 'bg-blue-500/5 p-3 rounded-2xl border border-blue-500/20' : ''}`}
                      >
                         {/* Avatar */}
                         <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold text-white shrink-0 shadow-lg ${
                            ['bg-blue-500', 'bg-purple-500', 'bg-cyan-500', 'bg-pink-500', 'bg-orange-500'][comment.name.length % 5]
                         }`}>
                           {comment.name.charAt(0).toUpperCase()}
                         </div>
                         
                         <div className="max-w-[85%]">
                            <div className="flex items-baseline gap-2 mb-1">
                               <span className="text-xs font-bold text-slate-300 hover:text-blue-400 cursor-pointer transition-colors">{comment.name}</span>
                               <span className="text-[10px] text-slate-600">{formatDate(comment.created_at)}</span>
                               
                               {/* PINNED INDICATOR */}
                               {comment.is_pinned && (
                                   <div className="flex items-center gap-1 text-[10px] text-blue-400 font-bold bg-blue-500/10 px-2 py-0.5 rounded-full border border-blue-500/20">
                                       <Pin className="w-3 h-3 fill-blue-400" /> Pinned
                                   </div>
                               )}
                            </div>
                            <div className={`bg-slate-800/60 p-3 rounded-2xl rounded-tl-none border border-slate-700/50 text-sm text-slate-300 shadow-sm ${comment.is_pinned ? 'border-blue-500/30 bg-blue-900/10' : ''}`}>
                               {comment.message}
                            </div>
                         </div>
                      </div>
                    ))
                  )}
               </div>

               {/* Input Area */}
               <div className="p-4 bg-slate-950 border-t border-slate-800 z-20">
                  <form onSubmit={handleCommentSubmit} className="flex flex-col gap-3">
                     <div className="relative">
                        <User className="absolute left-3 top-2.5 w-4 h-4 text-slate-500" />
                        <input 
                           type="text" name="name" value={commentData.name} onChange={handleCommentChange} required placeholder="Your Display Name"
                           className="w-full bg-slate-900 border border-slate-700 rounded-xl py-2 pl-9 pr-4 text-sm text-white focus:border-green-500 focus:bg-slate-800 transition-all outline-none"
                        />
                     </div>
                     <div className="flex gap-2">
                        <input 
                           type="text" name="message" value={commentData.message} onChange={handleCommentChange} required placeholder="Type a public message..."
                           className="flex-1 bg-slate-900 border border-slate-700 rounded-xl py-2 px-4 text-sm text-white focus:border-green-500 focus:bg-slate-800 transition-all outline-none"
                        />
                        <button type="submit" disabled={loadingComment} className="bg-green-600 hover:bg-green-700 text-white p-2.5 rounded-xl transition-colors shadow-lg shadow-green-900/20 disabled:opacity-50">
                           {loadingComment ? <Loader2 className="animate-spin w-5 h-5" /> : <Send className="w-5 h-5" />}
                        </button>
                     </div>
                  </form>
               </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;