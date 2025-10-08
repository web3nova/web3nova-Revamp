// pages/index.js
import Training from '../components/Training/Training';
import { Geist, Geist_Mono } from "next/font/google";
import Navigation from '@/components/Hero/navbar';
import Footer from '@/components/Footer';

const HomePage = () => {
  return (
       <div className="bg-black">
      <Navigation />
      <Training />
      <Footer/>
      {/* Add other sections as needed */}
    </div>
  );
};

export default HomePage;