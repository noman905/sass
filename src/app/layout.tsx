import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";


import { DM_Sans } from 'next/font/google';

const dmSans = DM_Sans({
  subsets: ['latin'], // Add appropriate subsets here
  weight: ['400', '700'], // Specify font weights if needed
  preload: true, // Keep preload enabled if desired
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

console.log(geistSans, geistMono); 

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={twMerge(dmSans.className,"antialiased bg-[#EAEEFE]")}
      >
        {children}
      </body>
    </html>
  );
}
