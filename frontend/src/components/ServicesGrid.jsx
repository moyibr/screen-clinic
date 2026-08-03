import React from 'react';
import { ArrowRight } from 'lucide-react';
import { services } from '../data/services';

const ServicesGrid = () => {
    return (
        <div className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 max-w-3xl mx-auto leading-tight">
                        Experience world-class treatments in a comfortable and friendly environment!
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <React.Fragment key={service.id}>
                            {/* Image Card */}
                            <div className={`rounded-2xl overflow-hidden h-64 lg:h-80 shadow-md ${index % 2 !== 0 ? 'lg:order-none' : ''}`}>
                                <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
                            </div>

                            {/* Text Card */}
                            <div className="bg-primary rounded-2xl p-8 text-white flex flex-col justify-between h-64 lg:h-80 shadow-md hover:bg-primary-dark transition-colors group cursor-pointer">
                                <div>
                                    <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                                    <p className="text-white/90 text-sm leading-relaxed line-clamp-5">
                                        {service.shortDescription}
                                    </p>
                                </div>
                                <a href={`/treatments#${service.id}`} className="inline-flex items-center text-sm font-medium mt-4 group-hover:underline">
                                    Learn more <ArrowRight size={16} className="ml-2" />
                                </a>
                            </div>
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ServicesGrid;
