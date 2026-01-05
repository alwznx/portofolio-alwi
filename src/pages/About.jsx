import React from "react";
import { motion } from "framer-motion";
import { Code2, Database, Globe, Cpu, MapPin, Coffee, Zap, Terminal, Layout, Server, GitBranch } from "lucide-react";
import { 
    SiHtml5, SiCss3, SiJavascript, SiReact, SiTailwindcss, SiVuedotjs, 
    SiPhp, SiLaravel, SiPython, SiCplusplus, SiMysql, SiNodedotjs, 
    SiGit, SiFigma, SiVercel, SiBootstrap 
  } from "react-icons/si";
  import { FaJava } from "react-icons/fa";

// Komponen Kartu Reusable
const Card = ({ children, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    whileHover={{ y: -5 }}
    className={`bg-slate-900/50 border border-slate-800 backdrop-blur-sm rounded-3xl p-6 hover:border-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 ${className}`}
  >
    {children}
  </motion.div>
);

const About = () => {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] -z-10"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[120px] -z-10"></div>

      <div className="container mx-auto px-6 max-w-6xl">
        
        {/* --- HEADER --- */}
        <div className="mb-12">
            <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium mb-4"
            >
                <Zap className="w-3 h-3" /> About Me
            </motion.div>
            <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-3xl md:text-5xl font-bold text-white"
            >
                Always <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">Learning</span> & Improving.
            </motion.h2>
        </div>

        {/* --- BENTO GRID LAYOUT --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(180px,auto)]">
            
            {/* 1. MAIN BIO CARD */}
            <Card className="md:col-span-2 md:row-span-2 flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-white mb-4">
                    Hello, I'm <span className="text-blue-500">Alwi</span> 👋
                </h3>
                <div className="space-y-4 text-slate-400 text-lg leading-relaxed">
                    <p>
                        Seorang <span className="text-white font-medium">Mahasiswa Pendidikan Teknologi Informasi</span> yang sedang menikmati proses belajar menjadi Full Stack Developer.
                    </p>
                    <p>
                        Saya percaya bahwa ahli hari ini adalah pemula yang tidak pernah menyerah. Saat ini saya fokus memperdalam logika pemrograman, eksplorasi framework baru, dan membangun portofolio yang solid.
                    </p>
                </div>
                <div className="mt-8 flex gap-4">
                    <div className="flex items-center gap-2 text-sm text-slate-500 bg-slate-950 px-4 py-2 rounded-full border border-slate-800">
                        <MapPin className="w-4 h-4 text-red-500" /> Surabaya, Indonesia
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-500 bg-slate-950 px-4 py-2 rounded-full border border-slate-800">
                        <Globe className="w-4 h-4 text-blue-500" /> Open to Remote
                    </div>
                </div>
            </Card>

            {/* 2. STATS CARD (Versi Pemula/Learner) */}
            <Card className="md:row-span-2 flex flex-col justify-between bg-gradient-to-b from-slate-900 to-slate-950">
                <div>
                    <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-500 mb-6">
                        <Terminal className="w-6 h-6" />
                    </div>
                    <h4 className="text-lg font-bold text-white mb-1">Learning Curve</h4>
                    <p className="text-xs text-slate-500">My Current Progress</p>
                </div>
                
                <div className="space-y-6 mt-6">
                    <div>
                        <div className="flex justify-between text-sm mb-1">
                            <span className="text-slate-400">Frontend</span>
                            <span className="text-blue-400 font-bold">60%</span>
                        </div>
                        <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                            <motion.div 
                                initial={{ width: 0 }}
                                whileInView={{ width: "60%" }}
                                transition={{ duration: 1, delay: 0.5 }}
                                className="h-full bg-blue-500 rounded-full"
                            ></motion.div>
                        </div>
                    </div>
                    <div>
                        <div className="flex justify-between text-sm mb-1">
                            <span className="text-slate-400">Backend</span>
                            <span className="text-cyan-400 font-bold">45%</span>
                        </div>
                        <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                            <motion.div 
                                initial={{ width: 0 }}
                                whileInView={{ width: "45%" }}
                                transition={{ duration: 1, delay: 0.7 }}
                                className="h-full bg-cyan-500 rounded-full"
                            ></motion.div>
                        </div>
                    </div>
                    <div>
                    <div className="flex justify-between text-sm mb-1">
                            <span className="text-slate-400">UI/UX</span>
                            <span className="text-green-400 font-bold">40%</span>
                        </div>
                        <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                            <motion.div 
                                initial={{ width: 0 }}
                                whileInView={{ width: "40%" }}
                                transition={{ duration: 1, delay: 0.7 }}
                                className="h-full bg-green-500 rounded-full"
                            ></motion.div>
                        </div>
                    </div>
                    <div>
                        <div className="flex justify-between text-sm mb-1">
                            <span className="text-slate-400">Database & Tools</span>
                            <span className="text-purple-400 font-bold">50%</span>
                        </div>
                        <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                            <motion.div 
                                initial={{ width: 0 }}
                                whileInView={{ width: "50%" }}
                                transition={{ duration: 1, delay: 0.9 }}
                                className="h-full bg-purple-500 rounded-full"
                            ></motion.div>
                        </div>
                    </div>
                </div>
            </Card>

            {/* 3. TECH ARSENAL (Sesuai Gambar GitHub) */}
            <Card className="md:col-span-2 overflow-hidden group">
                <div className="flex items-center justify-between mb-6">
                     <h4 className="text-lg font-bold text-white flex items-center gap-2">
                        <Cpu className="w-5 h-5 text-blue-500" /> Tech Stack & Tools
                     </h4>
                     <span className="text-xs text-slate-500">I use these</span>
                </div>
                
                {/* Infinite Scroll Container */}
                <div className="relative flex overflow-x-hidden mask-linear-fade">
                     <motion.div 
                        className="flex gap-6 whitespace-nowrap"
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{ repeat: Infinity, ease: "linear", duration: 25 }} // Speed disesuaikan agar terbaca
                     >
                        {[...techs, ...techs].map((tech, index) => (
                             <div key={index} className="flex items-center gap-2 px-4 py-2 bg-slate-950 border border-slate-800 rounded-lg text-slate-300 hover:border-blue-500 hover:text-white transition-colors cursor-default">
                                {tech.icon}
                                <span className="font-medium text-sm">{tech.name}</span>
                             </div>
                        ))}
                     </motion.div>
                </div>
            </Card>

            {/* 4. STATUS CARD */}
            <Card className="flex flex-col justify-center items-center text-center bg-blue-600 border-none relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
                <div className="relative z-10">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3 backdrop-blur-md">
                        <Coffee className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-white font-bold text-lg">Student Life</h4>
                    <p className="text-blue-100 text-sm mt-1">Eat. Sleep. Code.</p>
                    <div className="mt-4 text-xs bg-black/20 px-3 py-1 rounded-full text-blue-100 inline-block">
                        Status: Learning 📚
                    </div>
                </div>
            </Card>

        </div>
      </div>
    </section>
  );
};

