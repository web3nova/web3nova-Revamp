import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import HeroSection from "@/components/Hero";
import Navigation from "@/components/Hero/navbar";
import Services from "./services";



export default function Home() {

  return (
    <>
      <Navigation />
      <HeroSection />
      <Services />
    </>
  );
}
