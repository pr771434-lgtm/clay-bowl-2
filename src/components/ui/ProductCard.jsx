import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Plus } from 'lucide-react';
import { cn } from './Button';

export function ProductCard({ product, className }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div 
      className={cn("group cursor-pointer flex flex-col gap-3 md:gap-4", className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative aspect-square overflow-hidden rounded-xl md:rounded-2xl bg-beige-200 w-full">
        <motion.img 
          src={product.image} 
          alt={product.name}
          className="object-cover w-full h-full"
          animate={{ scale: isHovered ? 1.05 : 1 }}
          transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
        />
        
        {/* Quick actions overlay */}
        <div className="absolute top-3 right-3 md:top-4 md:right-4 flex flex-col gap-2">
          <motion.button 
            className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center text-earth-900 shadow-soft hover:bg-white transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Heart className="w-4 h-4 md:w-5 md:h-5" />
          </motion.button>
        </div>

        <AnimatePresence>
          {isHovered && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="absolute bottom-3 left-3 right-3 md:bottom-4 md:left-4 md:right-4 hidden lg:block"
            >
              <button className="w-full bg-white/90 backdrop-blur-md text-earth-900 py-2 md:py-3 rounded-lg md:rounded-xl font-medium shadow-float flex items-center justify-center gap-2 hover:bg-white transition-colors text-sm md:text-base">
                <Plus className="w-4 h-4" /> Quick Add
              </button>
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Mobile Quick Add Button (always visible on small screens) */}
        <button className="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-earth-900 shadow-soft lg:hidden">
            <Plus className="w-4 h-4" />
        </button>
      </div>

      <div className="flex flex-col gap-1 px-1">
        <p className="text-xs md:text-sm text-earth-900/60 font-medium">{product.category}</p>
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 sm:gap-0">
          <h3 className="font-display text-base md:text-lg font-medium leading-tight">{product.name}</h3>
          <span className="font-medium text-sm md:text-base">${product.price.toFixed(2)}</span>
        </div>
      </div>
    </motion.div>
  );
}
