// pages/index.js
import Footer from '@/components/Footer.jsx';
import Register from '../components/Register/Register.jsx';
import Navbar from '@/components/Hero/navbar';


const HomePage = () => {
  return (
       <>
        <Navbar />
        <div className="mt-15">
      <Register />
      </div>
      <Footer />
      {/* Add other sections as needed */}
    </>
  );
};

export default HomePage;