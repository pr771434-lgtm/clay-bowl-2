import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/Button';

export function Community() {
  return (
    <section className="py-16 md:py-24 bg-beige-100">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-2xl md:rounded-[2.5rem] overflow-hidden bg-terracotta-900 py-16 md:py-24 px-6 md:px-16 text-center"
        >
          {/* Background pattern/gradient */}
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-terracotta-400 via-terracotta-900 to-terracotta-900"></div>
          
          <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium text-beige-50 mb-4 md:mb-6">Join the community!</h2>
            <p className="text-terracotta-100/80 mb-8 md:mb-10 text-balance text-base md:text-lg">
              Subscribe to our list for exclusive releases, behind-the-scenes updates, and artisan pottery care tips.
            </p>
            
            <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-10 md:mb-12 w-full">
              {['Instagram', 'Twitter', 'YouTube', 'Pinterest'].map((social) => (
                <button 
                  key={social}
                  className="w-[calc(50%-0.5rem)] sm:w-auto px-4 md:px-6 py-2 rounded-full border border-terracotta-400/30 text-terracotta-100 hover:bg-terracotta-800 transition-colors text-xs md:text-sm font-medium"
                >
                  {social}
                </button>
              ))}
            </div>

            <form className="w-full max-w-md flex flex-col sm:flex-row relative gap-4 sm:gap-0" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Your email address..." 
                className="w-full bg-terracotta-800/50 border border-terracotta-600/50 rounded-full h-12 md:h-14 px-6 sm:pr-32 text-beige-50 placeholder:text-terracotta-300/50 focus:outline-none focus:ring-2 focus:ring-terracotta-400 text-sm md:text-base"
              />
              <Button className="w-full sm:w-auto sm:absolute sm:right-1.5 sm:top-1.5 sm:bottom-1.5 bg-beige-100 text-terracotta-900 hover:bg-white" size="default">
                Subscribe
              </Button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
