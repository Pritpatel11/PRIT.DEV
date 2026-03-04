import { useEffect, useState } from 'react';
import { BrowserRouter as Router, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import AppRoutes from './routes/AppRoutes.jsx';
import Navbar from './components/layout/Navbar.jsx';
import Footer from './components/layout/Footer.jsx';
import CustomCursor from './components/ui/CustomCursor.jsx';
import AccentSwitcher from './components/ui/AccentSwitcher.jsx';
import Terminal from './components/ui/Terminal.jsx';
import PritBot from './components/ui/PritBot.jsx';
import Preloader from './components/ui/Preloader.jsx';

function App() {
    const [loading, setLoading] = useState(true);

    return (
        <Router>
            <AnimatePresence mode="wait">
                {loading ? (
                    <Preloader key="loader" onComplete={() => setLoading(false)} />
                ) : (
                    <div key="content" className="min-h-screen flex flex-col selection:bg-cyber-blue selection:text-black glitch-reveal">
                        {/* Background Grid */}
                        <div className="fixed inset-0 bg-grid pointer-events-none" />

                        {/* Scanline Effect */}
                        <div className="fixed inset-0 overflow-hidden pointer-events-none">
                            <div className="scanline" />
                        </div>

                        <CustomCursor />
                        <AccentSwitcher />
                        <Terminal />
                        <PritBot />

                        <Navbar />

                        <main className="flex-grow z-10">
                            <AppRoutes />
                        </main>

                        <Footer />
                    </div>
                )}
            </AnimatePresence>
        </Router>
    );
}

export default App;
