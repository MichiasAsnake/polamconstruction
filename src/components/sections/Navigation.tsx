"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { DropdownMenu } from "@/components/ui/DropdownMenu";

const serviceLinks = [
  { href: "/services/custom-homes", label: "Custom Home Construction" },
  { href: "/services/renovations", label: "Renovations & Remodeling" },
  { href: "/services/kitchens-baths", label: "Kitchens & Bathrooms" },
  { href: "/services/decks", label: "Decks" },
  { href: "/services/masonry", label: "Masonry & Stonework" },
];

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  const isHomePage = usePathname() === "/";
  const finalHref = isHomePage && href.startsWith("/#") ? href : href.replace(/^\/#/, "/");

  return (
    <motion.a
      href={finalHref}
      className="text-gray-800 hover:text-black transition-all relative group py-2"
      whileHover={{ x: 5 }}
      whileTap={{ scale: 0.95 }}
    >
      <span className="relative z-10">{children}</span>
      <motion.span
        className="absolute left-0 bottom-0 w-0 h-[1px] bg-black group-hover:w-full transition-all duration-300 ease-in-out"
        initial={{ width: "0%" }}
        whileHover={{ width: "100%" }}
      />
    </motion.a>
  );
};

export function Navigation() {
  const { scrollY } = useScroll();
  const height = useTransform(scrollY, [0, 100], [120, 100]);
  const logoScale = useTransform(scrollY, [0, 100], [1, 0.9]);
  const pathname = usePathname();
  
  return (
    <motion.nav 
      className="fixed w-full z-50 bg-white shadow-sm"
      style={{ height }}
    >
      <div className="container mx-auto px-4 h-full">
        <div className="flex items-center justify-between h-full">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            style={{ scale: logoScale }}
            className="flex items-center"
          >
            <Link href="/" className="relative w-[300px] h-[80px]">
              <Image
                src="/logo 1 (2).png"
                width={500}
                height={200}
                alt="Polam Construction"
                className="w-auto h-20"
              />
            </Link>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden md:flex items-center space-x-12"
          >
            <NavLink href="/">Home</NavLink>
            <DropdownMenu items={serviceLinks}>
              <span className="text-gray-800 hover:text-black transition-all relative group py-2 cursor-pointer">
                Services
                <motion.span
                  className="absolute left-0 bottom-0 w-0 h-[1px] bg-black group-hover:w-full transition-all duration-300 ease-in-out"
                  initial={{ width: "0%" }}
                  whileHover={{ width: "100%" }}
                />
              </span>
            </DropdownMenu>
            <NavLink href="/about">About</NavLink>
            <NavLink href="/contact">Contact</NavLink>
          </motion.div>

          <motion.button
            className="md:hidden text-gray-800 p-2 hover:bg-gray-50 rounded-full transition-colors"
            whileTap={{ scale: 0.95 }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
} 