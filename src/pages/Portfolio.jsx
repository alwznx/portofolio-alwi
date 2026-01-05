import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  X, Github, ExternalLink, FolderGit2, Award, ChevronRight, 
  Terminal, Layers, Box, ChevronDown, Download 
} from "lucide-react";
import { 
  SiHtml5, SiCss3, SiJavascript, SiReact, SiTailwindcss, SiVuedotjs, 
  SiPhp, SiLaravel, SiPython, SiCplusplus, SiMysql, SiNodedotjs, 
  SiGit, SiFigma, SiVercel, SiBootstrap 
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

// --- IMPORT GAMBAR PROJECT ---
import eduReflectImg from '../assets/porto/edureflect.jpg';
import perpus from '../assets/porto/perpustakaan-digital.png';
import joki from '../assets/porto/jokigame.png';
import presensi from '../assets/porto/presensi-ai.png';
import birthday from '../assets/porto/birthday.png';

// --- IMPORT SERTIFIKAT (PDF & IMG) ---
import hkiEduReflectImg from '../assets/cert/hki-edureflect.png';
import hkiEduReflectPdf from '../assets/cert/hki-edureflect.pdf';
import englishLcImg from '../assets/cert/english-lc.png';
import englishLcPdf from '../assets/cert/english-lc.pdf';

// --- DATA PROJECTS ---
const projects = [
  {
    id: 1,
    title: "EduReflect",
    category: "Web Development",
    image: eduReflectImg, 
    desc: "Platform refleksi pendidikan untuk evaluasi pembelajaran.",
    github: "https://github.com/alwznx/EduReflect",
    demo: null, 
    tech: ["PHP", "MySQL", "Bootstrap", "JavaScript"],
    features: ["Sistem login multi-user", "Dashboard analitik", "Export laporan PDF", "Form refleksi"]
  },
  {
    id: 2,
    title: "Perpustakaan Digital",
    category: "Fullstack Web",
    image: perpus,
    desc: "Sistem manajemen peminjaman buku berbasis web.",
    github: "https://github.com/alwznx/perpustakaan-digital",
    demo: "https://perpustakaan-digital-kappa.vercel.app/",
    tech: ["PHP", "Laravel", "Tailwind", "MySQL"],
    features: ["Manajemen Data Buku", "Denda otomatis", "Riwayat real-time", "Kartu anggota digital"]
  },
  {
    id: 3,
    title: "JokiGame Manager",
    category: "Desktop App",
    image: joki,
    desc: "Aplikasi desktop manajemen order jasa joki game.",
    github: "https://github.com/alwznx/Project-PBO-Simple-JOKIGAME-Netbeans",
    demo: null,
    tech: ["Java", "Netbeans", "Swing GUI", "MySQL"],
    features: ["Form Order", "Kalkulasi Harga", "CRUD Pelanggan", "Laporan Harian"]
  },
  {
    id: 4,
    title: "AI Face Attendance",
    category: "Artificial Intelligence",
    image: presensi,
    desc: "Sistem absensi otomatis menggunakan pengenalan wajah.",
    github: "https://github.com/alwznx/presensi-ai",
    demo: null,
    tech: ["Python", "OpenCV", "Face_recognition", "CSV"],
    features: ["Deteksi wajah real-time", "Anti-spoofing", "Export log Excel", "Multi-face support"]
  },
  {
    id: 5,
    title: "Birthday Wish Web",
    category: "Creative Frontend",
    image: birthday,
    desc: "Website ucapan ulang tahun interaktif dengan animasi.",
    github: "https://github.com/alwznx/selamatulangtahunsapii-", 
    demo: "https://just4you-an.vercel.app/", 
    tech: ["HTML5", "CSS3", "JavaScript", "AOS"],
    features: ["Animasi Balon", "Auto-play Musik", "Galeri Foto", "Responsive Mobile"]
  },
  {
    id: 6,
    title: "Personal Portfolio",
    category: "Web Design",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=1000&auto=format&fit=crop",
    desc: "Website portofolio interaktif dengan efek 3D.",
    github: "https://github.com/alwznx",
    demo: "#",
    tech: ["React", "Three.js", "Tailwind", "Framer"],
    features: ["3D Physics Lanyard", "Page Transitions", "Glassmorphism", "Guestbook System"]
  }
];

// --- DATA CERTIFICATES ---
const certificates = [
  { 
    id: 1, 
    title: "Hak Cipta Software: EduReflect", 
    issuer: "Kemenkumham RI", 
    date: "20 Nov 2025", 
    type: "Intellectual Property",
    pdfLink: hkiEduReflectPdf, 
    image: hkiEduReflectImg 
  },
  { 
    id: 2, 
    title: "Basic Intensive English Program", 
    issuer: "Kampung Inggris LC", 
    date: "July 2025", 
    type: "Language Proficiency",
    pdfLink: englishLcPdf,
    image: englishLcImg   
  }
];

// --- DATA TECH STACK ---
const techStack = {
    languages: [
      { name: "HTML5", icon: <SiHtml5 className="text-orange-500" /> },
      { name: "CSS3", icon: <SiCss3 className="text-blue-500" /> },
      { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
      { name: "Java", icon: <FaJava className="text-red-500" /> },
      { name: "PHP", icon: <SiPhp className="text-purple-400" /> },
      { name: "Python", icon: <SiPython className="text-blue-400" /> },
      { name: "C++", icon: <SiCplusplus className="text-blue-600" /> },
    ],
    frameworks: [
      { name: "React", icon: <SiReact className="text-cyan-400" /> },
      { name: "Laravel", icon: <SiLaravel className="text-red-600" /> },
      { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-300" /> },
      { name: "Vue.js", icon: <SiVuedotjs className="text-green-500" /> },
      { name: "Bootstrap", icon: <SiBootstrap className="text-purple-600" /> },
    ],
    tools: [
      { name: "Node.js", icon: <SiNodedotjs className="text-green-500" /> },
      { name: "MySQL", icon: <SiMysql className="text-blue-500" /> },
      { name: "Git", icon: <SiGit className="text-orange-600" /> },
      { name: "Figma", icon: <SiFigma className="text-purple-500" /> },
      { name: "Vercel", icon: <SiVercel className="text-white" /> }, 
    ]
};

const Portfolio = () => {
    const [activeTab, setActiveTab] = useState("projects");
    
    // State Modal
    const [selectedProjectId, setSelectedProjectId] = useState(null);
    const selectedProject = projects.find(p => p.id === selectedProjectId);

    const [selectedCertId, setSelectedCertId] = useState(null);
    const selectedCert = certificates.find(c => c.id === selectedCertId);

    // Load More Logic
    const [visibleProjects, setVisibleProjects] = useState(3); 
    const [visibleCerts, setVisibleCerts] = useState(3);

    return (
        <section id="portfolio" className="py-20 bg-slate-950 relative overflow-hidden min-h-screen">
          
          {/* Background Decor */}
          <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-blue-900/10 to-transparent -z-10"></div>
    
          <div className="container mx-auto px-6 max-w-6xl">
            
            {/* --- HEADER --- */}
            <div className="text-center mb-12">
               <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium mb-4"
               >
                  <FolderGit2 className="w-3 h-3" /> My Work
               </motion.div>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-3xl md:text-5xl font-bold text-white mb-8"
              >
                Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">Projects</span>
              </motion.h2>
    
              {/* TAB NAVIGATION */}
              <div className="flex flex-wrap justify-center gap-4 mb-12">
                {["projects", "certificates", "tech"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 border ${
                      activeTab === tab 
                        ? "bg-blue-600 border-blue-500 text-white shadow-[0_0_20px_rgba(37,99,235,0.3)]" 
                        : "bg-slate-900 border-slate-800 text-slate-400 hover:border-blue-500/50 hover:text-white"
                    }`}
                  >
                    {tab === "projects" && "Projects"}
                    {tab === "certificates" && "Certificates"}
                    {tab === "tech" && "Tech Stack"}
                  </button>
                ))}
              </div>
            </div>
    
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="min-h-[400px]"
            >
              {/* 1. PROJECTS TAB */}
              {activeTab === "projects" && (
                <>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.slice(0, visibleProjects).map((project) => (
                      <motion.div
                        key={project.id}
                        layoutId={`project-card-${project.id}`}
                        onClick={() => setSelectedProjectId(project.id)}
                        className="group cursor-pointer bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-blue-500/50 hover:shadow-xl transition-all"
                      >
                        <div className="relative h-48 overflow-hidden">
                          <img src={project.image} alt={project.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
                          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
                          <div className="absolute top-3 right-3 bg-slate-950/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs text-white border border-slate-700">
                            {project.category}
                          </div>
                        </div>
                        <div className="p-6">
                          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">{project.title}</h3>
                          <p className="text-slate-400 text-sm line-clamp-2 mb-4">{project.desc}</p>
                          <div className="flex flex-wrap gap-2 mb-4">
                              {project.tech.slice(0, 3).map((t, i) => (
                                <span key={i} className="text-[10px] uppercase font-bold tracking-wider px-2 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700">{t}</span>
                              ))}
                              {project.tech.length > 3 && <span className="text-[10px] px-2 py-1 text-slate-500">+{project.tech.length - 3}</span>}
                          </div>
                          <div className="flex items-center text-blue-400 text-sm font-medium">View Details <ChevronRight className="w-4 h-4 ml-1" /></div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                  {visibleProjects < projects.length && (
                    <div className="flex justify-center mt-12">
                      <button onClick={() => setVisibleProjects(prev => prev + 3)} className="flex items-center gap-2 px-6 py-3 bg-slate-900 border border-slate-700 rounded-full text-slate-300 hover:text-white hover:border-blue-500 transition-all">
                        Load More Projects <ChevronDown className="w-4 h-4" />
                      </button>
                    </div>
                  )}
                </>
              )}
    
              {/* 2. CERTIFICATES TAB */}
              {activeTab === "certificates" && (
                <>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {certificates.slice(0, visibleCerts).map((cert) => (
                      <motion.div 
                         key={cert.id} 
                         layoutId={`cert-card-${cert.id}`}
                         onClick={() => setSelectedCertId(cert.id)} 
                         className="group cursor-pointer relative aspect-[4/3] bg-slate-800 rounded-xl overflow-hidden border border-slate-700 hover:border-blue-500 transition-all shadow-lg"
                      >
                        <img src={cert.image} alt={cert.title} className="w-full h-full object-contain p-4 bg-white" />
                        <div className="absolute inset-0 bg-slate-900/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 text-center">
                          <Award className="w-10 h-10 text-blue-500 mb-2" />
                          <h4 className="text-white font-bold text-lg mb-1 line-clamp-1">{cert.title}</h4>
                          <p className="text-blue-300 text-sm mb-4">{cert.issuer}</p>
                          <span className="px-4 py-2 bg-blue-600 text-white text-sm rounded-full font-medium hover:bg-blue-500 transition-colors">
                            View Certificate
                          </span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                  {visibleCerts < certificates.length && (
                    <div className="flex justify-center mt-12">
                      <button onClick={() => setVisibleCerts(prev => prev + 3)} className="flex items-center gap-2 px-6 py-3 bg-slate-900 border border-slate-700 rounded-full text-slate-300 hover:text-white hover:border-blue-500 transition-all">
                        See More Certificates <ChevronDown className="w-4 h-4" />
                      </button>
                    </div>
                  )}
                </>
              )}
    
              {/* 3. TECH STACK TAB */}
              {activeTab === "tech" && (
                <div className="space-y-12">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2"><Terminal className="text-blue-500" /> Languages</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                      {techStack.languages.map((tech, i) => (
                        <div key={i} className="p-4 bg-slate-900 border border-slate-800 rounded-xl flex items-center gap-3 hover:border-blue-500/50 hover:bg-slate-800/80 transition-all cursor-default">
                          {React.cloneElement(tech.icon, { className: "w-6 h-6 " + tech.icon.props.className })}
                          <span className="text-slate-300 font-medium">{tech.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2"><Layers className="text-cyan-500" /> Frameworks & Libraries</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                      {techStack.frameworks.map((tech, i) => (
                        <div key={i} className="p-4 bg-slate-900 border border-slate-800 rounded-xl flex items-center gap-3 hover:border-cyan-500/50 hover:bg-slate-800/80 transition-all cursor-default">
                          {React.cloneElement(tech.icon, { className: "w-6 h-6 " + tech.icon.props.className })}
                          <span className="text-slate-300 font-medium">{tech.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2"><Box className="text-purple-500" /> Tools & Environment</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                      {techStack.tools.map((tech, i) => (
                        <div key={i} className="p-4 bg-slate-900 border border-slate-800 rounded-xl flex items-center gap-3 hover:border-purple-500/50 hover:bg-slate-800/80 transition-all cursor-default">
                          {React.cloneElement(tech.icon, { className: "w-6 h-6 " + tech.icon.props.className })}
                          <span className="text-slate-300 font-medium">{tech.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
    
          {/* --- MODAL DETAIL PROJECT --- */}
          <AnimatePresence>
            {selectedProjectId && selectedProject && (
              <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6">
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedProjectId(null)} className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
                <motion.div layoutId={`project-card-${selectedProjectId}`} className="relative w-full max-w-3xl bg-slate-900 border border-slate-700 rounded-3xl overflow-hidden shadow-2xl max-h-[90vh] overflow-y-auto">
                  <button onClick={() => setSelectedProjectId(null)} className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-red-500 rounded-full text-white transition-colors"><X className="w-5 h-5" /></button>
                  <div className="relative h-64 sm:h-80">
                    <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover" />
                    <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-slate-900 to-transparent">
                        <h2 className="text-3xl font-bold text-white mb-2">{selectedProject.title}</h2>
                        <span className="px-3 py-1 bg-blue-600 text-white text-xs font-bold rounded-full">{selectedProject.category}</span>
                    </div>
                  </div>
                  <div className="p-8 space-y-6">
                    <p className="text-slate-300 leading-relaxed text-lg">{selectedProject.desc}</p>
                    <div>
                        <h3 className="text-lg font-bold text-white mb-3">Key Features</h3>
                        <ul className="grid sm:grid-cols-2 gap-2">
                            {selectedProject.features.map((f, i) => (
                                <li key={i} className="flex items-center gap-2 text-slate-400 text-sm"><div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div> {f}</li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-white mb-3">Tech Stack</h3>
                        <div className="flex flex-wrap gap-2">
                            {selectedProject.tech.map((t, i) => (
                                <span key={i} className="px-3 py-1 bg-slate-800 border border-slate-700 rounded-lg text-slate-300 text-sm font-medium">{t}</span>
                            ))}
                        </div>
                    </div>
                    <div className="flex gap-4 pt-4 border-t border-slate-800">
                        {selectedProject.demo && (
                            <a href={selectedProject.demo} target="_blank" className="flex-1 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl flex items-center justify-center gap-2"><ExternalLink className="w-5 h-5" /> Live Demo</a>
                        )}
                        {selectedProject.github && (
                            <a href={selectedProject.github} target="_blank" className="flex-1 py-3 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white font-bold rounded-xl flex items-center justify-center gap-2"><Github className="w-5 h-5" /> Source Code</a>
                        )}
                    </div>
                  </div>
                </motion.div>
              </div>
            )}
          </AnimatePresence>

          {/* --- MODAL DETAIL CERTIFICATE (NEW) --- */}
          <AnimatePresence>
            {selectedCertId && selectedCert && (
              <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6">
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedCertId(null)} className="absolute inset-0 bg-black/90 backdrop-blur-md" />
                
                <motion.div 
                    layoutId={`cert-card-${selectedCertId}`} 
                    className="relative w-full max-w-4xl bg-slate-900 border border-slate-700 rounded-2xl overflow-hidden shadow-2xl flex flex-col"
                    style={{ maxHeight: '90vh' }}
                >
                  {/* Header Modal */}
                  <div className="p-4 border-b border-slate-800 flex justify-between items-center bg-slate-950">
                     <div>
                        <h3 className="text-lg font-bold text-white">{selectedCert.title}</h3>
                        <p className="text-sm text-slate-400">{selectedCert.issuer} • {selectedCert.date}</p>
                     </div>
                     <button onClick={() => setSelectedCertId(null)} className="p-2 bg-slate-800 hover:bg-red-500 rounded-full text-white transition-colors">
                        <X className="w-5 h-5" />
                     </button>
                  </div>

                  {/* Body: Preview Image */}
                  <div className="flex-1 bg-slate-950 p-4 overflow-y-auto flex justify-center items-center">
                     <img 
                        src={selectedCert.image} 
                        alt={selectedCert.title} 
                        className="max-w-full max-h-[60vh] object-contain rounded-lg shadow-lg border border-slate-800" 
                     />
                  </div>

                  {/* Footer: Action Buttons */}
                  <div className="p-4 border-t border-slate-800 bg-slate-900 flex justify-end gap-3">
                     {/* Tombol Download hanya muncul jika pdfLink valid (bukan #) */}
                     {selectedCert.pdfLink && selectedCert.pdfLink !== '#' && (
                         <a 
                            href={selectedCert.pdfLink} 
                            target="_blank" 
                            rel="noreferrer"
                            className="flex items-center gap-2 px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all"
                         >
                            <Download className="w-4 h-4" /> Download / Open PDF
                         </a>
                     )}
                  </div>

                </motion.div>
              </div>
            )}
          </AnimatePresence>
    
        </section>
      );
};

export default Portfolio;