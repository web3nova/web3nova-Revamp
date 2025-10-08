import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import { useRouter } from "next/router";
import About from "@/components/About/AboutPage";
import Training from "@/components/Training/Training";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

import HeroSection from "@/components/HeroSection";

export default function Home() {
  const router = useRouter();

  // Check if the route is "/about"
  const isAboutPage = router.pathname === "/about";
  const isTrainingPage = router.pathname === "/training";
  return (
    <>
      <Navigation />
      <HeroSection />
      {/* Show About only on /about */}
    </>
  );
}
