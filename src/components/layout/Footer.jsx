const Footer = () => {
    return (
        <footer className="bg-cyber-dark border-t border-white/10 py-12 relative z-10">
            <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
                <div>
                    <div className="flex items-center gap-2 mb-4">
                        <div className="w-8 h-8 bg-cyber-blue rounded flex items-center justify-center">
                            <span className="text-black font-black">P</span>
                        </div>
                        <span className="text-lg font-bold tracking-tighter neon-glow-blue">PRIT_MODERN.DEV</span>
                    </div>
                    <p className="text-white/40 text-sm max-w-md">
                        Built with React, Tailwind, and Framer Motion.
                        All rights reserved &copy; {new Date().getFullYear()}
                    </p>
                </div>

                <div className="flex gap-8">
                    {[
                        { name: 'GitHub', url: 'https://github.com/pritpatel11' },
                        { name: 'LinkedIn', url: 'https://www.linkedin.com/in/pritpatel1177/' },
                        { name: 'Email', url: 'mailto:pritpatel1179@gmail.com' },
                    ].map((social) => (
                        <a
                            key={social.name}
                            href={social.url}
                            target={social.url.startsWith('http') ? "_blank" : "_self"}
                            rel="noopener noreferrer"
                            className="text-white/60 hover:text-cyber-blue transition-colors text-sm font-medium"
                        >
                            {social.name.toUpperCase()}
                        </a>
                    ))}
                </div>

                <div className="text-right">
                    <p className="text-xs text-white/20 font-mono tracking-widest">
                        UPLINK_STATUS: <span className="text-cyber-blue">SECURE</span><br />
                        LOCATION: <span className="text-cyber-blue">MEHSANA,GUJARAT</span>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
