import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import { useRouter } from "next/router";
import About from "../components/About";
import HeroSection from "@/components/HeroSection";

export default function Home() {

  return (
    <>
      <Navigation />
      <HeroSection />
      {/* Show About only on /about */}
    </>
  );
}
