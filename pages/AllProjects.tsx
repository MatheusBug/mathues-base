import React, { useMemo, useState } from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Reveal } from '../components/Reveal';
import { PROJECTS_DATA, PORTFOLIO_CONTENT } from '../constants';
import { Project } from '../types';
import { ArrowUpRight, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

import { useSEO } from '../hooks/useSEO';

export const AllProjects: React.FC = () => {
    useSEO({
        title: PORTFOLIO_CONTENT.allProjects.title,
        description: PORTFOLIO_CONTENT.allProjects.description
    });

    const [activeCategory, setActiveCategory] = useState("Todos");

    const filteredProjects = useMemo(() => {
        if (activeCategory === "Todos") return PROJECTS_DATA;
        return PROJECTS_DATA.filter(project => project.category === activeCategory);
    }, [activeCategory]);

    return (
        <div className="min-h-screen bg-premium-bg text-white selection:bg-premium-gold/30 selection:text-white">
            <Navbar />

            <main className="pt-32 pb-20 px-6 md:px-12 max-w-[1400px] mx-auto">

                {/* Header */}
                <Reveal>
                    <div className="mb-20 space-y-8">
                        <Link to="/" className="inline-flex items-center gap-2 text-premium-dim hover:text-white transition-colors text-sm uppercase tracking-widest font-bold">
                            <ArrowLeft size={16} /> Voltar para Home
                        </Link>

                        <h1 className="font-serif text-5xl md:text-7xl">
                            {PORTFOLIO_CONTENT.allProjects.title}
                        </h1>

                        <p className="max-w-3xl text-xl text-premium-dim font-light leading-relaxed">
                            {PORTFOLIO_CONTENT.allProjects.description}
                        </p>
                    </div>
                </Reveal>

                {/* Filters */}
                <Reveal delay={100}>
                    <div className="flex flex-wrap gap-4 mb-16 border-b border-white/10 pb-8">
                        {PORTFOLIO_CONTENT.allProjects.categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-300 border ${activeCategory === category
                                    ? "bg-premium-gold text-black border-premium-gold"
                                    : "bg-transparent text-premium-dim border-white/10 hover:border-white/30"
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </Reveal>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 min-h-[50vh]">
                    {filteredProjects.map((project, index) => (
                        <ProjectCard key={project.id} project={project} index={index} />
                    ))}
                </div>

                {/* Compliance Footer */}
                <Reveal delay={200} className="mt-32 pt-12 border-t border-white/5 text-center">
                    <p className="text-premium-dim/40 text-sm max-w-4xl mx-auto leading-relaxed font-medium uppercase tracking-wide">
                        {PORTFOLIO_CONTENT.compliance}
                    </p>
                </Reveal>

            </main>

            <Footer />
        </div>
    );
};

const ProjectCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
    return (
        <Reveal delay={index * 50} className="group flex flex-col h-full bg-premium-surface/30 p-6 border border-white/5 hover:border-premium-gold/30 transition-all duration-500">

            {/* Header Badges */}
            <div className="flex justify-between items-start mb-6">
                <span className="text-premium-gold/60 text-[10px] font-bold tracking-widest uppercase border border-premium-gold/20 px-2 py-1 rounded">
                    {project.category}
                </span>
            </div>

            {/* Image */}
            <div className="relative overflow-hidden aspect-[16/10] bg-black/40 mb-6 grayscale group-hover:grayscale-0 transition-all duration-700">
                <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
            </div>

            {/* Title & Desc */}
            <div>
                <h3 className="font-serif text-2xl text-white mb-2 group-hover:text-premium-gold transition-colors">
                    {project.client}
                </h3>
                <p className="text-premium-dim/80 text-xs font-bold uppercase tracking-wider mb-4">
                    {project.businessType}
                </p>
                <p className="text-premium-dim/50 text-xs font-medium uppercase tracking-wider mb-4 border-l-2 border-premium-gold/30 pl-3">
                    {project.focus}
                </p>
                <p className="text-premium-dim text-sm font-light leading-relaxed mb-6 line-clamp-4">
                    {project.description}
                </p>
            </div>

            {/* Actions */}
            <div className="mt-auto pt-6 border-t border-white/5 flex gap-4">
                <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-3 text-center border border-white/10 hover:bg-white hover:text-black hover:border-white transition-all duration-300 text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2"
                >
                    Ver Site Ao Vivo
                    <ArrowUpRight size={14} />
                </a>
            </div>
        </Reveal>
    );
};
