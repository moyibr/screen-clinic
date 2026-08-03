import React from 'react';
import { Clock } from 'lucide-react';
import { FaFacebook, FaTwitter, FaYoutube, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { siteConfig } from '../config/siteConfig';

const TopBar = () => {
    return (
        <div className="bg-primary text-white py-2 px-4 md:px-10 flex flex-col md:flex-row justify-between items-center text-sm">
            <div className="flex space-x-4 mb-2 md:mb-0">
                <a href={siteConfig.socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-primary-light transition-colors"><FaFacebook size={16} /></a>
                <a href={siteConfig.socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="hover:text-primary-light transition-colors"><FaTwitter size={16} /></a>
                <a href={siteConfig.socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-primary-light transition-colors"><FaInstagram size={16} /></a>
                <a href={siteConfig.socialLinks.youtube} target="_blank" rel="noopener noreferrer" className="hover:text-primary-light transition-colors"><FaYoutube size={16} /></a>
            </div>
            <div className="flex items-center space-x-2">
                <Clock size={16} />
                <span>{siteConfig.workingHours.text}</span>
            </div>
        </div>
    );
};

export default TopBar;
