import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import AppointmentModal from './common/AppointmentModal';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Treatments', path: '/treatments' },
        { name: 'Treatment Charges', path: '/charges' },
        { name: 'Our Doctors', path: '/doctors' },
        { name: 'Contact', path: '/contact' },
        { name: 'Dental Tourism', path: '/tourism' },
    ];

    return (
        <nav className="bg-white shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20">
                    <div className="flex items-center">
                        <Link to="/" className="flex-shrink-0 flex items-center">
                            {/* Placeholder for Logo */}
                            <div className="text-primary font-bold text-2xl flex items-center gap-2">
                                <span className="text-3xl">🦷</span>
                                <div className="leading-tight">
                                    <span className="block text-primary-dark">{siteConfig.logoText.primary}</span>
                                    <span className="block text-primary">{siteConfig.logoText.secondary}</span>
                                    <span className="block text-primary-light text-sm">{siteConfig.logoText.tertiary}</span>
                                </div>
                            </div>
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="bg-primary hover:bg-primary-dark text-white px-6 py-2 rounded-full font-medium transition-colors shadow-sm"
                        >
                            Book Appointment
                        </button>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-primary hover:bg-gray-100 focus:outline-none"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white border-t border-gray-200">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className="text-gray-700 hover:text-primary hover:bg-gray-50 block px-3 py-2 rounded-md text-base font-medium"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <button
                            onClick={() => {
                                setIsOpen(false);
                                setIsModalOpen(true);
                            }}
                            className="w-full text-left bg-primary text-white px-3 py-2 rounded-md text-base font-medium mt-4"
                        >
                            Book Appointment
                        </button>
                    </div>
                </div>
            )}

            <AppointmentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </nav>
    );
};

export default Navbar;
