import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NavItem } from '../types';
import { Link, useLocation } from 'react-router-dom';

const navItems: NavItem[] = [
  { label: 'Overview', href: '/#home' },
  { label: 'Expertise', href: '/#services' },
  { label: 'Trabalhos', href: '/#projects' },
  { label: 'Contato', href: '/#contact' },
];

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <nav className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-500 ${isOpen ? 'bg-premium-bg py-5' : scrolled ? 'glass-nav py-5' : 'bg-transparent py-8'}`}>
      <div className="max-w-[1800px] mx-auto px-6 md:px-12 flex justify-between items-center relative z-[1001]">
        {/* Logo */}
        <Link
          to="/"
          className="text-3xl font-serif font-bold tracking-tight text-white hover:opacity-80 transition-opacity"
          onClick={() => setIsOpen(false)}
        >
          MA<span className="text-premium-gold">.</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-12">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className="text-xs font-bold uppercase tracking-[0.2em] text-premium-dim hover:text-white transition-colors duration-300 relative group"
            >
              {item.label}
              <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-premium-gold transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-premium-bg z-[999] transition-all duration-300 ease-in-out md:hidden flex flex-col justify-center items-center gap-10 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>
        {navItems.map((item) => (
          <Link
            key={item.label}
            to={item.href}
            onClick={() => setIsOpen(false)}
            className="text-4xl md:text-5xl font-serif font-medium text-white hover:text-premium-gold transition-colors"
          >
            {item.label}
          </Link>
        ))}

        <div className="mt-8">
          <a
            href="https://wa.link/pvhwp2"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-premium-gold text-black text-sm font-bold uppercase tracking-widest hover:bg-white transition-colors"
          >
            Análise Gratuita
          </a>
        </div>
      </div>
    </nav>
  );
};