import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, keywords, image, url }) => {
    const baseTitle = 'Prit Patel | Full Stack Developer';
    const fullTitle = title ? `${title} | ${baseTitle}` : baseTitle;
    const defaultDesc = 'Prit Patel is a Full Stack Web Developer specializing in React.js, Node.js, PHP, and creative UI/UX design. Explore projects in AI, data visualization, and interactive web applications.';
    const defaultKeywords = 'Prit Patel, Full Stack Developer, React Developer, Web Developer, Creative Coder, Portfolio';
    const defaultImage = '/og-image.png';

    return (
        <Helmet>
            {/* Primary */}
            <title>{fullTitle}</title>
            <meta name="title" content={fullTitle} />
            <meta name="description" content={description || defaultDesc} />
            <meta name="keywords" content={keywords || defaultKeywords} />

            {/* Open Graph */}
            <meta property="og:type" content="website" />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description || defaultDesc} />
            <meta property="og:image" content={image || defaultImage} />
            {url && <meta property="og:url" content={url} />}

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description || defaultDesc} />
            <meta name="twitter:image" content={image || defaultImage} />
        </Helmet>
    );
};

export default SEO;
