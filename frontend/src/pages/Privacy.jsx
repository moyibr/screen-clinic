import React from 'react';
import SEO from '../components/common/SEO';
import { siteConfig } from '../config/siteConfig';

const Privacy = () => {
    return (
        <div className="bg-gray-50 py-20">
            <SEO title="Privacy Policy" description={`Privacy Policy for ${siteConfig.clinicName}`} />

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-white p-10 rounded-3xl shadow-md">
                <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>

                <div className="prose prose-lg text-gray-600 space-y-6">
                    <p>Last updated: {new Date().toLocaleDateString()}</p>

                    <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Information We Collect</h2>
                    <p>
                        We collect information that you provide directly to us, such as when you schedule an appointment, fill out a form, or contact us. This may include your name, email address, phone number, and medical history relevant to your dental care.
                    </p>

                    <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. How We Use Your Information</h2>
                    <p>
                        We use the information we collect to provide, maintain, and improve our dental services. This includes scheduling appointments, sending reminders, processing payments, and communicating with you about your treatment plan.
                    </p>

                    <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Data Security</h2>
                    <p>
                        We implement appropriate technical and organizational measures to protect your personal data against unauthorized or unlawful processing, accidental loss, destruction, or damage. Your medical records are kept strictly confidential in accordance with healthcare regulations.
                    </p>

                    <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Contact Us</h2>
                    <p>
                        If you have any questions about this Privacy Policy, please contact us at {siteConfig.contact.email} or call us at {siteConfig.contact.phone}.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Privacy;
