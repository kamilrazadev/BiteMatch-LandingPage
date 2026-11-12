import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { SITE } from "@/lib/site";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap", variable: "--font-inter" });

export const viewport: Viewport = { themeColor: "#f3f8ff", colorScheme: "light", width: "device-width", initialScale: 1, viewportFit: "cover" };

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: { default: "BiteMatch – Smarter Portions, Less Food Waste | AI Portion Assistant App", template: "%s | BiteMatch" },
  description: "BiteMatch is an AI-powered culinary assistant. Snap a photo of your food and get perfect portion, sauce and flavour-pairing recommendations. Eat smarter, waste less.",
  applicationName: "BiteMatch",
  alternates: { canonical: "/" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  icons: { icon: [{ url: "/favicon-32.png", sizes: "32x32" }, { url: "/icon-192.png", sizes: "192x192" }], apple: "/apple-touch-icon.png" },
  openGraph: {
    type: "website", siteName: "BiteMatch", url: "/", locale: "en_US",
    title: "BiteMatch – Smarter Portions, Less Food Waste",
    description: "AI-powered culinary assistant that analyzes your food and gives you the perfect portion recommendations.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "BiteMatch app showing AI portion recommendations" }],
  },
  twitter: { card: "summary_large_image", title: "BiteMatch – Smarter Portions, Less Food Waste", description: "AI-powered culinary assistant for perfect food portions.", images: ["/og-image.jpg"] },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
