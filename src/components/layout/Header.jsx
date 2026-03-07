import { Link } from 'react-router-dom';
import Magnetic from '../animations/Magnetic.jsx';

const Header = () => {
    return (
        <header className="fixed top-0 w-full z-50 pointer-events-none p-4 md:p-6 flex justify-between items-center">
            <Magnetic strength={0.2}>
                <Link to="/" className="flex items-center gap-2 group relative z-[60] pointer-events-auto">
                    <div className="w-9 h-9 md:w-10 md:h-10 bg-cyber-blue rounded-lg flex items-center justify-center group-hover:rotate-12 transition-transform shadow-[0_0_15px_rgba(var(--cyber-accent-rgb),0.4)]">
                        <span className="text-black font-black text-lg md:text-xl">P</span>
                    </div>
                    <span className="text-lg md:text-xl font-bold tracking-tighter neon-glow-blue hidden sm:block uppercase">PRIT_MODERN.DEV</span>
                </Link>
            </Magnetic>
        </header>
    );
};

export default Header;
