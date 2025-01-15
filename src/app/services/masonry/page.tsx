"use client";

import { ServiceLayout } from "@/components/layouts/ServiceLayout";

const masonryImages = [
  {
    src: "/services/masonry/hero.jpg",
    alt: "Custom stone facade"
  },
  {
    src: "/services/masonry/1.jpg",
    alt: "Stone fireplace design"
  },
  {
    src: "/services/masonry/2.jpg",
    alt: "Outdoor stone patio"
  },
  {
    src: "/services/masonry/3.jpg",
    alt: "Stone retaining wall"
  },
  {
    src: "/services/masonry/4.jpg",
    alt: "Brick and stone combination"
  },
  {
    src: "/services/masonry/5.jpg",
    alt: "Stone walkway design"
  }
];

const features = [
  "Custom stone and brick design",
  "Natural and manufactured stone installation",
  "Fireplaces and chimneys",
  "Retaining walls and garden features",
  "Stone patios and walkways",
  "Brick and stone facades",
  "Stone veneer applications",
  "Historic masonry restoration",
  "Structural masonry work",
  "Custom outdoor living features"
];

export default function Masonry() {
  return (
    <ServiceLayout
      title="Masonry & Stonework"
      description="Add timeless beauty and lasting value to your property with our expert masonry and stonework services. From elegant stone facades to custom fireplaces, we combine traditional craftsmanship with modern techniques to create stunning architectural features that stand the test of time."
      features={features}
      gallery={masonryImages}
    />
  );
} 