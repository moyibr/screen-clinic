import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Phone } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { heroImage } from '../config/siteImages';

const Hero = () => {
    return (
        <div className="relative bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32 pt-10 md:pt-16">
                    <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="sm:text-center lg:text-left"
                        >
                            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                                <span className="block xl:inline">{siteConfig.tagline.split('with')[0]}</span>{' '}
                                <span className="block text-primary xl:inline">with {siteConfig.tagline.split('with')[1]}</span>
                            </h1>
                            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                                {siteConfig.seo.defaultDescription}
                            </p>
                            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                                <div className="rounded-md shadow">
                                    <button className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary-dark md:py-4 md:text-lg md:px-10 transition-colors">
                                        <Calendar className="mr-2" size={20} />
                                        Book Appointment
                                    </button>
                                </div>
                                <div className="mt-3 sm:mt-0 sm:ml-3">
                                    <a href={`tel:${siteConfig.contact.phone}`} className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-primary bg-primary-light/10 hover:bg-primary-light/20 md:py-4 md:text-lg md:px-10 transition-colors">
                                        <Phone className="mr-2" size={20} />
                                        Call Us Now
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </main>
                </div>
            </div>
            <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                <img
                    className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
                    src={heroImage}
                    alt="Modern Dental Clinic"
                />
                {/* Decorative Elements */}
                <div className="absolute inset-0 bg-gradient-to-r from-white via-white/50 to-transparent lg:via-transparent"></div>
            </div>
        </div>
    );
};

export default Hero;
