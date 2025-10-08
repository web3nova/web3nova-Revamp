import ServicesPage from '@/components/Services/ServicesPage';
import { Geist, Geist_Mono } from "next/font/google";
import Navigation from '@/components/Hero/navbar';
import Footer from '@/components/Footer';

export default function Services() {
  return(
  <div>
  <Navigation/>
  <ServicesPage />
  <Footer/>
  </div>
)
};