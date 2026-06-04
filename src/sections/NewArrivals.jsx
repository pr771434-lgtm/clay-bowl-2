import React, { useRef, useEffect, useState } from 'react';
import { motion, useAnimation, useMotionValue } from 'framer-motion';
import { products } from '../data/mockData';
import { ProductCard } from '../components/ui/ProductCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export function NewArrivals() {
  const [width, setWidth] = useState(0);
  const carouselRef = useRef();
  const controls = useAnimation();
  const x = useMotionValue(0);

  // Duplicate products to create an infinite-like feel
  const duplicatedProducts = [...products, ...products, ...products];

  useEffect(() => {
    if (carouselRef.current) {
      setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
    }
  }, []);

  // Auto-scroll logic
  useEffect(() => {
    let animation;
    const startAutoScroll = async () => {
      animation = controls.start({
        x: -width / 2, // Scroll halfway through the duplicated list
        transition: {
          duration: 30, // Slow continuous scroll
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop"
        }
      });
    };

    if (width > 0) {
      startAutoScroll();
    }

    return () => {
      if (animation) controls.stop();
    };
  }, [width, controls]);

  const handleDragStart = () => {
    controls.stop(); // Stop auto-scroll when user interacts
  };

  const handleManualScroll = (direction) => {
    controls.stop();
    const currentX = x.get();
    const scrollAmount = direction === 'left' ? 400 : -400;
    const nextX = Math.max(-width, Math.min(0, currentX + scrollAmount));
    
    controls.start({
      x: nextX,
      transition: { duration: 0.5, ease: "easeOut" }
    });
  };

  return (
    <section id="shop" className="py-16 md:py-24 bg-beige-50 overflow-hidden">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row items-center md:items-end justify-between mb-10 md:mb-16 text-center md:text-left gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-earth-900/60 font-medium mb-1 md:mb-2 tracking-wide uppercase text-xs md:text-sm">Curated Selection</p>
            <h2 className="text-4xl sm:text-5xl font-display font-medium">New Arrivals</h2>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex gap-4"
          >
            <button 
              onClick={() => handleManualScroll('left')}
              className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-earth-900/20 flex items-center justify-center hover:bg-earth-900 hover:text-beige-50 transition-colors"
            >
              <ChevronLeft className="w-4 h-4 md:w-5 md:h-5" />
            </button>
            <button 
              onClick={() => handleManualScroll('right')}
              className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-earth-900/20 flex items-center justify-center hover:bg-earth-900 hover:text-beige-50 transition-colors"
            >
              <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
            </button>
          </motion.div>
        </div>

        {/* 2-Column Carousel */}
        <motion.div 
          ref={carouselRef}
          className="cursor-grab active:cursor-grabbing"
          whileTap={{ cursor: "grabbing" }}
        >
          <motion.div 
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            onDragStart={handleDragStart}
            animate={controls}
            style={{ x }}
            className="flex gap-6 md:gap-8 w-max"
          >
            {duplicatedProducts.map((product, index) => (
              <motion.div 
                key={`${product.id}-${index}`}
                className="w-[85vw] sm:w-[45vw] lg:w-[40vw] max-w-[500px]" // Forces 2 columns essentially on desktop/tablet
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
