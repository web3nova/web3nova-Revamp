import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import About from '../components/About';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
   <>
      {/* whatever you already had */}
      <About />   {/*  About section appears here */}
      {/* more content */}
    </>
  );
}




