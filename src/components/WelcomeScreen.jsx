import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Terminal, Cpu, Globe } from 'lucide-react';

const TypewriterEffect = ({ text }) => {
  const [displayText, setDisplayText] = useState('');
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= text.length) {
        setDisplayText(text.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 80); 
    
    return () => clearInterval(timer);
  }, [text]);

  return (
    <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
      {displayText}
      <span className="animate-pulse text-cyan-400">|</span>
    </span>
  );
};

const BackgroundEffect = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-blue-600/20 rounded-full blur-[100px] animate-pulse" />
    <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px] animate-pulse delay-1000" />
    <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20"></div>
  </div>
);

const IconButton = ({ Icon, delay }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5, delay: delay }}
    className="relative group hover:scale-110 transition-transform duration-300"
  >
    <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full blur opacity-30 group-hover:opacity-75 transition duration-300" />
    <div className="relative p-3 bg-slate-900/50 backdrop-blur-md rounded-full border border-blue-500/30 shadow-lg">
      <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-blue-100" />
    </div>
  </motion.div>
);

const WelcomeScreen = ({ onComplete }) => {
  const [count, setCount] = useState(0);
  const [showExit, setShowExit] = useState(false);

  useEffect(() => {
    // 1. Logic Counter 0% -> 100%
    // Total durasi loading sekitar 3 detik
    const duration = 3000; 
    const intervalTime = 30;
    const steps = duration / intervalTime;
    const increment = 100 / steps;

    const counterInterval = setInterval(() => {
      setCount((prev) => {
        const nextValue = prev + increment;
        if (nextValue >= 100) {
          clearInterval(counterInterval);
          return 100;
        }
        return nextValue;
      });
    }, intervalTime);

    // 2. Logic Selesai Loading
    const exitTimer = setTimeout(() => {
      setShowExit(true);
      setTimeout(() => {
        onComplete();
      }, 800); // Waktu animasi exit slide-up
    }, duration + 500); // Tambah sedikit buffer

    return () => {
      clearInterval(counterInterval);
      clearTimeout(exitTimer);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!showExit && (
        <motion.div
          className="fixed inset-0 z-[9999] bg-slate-950 flex items-center justify-center overflow-hidden"
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <BackgroundEffect />
          
          <div className="relative z-10 w-full max-w-4xl mx-auto px-4 text-center flex flex-col items-center">
            
            {/* Icons */}
            <div className="flex justify-center gap-6 sm:gap-10 mb-8 sm:mb-12">
              <IconButton Icon={Code2} delay={0.2} />
              <IconButton Icon={Terminal} delay={0.4} />
              <IconButton Icon={Cpu} delay={0.6} />
            </div>

            {/* Text & Typer */}
            <div className="space-y-4 mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-slate-400 text-sm sm:text-base font-medium tracking-widest uppercase"
              >
                System Initialized
              </motion.div>

              <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-white tracking-tight">
                <motion.span 
                  initial={{ opacity: 0 }} 
                  animate={{ opacity: 1 }} 
                  transition={{ delay: 0.8 }}
                  className="inline-block"
                >
                  Welcome To
                </motion.span>
                <br />
                <span className="inline-block mt-2">
                  <TypewriterEffect text="Alwitiow Portfolio." />
                </span>
              </h1>
            </div>

            {/* --- LOADING COUNTER BAR (NEW FEATURE) --- */}
            <motion.div 
               initial={{ opacity: 0, width: 0 }}
               animate={{ opacity: 1, width: "100%" }}
               transition={{ delay: 0.5, duration: 0.5 }}
               className="w-64 max-w-xs"
            >
               {/* Angka Persentase */}
               <div className="flex justify-between text-xs font-mono text-slate-400 mb-2">
                  <span>Loading Assets...</span>
                  <span className="text-blue-400 font-bold">{Math.round(count)}%</span>
               </div>

               {/* Progress Bar Container */}
               <div className="h-1 bg-slate-800 rounded-full overflow-hidden">
                  {/* Progress Bar Fill */}
                  <div 
                    className="h-full bg-gradient-to-r from-blue-600 to-cyan-400 transition-all duration-75 ease-out"
                    style={{ width: `${count}%` }}
                  />
               </div>
            </motion.div>

            {/* Link Bottom */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.8 }}
              className="mt-12"
            >
               <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-slate-900/50 border border-slate-800 text-slate-300 text-sm backdrop-blur-sm">
                  <Globe className="w-4 h-4 text-blue-500 animate-pulse" />
                  <span>www.alwznx.dev</span>
               </div>
            </motion.div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WelcomeScreen;