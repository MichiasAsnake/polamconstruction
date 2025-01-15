"use client";

import { ServiceLayout } from "@/components/layouts/ServiceLayout";

const renovationImages = [
  {
    src: "/services/renovations/hero.jpg",
    alt: "Complete home renovation"
  },
  {
    src: "/services/renovations/1.jpg",
    alt: "Kitchen remodeling project"
  },
  {
    src: "/services/renovations/2.jpg",
    alt: "Bathroom renovation"
  },
  {
    src: "/services/renovations/3.jpg",
    alt: "Living room transformation"
  },
  {
    src: "/services/renovations/4.jpg",
    alt: "Before and after renovation"
  },
  {
    src: "/services/renovations/5.jpg",
    alt: "Interior remodeling details"
  }
];

const features = [
  "Complete home renovations and remodeling",
  "Kitchen and bathroom updates",
  "Basement finishing and remodeling",
  "Room additions and expansions",
  "Interior reconfiguration for better flow",
  "Structural modifications and improvements",
  "Modern fixture and appliance installation",
  "Custom cabinetry and storage solutions",
  "Energy efficiency upgrades",
  "Project planning and design consultation"
];

export default function Renovations() {
  return (
    <ServiceLayout
      title="Renovations & Remodeling"
      description="Transform your existing space into the home of your dreams with our comprehensive renovation and remodeling services. Whether you're looking to update a single room or completely reimagine your entire home, our experienced team brings creativity, craftsmanship, and attention to detail to every project."
      features={features}
      gallery={renovationImages}
    />
  );
} 