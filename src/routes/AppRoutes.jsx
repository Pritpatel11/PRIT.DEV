import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Home from '../pages/Home.jsx';
import About from '../pages/About.jsx';
import Work from '../pages/Work.jsx';
import CaseStudy from '../pages/CaseStudy.jsx';
import Contact from '../pages/Contact.jsx';

const AppRoutes = () => {
    const location = useLocation();

    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/work" element={<Work />} />
                <Route path="/project/:slug" element={<CaseStudy />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </AnimatePresence>
    );
};

export default AppRoutes;
