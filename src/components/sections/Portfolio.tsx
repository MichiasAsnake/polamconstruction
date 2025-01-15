"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const portfolioImages = [
  {
    src: "/portfolio/home1.jpg",
    alt: "Stone house with modern design",
    title: "Modern Lakefront Estate",
    location: "Lake Wallenpaupack"
  },
  {
    src: "/portfolio/home2.jpg",
    alt: "Modern interior with large windows",
    title: "Contemporary Living",
    location: "Pike County"
  },
  {
    src: "/portfolio/home3.jpg",
    alt: "Contemporary home exterior",
    title: "Mountain Retreat",
    location: "Pocono Mountains"
  }
];

export function Portfolio() {
  return (
    <section className="py-32 bg-[#E6E1DD]" id="portfolio">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gray-600 uppercase tracking-[0.2em] mb-4"
          >
            Featured Projects
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Our Work Speaks For Itself
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="w-24 h-1 bg-black mx-auto"
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {portfolioImages.map((image) => (
            <motion.div
              key={image.src}
              className="group relative overflow-hidden bg-white"
              whileHover="hover"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <motion.div 
                  className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-700"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                />
                <motion.div
                  className="absolute inset-0 p-8 text-white flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  initial={{ opacity: 0, y: 20 }}
                  whileHover={{ opacity: 1, y: 0 }}
                >
                  <h3 className="text-2xl font-semibold mb-2">{image.title}</h3>
                  <p className="text-white/80">{image.location}</p>
                  <motion.div 
                    className="mt-4 inline-block"
                    whileHover={{ x: 5 }}
                  >
                    <span className="text-sm font-medium flex items-center gap-2">
                      View Project
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="h-4 w-4" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M17 8l4 4m0 0l-4 4m4-4H3" 
                        />
                      </svg>
                    </span>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 