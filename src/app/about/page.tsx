"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px]">
        <Image
          src="/services/custom-homes/hero.jpg"
          alt="Polam Construction building"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Our Story</h1>
            <p className="text-xl md:text-2xl">Quality Building Since 1974</p>
          </motion.div>
        </div>
      </section>

      {/* Company Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6">Our Legacy of Excellence</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  At Polam Construction, we pride ourselves on our long-standing tradition of 
                  delivering quality building and remodeling services in Lake Wallenpaupack. Since 1974, 
                  under the guidance of owner George Ann, and for the past 50 years, we have been 
                  dedicated to providing our clients with exceptional service and craftsmanship.
                </p>
                <p>
                  Over the years, we have earned a reputation as one of the leaders in custom 
                  residential construction in our area. Our team of skilled professionals has 
                  the expertise and experience to handle projects of all sizes, from building 
                  your dream home from the ground up to renovating and remodeling your existing home.
                </p>
                <p>
                  We are a full-service building contractor, offering a complete range of services 
                  to meet all of your construction needs. From the design and planning stages to 
                  the final walkthrough and move-in day, we are committed to providing our clients 
                  with a seamless and stress-free building experience.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative h-[500px] rounded-lg overflow-hidden shadow-xl"
            >
              <Image
                src="/services/renovations/hero.jpg"
                alt="Custom home construction"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Our Leadership</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Meet the team that's leading Polam Construction into the future while maintaining
              our decades-long commitment to quality and excellence.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-lg overflow-hidden shadow-lg"
            >
              <div className="relative h-[300px]">
                <Image
                  src="/services/decks/hero.jpg"
                  alt="George Ann"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">George Ann</h3>
                <p className="text-gray-600 mb-4">Founder & Consultant</p>
                <p className="text-gray-700">
                  With over 50 years of experience, George's expertise and vision have shaped
                  Polam Construction into the premier building contractor in the Lake Wallenpaupack area.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white rounded-lg overflow-hidden shadow-lg"
            >
              <div className="relative h-[300px]">
                <Image
                  src="/services/kitchens-baths/hero.jpg"
                  alt="Josh Ann"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Josh Ann</h3>
                <p className="text-gray-600 mb-4">Principal & Lead Contractor</p>
                <p className="text-gray-700">
                  Taking over as principal in 2023, Josh brings fresh perspectives and innovative
                  ideas while maintaining the high standards and values that have made Polam
                  Construction the trusted name in custom building.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
} 