// Data Tech Sesuai Gambar (Languages, Frameworks, Tools)
const techs = [
    { name: "HTML5", icon: <SiHtml5 className="text-orange-500" /> },
      { name: "CSS3", icon: <SiCss3 className="text-blue-500" /> },
      { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
      { name: "Java", icon: <FaJava className="text-red-500" /> },
      { name: "PHP", icon: <SiPhp className="text-purple-400" /> },
      { name: "Python", icon: <SiPython className="text-blue-400" /> },
      { name: "C++", icon: <SiCplusplus className="text-blue-600" /> },
      { name: "React", icon: <SiReact className="text-cyan-400" /> },
      { name: "Laravel", icon: <SiLaravel className="text-red-600" /> },
      { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-300" /> },
      { name: "Vue.js", icon: <SiVuedotjs className="text-green-500" /> },
      { name: "Bootstrap", icon: <SiBootstrap className="text-purple-600" /> },
      { name: "Node.js", icon: <SiNodedotjs className="text-green-500" /> },
      { name: "MySQL", icon: <SiMysql className="text-blue-500" /> },
      { name: "Git", icon: <SiGit className="text-orange-600" /> },
      { name: "Figma", icon: <SiFigma className="text-purple-500" /> },
      { name: "Vercel", icon: <SiVercel className="text-white" /> }, 
];

export default About;