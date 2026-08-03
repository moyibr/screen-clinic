import React from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/common/SEO';
import { Plane, Hotel, Map, CalendarCheck } from 'lucide-react';
import { tourismHero } from '../config/siteImages';

const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const Tourism = () => {
    const steps = [
        {
            icon: <CalendarCheck size={32} />,
            title: "1. Online Consultation",
            description: "Share your dental records and X-rays. Our experts will provide a preliminary treatment plan and cost estimate."
        },
        {
            icon: <Plane size={32} />,
            title: "2. Travel Planning",
            description: "We assist with visa invitation letters, flight recommendations, and airport transfers."
        },
        {
            icon: <Hotel size={32} />,
            title: "3. Accommodation",
            description: "Choose from our partnered hotels near the clinic for a comfortable stay at discounted rates."
        },
        {
            icon: <Map size={32} />,
            title: "4. Treatment & Tourism",
            description: "Get world-class dental treatment while exploring the rich culture and heritage of India."
        }
    ];

    return (
        <div className="overflow-hidden bg-gray-50 pb-20">
            <SEO
                title="Dental Tourism"
                description="Combine world-class dental treatment with an unforgettable holiday in India."
            />

            {/* Page Header */}
            <div className="relative bg-primary-dark py-24 text-center text-white mb-16 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src={tourismHero}
                        alt="Taj Mahal India"
                        className="w-full h-full object-cover opacity-20 mix-blend-overlay"
                    />
                </div>
                <div className="relative z-10">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-bold mb-4"
                    >
                        Dental Tourism in India
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-white/90 max-w-2xl mx-auto px-4"
                    >
                        Save up to 70% on dental treatments without compromising on quality, while enjoying a beautiful vacation.
                    </motion.p>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Us for Dental Tourism?</h2>
                    <p className="text-gray-600 max-w-3xl mx-auto">
                        India has emerged as a premier destination for dental tourism, offering state-of-the-art facilities, highly qualified specialists, and significant cost savings compared to Western countries.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-50px" }}
                            variants={fadeInUp}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white p-8 rounded-3xl shadow-lg text-center hover:-translate-y-2 transition-transform duration-300"
                        >
                            <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
                                {step.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                            <p className="text-gray-600">{step.description}</p>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    className="bg-primary rounded-3xl p-8 md:p-12 text-white text-center shadow-xl"
                >
                    <h2 className="text-3xl font-bold mb-4">Ready to plan your dental trip?</h2>
                    <p className="text-white/90 mb-8 max-w-2xl mx-auto">
                        Contact our international patient coordinator today for a free consultation and treatment estimate.
                    </p>
                    <button className="bg-white text-primary hover:bg-gray-100 px-8 py-3 rounded-full font-medium transition-colors shadow-lg">
                        Get a Free Quote
                    </button>
                </motion.div>
            </div>
        </div>
    );
};

export default Tourism;
