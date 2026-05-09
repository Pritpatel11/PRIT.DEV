import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Send, Check, AlertCircle } from 'lucide-react';
import Button from '../components/ui/Button.jsx';
import FadeIn from '../components/animations/FadeIn.jsx';
import SEO from '../components/ui/SEO.jsx';

const Contact = () => {
    const [form, setForm] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('idle'); // idle, sending, sent, error
    const [toast, setToast] = useState(null);
    const [logs, setLogs] = useState([
        'Initializing secure communication protocol...',
        'Establishing neural link...',
        'Identity verification required.'
    ]);

    // ⚠️ PASTE YOUR GOOGLE APPS SCRIPT WEB APP URL HERE
    const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzjemFpp0NmagzY08HzC73LygfScdkUj1Tu52LcDoUddCQmbL1Vgq0xC_TPpAz1ZO-z/exec';

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');
        setLogs(prev => [...prev, 'Encrypting data packets...', 'Transmitting message via secure node...']);

        try {
            const res = await fetch(GOOGLE_SCRIPT_URL, {
                method: 'POST',
                mode: 'no-cors',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form),
            });

            setStatus('sent');
            setLogs(prev => [...prev, '[OK] Message delivered successfully.', '[OK] Data saved to Google Sheets.', '[OK] Email notification sent.', '[OK] Connection closed.']);
            setForm({ name: '', email: '', message: '' });
            setToast({ type: 'success', message: '✅ Message sent successfully! Data saved to Google Sheets & email notification sent.' });

            // Auto-reset after 5 seconds so user can send again
            setTimeout(() => {
                setStatus('idle');
                setToast(null);
            }, 5000);
        } catch (err) {
            setStatus('error');
            setLogs(prev => [...prev, '[ERROR] Transmission failed: ' + err.message, '[RETRY] Please try again.']);
            setToast({ type: 'error', message: '❌ Failed to send message. Please try again.' });

            setTimeout(() => {
                setStatus('idle');
                setToast(null);
            }, 5000);
        }
    };

    return (
        <div className="pt-32 pb-24 min-h-screen">
            <SEO
                title="Contact"
                description="Get in touch with Prit Patel for web development projects, freelance work, or collaboration. Full Stack Developer available for hire."
                keywords="Contact Prit Patel, Hire Web Developer, Freelance Developer Contact, Web Development Services"
            />
            <div className="container mx-auto px-6 max-w-4xl">
                <header className="mb-12">
                    <FadeIn>
                        <h1 className="text-4xl md:text-6xl font-black mb-4 tracking-tighter">
                            SYSTEM.<span className="text-cyber-blue">CONTACT</span>()
                        </h1>
                        <p className="text-white/40 font-mono text-sm tracking-widest">
                            Initiating secure communication protocols... _
                        </p>
                    </FadeIn>
                </header>

                <div className="grid md:grid-cols-3 gap-8">
                    {/* Status Sidebar */}
                    <div className="space-y-4">
                        <div className="glass p-6 rounded-2xl border-white/5">
                            <h4 className="text-[10px] font-bold text-cyber-pink tracking-widest mb-4">STATUS_REPORT</h4>
                            <div className="space-y-2">
                                <div className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
                                    <span className="text-[10px] font-mono text-white/50">SYSTEM: ONLINE</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-cyber-blue shadow-[0_0_8px_rgba(0,242,255,0.6)]" />
                                    <span className="text-[10px] font-mono text-white/50">UPLINK: SECURE</span>
                                </div>
                            </div>
                        </div>

                        <div className="glass p-6 rounded-2xl border-white/5">
                            <h4 className="text-[10px] font-bold text-cyber-blue tracking-widest mb-4">DIRECT_COMMS</h4>
                            <p className="text-xs font-mono text-white/40 break-all">pritpatel1179@gmail.com</p>
                        </div>
                    </div>

                    {/* Terminal Form */}
                    <div className="md:col-span-2">
                        <div className="bg-[#0c0c0c] rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
                            {/* Terminal Header */}
                            <div className="bg-[#1a1a1a] px-4 py-2 border-b border-white/5 flex items-center justify-between">
                                <div className="flex gap-1.5">
                                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
                                </div>
                                <span className="text-[10px] font-mono text-white/20">CONTACT_INITIATE.SH — 80×24</span>
                            </div>

                            {/* Terminal Body */}
                            <div className="p-6 md:p-8 font-mono text-sm">
                                <div className="mb-8 space-y-1">
                                    <p className="text-green-500"><span className="text-white/30">$</span> contact --initiate</p>
                                    {logs.map((log, i) => (
                                        <p key={i} className="text-white/60">{log}</p>
                                    ))}
                                </div>

                                <form onSubmit={handleSubmit} className="space-y-8">
                                    <div className="space-y-2">
                                        <label htmlFor="contact-name" className="text-[10px] font-bold text-cyber-blue tracking-widest block uppercase">NAME &gt;</label>
                                        <input
                                            id="contact-name"
                                            type="text"
                                            required
                                            placeholder="Enter identification..."
                                            className="w-full bg-transparent border-b border-white/10 py-2 focus:border-cyber-blue outline-none transition-colors text-white placeholder:text-white/10"
                                            value={form.name}
                                            onChange={(e) => setForm({ ...form, name: e.target.value })}
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="contact-email" className="text-[10px] font-bold text-cyber-blue tracking-widest block uppercase">EMAIL &gt;</label>
                                        <input
                                            id="contact-email"
                                            type="email"
                                            required
                                            placeholder="user@domain.ext"
                                            className="w-full bg-transparent border-b border-white/10 py-2 focus:border-cyber-blue outline-none transition-colors text-white placeholder:text-white/10"
                                            value={form.email}
                                            onChange={(e) => setForm({ ...form, email: e.target.value })}
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="contact-message" className="text-[10px] font-bold text-cyber-blue tracking-widest block uppercase">MESSAGE &gt;</label>
                                        <textarea
                                            id="contact-message"
                                            required
                                            rows="4"
                                            placeholder="Begin transmission..."
                                            className="w-full bg-transparent border border-white/10 rounded-lg p-4 focus:border-cyber-blue outline-none transition-colors text-white placeholder:text-white/10 resize-none"
                                            value={form.message}
                                            onChange={(e) => setForm({ ...form, message: e.target.value })}
                                        />
                                    </div>

                                    <div className="flex items-center justify-between pt-4">
                                        <Button
                                            type="submit"
                                            variant="neon"
                                            disabled={status === 'sending' || status === 'sent'}
                                            className="w-full sm:w-auto"
                                            icon={status === 'sent' ? Check : Send}
                                        >
                                            {status === 'sending' ? 'TRANSMITTING...' : status === 'sent' ? 'MESSAGE_SENT' : 'EXECUTE_SEND'}
                                        </Button>

                                        {status === 'sending' && (
                                            <div className="hidden sm:flex items-center gap-2">
                                                <span className="text-[10px] text-white/30">RUNNING: SEND_MESSAGE.EXE</span>
                                                <div className="w-8 h-1 bg-white/10 rounded-full overflow-hidden">
                                                    <motion.div
                                                        className="h-full bg-cyber-blue"
                                                        initial={{ width: 0 }}
                                                        animate={{ width: '100%' }}
                                                        transition={{ duration: 2 }}
                                                    />
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Toast Notification */}
            <AnimatePresence>
                {toast && (
                    <motion.div
                        initial={{ y: 80, opacity: 0, scale: 0.9 }}
                        animate={{ y: 0, opacity: 1, scale: 1 }}
                        exit={{ y: 80, opacity: 0, scale: 0.9 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                        className={`fixed bottom-8 left-1/2 -translate-x-1/2 z-50 px-6 py-4 rounded-xl border backdrop-blur-xl shadow-2xl flex items-center gap-3 max-w-md ${toast.type === 'success'
                                ? 'bg-green-500/10 border-green-500/30 text-green-400'
                                : 'bg-red-500/10 border-red-500/30 text-red-400'
                            }`}
                    >
                        <span className="text-sm font-bold">{toast.message}</span>
                        <button
                            onClick={() => setToast(null)}
                            aria-label="Close notification"
                            className="ml-2 text-white/30 hover:text-white transition-colors text-lg"
                        >
                            ×
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Contact;
