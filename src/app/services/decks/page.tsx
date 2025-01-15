"use client";

import { ServiceLayout } from "@/components/layouts/ServiceLayout";

const deckImages = [
  {
    src: "/services/decks/hero.jpg",
    alt: "Custom lakefront deck"
  },
  {
    src: "/services/decks/1.jpg",
    alt: "Multi-level deck design"
  },
  {
    src: "/services/decks/2.jpg",
    alt: "Covered deck space"
  },
  {
    src: "/services/decks/3.jpg",
    alt: "Custom railing design"
  },
  {
    src: "/services/decks/4.jpg",
    alt: "Deck with outdoor kitchen"
  },
  {
    src: "/services/decks/5.jpg",
    alt: "Deck lighting features"
  }
];

const features = [
  "Custom deck design and planning",
  "Multi-level deck construction",
  "Premium decking materials selection",
  "Custom railing systems",
  "Built-in seating and storage",
  "Outdoor kitchen integration",
  "Pergolas and covered areas",
  "Lighting design and installation",
  "Stairs and access points",
  "Weather-resistant construction methods"
];

export default function Decks() {
  return (
    <ServiceLayout
      title="Custom Deck Construction"
      description="Extend your living space outdoors with our custom deck construction services. We design and build beautiful, durable decks that complement your home's architecture and provide the perfect space for relaxation and entertainment. Using premium materials and expert craftsmanship, we create outdoor spaces that last for years to come."
      features={features}
      gallery={deckImages}
    />
  );
} 