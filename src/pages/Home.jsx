import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download, Linkedin, Github, Mail, MousePointer2, Instagram } from "lucide-react";
import PhysicsLanyard from "../components/PhysicsLanyard";

const Home = () => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const toRotate = ["Information Technology Education Student", "Full Stack Developer", "Tech Enthusiast"];

  const socialLinks = [
    { icon: Github, href: "https://github.com/alwznx", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/ahmad-alwi-tio-wicaksono", label: "LinkedIn" },
    { icon: Instagram, href: "https://instagram.com/alwitiow_", label: "Instagram" },
    { icon: Mail, href: "mailto:alwitiow@gmail.com", label: "Email" }
  ];

  // Logic Typing Effect (Tetap Sama)
  useEffect(() => {
    const handleType = () => {
      const i = loopNum % toRotate.length;
      const fullText = toRotate[i];
      setText(isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1));
      setTypingSpeed(isDeleting ? 50 : 150);
      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };
    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      
      {/* Background Dynamic */}
      <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] animate-pulse delay-1000"></div>

      <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
        
        {/* --- KOLOM KIRI: TEKS (Tetap Sama) --- */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium backdrop-blur-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-500"></span>
            </span>
            Ready to Innovate
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 animate-gradient-x bg-[length:200%_auto]">Alwitiow</span>
            <br />
            <span className="text-3xl md:text-5xl text-slate-400 font-semibold min-h-[60px] inline-block">
              {text}<span className="animate-blink border-r-2 border-blue-500 ml-1"></span>
            </span>
          </h1>

          <p className="text-slate-400 text-lg max-w-lg leading-relaxed">
            Mengubah baris kode menjadi solusi digital yang nyata. Fokus pada performa, desain interaktif, dan teknologi web modern.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <a href="#portfolio" className="group relative px-8 py-3 bg-blue-600 text-white rounded-full font-medium overflow-hidden transition-all hover:scale-105 shadow-lg shadow-blue-500/25">
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-500 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <span className="relative flex items-center gap-2">View Work <ArrowRight className="w-4 h-4" /></span>
            </a>
            <a href="#" className="px-8 py-3 border border-slate-700 hover:border-blue-500/50 text-slate-300 hover:text-white rounded-full font-medium transition-all hover:bg-slate-800 flex items-center gap-2">
              Download CV <Download className="w-4 h-4" />
            </a>
          </div>

          <div className="flex items-center gap-4 pt-6">
             {socialLinks.map((social, index) => (
                <a key={index} href={social.href} target="_blank" rel="noopener noreferrer" className="group relative p-3 bg-slate-900 border border-slate-800 rounded-xl hover:border-blue-500/50 hover:bg-slate-800 transition-all duration-300 hover:-translate-y-1">
                  <social.icon className="w-5 h-5 text-slate-400 group-hover:text-blue-400 transition-colors" />
                </a>
             ))}
          </div>
        </motion.div>

        {/* --- KOLOM KANAN: 3D PHYSICS LANYARD --- */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex justify-center items-center h-[600px] w-full" 
        >
          {/* Lanyard Component 3D */}
          <div className="absolute inset-0 z-20">
             <PhysicsLanyard />
          </div>

          {/* Floating Badge 1 (Tetap di belakang/samping) */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute right-4 top-1/4 bg-slate-900/80 backdrop-blur-md p-3 rounded-xl border border-slate-700 shadow-xl flex items-center gap-3 z-10 pointer-events-none"
          >
            <div className="bg-blue-500/20 p-2 rounded-lg text-blue-400"><MousePointer2 className="w-5 h-5" /></div>
            <div>
              <p className="text-xs text-slate-400">Focus</p>
              <p className="text-sm font-bold text-white">Full Stack Developer</p>
            </div>
          </motion.div>

          {/* Floating Badge 2 */}
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute left-4 bottom-1/4 bg-slate-900/80 backdrop-blur-md p-3 rounded-xl border border-slate-700 shadow-xl flex items-center gap-3 z-10 pointer-events-none"
          >
            <div className="bg-cyan-500/20 p-2 rounded-lg text-cyan-400"><Github className="w-5 h-5" /></div>
            <div>
              <p className="text-xs text-slate-400">Commits</p>
              <p className="text-sm font-bold text-white">Start To Push</p>
            </div>
          </motion.div>

        </motion.div>

      </div>
      
      {/* Scroll Down Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-500 flex flex-col items-center gap-2"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-5 h-8 border-2 border-slate-500 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-blue-500 rounded-full animate-bounce"></div>
        </div>
      </motion.div>

    </section>
  );
};

export default Home;