import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Home, AlertTriangle } from "lucide-react";

const NotFound = () => {
  const [text, setText] = useState("404");
  
  // Efek Glitch Teks "404"
  useEffect(() => {
    const interval = setInterval(() => {
      const chars = "404_ERROR_NOT_FOUND_@#%&";
      setText(
        "404".split("").map(() => chars[Math.floor(Math.random() * chars.length)]).join("")
      );
      
      // Reset ke "404" setelah 100ms biar terbaca
      setTimeout(() => setText("404"), 100);
    }, 3000); // Glitch setiap 3 detik

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center relative overflow-hidden text-center px-4">
      
      {/* Background Grid & Glow */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20 pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] -z-10 animate-pulse"></div>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative z-10"
      >
        {/* Ikon Warning Berdenyut */}
        <div className="mb-6 flex justify-center">
            <div className="relative">
                <div className="absolute inset-0 bg-red-500/20 blur-xl rounded-full animate-ping"></div>
                <AlertTriangle className="w-16 h-16 text-red-500 relative z-10" />
            </div>
        </div>

        {/* Angka 404 Glitch */}
        <h1 className="text-8xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-600 tracking-tighter mb-4 font-mono">
          {text}
        </h1>

        {/* Pesan Error */}
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
          System Malfunction
        </h2>
        <p className="text-slate-400 max-w-md mx-auto mb-8">
          Halaman yang Anda cari telah hilang di dalam void atau dipindahkan ke dimensi lain.
        </p>

        {/* Tombol Kembali */}
        <a 
          href="/" 
          className="inline-flex items-center gap-2 px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-full transition-all hover:scale-105 shadow-[0_0_20px_rgba(37,99,235,0.4)]"
        >
          <Home className="w-4 h-4" /> Return to Base
        </a>
      </motion.div>

      {/* Kode Hiasan di Bawah */}
      <div className="absolute bottom-8 left-0 w-full text-center">
        <p className="text-xs text-slate-600 font-mono">
          ERROR_CODE: PAGE_NOT_FOUND // INITIATING_RECOVERY...
        </p>
      </div>

    </div>
  );
};

export default NotFound;