import Internship from "@/components/Internship/InternshipPage";
import Navbar from "@/components/Hero/navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/ContactUs";

export default function InternshipPage() {
  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      <Navbar />
      
      {/* Main Page Content */}
      <div className="relative z-10">
        <Internship />
      </div>

      <CTASection />
      <Footer />
    </div>
  );
}
