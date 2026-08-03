import React from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/common/SEO';
import { services } from '../data/services';
import { CheckCircle2 } from 'lucide-react';

const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const Treatments = () => {
    return (
        <div className="overflow-hidden bg-gray-50 pb-20">
            <SEO
                title="Our Treatments"
                description="Explore our comprehensive range of dental treatments including implants, root canals, orthodontics, and cosmetic dentistry."
            />

            {/* Page Header */}
            <div className="bg-primary-dark py-20 text-center text-white mb-16">
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-5xl font-bold mb-4"
                >
                    Our Treatments
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-lg text-white/80 max-w-2xl mx-auto px-4"
                >
                    Comprehensive dental care tailored to your unique needs.
                </motion.p>
            </div>

            {/* Treatments List */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="space-y-20">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.id}
                            id={service.id}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={fadeInUp}
                            className={`flex flex-col lg:flex-row gap-12 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
                        >
                            <div className="w-full lg:w-1/2">
                                <div className="rounded-3xl overflow-hidden shadow-xl h-[400px]">
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                                    />
                                </div>
                            </div>

                            <div className="w-full lg:w-1/2">
                                <div className="flex items-center gap-4 mb-4">
                                    <span className="text-4xl">{service.icon}</span>
                                    <h2 className="text-3xl font-bold text-gray-900">{service.title}</h2>
                                </div>
                                <p className="text-xl text-primary font-medium mb-4">
                                    {service.shortDescription}
                                </p>
                                <p className="text-gray-600 mb-8 leading-relaxed">
                                    {service.fullDescription}
                                </p>

                                <h3 className="text-lg font-bold text-gray-900 mb-4">Key Benefits:</h3>
                                <ul className="space-y-3 mb-8">
                                    {service.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start">
                                            <CheckCircle2 className="text-primary mt-1 mr-3 flex-shrink-0" size={20} />
                                            <span className="text-gray-700">{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <button className="bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-full font-medium transition-colors shadow-md">
                                    Consult a Specialist
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Treatments;
