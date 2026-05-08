import { Link } from 'react-router-dom';
import FadeIn from '../components/animations/FadeIn.jsx';
import SlideIn from '../components/animations/SlideIn.jsx';
import Card from '../components/ui/Card.jsx';
import Badge from '../components/ui/Badge.jsx';
import SEO from '../components/ui/SEO.jsx';
import { posts } from '../data/posts.js';

const Logs = () => {
    return (
        <div className="pt-32 pb-24">
            <SEO
                title="Systems Log"
                description="Read Prit Patel's technical deep-dives, project logs, and development thoughts."
                keywords="Developer Blog, MDX Blog, Technical Logs"
            />
            <div className="container mx-auto px-6">
                <header className="mb-20">
                    <SlideIn direction="down">
                        <h1 className="text-4xl md:text-7xl font-black mb-6">
                            SYSTEMS <span className="text-cyber-blue">LOG</span>
                        </h1>
                        <p className="text-white/50 text-xl max-w-2xl leading-relaxed">
                            Technical deep-dives, project post-mortems, and notes on interactive web development.
                        </p>
                    </SlideIn>
                </header>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {posts.map((post, index) => (
                        <FadeIn key={post.id} delay={index * 0.1}>
                            <Link to={`/logs/${post.slug}`}>
                                <Card className="h-full hover:border-cyber-blue transition-colors duration-300 group cursor-pointer" glow>
                                    <div className="flex justify-between items-start mb-4">
                                        <Badge variant="blue">{post.category}</Badge>
                                        <span className="text-xs font-mono text-white/30">{post.date}</span>
                                    </div>
                                    <h2 className="text-2xl font-bold mb-3 group-hover:text-cyber-blue transition-colors">
                                        {post.title}
                                    </h2>
                                    <p className="text-white/60 leading-relaxed">
                                        {post.description}
                                    </p>
                                </Card>
                            </Link>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Logs;
