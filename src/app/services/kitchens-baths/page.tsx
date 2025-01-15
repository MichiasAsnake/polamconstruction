"use client";

import { ServiceLayout } from "@/components/layouts/ServiceLayout";

const kitchenBathImages = [
  {
    src: "/services/kitchens-baths/hero.jpg",
    alt: "Luxury kitchen renovation"
  },
  {
    src: "/services/kitchens-baths/1.jpg",
    alt: "Modern bathroom design"
  },
  {
    src: "/services/kitchens-baths/2.jpg",
    alt: "Custom kitchen cabinetry"
  },
  {
    src: "/services/kitchens-baths/3.jpg",
    alt: "Spa-like master bathroom"
  },
  {
    src: "/services/kitchens-baths/4.jpg",
    alt: "Kitchen island and fixtures"
  },
  {
    src: "/services/kitchens-baths/5.jpg",
    alt: "Bathroom vanity and tile work"
  }
];

const features = [
  "Custom kitchen design and layout planning",
  "High-end cabinetry and countertops",
  "Premium appliance selection and installation",
  "Custom islands and breakfast nooks",
  "Luxury bathroom renovations",
  "Custom shower and tub installations",
  "High-end fixtures and fittings",
  "Custom tile work and stone installations",
  "Proper ventilation and lighting design",
  "Water-efficient fixtures and solutions"
];

export default function KitchensBaths() {
  return (
    <ServiceLayout
      title="Kitchens & Bathrooms"
      description="Create the perfect blend of luxury and functionality with our kitchen and bathroom renovation services. From gourmet kitchens with professional-grade appliances to spa-inspired bathrooms, we specialize in creating stunning spaces that enhance your daily life and add value to your home."
      features={features}
      gallery={kitchenBathImages}
    />
  );
} 