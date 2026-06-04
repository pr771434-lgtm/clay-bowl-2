import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Play } from 'lucide-react';

export function Craftsmanship() {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 1.1]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  // Text Reveal Variants
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.33, 1, 0.68, 1] } }
  };

  return (
    <section id="about" ref={containerRef} className="py-16 md:py-24 lg:py-32 bg-beige-100 overflow-hidden relative">
      {/* Animated background shape */}
      <motion.div 
        style={{ y: y1, opacity: 0.1 }}
        className="absolute top-0 left-[-10%] w-[500px] h-[500px] rounded-full bg-terracotta-600 blur-3xl pointer-events-none"
      />

      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="max-w-4xl mx-auto text-center mb-10 md:mb-16 overflow-hidden">
          <motion.h2 
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-4xl sm:text-5xl md:text-6xl font-display font-medium mb-4 md:mb-6 text-balance"
          >
            Quality Craftsmanship & <br className="hidden md:block"/> Timeless Design
          </motion.h2>
          <motion.p 
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2 }}
            className="text-base md:text-lg text-earth-900/70 max-w-2xl mx-auto px-4"
          >
            We believe that true elegance lies in the intentional imperfections of hand-crafted pieces. Our clay is locally sourced, and each bowl goes through a 14-day process before it graces your home.
          </motion.p>
        </div>

        <motion.div 
          style={{ scale, opacity }}
          className="relative aspect-square md:aspect-video rounded-[2rem] md:rounded-[2.5rem] overflow-hidden group cursor-pointer w-full shadow-2xl"
        >
          {/* Parallax background (simulated with scale) */}
          <div className="absolute inset-0 bg-earth-900/30 group-hover:bg-earth-900/50 transition-colors duration-700 z-10"></div>
          
          <motion.img 
            src="/images/process_hands_1780594225887.png" 
            alt="Crafting clay bowl" 
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.15 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
          
          <div className="absolute inset-0 z-20 flex items-center justify-center">
            {/* Magnetic Play Button */}
            <motion.div 
              className="w-16 h-16 md:w-28 md:h-28 rounded-full bg-white/20 backdrop-blur-lg flex items-center justify-center text-white border border-white/40 shadow-float"
              whileHover={{ scale: 1.2, backgroundColor: "rgba(255,255,255,0.3)" }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            >
              <Play className="w-6 h-6 md:w-10 md:h-10 fill-current ml-1 md:ml-2" />
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
