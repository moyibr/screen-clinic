import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/common/SEO';
import { Home } from 'lucide-react';

const NotFound = () => {
    return (
        <div className="min-h-[70vh] flex flex-col items-center justify-center bg-gray-50 px-4 text-center">
            <SEO title="404 - Page Not Found" description="The page you are looking for does not exist." />

            <h1 className="text-9xl font-bold text-primary mb-4">404</h1>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Oops! Page Not Found</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-md">
                The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
            </p>

            <Link
                to="/"
                className="flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-full font-medium transition-colors shadow-lg"
            >
                <Home size={20} />
                Back to Home
            </Link>
        </div>
    );
};

export default NotFound;
