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
  metadataBase: new URL("https://akrealestatehaldwani.com"),
  title: {
    default: "AK Real Estate | Haldwani Villas & Flats",
    template: "%s | AK Real Estate",
  },
  description:
    "AK Real Estate has delivered villas and flats across Haldwani since 2003, helping more than 400 families settle into thoughtfully planned homes.",
  keywords: [
    "AK Real Estate",
    "Haldwani Homes",
    "Haldwani Villas",
    "Haldwani Flats",
    "Uttarakhand Real Estate",
    "Durga City Centre",
  ],
  authors: [{ name: "AK Real Estate" }],
  creator: "AK Real Estate",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://akrealestatehaldwani.com",
    title: "AK Real Estate | Haldwani Villas & Flats",
    description:
      "Homes crafted for Haldwani families since 2003. Visit AK Tower at Durga City Centre to explore ongoing villas and flats.",
    siteName: "AK Real Estate",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "AK Real Estate Homes",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AK Real Estate | Haldwani Villas & Flats",
    description:
      "Homes crafted for Haldwani families since 2003. Visit AK Tower at Durga City Centre to explore ongoing villas and flats.",
    images: ["/images/og-image.jpg"],
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
