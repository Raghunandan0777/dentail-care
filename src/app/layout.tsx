import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const manrope = Manrope({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Smile Signature | Luxury Modern Dental Clinic",
  description: "Transform your smile with premium dental care. Experience exceptional treatments, advanced technology, and personalized care designed to give you the confidence to smile brighter.",
  keywords: "luxury dental clinic, cosmetic dentistry, dental implants, teeth whitening, smile signature, premium dentist",
  openGraph: {
    title: "Smile Signature | Luxury Modern Dental Clinic",
    description: "Transform your smile with premium dental care. Experience exceptional treatments, advanced technology, and personalized care.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${manrope.variable} h-full antialiased scroll-smooth`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-white text-dark font-sans" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
