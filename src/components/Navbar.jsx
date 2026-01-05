import React, { useState, useEffect } from "react";
import { Menu, X, Code2, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from '../assets/logo.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("home");
    const [hoveredTab, setHoveredTab] = useState(null);

    const navItems = [
        { id: "home", label: "Home", href: "#home" },
        { id: "about", label: "About", href: "#about" },
        { id: "portfolio", label: "Portfolio", href: "#portfolio" },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
            
            const sections = navItems.map(item => {
                const section = document.querySelector(item.href);
                if (section) {
                    return {
                        id: item.id,
                        offset: section.offsetTop - 150,
                        height: section.offsetHeight
                    };
                }
                return null;
            }).filter(Boolean);

            const currentPosition = window.scrollY;
            const active = sections.find(section => 
                currentPosition >= section.offset && 
                currentPosition < section.offset + section.height
            );

            if (active) setActiveSection(active.id);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (e, href) => {
        e.preventDefault();
        const section = document.querySelector(href);
        if (section) {
            window.scrollTo({
                top: section.offsetTop - 100,
                behavior: "smooth"
            });
        }
        setIsOpen(false);
    };

    return (
        <>
            <motion.nav
                // --- BAGIAN INI YANG DIMODIFIKASI AGAR BLUR MAKSIMAL ---
                initial={{ y: -100 }}
                animate={{ 
                    y: 0,
                    // Saat scroll: Lebar 90%, saat di atas: 100%
                    width: scrolled ? "90%" : "100%",
                    // Saat scroll: Turun sedikit (floating), saat di atas: nempel
                    top: scrolled ? "1.5rem" : "0",
                    // Saat scroll: Membulat (Capsule), saat di atas: kotak biasa
                    borderRadius: scrolled ? "50px" : "0",
                    // Saat scroll: Warna Slate-950 transparan (70%), saat di atas: transparan total
                    background: scrolled ? "rgba(2, 6, 23, 0.7)" : "transparent",
                    // Saat scroll: Blur kuat (16px), saat di atas: tidak ada blur
                    backdropFilter: scrolled ? "blur(16px)" : "blur(0px)",
                    // Border halus saat scroll
                    border: scrolled ? "1px solid rgba(255, 255, 255, 0.08)" : "1px solid transparent",
                }}
                transition={{ duration: 0.3 }}
                className={`fixed left-0 right-0 mx-auto z-50 flex items-center justify-between px-6 py-4 md:px-8 max-w-7xl transition-all ${
                    scrolled ? "shadow-[0_4px_30px_rgba(0,0,0,0.1)]" : ""
                }`}
            >
                {/* --- LOGO --- */}
                <a
                href="#home"
                onClick={(e) => scrollToSection(e, "#home")}
                className="flex items-center gap-2 group cursor-pointer"
                >
                <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-cyan-500 text-white shadow-lg group-hover:shadow-blue-500/50 transition-all duration-300 overflow-hidden">
                    <img
                    src={logo}
                    alt="Alwznx logo"
                    className="w-6 h-6 object-contain transform group-hover:rotate-12 transition-transform"
                    draggable="false"
                    />
                    <div className="absolute inset-0 bg-white/20 rounded-xl blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
                    Alwitiow
                </span>
                </a>


                {/* --- DESKTOP MENU --- */}
                <div className="hidden md:flex items-center bg-slate-900/50 p-1.5 rounded-full border border-white/5 backdrop-blur-md">
                    {navItems.map((item) => (
                        <a
                            key={item.id}
                            href={item.href}
                            onClick={(e) => scrollToSection(e, item.href)}
                            onMouseEnter={() => setHoveredTab(item.id)}
                            onMouseLeave={() => setHoveredTab(null)}
                            className="relative px-5 py-2 text-sm font-medium transition-colors rounded-full z-10"
                        >
                            <span className={`relative z-20 transition-colors duration-300 ${
                                activeSection === item.id ? "text-white" : "text-slate-400 hover:text-slate-200"
                            }`}>
                                {item.label}
                            </span>

                            {activeSection === item.id && (
                                <motion.div
                                    layoutId="activeTab"
                                    className="absolute inset-0 bg-blue-600 rounded-full shadow-lg shadow-blue-500/30"
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                />
                            )}

                            {hoveredTab === item.id && activeSection !== item.id && (
                                <motion.div
                                    layoutId="hoverTab"
                                    className="absolute inset-0 bg-white/10 rounded-full"
                                    transition={{ duration: 0.2 }}
                                />
                            )}
                        </a>
                    ))}
                </div>

                {/* --- BUTTON HIRE ME --- */}
                <div className="hidden md:block">
                    <a 
                        href="#contact"
                        onClick={(e) => scrollToSection(e, "#contact")}
                        className="relative group overflow-hidden px-6 py-2.5 rounded-full bg-slate-800 border border-slate-700 text-white text-sm font-medium hover:border-blue-500/50 transition-all"
                    >
                        <span className="relative z-10 flex items-center gap-2">
                            Contact Me <Sparkles className="w-3 h-3 text-yellow-400" />
                        </span>
                        <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/10 to-transparent z-0"></div>
                    </a>
                </div>

                {/* --- MOBILE TOGGLE --- */}
                <button 
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden p-2 text-slate-300 hover:text-white bg-slate-800/50 rounded-lg backdrop-blur-md border border-white/5"
                >
                    {isOpen ? <X /> : <Menu />}
                </button>
            </motion.nav>

            {/* --- MOBILE FULLSCREEN MENU --- */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 z-40 bg-slate-950/95 backdrop-blur-2xl md:hidden pt-24 px-6"
                    >
                        <div className="flex flex-col gap-4">
                            {[...navItems, { id: "contact", label: "Contact Me", href: "#contact" }].map((item, idx) => (
                                <motion.a
                                    key={item.id}
                                    href={item.href}
                                    onClick={(e) => scrollToSection(e, item.href)}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.1 * idx }}
                                    className={`text-3xl font-bold ${
                                        activeSection === item.id 
                                        ? "text-blue-500" 
                                        : "text-slate-400"
                                    }`}
                                >
                                    {item.label}
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;