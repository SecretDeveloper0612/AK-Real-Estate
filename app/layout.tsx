import type React from "react";
import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://luxeliving.vercel.app"), // Replace with your actual domain
  title: {
    default: "LuxeLiving | Premium Real Estate & Modern Living Spaces",
    template: "%s | LuxeLiving",
  },
  description:
    "Discover exceptional properties and luxury homes. For more than 30 years, we've been bringing premium residential projects to life around the world.",
  keywords: [
    "Real Estate",
    "Luxury Homes",
    "Premium Properties",
    "Villas",
    "Apartments",
    "Penthouses",
    "Real Estate Agency",
  ],
  authors: [{ name: "LuxeLiving" }],
  creator: "LuxeLiving",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://luxeliving.vercel.app",
    title: "LuxeLiving | Premium Real Estate",
    description:
      "Discover exceptional properties and luxury homes. For more than 30 years, we've been bringing premium residential projects to life around the world.",
    siteName: "LuxeLiving",
    images: [
      {
        url: "/images/og-image.jpg", // You should add an OG image to public/images
        width: 1200,
        height: 630,
        alt: "LuxeLiving Real Estate",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LuxeLiving | Premium Real Estate",
    description:
      "Discover exceptional properties and luxury homes. For more than 30 years, we've been bringing premium residential projects to life around the world.",
    images: ["/images/og-image.jpg"],
    creator: "@luxeliving",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
