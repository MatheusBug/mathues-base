import { useEffect } from 'react';

interface SEOProps {
    title?: string;
    description?: string;
}

export const useSEO = ({ title, description }: SEOProps) => {
    useEffect(() => {
        if (title) {
            document.title = `${title} | Matheus Amorim`;
        }

        if (description) {
            const metaDescription = document.querySelector('meta[name="description"]');
            if (metaDescription) {
                metaDescription.setAttribute('content', description);
            } else {
                const meta = document.createElement('meta');
                meta.name = 'description';
                meta.content = description;
                document.head.appendChild(meta);
            }

            // Update Open Graph Description too
            const ogDescription = document.querySelector('meta[property="og:description"]');
            if (ogDescription) {
                ogDescription.setAttribute('content', description);
            }
        }
    }, [title, description]);
};
