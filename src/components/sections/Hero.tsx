"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  
  return (
    <section className="relative h-screen overflow-hidden">
      <motion.div 
        className="absolute inset-0"
        style={{ y }}
      >
        <Image
          src="/hero.jpg"
          alt="Modern home in winter"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
      </motion.div>
      
      <div className="relative container mx-auto px-4 h-full flex items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="max-w-2xl text-white"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Crafting Excellence in Construction
            </h1>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
          >
            <p className="text-xl mb-8">
              Building quality custom homes and renovations in the Lake Wallenpaupack Region for over 45 years.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.1 }}
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-black px-8 py-3 rounded-sm text-lg font-medium hover:bg-opacity-90 transition-colors"
            >
              Explore Our Work
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 