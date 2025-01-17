import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar/navbar";
import Footer from "../components/Footer/Footer";
import { Lato } from "next/font/google"; // Import the Lato font


// Load the fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const lato = Lato({
  variable: "--font-lato", // Custom variable for Lato
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"], // Define weights you plan to use
  style: ["normal", "italic"], // Include normal and italic styles
});

export const metadata: Metadata = {
  title: "Concept Recall",
  description: "Created by M Murtaza Ravjani",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${lato.variable} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
