import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Award, Users, Clock } from 'lucide-react';
import SEO from '../components/common/SEO';
import { siteConfig } from '../config/siteConfig';
import { clinicInterior } from '../config/siteImages';

const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const About = () => {
    return (
        <div className="overflow-hidden bg-gray-50">
            <SEO
                title="About Us"
                description={`Learn more about ${siteConfig.clinicName}, our mission, and our commitment to providing world-class dental care.`}
            />

            {/* Page Header */}
            <div className="bg-primary-dark py-20 text-center text-white">
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-5xl font-bold mb-4"
                >
                    About Us
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-lg text-white/80 max-w-2xl mx-auto px-4"
                >
                    Discover the story behind {siteConfig.clinicName} and our dedication to your smile.
                </motion.p>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                    >
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">
                            Welcome to {siteConfig.clinicName}
                        </h2>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            At {siteConfig.clinicName}, we believe that a healthy smile is the foundation of overall well-being. Established with a vision to provide world-class dental care, our clinic combines advanced technology with compassionate care to deliver exceptional results.
                        </p>
                        <p className="text-gray-600 mb-8 leading-relaxed">
                            Our team of highly qualified and experienced specialists is dedicated to ensuring that every patient receives personalized treatment in a comfortable and relaxing environment. From routine checkups to complex surgical procedures, we are equipped to handle all your dental needs under one roof.
                        </p>

                        <div className="space-y-4">
                            {[
                                "State-of-the-art dental technology",
                                "Experienced and specialized doctors",
                                "Strict sterilization protocols",
                                "Comfortable and relaxing environment",
                                "Affordable and transparent pricing"
                            ].map((item, index) => (
                                <div key={index} className="flex items-start">
                                    <CheckCircle2 className="text-primary mt-1 mr-3 flex-shrink-0" size={20} />
                                    <span className="text-gray-700 font-medium">{item}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative rounded-3xl overflow-hidden shadow-2xl h-[500px]"
                    >
                        <img
                            src={clinicInterior}
                            alt="Clinic Interior"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                            <div className="text-white">
                                <h3 className="text-2xl font-bold mb-2">Modern Facilities</h3>
                                <p className="text-white/90">Equipped with the latest dental technology for precise diagnostics and treatment.</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default About;
