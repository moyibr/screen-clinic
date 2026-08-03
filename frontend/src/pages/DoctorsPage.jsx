import React from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/common/SEO';
import { doctors } from '../data/doctors';

const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const DoctorsPage = () => {
    return (
        <div className="overflow-hidden bg-gray-50 pb-20">
            <SEO
                title="Our Doctors"
                description="Meet our team of highly qualified and experienced dental specialists."
            />

            {/* Page Header */}
            <div className="bg-primary-dark py-20 text-center text-white mb-16">
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-5xl font-bold mb-4"
                >
                    Our Specialists
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-lg text-white/80 max-w-2xl mx-auto px-4"
                >
                    Expert care from a team you can trust.
                </motion.p>
            </div>

            {/* Doctors Grid */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {doctors.map((doctor) => (
                        <motion.div
                            key={doctor.id}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-50px" }}
                            variants={fadeInUp}
                            className="bg-white rounded-3xl overflow-hidden shadow-lg flex flex-col sm:flex-row group"
                        >
                            <div className="w-full sm:w-2/5 h-64 sm:h-auto overflow-hidden">
                                <img
                                    src={doctor.image}
                                    alt={doctor.name}
                                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <div className="w-full sm:w-3/5 p-8 flex flex-col justify-center">
                                <h2 className="text-2xl font-bold text-gray-900 mb-1">{doctor.name}</h2>
                                <p className="text-primary font-semibold mb-4">{doctor.specialty}</p>

                                <div className="space-y-2 mb-6">
                                    <p className="text-sm text-gray-600"><span className="font-medium text-gray-900">Qualifications:</span> {doctor.qualifications}</p>
                                    <p className="text-sm text-gray-600"><span className="font-medium text-gray-900">Experience:</span> {doctor.experience}</p>
                                </div>

                                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                                    {doctor.bio}
                                </p>

                                <button className="self-start border-2 border-primary text-primary hover:bg-primary hover:text-white px-6 py-2 rounded-full font-medium transition-colors text-sm">
                                    Book Appointment
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DoctorsPage;
