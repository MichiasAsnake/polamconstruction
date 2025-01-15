"use client";

import { ServiceLayout } from "@/components/layouts/ServiceLayout";

const customHomeImages = [
  {
    src: "/services/custom-homes/hero.jpg",
    alt: "Luxury custom home exterior"
  },
  {
    src: "/services/custom-homes/1.jpg",
    alt: "Modern kitchen design"
  },
  {
    src: "/services/custom-homes/2.jpg",
    alt: "Spacious living room"
  },
  {
    src: "/services/custom-homes/3.jpg",
    alt: "Custom master bathroom"
  },
  {
    src: "/services/custom-homes/4.jpg",
    alt: "Elegant home entrance"
  },
  {
    src: "/services/custom-homes/5.jpg",
    alt: "Custom outdoor living space"
  }
];

const description = `
At Polam Construction, we specialize in bringing your dream home to life through our custom home construction services. With decades of experience in the Lake Wallenpaupack area, we understand that your home is more than just a building – it's a reflection of your lifestyle and aspirations.

Our custom home construction process begins with understanding your vision. We work closely with you to design and build a home that perfectly balances aesthetics, functionality, and efficiency. From selecting premium materials to implementing cutting-edge construction techniques, every detail is carefully considered to ensure your complete satisfaction.

We pride ourselves on our attention to detail, superior craftsmanship, and commitment to excellence. Our team of skilled professionals ensures that every aspect of your custom home meets our high standards of quality. Whether you're looking for a modern lakefront property or a cozy mountain retreat, we have the expertise to make it happen.
`;

const features = [
  "Personalized architectural design",
  "Premium material selection",
  "Energy-efficient construction methods",
  "Smart home integration options",
  "Custom interior finishes",
  "Expert project management"
];

export default function CustomHomes() {
  return (
    <ServiceLayout
      title="Custom Home Construction"
      description={description}
      features={features}
      gallery={customHomeImages}
    />
  );
} 