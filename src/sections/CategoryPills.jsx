import React from 'react';
import { motion } from 'framer-motion';
import { categories } from '../data/mockData';

export function CategoryPills() {
  return (
    <section className="py-8 md:py-12 bg-beige-100 border-y border-earth-900/5">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Scrollable container on mobile, wrapped on desktop */}
        <div className="flex overflow-x-auto pb-4 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0 md:flex-wrap md:justify-center gap-3 md:gap-4 no-scrollbar">
          <motion.div 
            className="flex md:flex-wrap gap-3 md:gap-4 flex-nowrap min-w-max md:min-w-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
              visible: { transition: { staggerChildren: 0.1 } },
              hidden: {}
            }}
          >
            {categories.map((category) => (
              <motion.button
                key={category}
                variants={{
                  visible: { opacity: 1, y: 0, scale: 1 },
                  hidden: { opacity: 0, y: 20, scale: 0.95 }
                }}
                whileHover={{ scale: 1.05, backgroundColor: '#E1B09C', color: '#261D1A' }}
                whileTap={{ scale: 0.95 }}
                className="px-5 md:px-6 py-2.5 md:py-3 rounded-full bg-beige-200 text-earth-900 font-medium text-xs md:text-sm transition-colors whitespace-nowrap"
              >
                {category}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
