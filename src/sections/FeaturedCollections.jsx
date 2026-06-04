import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { collections } from '../data/mockData';
import { cn } from '../components/ui/Button';

export function FeaturedCollections() {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const y2 = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section id="collections" ref={containerRef} className="py-16 md:py-24 lg:py-32 bg-beige-100 overflow-hidden">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          
          {/* Left Column (1 item) */}
          <motion.div
            style={{ y: y1 }}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.33, 1, 0.68, 1] }}
            className="group relative rounded-2xl md:rounded-3xl overflow-hidden aspect-[4/3] md:aspect-square lg:aspect-auto h-full shadow-soft"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-earth-900/80 via-earth-900/20 to-transparent group-hover:from-earth-900/90 transition-colors duration-500 z-10"></div>
            <motion.img 
              src={collections[0].image} 
              alt={collections[0].title}
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            />
            <div className="absolute inset-0 z-20 p-6 md:p-10 lg:p-12 flex flex-col justify-end overflow-hidden">
              <motion.h3 
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-3xl md:text-4xl lg:text-5xl text-beige-50 font-display font-medium mb-1 md:mb-2"
              >
                {collections[0].title}
              </motion.h3>
              <motion.p 
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-beige-200 font-medium text-sm md:text-base"
              >
                {collections[0].subtitle}
              </motion.p>
            </div>
          </motion.div>

          {/* Right Column (2 items) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6 md:gap-8">
            {collections.slice(1).map((collection, index) => (
              <motion.div
                key={collection.title}
                style={{ y: index === 0 ? y2 : y1 }}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, delay: index * 0.2, ease: [0.33, 1, 0.68, 1] }}
                className={cn(
                  "group relative rounded-2xl md:rounded-3xl overflow-hidden aspect-[4/3] sm:aspect-square lg:aspect-[4/3] shadow-soft",
                  index === 0 ? "lg:aspect-[4/3]" : "lg:aspect-[4/4]"
                )}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-earth-900/80 via-earth-900/20 to-transparent group-hover:from-earth-900/90 transition-colors duration-500 z-10"></div>
                <motion.img 
                  src={collection.image} 
                  alt={collection.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                />
                <div className="absolute inset-0 z-20 p-6 md:p-8 lg:p-10 flex flex-col justify-end overflow-hidden">
                  <motion.h3 
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + (index * 0.1), duration: 0.6 }}
                    className="text-2xl md:text-3xl lg:text-4xl text-beige-50 font-display font-medium mb-1 md:mb-2"
                  >
                    {collection.title}
                  </motion.h3>
                  <motion.p 
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + (index * 0.1), duration: 0.6 }}
                    className="text-beige-200 font-medium text-sm md:text-base"
                  >
                    {collection.subtitle}
                  </motion.p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
