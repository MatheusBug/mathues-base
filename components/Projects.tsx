
import React from 'react';
import { PROJECTS_DATA, PORTFOLIO_CONTENT } from '../constants';
import { Project } from '../types';
import { Reveal } from './Reveal';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const Projects: React.FC = () => {
    const navigate = useNavigate();
    const featuredProjects = PROJECTS_DATA.filter(p => p.featured);

    return (
        <section id="projects" className="py-32 bg-premium-bg relative border-t border-white/5">
            <div className="max-w-[1400px] mx-auto px-6 md:px-12">
                <Reveal>
                    <div className="mb-24 text-center">
                        <span className="text-premium-gold uppercase tracking-[0.2em] text-xs font-bold mb-4 block">Portfólio Selecionado</span>
                        <h2 className="font-serif text-4xl md:text-6xl text-white mb-6 max-w-4xl mx-auto">{PORTFOLIO_CONTENT.home.title}</h2>
                        <p className="text-premium-dim text-lg font-light max-w-2xl mx-auto leading-relaxed">
                            {PORTFOLIO_CONTENT.home.description}
                        </p>
                    </div>
                </Reveal>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 mb-20">
                    {featuredProjects.map((project, index) => (
                        <ProjectCard key={project.id} project={project} index={index} />
                    ))}
                </div>

                <Reveal className="text-center">
                    <button
                        onClick={() => navigate('/projetos')}
                        className="group inline-flex items-center gap-4 px-8 py-4 bg-transparent border border-white/20 hover:border-premium-gold text-white transition-all duration-300"
                    >
                        <span className="uppercase tracking-[0.2em] text-xs font-bold">{PORTFOLIO_CONTENT.home.cta}</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                </Reveal>
            </div>
        </section>
    );
};

const ProjectCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
    return (
        <Reveal delay={index * 100} className="group flex flex-col h-full">
            {/* Image Container */}
            <div className="relative overflow-hidden rounded-none mb-8 aspect-[16/10] bg-premium-surface border border-white/5">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500 z-10" />
                <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out grayscale group-hover:grayscale-0"
                />

                {/* Overlay Action */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 pointer-events-none">
                    <div className="w-16 h-16 rounded-full bg-premium-gold/90 backdrop-blur-sm flex items-center justify-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        <ArrowUpRight className="w-8 h-8 text-black" />
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-4">
                    <div>
                        <span className="text-premium-gold/80 text-xs font-medium tracking-widest uppercase mb-2 block">{project.businessType}</span>
                        <h3 className="font-serif text-3xl text-white group-hover:text-premium-gold transition-colors duration-300">
                            {project.client}
                        </h3>
                    </div>

                    <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center text-white/50 hover:text-white hover:border-white transition-all duration-300 md:hidden"
                    >
                        <ArrowUpRight className="w-5 h-5" />
                    </a>
                </div>

                <p className="text-premium-dim/60 text-sm font-medium uppercase tracking-wider mb-4 border-l-2 border-premium-gold/30 pl-3">
                    {project.focus}
                </p>

                <p className="text-premium-dim text-base font-light leading-relaxed mb-6 line-clamp-3 flex-grow">
                    {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-white/5">
                    {project.tech.map((tech) => (
                        <span key={tech} className="px-3 py-1 bg-white/5 text-white/70 text-xs tracking-wide">
                            {tech}
                        </span>
                    ))}
                </div>

                {/* Actions for Desktop */}
                <div className="mt-8 hidden md:flex items-center gap-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-2 group-hover:translate-y-0">
                    <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-white border-b border-premium-gold pb-1 hover:text-premium-gold transition-colors"
                    >
                        <span className="uppercase tracking-widest text-xs font-bold">Ver Projeto Ao Vivo</span>
                        <ArrowUpRight className="w-4 h-4" />
                    </a>
                </div>
            </div>
        </Reveal>
    );
};

