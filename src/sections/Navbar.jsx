import React, { useState } from 'react';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { Search, ShoppingBag, Heart, Menu, X } from 'lucide-react';
import { cn } from '../components/ui/Button';

export function Navbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (mobileMenuOpen) return; // don't hide navbar if menu is open
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    
    if (latest > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  });

  const navLinks = ['Shop', 'Collections', 'About', 'Journal'];

  return (
    <>
      <motion.header
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className={cn(
          "fixed top-0 inset-x-0 z-50 transition-all duration-300",
          isScrolled ? "py-2 sm:py-4" : "py-4 sm:py-6"
        )}
      >
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass rounded-full px-6 md:px-8 py-3 md:py-4 flex items-center justify-between">
            
            {/* Mobile Menu Toggle */}
            <button 
              className="md:hidden p-1 hover:text-terracotta-600 transition-colors"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu className="w-6 h-6" />
            </button>

            {/* Logo */}
            <a href="/" className="font-serif text-xl md:text-2xl font-medium tracking-tight">
              Clay <span className="text-terracotta-600">&</span> Co.
            </a>

            {/* Center Links (Desktop) */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a 
                  key={link} 
                  href={`#${link.toLowerCase()}`}
                  className="text-sm font-medium hover:text-terracotta-600 transition-colors relative group"
                >
                  {link}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-terracotta-600 transition-all group-hover:w-full"></span>
                </a>
              ))}
            </nav>

            {/* Icons */}
            <div className="flex items-center gap-4 md:gap-6">
              <button className="hover:text-terracotta-600 transition-colors hidden sm:block">
                <Search className="w-5 h-5" />
              </button>
              <button className="hover:text-terracotta-600 transition-colors hidden sm:block">
                <Heart className="w-5 h-5" />
              </button>
              <button className="hover:text-terracotta-600 transition-colors relative">
                <ShoppingBag className="w-5 h-5 md:w-5 md:h-5" />
                <span className="absolute -top-1.5 -right-1.5 md:-top-2 md:-right-2 bg-terracotta-600 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">2</span>
              </button>
            </div>

          </div>
        </div>
      </motion.header>

      {/* Mobile Slide-down Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 z-[60] bg-beige-100 flex flex-col md:hidden"
          >
            <div className="flex items-center justify-between p-6 border-b border-earth-900/10">
              <a href="/" className="font-serif text-xl font-medium tracking-tight">
                Clay <span className="text-terracotta-600">&</span> Co.
              </a>
              <button 
                className="p-2 hover:text-terracotta-600 transition-colors bg-beige-200 rounded-full"
                onClick={() => setMobileMenuOpen(false)}
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="flex-1 overflow-y-auto py-8 px-6 flex flex-col gap-6">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.1 }}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-3xl font-display font-medium text-earth-900 hover:text-terracotta-600 transition-colors"
                >
                  {link}
                </motion.a>
              ))}
              
              <div className="mt-8 pt-8 border-t border-earth-900/10 flex gap-6">
                 <button className="flex items-center gap-2 text-earth-900 hover:text-terracotta-600 font-medium">
                    <Search className="w-5 h-5" /> Search
                 </button>
                 <button className="flex items-center gap-2 text-earth-900 hover:text-terracotta-600 font-medium">
                    <Heart className="w-5 h-5" /> Wishlist
                 </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
