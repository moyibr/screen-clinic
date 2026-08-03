import React from 'react';
import { Helmet } from 'react-helmet-async';
import { siteConfig } from '../../config/siteConfig';
import { seoDefaultImage } from '../../config/siteImages';

const SEO = ({ title, description, keywords, image, url }) => {
    const seoTitle = title ? `${title} | ${siteConfig.clinicName}` : siteConfig.seo.defaultTitle;
    const seoDescription = description || siteConfig.seo.defaultDescription;
    const seoKeywords = keywords || siteConfig.seo.keywords;
    const seoImage = image || seoDefaultImage; // Default OG image

    return (
        <Helmet>
            <title>{seoTitle}</title>
            <meta name="description" content={seoDescription} />
            <meta name="keywords" content={seoKeywords} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={url || window.location.href} />
            <meta property="og:title" content={seoTitle} />
            <meta property="og:description" content={seoDescription} />
            <meta property="og:image" content={seoImage} />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={url || window.location.href} />
            <meta property="twitter:title" content={seoTitle} />
            <meta property="twitter:description" content={seoDescription} />
            <meta property="twitter:image" content={seoImage} />
        </Helmet>
    );
};

export default SEO;
