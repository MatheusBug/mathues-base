import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, className = '', ...props }) => {
  const baseStyles = "px-10 py-5 uppercase tracking-widest text-sm font-semibold transition-all duration-300 ease-out flex items-center justify-center gap-3 relative overflow-hidden group";
  
  const variants = {
    primary: "bg-premium-gold text-premium-bg hover:bg-white hover:text-black",
    outline: "border border-white/20 text-white hover:border-premium-gold hover:text-premium-gold",
    ghost: "text-neutral-400 hover:text-premium-gold"
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </button>
  );
};