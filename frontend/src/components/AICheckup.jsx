import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { siteConfig } from '../config/siteConfig';
import { aiScannerImage, aiScanResultsImage } from '../config/siteImages';

const AICheckup = () => {
    const features = [
        'Detects tooth decay & cavities early',
        'Identifies stains and discoloration',
        'Spots misalignment and bite issues',
        'Checks for plaque & calcium deposits',
        'Evaluates need for fillings or treatments',
        'Helps prevent tooth loss with early diagnosis'
    ];

    return (
        <div className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Banner Section */}
                <div className="relative rounded-3xl overflow-hidden mb-20 bg-primary-dark">
                    <div className="absolute inset-0">
                        <img
                            src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                            alt="Dental Health Plans"
                            className="w-full h-full object-cover opacity-30 mix-blend-overlay"
                        />
                    </div>
                    <div className="relative z-10 py-16 px-8 text-center max-w-3xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 leading-tight">
                            Explore our Annual Dental Health Plans for affordable, comprehensive care and year-round oral health!
                        </h2>
                        <button className="bg-white text-primary hover:bg-gray-100 px-8 py-3 rounded-full font-medium transition-all transform hover:-translate-y-1 shadow-lg hover:shadow-xl">
                            Annual Health Plans
                        </button>
                    </div>
                </div>

                {/* AI Checkup Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            ROBOTIC AI DENTAL CHECKUP
                        </h2>
                        <p className="text-gray-600 mb-8">
                            Get your Dental Checkup Report on WhatsApp Instantly. It identifies all the common problems like:
                        </p>
                        <ul className="space-y-4 mb-8">
                            {features.map((feature, index) => (
                                <li key={index} className="flex items-start">
                                    <CheckCircle2 className="text-primary mt-1 mr-3 flex-shrink-0" size={20} />
                                    <span className="text-gray-700">{feature}</span>
                                </li>
                            ))}
                        </ul>
                        <a
                            href={`${siteConfig.contact.whatsapp}?text=${encodeURIComponent(siteConfig.contact.whatsappMessage)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center space-x-2 bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full font-medium transition-all transform hover:-translate-y-1 shadow-lg shadow-green-500/30"
                        >
                            <FaWhatsapp size={24} />
                            <span>Get Report on WhatsApp</span>
                        </a>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        {/* Machine Image */}
                        <div className="col-span-1 row-span-2 rounded-2xl overflow-hidden bg-gray-100 shadow-md group">
                            <img
                                src={aiScannerImage}
                                alt="AI Dental Scanner"
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                        </div>
                        {/* Teeth Scan Image */}
                        <div className="col-span-1 rounded-2xl overflow-hidden shadow-md group">
                            <img
                                src={aiScanResultsImage}
                                alt="AI Scan Results"
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                        </div>
                        {/* Stats Box */}
                        <div className="col-span-1 bg-primary rounded-2xl p-6 text-white flex flex-col justify-center items-center text-center shadow-md transform transition-transform hover:scale-105">
                            <span className="text-4xl font-bold mb-2">5K +</span>
                            <span className="text-sm text-white/90">Reports Delivered</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AICheckup;
