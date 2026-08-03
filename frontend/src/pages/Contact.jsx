import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import SEO from '../components/common/SEO';
import { siteConfig } from '../config/siteConfig';
import { MapPin, Phone, Mail, Clock, CheckCircle2 } from 'lucide-react';
import { submitContactForm } from '../services/api';

const schema = yup.object({
    name: yup.string().required('Name is required'),
    email: yup.string().email('Invalid email address').required('Email is required'),
    subject: yup.string().required('Subject is required'),
    message: yup.string().required('Message is required').min(10, 'Message must be at least 10 characters')
}).required();

const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const Contact = () => {
    const [successMessage, setSuccessMessage] = useState('');
    const [submitError, setSubmitError] = useState('');

    const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = async (data) => {
        setSubmitError('');
        setSuccessMessage('');
        try {
            const response = await submitContactForm(data);
            setSuccessMessage(response.message);
            reset();
            setTimeout(() => {
                setSuccessMessage('');
            }, 5000);
        } catch (error) {
            setSubmitError(error.message);
        }
    };

    return (
        <div className="overflow-hidden bg-gray-50 pb-20">
            <SEO
                title="Contact Us"
                description={`Get in touch with ${siteConfig.clinicName} for appointments, queries, or emergency dental care.`}
            />

            {/* Page Header */}
            <div className="bg-primary-dark py-20 text-center text-white mb-16">
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-5xl font-bold mb-4"
                >
                    Contact Us
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-lg text-white/80 max-w-2xl mx-auto px-4"
                >
                    We're here to help you smile brighter. Reach out to us today.
                </motion.p>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Info & Map */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="space-y-8"
                    >
                        <div className="bg-white p-8 rounded-3xl shadow-lg">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">Get In Touch</h2>
                            <ul className="space-y-6">
                                <li className="flex items-start">
                                    <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900">Clinic Address</h3>
                                        <p className="text-gray-600">{siteConfig.contact.address}</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900">Phone Number</h3>
                                        <p className="text-gray-600">{siteConfig.contact.phone}</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900">Email Address</h3>
                                        <p className="text-gray-600">{siteConfig.contact.email}</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                                        <Clock size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900">Working Hours</h3>
                                        <p className="text-gray-600">{siteConfig.workingHours.text}</p>
                                        <p className="text-gray-600">{siteConfig.workingHours.days}</p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        {/* Google Maps Placeholder */}
                        <div className="bg-white p-2 rounded-3xl shadow-lg h-80 overflow-hidden">
                            <iframe
                                src={siteConfig.contact.mapUrl}
                                width="100%"
                                height="100%"
                                style={{ border: 0, borderRadius: '1.25rem' }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Clinic Location Map"
                            ></iframe>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        transition={{ delay: 0.2 }}
                        className="bg-white p-8 md:p-10 rounded-3xl shadow-lg"
                    >
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
                        
                        {successMessage ? (
                            <div className="p-10 text-center flex flex-col items-center justify-center h-[400px]">
                                <div className="w-16 h-16 bg-green-100 text-green-500 rounded-full flex items-center justify-center mb-4 mx-auto">
                                    <CheckCircle2 size={32} />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Success!</h3>
                                <p className="text-gray-600">{successMessage}</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                                {submitError && (
                                    <div className="bg-red-50 text-red-500 p-3 rounded-lg text-sm mb-4">
                                        {submitError}
                                    </div>
                                )}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
                                    <input
                                        {...register('name')}
                                        className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
                                        placeholder="John Doe"
                                    />
                                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                                    <input
                                        {...register('email')}
                                        className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                                        placeholder="john@example.com"
                                    />
                                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                                    <input
                                        {...register('subject')}
                                        className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all ${errors.subject ? 'border-red-500' : 'border-gray-300'}`}
                                        placeholder="How can we help you?"
                                    />
                                    {errors.subject && <p className="text-red-500 text-xs mt-1">{errors.subject.message}</p>}
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                                    <textarea
                                        {...register('message')}
                                        rows="5"
                                        className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none ${errors.message ? 'border-red-500' : 'border-gray-300'}`}
                                        placeholder="Write your message here..."
                                    ></textarea>
                                    {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-4 px-6 rounded-xl transition-colors flex justify-center items-center disabled:opacity-70 shadow-md"
                                >
                                    {isSubmitting ? (
                                        <div className="animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-white"></div>
                                    ) : (
                                        "Send Message"
                                    )}
                                </button>
                            </form>
                        )}
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
