import React from 'react';
import { Reveal } from './Reveal';
import { SOCIAL_LINKS } from '../constants';

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-premium-bg pt-32 pb-12 border-t border-white/10">
      <div className="max-w-[1800px] mx-auto px-6 md:px-12">

        <Reveal className="mb-32">
          <p className="text-premium-gold uppercase tracking-[0.2em] text-xs font-bold mb-8">Vamos Conversar</p>
          <a
            href="https://wa.link/pvhwp2"
            target="_blank"
            rel="noopener noreferrer"
            className="font-serif text-[11vw] leading-[0.85] text-white hover:text-neutral-400 transition-colors block border-b border-white/10 pb-8"
          >
            Começar <br /> <span className="italic text-white/40 group-hover:text-white/60 transition-colors">Projeto</span>
          </a>
        </Reveal>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12">

          <Reveal delay={100} className="flex flex-col gap-4">
            <span className="text-white text-xl font-serif">Tabatinga, Amazonas</span>
            <a href="https://wa.link/pvhwp2" target="_blank" rel="noopener noreferrer" className="text-premium-dim hover:text-premium-gold text-lg transition-colors">
              (71) 98614-5025
            </a>
            <a href="mailto:amorimsec@tuta.io" className="text-premium-dim hover:text-premium-gold text-lg transition-colors">
              amorimsec@tuta.io
            </a>
          </Reveal>

          <Reveal delay={200} className="flex gap-4">
            {SOCIAL_LINKS.map((social, idx) => (
              <a
                key={idx}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-300 rounded-full"
              >
                <social.icon size={20} />
              </a>
            ))}
          </Reveal>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-12 mt-24 border-t border-white/10 text-xs text-premium-dim uppercase tracking-widest font-semibold">
          <p>&copy; {new Date().getFullYear()} Matheus Amorim.</p>
          <div className="flex gap-10 mt-6 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Linkedin</a>
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
            <a href="#" className="hover:text-white transition-colors">Behance</a>
          </div>
        </div>
      </div>
    </footer>
  );
};