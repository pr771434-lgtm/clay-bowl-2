import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { cn } from './Button';

export function Accordion({ items, className }) {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className={cn("w-full flex flex-col gap-4", className)}>
      {items.map((item, index) => {
        const isOpen = index === openIndex;
        return (
          <div key={index} className="border-b border-earth-900/10 last:border-0 pb-4">
            <button
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="w-full flex justify-between items-center py-4 text-left group"
            >
              <h4 className="font-display text-xl font-medium group-hover:text-terracotta-600 transition-colors">
                {item.question}
              </h4>
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <ChevronDown className="w-5 h-5 text-earth-900/60" />
              </motion.div>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <p className="pb-4 text-earth-900/70 leading-relaxed text-balance">
                    {item.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
