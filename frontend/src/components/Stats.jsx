import React from 'react';
import { Smile, Activity, Shield, Users, Star, Award } from 'lucide-react';

const Stats = () => {
    const statsData = [
        { id: 1, icon: <Smile size={32} />, number: '100K+', label: 'Happy Patients' },
        { id: 2, icon: <Activity size={32} />, number: '20K+', label: 'Implants Placed' },
        { id: 3, icon: <Shield size={32} />, number: '15K+', label: 'Braces & Aligners Delivered' },
        { id: 4, icon: <Users size={32} />, number: '10+', label: 'Dental Specialists' },
        { id: 5, icon: <Star size={32} />, number: '2100+', label: 'Google Reviews' },
        { id: 6, icon: <Award size={32} />, number: '20+', label: 'Years of Legacy' },
    ];

    return (
        <div className="bg-primary-dark text-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
                    {statsData.map((stat) => (
                        <div key={stat.id} className="flex flex-col items-center justify-center p-4 rounded-xl border border-white/20 hover:bg-white/5 transition-colors">
                            <div className="mb-3 text-white/90">
                                {stat.icon}
                            </div>
                            <h3 className="text-2xl font-bold mb-1">{stat.number}</h3>
                            <p className="text-sm text-white/80">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Stats;
