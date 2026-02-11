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

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? 'glass-nav py-5' : 'bg-transparent py-8'}`}>
      <div className="max-w-[1800px] mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-3xl font-serif font-bold tracking-tight text-white z-50 hover:opacity-80 transition-opacity">
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
          className="md:hidden text-white z-50"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-premium-bg z-40 transition-transform duration-700 ease-in-out md:hidden flex flex-col justify-center items-center gap-10 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        {navItems.map((item) => (
          <Link
            key={item.label}
            to={item.href}
            onClick={() => setIsOpen(false)}
            className="text-5xl font-serif font-medium text-white hover:text-premium-gold transition-colors"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  );
};