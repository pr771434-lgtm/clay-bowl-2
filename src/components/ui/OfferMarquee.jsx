import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export function OfferMarquee() {
  const offers = [
    "20% OFF ON RUSTIC COLLECTION",
    "FREE WORLDWIDE SHIPPING ON ORDERS OVER $150",
    "NEW SUMMER ARRIVALS AVAILABLE NOW",
    "EARLY ACCESS TO ARTISAN SIGNATURE SERIES"
  ];

  const marqueeContent = [...offers, ...offers, ...offers];

  return (
    <div className="bg-terracotta-900 text-beige-50 py-2.5 overflow-hidden flex whitespace-nowrap relative z-[60]">
      <motion.div
        className="flex gap-8 items-center"
        animate={{
          x: ["0%", "-50%"]
        }}
        transition={{
          duration: 30,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {marqueeContent.map((offer, index) => (
          <div key={index} className="flex items-center gap-8">
            <span className="text-xs md:text-sm font-medium tracking-widest">{offer}</span>
            <Sparkles className="w-4 h-4 text-terracotta-400" />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
