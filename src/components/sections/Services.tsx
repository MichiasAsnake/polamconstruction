"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "CUSTOM HOME CONSTRUCTION",
    description: "Building your dream home with precision and excellence.",
    image: "/services/custom-home.jpg",
    alt: "Custom built modern home",
    href: "/services/custom-homes"
  },
  {
    title: "RENOVATIONS & REMODELING",
    description: "Transforming spaces with innovative design solutions.",
    image: "/services/renovation.jpg",
    alt: "Modern kitchen renovation",
    href: "/services/renovations"
  },
  {
    title: "KITCHENS & BATHS",
    description: "Crafting luxurious and functional living spaces.",
    image: "/services/kitchen-bath.jpg",
    alt: "Luxury bathroom design",
    href: "/services/kitchens-baths"
  },
  {
    title: "DECKS",
    description: "Creating outdoor living spaces that inspire.",
    image: "/services/deck.jpg",
    alt: "Custom deck construction",
    href: "/services/decks"
  },
  {
    title: "MASONRY & STONEWORK",
    description: "Timeless craftsmanship in every stone.",
    image: "/services/masonry.jpg",
    alt: "Stone wall construction",
    href: "/services/masonry"
  },
  {
    title: "INSTAGRAM PHOTO GALLERY",
    description: "Explore our latest projects and inspirations.",
    image: "/services/gallery.jpg",
    alt: "Project gallery",
    href: "https://instagram.com"
  }
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

export function Services() {
  return (
    <section className="py-24 bg-white" id="services">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-4"
        >
          Lake Wallenpaupack Construction Services
        </motion.h2>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16"
        >
          {services.map((service) => (
            <Link key={service.title} href={service.href}>
              <motion.div
                variants={itemVariants}
                className="group cursor-pointer bg-white"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="relative h-[300px] overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-700" />
                </div>
                <div className="p-6 border border-t-0 border-gray-100">
                  <h3 className="text-xl font-semibold mb-2 tracking-wide">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">
                    {service.description}
                  </p>
                  <motion.div 
                    className="mt-4 inline-block"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="text-sm font-medium text-black flex items-center gap-2">
                      Learn More
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
                </div>
              </motion.div>
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 