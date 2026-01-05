import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import WelcomeScreen from "./components/WelcomeScreen";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound"; 

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <main>
        <Home />
        <About />
        <Portfolio />
        <Contact />
      </main>
      <footer className="max-w-7xl mx-auto px-6 py-8 text-center text-slate-600 text-sm border-t border-slate-800/50">
        <p>© 2025 Alwznx. All rights reserved.</p>
      </footer>
    </>
  );
};

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Router>
      {/* 1. Tampilkan Welcome Screen Dulu */}
      <AnimatePresence mode="wait">
        {isLoading && (
            <WelcomeScreen onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      {/* 2. Setelah Loading Selesai, Masuk ke Routing Website */}
      {!isLoading && (
        <div className="bg-slate-950 min-h-screen text-slate-200 selection:bg-blue-500 selection:text-white">
          <Routes>
            {/* Route Utama (Landing Page) */}
            <Route path="/" element={<LandingPage />} />
            
            {/* Route 404 (Menangkap semua link nyasar) */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      )}
    </Router>
  );
}

export default App;