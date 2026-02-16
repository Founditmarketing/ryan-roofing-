import React from 'react';
import { Hammer, Home, Umbrella, Wind } from 'lucide-react';

const Services: React.FC = () => {
    const services = [
        {
            icon: <Home className="w-8 h-8" />,
            title: 'Roof Replacement',
            description: 'Complete tear-off and installation using premium materials warranted for 50+ years.'
        },
        {
            icon: <Umbrella className="w-8 h-8" />,
            title: 'Siding Installation',
            description: 'High-performance siding solutions that improve energy efficiency and curb appeal.'
        },
        {
            icon: <Wind className="w-8 h-8" />,
            title: 'Storm Restoration',
            description: 'Expert insurance claim handling and rapid response for storm-damaged properties.'
        },
        {
            icon: <Hammer className="w-8 h-8" />,
            title: 'Gutter Systems',
            description: 'Seamless gutter installation to protect your foundation and landscaping.'
        }
    ];

    return (
        <section className="py-24 bg-neutral-900 text-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-6">
                        Core <span className="text-yellow-500">Services</span>
                    </h2>
                    <p className="text-neutral-400 max-w-2xl mx-auto">
                        Comprehensive exterior solutions engineered for durability and performance.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className="p-8 bg-black border border-neutral-800 hover:border-yellow-500/50 transition-colors group">
                            <div className="text-yellow-500 mb-6 group-hover:scale-110 transition-transform duration-300">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-4 uppercase tracking-wide">{service.title}</h3>
                            <p className="text-neutral-400 text-sm leading-relaxed">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
