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

export default function Home() {
  const router = useRouter();

  // Check if the route is "/about"
  const isAboutPage = router.pathname === "/about";

  return (
    <>
      <HeroSection />
      <OverviewSplit />
      <PartnersSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
      {/* Show About only on /about */}
    </>
  );
}
