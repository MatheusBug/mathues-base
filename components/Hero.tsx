import React from 'react';
import { ArrowRight, MoveDown } from 'lucide-react';
import { Button } from './Button';
import { Reveal } from './Reveal';

import { HERO_DATA } from '../constants';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col pt-32 md:pt-48 pb-20 relative overflow-hidden bg-premium-bg">

      {/* Abstract Gradient Background */}
      <div className="absolute top-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-premium-gold/[0.05] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-blue-900/[0.05] rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-[1800px] mx-auto px-6 md:px-12 w-full flex-grow flex flex-col justify-center z-10 relative">

        {/* Profile Image Background - Positioned Better */}
        <div className="absolute top-0 right-0 h-full w-1/2 md:w-1/3 opacity-20 md:opacity-40 mix-blend-screen pointer-events-none z-0 hidden md:block select-none">
          <div className="relative w-full h-full">
            <div className="absolute inset-0 bg-gradient-to-l from-transparent to-premium-bg z-10" />
            <div className="absolute inset-0 bg-gradient-to-b from-premium-bg via-transparent to-premium-bg z-10" />
            <img
              src={HERO_DATA.avatarUrl}
              alt=""
              className="w-full h-full object-cover object-center grayscale hover:grayscale-0 transition-all duration-1000"
            />
          </div>
        </div>

        {/* Intro Tag */}
        <Reveal>
          <div className="flex items-center gap-6 mb-8 relative z-20">
            <span className="text-premium-gold uppercase tracking-[0.2em] text-xs font-bold border border-premium-gold/30 px-4 py-2 rounded-full backdrop-blur-sm">
              {HERO_DATA.role}
            </span>
          </div>
        </Reveal>

        {/* Massive Typography */}
        <div className="relative mb-12 z-20">
          <Reveal delay={100}>
            <h1 className="font-serif text-6xl sm:text-7xl md:text-[8rem] font-medium text-white tracking-tight leading-[0.9]">
              {HERO_DATA.name.split(' ')[0]} <br />
              <span className="italic text-premium-dim">{HERO_DATA.name.split(' ')[1]}</span>
              <span className="text-premium-gold">.</span>
            </h1>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24 items-start mt-8 relative z-20">

          {/* Description */}
          <div className="md:col-span-6 lg:col-span-5">
            <Reveal delay={200}>
              <div className="w-16 h-[1px] bg-premium-gold mb-8"></div>
              <p className="text-premium-dim text-lg md:text-xl font-normal leading-relaxed">
                {HERO_DATA.subtitle}
              </p>
              <div className="flex gap-6 mt-10">
                <Button onClick={() => window.open(HERO_DATA.ctaLink, '_blank')}>
                  {HERO_DATA.ctaText}
                </Button>
                <a href="#projects" className="flex items-center gap-3 px-6 py-5 text-xs font-bold uppercase tracking-widest text-white border-b border-transparent hover:border-premium-gold transition-all">
                  Ver Portfolio
                </a>
              </div>
            </Reveal>
          </div>

          <div className="md:col-span-6 lg:col-span-7 flex flex-col md:flex-row justify-end items-end pt-8 relative">

          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce duration-[3000ms] text-premium-dim/50">
        <MoveDown size={24} />
      </div>
    </section>
  );
};