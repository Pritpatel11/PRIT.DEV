import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import FadeIn from '../components/animations/FadeIn.jsx';
import SEO from '../components/ui/SEO.jsx';
import { posts } from '../data/posts.js';

const BlogPost = () => {
    const { slug } = useParams();
    const [PostContent, setPostContent] = useState(null);
    const [loading, setLoading] = useState(true);
    
    const postMeta = posts.find(p => p.slug === slug);

    useEffect(() => {
        const loadPost = async () => {
            try {
                // Vite's dynamic import for MDX files
                const module = await import(`../content/${slug}.mdx`);
                setPostContent(() => module.default);
            } catch (error) {
                console.error("Error loading MDX post:", error);
            } finally {
                setLoading(false);
            }
        };

        if (slug) {
            loadPost();
        }
    }, [slug]);

    if (!postMeta) {
        return <div className="pt-40 text-center text-white/50">Post not found.</div>;
    }

    return (
        <div className="pt-32 pb-24">
            <SEO
                title={postMeta.title}
                description={postMeta.description}
            />
            <div className="container mx-auto px-6 max-w-4xl">
                <FadeIn>
                    <Link to="/logs" className="inline-flex items-center gap-2 text-cyber-blue hover:text-white transition-colors mb-8 font-mono text-sm uppercase tracking-widest">
                        <ArrowLeft size={16} /> Back to Logs
                    </Link>
                    
                    <header className="mb-16 border-b border-white/10 pb-8">
                        <div className="flex items-center gap-4 text-white/40 font-mono text-sm mb-4">
                            <span>{postMeta.date}</span>
                            <span>/</span>
                            <span className="text-cyber-purple">{postMeta.category}</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
                            {postMeta.title}
                        </h1>
                        <p className="text-xl text-white/60 leading-relaxed">
                            {postMeta.description}
                        </p>
                    </header>

                    <div className="prose prose-invert prose-lg max-w-none prose-headings:font-black prose-headings:tracking-tight prose-a:text-cyber-blue hover:prose-a:text-cyber-pink prose-img:rounded-xl">
                        {loading ? (
                            <div className="text-white/50 animate-pulse font-mono">LOADING_NEURAL_DATA...</div>
                        ) : PostContent ? (
                            <PostContent />
                        ) : (
                            <div className="text-red-400">Error loading post content.</div>
                        )}
                    </div>
                </FadeIn>
            </div>
        </div>
    );
};

export default BlogPost;
