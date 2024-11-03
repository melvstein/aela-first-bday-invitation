"use client"

import localFont from "next/font/local";
import "./globals.css";
/* import Navbar from "./components/Navbar"; */
import clsx from "clsx";
import { motion, useScroll } from "framer-motion";
import Sidebar from "./components/Sidebar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const { scrollYProgress } = useScroll();

  return (
    <html lang="en">
      <body
        className={clsx(geistSans.variable, geistMono.variable, "antialiased relative")}
      > 
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
        <Sidebar />
        {/* <Navbar /> */}
        {children}
      </body>
    </html>
  );
}
