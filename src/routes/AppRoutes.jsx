import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Home from '../pages/Home.jsx';
import About from '../pages/About.jsx';
import Work from '../pages/Work.jsx';
import CaseStudy from '../pages/CaseStudy.jsx';
import Contact from '../pages/Contact.jsx';
import PageTransition from '../components/animations/PageTransition.jsx';

const AppRoutes = () => {
    const location = useLocation();

    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<PageTransition><Home /></PageTransition>} />
                <Route path="/about" element={<PageTransition><About /></PageTransition>} />
                <Route path="/work" element={<PageTransition><Work /></PageTransition>} />
                <Route path="/project/:slug" element={<PageTransition><CaseStudy /></PageTransition>} />
                <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
            </Routes>
        </AnimatePresence>
    );
};

export default AppRoutes;
