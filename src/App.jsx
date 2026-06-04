import React from 'react';
import { motion, useScroll } from 'framer-motion';
import { OfferMarquee } from './components/ui/OfferMarquee';
import { Navbar } from './sections/Navbar';
import { Hero } from './sections/Hero';
import { CategoryPills } from './sections/CategoryPills';
import { FeaturedCollections } from './sections/FeaturedCollections';
import { NewArrivals } from './sections/NewArrivals';
import { Craftsmanship } from './sections/Craftsmanship';
import { FAQ } from './sections/FAQ';
import { Community } from './sections/Community';
import { Footer } from './sections/Footer';

function App() {
  const { scrollYProgress } = useScroll();

  return (
    <div className="bg-beige-100 min-h-screen font-sans">
      <OfferMarquee />
      
      {/* Global Scroll Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-terracotta-600 origin-left z-[100]"
        style={{ scaleX: scrollYProgress }}
      />
      
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <CategoryPills />
          <FeaturedCollections />
          <NewArrivals />
          <Craftsmanship />
          <FAQ />
          <Community />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
