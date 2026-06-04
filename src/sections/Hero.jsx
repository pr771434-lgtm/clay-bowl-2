import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/Button';
import { HeroSequence } from '../components/ui/HeroSequence';
import { Play } from 'lucide-react';

export function Hero() {

  return (
    <section className="relative min-h-screen pt-24 md:pt-32 pb-16 md:pb-20 overflow-hidden flex items-center">
      {/* Scroll sequence background */}
      <HeroSequence />

      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col lg:flex-row gap-12 items-center">
        
        {/* Main Content */}
        <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left gap-6 md:gap-8 w-full mt-10 md:mt-0">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-serif leading-[1] md:leading-[0.9] tracking-tighter">
              Crafted <br className="hidden sm:block"/>
              <span className="italic text-terracotta-700">By Earth</span>
            </h1>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.33, 1, 0.68, 1] }}
            className="text-base md:text-lg lg:text-xl text-earth-900/80 max-w-lg text-balance"
          >
            Handmade pottery crafted by skilled artisans using traditional techniques and sustainable materials.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.33, 1, 0.68, 1] }}
            className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
          >
            <Button size="lg" className="w-full sm:w-auto">Explore Collection</Button>
            <Button variant="ghost" size="lg" className="w-full sm:w-auto gap-2">
              <span className="flex items-center justify-center w-10 h-10 rounded-full bg-beige-200">
                <Play className="w-4 h-4 fill-current" />
              </span>
              Watch Process
            </Button>
          </motion.div>
        </div>

        {/* Floating Stats */}
        <div className="w-full lg:w-auto flex justify-center lg:justify-end">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, type: "spring" }}
            className="glass rounded-2xl md:rounded-3xl p-6 md:p-8 w-full max-w-sm lg:max-w-xs lg:rotate-2 hover:rotate-0 transition-transform duration-500"
          >
            <div className="flex flex-row lg:flex-col justify-around lg:justify-start gap-4 md:gap-6 text-center lg:text-left">
              <div>
                <p className="text-3xl md:text-4xl font-display font-medium text-terracotta-700">1000+</p>
                <p className="text-xs md:text-sm font-medium text-earth-900/60 mt-1">Handcrafted Pieces</p>
              </div>
              <div className="w-[1px] h-auto lg:w-full lg:h-[1px] bg-earth-900/10"></div>
              <div>
                <p className="text-3xl md:text-4xl font-display font-medium text-terracotta-700">50+</p>
                <p className="text-xs md:text-sm font-medium text-earth-900/60 mt-1">Unique Designs</p>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
