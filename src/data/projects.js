export const projects = [
    {
        id: 1,
        slug: 'smart-land-registry',
        title: 'AI Smart Land Registry',
        description: 'An AI-powered system for analyzing land documents and streamlining the registry process using advanced machine learning algorithms.',
        tags: ['Gen-AI', 'React', 'Node.js', 'RAG'],
        image: 'Home.png',
        category: 'AI Powered',
        demoLink: '#',
        sourceLink: 'https://github.com/Pritpatel11/AI-Based-Smart-Land-Document-Analysis-Registry-Assistant-System',
        gridSize: 'lg:col-span-1 lg:row-span-1',
        challenge: 'The traditional land registry process is highly manual, error-prone, and time-consuming, requiring significant effort for document verification.',
        solution: 'Developed an intelligent platform that leverages AI to automatically extract key data from land documents, verify information, and assist in the registry workflow.',
        features: [
            { title: 'Automated Analysis', desc: 'AI-driven data extraction and verification from complex land records.' },
            { title: 'Registry Assistant', desc: 'Streamlined workflow management to accelerate the overall registration process.' }
        ],
        techStack: ['React', 'Node.js', 'RAG', 'GenAI']
    },
    {
        id: 3,
        slug: 'duo-studio',
        title: 'Duo Studio Landing Page',
        description: 'An interactive, scroll-driven landing page inspired by Duo Studio, featuring buttery-smooth Locomotive Scroll and GSAP animations.',
        tags: ['GSAP', 'Locomotive', 'UI/UX'],
        image: 'duo-hero.png',
        category: 'Interactive Design',
        demoLink: 'https://duo-studio-landing.netlify.app/',
        sourceLink: 'https://github.com/Pritpatel11/duo-studio-landing',
        gridSize: 'lg:col-span-2 lg:row-span-2',
        challenge: 'Creating a highly interactive landing page that maintains performance while delivering complex, scroll-driven animations and custom cursor interactions.',
        solution: 'Implemented Locomotive Scroll for smooth scrolling and GSAP ScrollTrigger for precise animation control. Integrated custom cursor logic and responsive mobile navigation for a seamless experience.',
        features: [
            { title: 'Smooth Scroll', desc: 'Locomotive Scroll for buttery-smooth scrolling across desktop and mobile.' },
            { title: 'GSAP Animations', desc: 'ScrollTrigger & GSAP power the complex motion design and reveals.' }
        ],
        techStack: ['HTML', 'CSS', 'JavaScript', 'GSAP', 'Locomotive Scroll', 'Remix Icons']
    },
    {
        id: 4,
        slug: 'modern-creative-agency',
        title: 'Modern Creative Agency',
        description: 'A visually striking, animated landing page with premium storytelling and high-end aesthetics.',
        tags: ['GSAP', 'Locomotive', 'Design'],
        image: 'agency-hero.png',
        category: 'Creative Design',
        demoLink: 'https://moderncreativeagency.netlify.app/',
        sourceLink: 'https://github.com/Pritpatel11/modern-creative-agency',
        gridSize: 'lg:col-span-1 lg:row-span-1',
        challenge: 'Designing a narrative-driven experience that captures user attention through sophisticated motion and high-end typography.',
        solution: 'Used GSAP for scroll-triggered storytelling and Locomotive Scroll for an immersive user experience.',
        features: [
            { title: 'Scroll Storytelling', desc: 'Engaging user journey driven by precise animation triggers.' },
            { title: 'Premium Aesthetics', desc: 'Curated typography and layouts for a high-end feel.' }
        ],
        techStack: ['HTML', 'CSS', 'JavaScript', 'GSAP', 'Locomotive Scroll']
    },
    {
        id: 5,
        slug: 'premier-models',
        title: 'Premier Models Website',
        description: 'Fashion-forward, aesthetic landing page with smooth transitions and high-end model showcases.',
        tags: ['GSAP', 'Aesthetic', 'Fashion'],
        image: 'models-hero.png',
        category: 'Interactive Design',
        demoLink: 'https://premier-models-website.netlify.app/',
        sourceLink: 'https://github.com/Pritpatel11/Premier-Models-Website',
        gridSize: 'lg:col-span-1 lg:row-span-1',
        challenge: 'Balancing large high-quality images with smooth performance and elegant transitions.',
        solution: 'Optimized image loading and used GSAP for seamless layout transitions.',
        features: [
            { title: 'Smooth Transitions', desc: 'Liquid-like transitions between different sections.' },
            { title: 'Image Optimization', desc: 'High-performance rendering of high-resolution fashion assets.' }
        ],
        techStack: ['HTML', 'CSS', 'JavaScript', 'GSAP']
    },
    {
        id: 6,
        slug: 'shery-hero',
        title: 'Shery.js Hero Animation',
        description: 'Cutting-edge hero section with background transitions and layered effects using Shery.js.',
        tags: ['Shery.js', 'Animation', 'UI'],
        image: 'shery-hero.png',
        category: 'Experimental UI',
        demoLink: 'shery-hero-animation.netlify.app',
        sourceLink: 'https://github.com/Pritpatel11/shery-hero-animation',
        gridSize: 'lg:col-span-1 lg:row-span-2',
        challenge: 'Implementing complex mouse-follow and background distortion effects without compromising frame rate.',
        solution: 'Leveraged Shery.js for advanced WebGL-based effects and transitions.',
        features: [
            { title: 'WebGL Effects', desc: 'Interactive background distortions and mouse-follow effects.' },
            { title: 'Layered Motion', desc: 'Complex depth-of-field animations using Shery.js.' }
        ],
        techStack: ['HTML', 'CSS', 'JavaScript', 'Shery.js']
    },
    {
        id: 7,
        slug: 'online-book-store',
        title: 'Online Book Store',
        description: 'A user-friendly Online Bookstore project in which users can log in or register, view the available books, select books along with their quantity, and buy them.',
        tags: ['PHP', 'MySQL', 'HTML', 'CSS', 'JS'],
        image: 'online-book-store.png',
        category: 'Web App',
        demoLink: '#',
        sourceLink: 'https://github.com/Pritpatel11/online-book-store',
        gridSize: 'lg:col-span-2 lg:row-span-1',
        challenge: 'Developing a dual-access system for both users and administrators while ensuring seamless database connectivity and inventory management using PHP and MySQL.',
        solution: 'Implemented a structured backend with PHP for session management and CRUD operations, coupled with a MySQL database for reliable data storage. Designed a responsive frontend using HTML/CSS and JavaScript.',
        features: [
            { title: 'Dual Panel', desc: 'Separate interfaces for users (shopping) and administrators (management).' },
            { title: 'Inventory Control', desc: 'Admin functionality to add, remove, and update book quantities or prices.' }
        ],
        techStack: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL']
    },
    {
        id: 8,
        slug: 'modern-ecommerce',
        title: 'Modern eCommerce UI',
        description: 'Clean, responsive front-end for a web shop with dynamic listings and modern design language.',
        tags: ['E-commerce', 'Responsive', 'UI'],
        image: 'modern-ecommerce.png',
        category: 'Web Shop',
        demoLink: 'https://modern-ecommerceui.netlify.app/',
        sourceLink: 'https://github.com/Pritpatel11/modern-ecommerceui',
        gridSize: 'lg:col-span-1 lg:row-span-1',
        challenge: 'Designing a scalable UI that looks great on all devices while maintaining a clean aesthetic.',
        solution: 'Used a mobile-first approach with Vanilla JS for dynamic content rendering.',
        features: [
            { title: 'Dynamic Listings', desc: 'Interactive product grids and filtering systems.' },
            { title: 'Responsive Design', desc: 'Seamless experience across mobile, tablet, and desktop.' }
        ],
        techStack: ['HTML', 'CSS', 'JavaScript']
    },
    {
        id: 9,
        slug: 'fanta-gsap',
        title: 'Fanta GSAP Project',
        description: 'Bold, colorful animation study focused on ScrollTrigger and visual impact.',
        tags: ['GSAP', 'Colorful', 'VFX'],
        image: 'fanta-hero.png',
        category: 'Animation Study',
        demoLink: 'https://fanta-gsap-project.netlify.app/',
        sourceLink: 'https://github.com/Pritpatel11/fanta-gsap-project',
        gridSize: 'lg:col-span-1 lg:row-span-1',
        challenge: 'Creating high-impact visual effects that align with the brand\'s bold identity.',
        solution: 'Extensive use of GSAP ScrollTrigger for choreographed brand storytelling.',
        features: [
            { title: 'ScrollTrigger', desc: 'Advanced scroll-based triggers for product reveals.' },
            { title: 'Bold VFX', desc: 'Vibrant colors and high-energy motion design.' }
        ],
        techStack: ['HTML', 'CSS', 'GSAP']
    }
];
