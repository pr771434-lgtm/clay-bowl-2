import React from 'react';
import { motion } from 'framer-motion';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const Button = React.forwardRef(({ className, variant = 'primary', size = 'default', children, ...props }, ref) => {
  const baseStyles = 'inline-flex items-center justify-center rounded-full font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-earth-900 disabled:pointer-events-none disabled:opacity-50 text-center w-full sm:w-auto';
  
  const variants = {
    primary: 'bg-earth-900 text-beige-50 hover:bg-earth-800 shadow-soft',
    secondary: 'bg-transparent border border-earth-900 text-earth-900 hover:bg-earth-900 hover:text-beige-50',
    outline: 'border border-beige-300 bg-transparent hover:bg-beige-200 text-earth-900',
    ghost: 'hover:bg-beige-200 text-earth-900 hover:text-earth-900',
  };

  const sizes = {
    default: 'h-11 px-4 md:px-6 py-2 text-sm',
    sm: 'h-9 px-3 md:px-4 text-xs md:text-sm',
    lg: 'h-12 md:h-14 px-6 md:px-8 text-sm md:text-base',
    icon: 'h-10 w-10 sm:w-10 flex-shrink-0', // override full width for icon
  };

  return (
    <motion.button
      ref={ref}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </motion.button>
  );
});

Button.displayName = 'Button';

export { Button };
