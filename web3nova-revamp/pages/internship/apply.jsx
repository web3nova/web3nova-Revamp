import ApplicationForm from "@/components/Internship/ApplicationForm";
import Navbar from "@/components/Hero/navbar";
import Footer from "@/components/Footer";

export default function ApplyPage() {
  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      <Navbar />
      
      <div className="relative z-10">
        <ApplicationForm />
      </div>

      <Footer />
    </div>
  );
}
