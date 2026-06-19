import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import LenisProvider from "@/components/ui/LenisProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata = {
  title: "Mallikarjuna | AI/ML Engineer",

  description:
    "AI/ML Engineer, Full Stack Developer, and Research-Oriented Builder focused on intelligent systems, machine learning, and scalable software engineering.",

  keywords: [
    "AI Engineer",
    "Machine Learning",
    "Full Stack Developer",
    "Chandigarh University",
    "Deep Learning",
    "React",
    "Next.js",
    "Python",
  ],

  authors: [
    {
      name: "Mallikarjuna",
    },
  ],

  openGraph: {
    title:
      "Mallikarjuna | AI/ML Engineer",

    description:
      "Building Intelligent Digital Experiences.",

    images: ["/og-image.png"],

    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${jetbrains.variable} antialiased`}
      >
        <LenisProvider>
    {children}
  </LenisProvider>
      </body>
    </html>
  );
}