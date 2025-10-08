"use client";
import About from "@/components/About/AboutPage";
import Navbar from "@/components/Hero/navbar";
import Footer from "@/components/Footer";
import BackgroundEffects from "@/components/Services/BackgroundEffects";

export default function AboutPage() {
  return (
    <div className="relative min-h-screen bg-white text-gray-900 overflow-hidden">
      {/* Background Animation Layer */}
      <BackgroundEffects />
      <Navbar />
      
      {/* Main Page Content */}
      <div className="relative z-10">
        <About />
      </div>
      <Footer />
    </div>
  );
}