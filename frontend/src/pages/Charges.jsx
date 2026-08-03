import React from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/common/SEO';
import { pricing } from '../data/pricing';
import { CheckCircle2 } from 'lucide-react';

const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const Charges = () => {
    return (
        <div className="overflow-hidden bg-gray-50 pb-20">
            <SEO 
                title="Treatment Charges" 
                description="Transparent pricing for our dental treatments and checkup plans." 
            />
            
            {/* Page Header */}
            <div className="bg-primary-dark py-20 text-center text-white mb-16">
                <motion.h1 
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-5xl font-bold mb-4"
                >
                    Treatment Charges
                </motion.h1>
                <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-lg text-white/80 max-w-2xl mx-auto px-4"
                >
                    Transparent, affordable, and comprehensive dental care plans.
                </motion.p>
            </div>

            {/* Pricing Cards */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {pricing.map((plan, index) => (
                        <motion.div 
                            key={plan.id}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-50px" }}
                            variants={fadeInUp}
                            transition={{ delay: index * 0.1 }}
                            className={`bg-white rounded-3xl overflow-hidden shadow-lg border-2 flex flex-col ${plan.isPopular ? 'border-primary relative transform md:-translate-y-4' : 'border-transparent'}`}
                        >
                            {plan.isPopular && (
                                <div className="bg-primary text-white text-center py-1 text-sm font-bold uppercase tracking-wider">
                                    Most Popular
                                </div>
                            )}
                            <div className="p-8 flex-grow">
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.title}</h3>
                                <p className="text-gray-500 mb-6 h-10">{plan.description}</p>
                                <div className="mb-8">
                                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                                </div>
                                <ul className="space-y-4 mb-8">
                                    {plan.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start">
                                            <CheckCircle2 className="text-primary mt-1 mr-3 flex-shrink-0" size={20} />
                                            <span className="text-gray-700">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="p-8 pt-0 mt-auto">
                                <button className={`w-full py-3 rounded-full font-medium transition-colors ${plan.isPopular ? 'bg-primary hover:bg-primary-dark text-white shadow-md' : 'bg-primary-light/10 text-primary hover:bg-primary-light/20'}`}>
                                    Choose Plan
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
                
                <div className="mt-16 text-center max-w-2xl mx-auto">
                    <p className="text-gray-600">
                        * Prices mentioned are indicative and may vary based on the complexity of the case. For a precise estimate, please consult our doctors.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Charges;
