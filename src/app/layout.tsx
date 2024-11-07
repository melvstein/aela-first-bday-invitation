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

const fairyText1 = localFont({
  src: "./fonts/Fairies-LWRZ.ttf",
  variable: "--font-fairy-text1",
  weight: "100 900",
});

const fairyText2 = localFont({
  src: "./fonts/FairiesAreReal-lWyX.ttf",
  variable: "--font-fairy-text2",
  weight: "100 900",
});

const fairyText3 = localFont({
  src: "./fonts/FairyGodmotherDemoRegular-r9Px.otf",
  variable: "--font-fairy-text3",
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
        className={clsx(geistSans.variable, geistMono.variable, fairyText1.variable, fairyText2.variable, fairyText3.variable, "antialiased relative text-slate-800")}
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
