import React from 'react';
import SEO from '../components/common/SEO';
import { siteConfig } from '../config/siteConfig';

const Terms = () => {
    return (
        <div className="bg-gray-50 py-20">
            <SEO title="Terms & Conditions" description={`Terms and Conditions for ${siteConfig.clinicName}`} />

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-white p-10 rounded-3xl shadow-md">
                <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms & Conditions</h1>

                <div className="prose prose-lg text-gray-600 space-y-6">
                    <p>Last updated: {new Date().toLocaleDateString()}</p>

                    <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Acceptance of Terms</h2>
                    <p>
                        By accessing and using the services of {siteConfig.clinicName}, you accept and agree to be bound by the terms and provision of this agreement.
                    </p>

                    <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Appointments and Cancellations</h2>
                    <p>
                        We request that you provide at least 24 hours notice if you need to cancel or reschedule your appointment. Failure to do so may result in a cancellation fee.
                    </p>

                    <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Payment Policy</h2>
                    <p>
                        Payment is expected at the time services are rendered unless prior arrangements have been made. We accept cash, credit cards, and various insurance plans. Estimates provided are not a guarantee of exact costs.
                    </p>

                    <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Medical Information</h2>
                    <p>
                        You agree to provide accurate and complete medical history information. {siteConfig.clinicName} is not responsible for any adverse reactions or complications arising from undisclosed medical conditions or medications.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Terms;
