"use client";

import { Navigation } from "@/components/sections/Navigation";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Portfolio } from "@/components/sections/Portfolio";
import { Footer } from "@/components/sections/Footer";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <Services />
      <Portfolio />
      
      {/* Contact Section */}
      <section className="py-24 bg-gray-50" id="contact">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-4xl font-bold">Get in Touch</h2>
              <p className="text-xl text-gray-600">
                Ready to start your project? Contact us today and let&apos;s discuss how we can bring your vision to life.
              </p>
              
              <div className="flex flex-col items-center space-y-4 py-4">
                <p className="text-gray-600">Phone: (570) 470-4139</p>
                <p className="text-gray-600">105 Beartrap Mountain Terrace, Greentown, PA 18426</p>
              </div>

              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 bg-black text-white font-medium rounded-md hover:bg-gray-800 transition-colors"
                >
                  Contact Us
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
