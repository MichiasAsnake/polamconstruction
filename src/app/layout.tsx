import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Polam Construction | Lake Wallenpaupack Custom Home Builder",
  description: "Lake Wallenpaupack's premier custom home builder and remodeling contractor since 1974. Specializing in custom homes, renovations, kitchens & baths, decks, and masonry.",
  keywords: "custom home builder, Lake Wallenpaupack, home renovation, kitchen remodeling, bathroom remodeling, deck construction, masonry, stonework, Pennsylvania contractor",
  openGraph: {
    title: "Polam Construction | Lake Wallenpaupack Custom Home Builder",
    description: "Lake Wallenpaupack's premier custom home builder and remodeling contractor since 1974.",
    url: "https://polamconstruction.com",
    siteName: "Polam Construction",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code", // You'll need to add this
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
