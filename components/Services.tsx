import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { SERVICES_DATA } from '../constants';
import { Reveal } from './Reveal';

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-32 bg-premium-bg border-t border-white/10 relative">
      <div className="max-w-[1800px] mx-auto px-6 md:px-12">

        <Reveal className="mb-12 md:mb-24 md:flex justify-between items-end">
          <h2 className="font-serif text-4xl md:text-7xl text-white leading-none">
            Minha <span className="italic text-premium-dim">Expertise</span>
          </h2>
          <p className="text-premium-dim mt-6 md:mt-0 max-w-md text-lg text-right font-light">
            Soluções digitais desenhadas para permanência e impacto.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 border border-white/10">
          {SERVICES_DATA.map((service, index) => (
            <Reveal key={index} delay={index * 100} className="h-full">
              <div
                className="group relative p-8 md:p-14 bg-premium-bg hover:bg-white/[0.02] transition-colors duration-500 h-full flex flex-col justify-between"
              >
                <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:-translate-y-2 text-premium-gold">
                  <ArrowUpRight size={28} />
                </div>

                <div>
                  <span className="text-xs font-mono text-premium-gold mb-8 block opacity-50">0{index + 1}</span>
                  <div className="w-12 h-12 mb-6 text-white group-hover:text-premium-gold transition-colors duration-300">
                    <service.icon size={32} strokeWidth={1} />
                  </div>
                  <h3 className="text-3xl font-serif text-white mb-4">{service.title}</h3>
                </div>

                <div>
                  <p className="text-premium-dim text-base font-normal leading-relaxed group-hover:text-premium-silver transition-colors">
                    {service.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};