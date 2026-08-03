import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaWhatsapp, FaLinkedin } from 'react-icons/fa';
import { siteConfig } from '../config/siteConfig';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

                    {/* Brand & About */}
                    <div>
                        <div className="text-white font-bold text-2xl flex items-center gap-2 mb-6">
                            <span className="text-3xl">🦷</span>
                            <div className="leading-tight">
                                <span className="block text-gray-300">{siteConfig.logoText.primary}</span>
                                <span className="block text-white">{siteConfig.logoText.secondary}</span>
                            </div>
                        </div>
                        <p className="text-gray-400 mb-6">
                            {siteConfig.seo.defaultDescription}
                        </p>
                        <div className="flex space-x-4">
                            <a href={siteConfig.socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors"><FaFacebook size={20} /></a>
                            <a href={siteConfig.socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors"><FaTwitter size={20} /></a>
                            <a href={siteConfig.socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors"><FaInstagram size={20} /></a>
                            <a href={siteConfig.socialLinks.youtube} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors"><FaYoutube size={20} /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-bold mb-6">Quick Links</h3>
                        <ul className="space-y-3">
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Treatments</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Our Doctors</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Dental Tourism</a></li>
                        </ul>
                    </div>

                    {/* Treatments */}
                    <div>
                        <h3 className="text-lg font-bold mb-6">Treatments</h3>
                        <ul className="space-y-3">
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Dental Implants</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Root Canal Treatment</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Orthodontics</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Cosmetic Dentistry</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Pediatric Dentistry</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-bold mb-6">Contact Us</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <MapPin className="text-primary-light mt-1 mr-3 flex-shrink-0" size={20} />
                                <span className="text-gray-400">{siteConfig.contact.address}</span>
                            </li>
                            <li className="flex items-center">
                                <Phone className="text-primary-light mr-3 flex-shrink-0" size={20} />
                                <div className="text-gray-400">
                                    <span className="block">{siteConfig.contact.phone}</span>
                                    <span className="block text-sm text-red-400">Emergency: {siteConfig.contact.emergency}</span>
                                </div>
                            </li>
                            <li className="flex items-center">
                                <FaWhatsapp className="text-primary-light mr-3 flex-shrink-0" size={20} />
                                <a href={`${siteConfig.contact.whatsapp}?text=${encodeURIComponent(siteConfig.contact.whatsappMessage)}`} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                                    WhatsApp Us
                                </a>
                            </li>
                            <li className="flex items-center">
                                <Mail className="text-primary-light mr-3 flex-shrink-0" size={20} />
                                <a href={`mailto:${siteConfig.contact.email}`} className="text-gray-400 hover:text-white transition-colors">
                                    {siteConfig.contact.email}
                                </a>
                            </li>
                            <li className="flex items-start pt-2 border-t border-gray-800">
                                <div className="text-gray-400 text-sm">
                                    <span className="block font-semibold text-white mb-1">Working Hours:</span>
                                    <span className="block">{siteConfig.workingHours.days}: {siteConfig.workingHours.text}</span>
                                    <span className="block">Sunday: {siteConfig.workingHours.sunday}</span>
                                </div>
                            </li>
                        </ul>
                    </div>

                </div>

                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-500 text-sm mb-4 md:mb-0">
                        &copy; {new Date().getFullYear()} {siteConfig.clinicName}. All rights reserved.
                    </p>
                    <div className="flex space-x-4 text-sm text-gray-500">
                        <a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="/terms" className="hover:text-white transition-colors">Terms & Conditions</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
