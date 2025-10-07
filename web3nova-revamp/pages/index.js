import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import { useRouter } from "next/router";
import About from "@/components/About/AboutPage";
import HeroSection from "@/components/HeroSection";
import OverviewSplit from "@/components/ServiceandAcademy";
import PartnersSection from "@/components/partners";
import TestimonialsSection from "@/components/Testimonial";
import CTASection from "@/components/ContactUs";
import Footer from "@/components/Footer";

import Web3NovaHomepage from "@/components/Hero";
import Navigation from "@/components/Hero/navbar";
export default function Home() {
  return (
    <>
      <Navigation />
      <Web3NovaHomepage />
      <OverviewSplit />
      <PartnersSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
      {/* Show About only on /about */}
    </>
  );
}
