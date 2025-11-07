import HiringSection from "@/components/Hiring/Hiring";
import { Geist, Geist_Mono } from "next/font/google";
import Navigation from '@/components/Hero/navbar';
import Footer from '@/components/Footer';

export default function Services() {
  return(
  <div>
  <Navigation/>
  <HiringSection />
  <Footer/>
  </div>
)
};