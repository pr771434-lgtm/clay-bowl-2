import React from 'react';
import { motion } from 'framer-motion';
import { faqs } from '../data/mockData';
import { Accordion } from '../components/ui/Accordion';

export function FAQ() {
  return (
    <section className="py-16 md:py-24 bg-beige-50">
      <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-medium mb-3 md:mb-4">Carefully Considered</h2>
          <p className="text-earth-900/60 text-sm md:text-base">Everything you need to know about our products.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Accordion items={faqs} />
        </motion.div>
      </div>
    </section>
  );
}
