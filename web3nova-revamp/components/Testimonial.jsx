import React, { useRef, useEffect, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  Quote,
  Star,
  ChevronLeft,
  ChevronRight,
  GraduationCap,
  Briefcase,
} from "lucide-react";

const TestimonialsSection = () => {
  // Load Google Fonts
  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
    return () => document.head.removeChild(link);
  }, []);

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 });
  const [activeTab, setActiveTab] = useState("students");
  const [currentIndex, setCurrentIndex] = useState(0);

  // Student testimonials
  const studentTestimonials = [
    {
      name: "Chidinma Okafor",
      role: "Frontend Developer",
      company: "MetaMask",
      image: "👩🏾‍💻",
      rating: 5,
      text: "Web3Nova transformed my career completely. From knowing nothing about blockchain to building dApps professionally, the journey was incredible. The mentorship and hands-on projects prepared me for real-world challenges.",
      achievement: "Landed role at MetaMask after graduation",
    },
    {
      name: "Ibrahim Musa",
      role: "Blockchain Developer",
      company: "Binance",
      image: "👨🏿‍💻",
      rating: 5,
      text: "The curriculum is world-class. I learned Solidity, React, and smart contract security in just 12 weeks. Now I'm building products that serve millions of users. Best investment I ever made.",
      achievement: "Built 3 successful dApps in first 6 months",
    },
    {
      name: "Amara Nwosu",
      role: "UI/UX Designer",
      company: "Coinbase",
      image: "👩🏾‍🎨",
      rating: 5,
      text: "The design track exceeded all my expectations. Learning from industry experts and working on real projects gave me the confidence to pursue my dream role. Forever grateful to Web3Nova.",
      achievement: "Promoted to Senior Designer within 1 year",
    },
    {
      name: "David Adeleke",
      role: "Full Stack Developer",
      company: "Polygon Labs",
      image: "👨🏿‍💼",
      rating: 5,
      text: "From zero coding experience to shipping production code. The instructors are patient, knowledgeable, and genuinely care about your success. The community support is unmatched.",
      achievement: "Contributing to major Web3 protocols",
    },
  ];

  // Client testimonials
  const clientTestimonials = [
    {
      name: "Sarah Mitchell",
      role: "CEO",
      company: "DeFi Protocol X",
      image: "👩🏼‍💼",
      rating: 5,
      text: "Web3Nova delivered beyond our expectations. They built our entire DeFi platform with exceptional quality and attention to detail. The team's expertise in both design and blockchain development is remarkable.",
      achievement: "Platform now processes $50M+ monthly",
    },
    {
      name: "Marcus Johnson",
      role: "Founder",
      company: "NFT Marketplace",
      image: "👨🏾‍💼",
      rating: 5,
      text: "Working with Web3Nova was seamless. They understood our vision and brought it to life with stunning design and flawless functionality. Their post-launch support has been exceptional.",
      achievement: "10,000+ active users in first month",
    },
    {
      name: "Elena Rodriguez",
      role: "CTO",
      company: "Web3 Gaming Studio",
      image: "👩🏽‍💻",
      rating: 5,
      text: "The technical depth and creative innovation Web3Nova brings is outstanding. They didn't just build our game, they helped us architect a scalable infrastructure that supports millions of transactions.",
      achievement: "Raised $5M Series A after launch",
    },
    {
      name: "James Chen",
      role: "Product Lead",
      company: "DAO Platform",
      image: "👨🏻‍💻",
      rating: 5,
      text: "From strategy to deployment, Web3Nova was our trusted partner. Their ability to translate complex requirements into elegant solutions is unmatched. Highly recommend for any Web3 project.",
      achievement: "Won Best DAO Platform 2024",
    },
  ];

  const activeTestimonials =
    activeTab === "students" ? studentTestimonials : clientTestimonials;

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % activeTestimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) =>
        (prev - 1 + activeTestimonials.length) % activeTestimonials.length
    );
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.6, 0.01, 0.05, 0.9],
      },
    },
  };

  return (
    <div
      ref={sectionRef}
      className="relative bg-[#0C0C0C] py-16 md:py-24 overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px]"
        >
          <div className="w-full h-full bg-gradient-to-r from-[#2B6EFF]/20 via-[#FFC933]/20 to-[#71A6FF]/20 rounded-full blur-3xl" />
        </motion.div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-12"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-4"
          >
            <Star className="w-4 h-4 text-[#FFC933]" fill="#FFC933" />
            <span
              className="text-sm text-gray-300"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Success Stories
            </span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Hear from Our{" "}
            <span className="bg-gradient-to-r from-[#2B6EFF] to-[#FFC933] bg-clip-text text-transparent">
              Community
            </span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-base text-gray-400 max-w-2xl mx-auto"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Real stories from students who transformed their careers and clients
            who achieved remarkable results.
          </motion.p>
        </motion.div>

        {/* Tab Switcher */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex justify-center mb-12"
        >
          <div className="inline-flex bg-white/5 backdrop-blur-sm border border-white/10 rounded-full p-1">
            <button
              onClick={() => {
                setActiveTab("students");
                setCurrentIndex(0);
              }}
              className={`px-6 py-3 rounded-full transition-all duration-300 flex items-center space-x-2 ${
                activeTab === "students"
                  ? "bg-[#2B6EFF] text-white shadow-lg shadow-[#2B6EFF]/30"
                  : "text-gray-400 hover:text-white"
              }`}
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              <GraduationCap className="w-4 h-4" />
              <span className="font-semibold text-sm">Students</span>
            </button>
            <button
              onClick={() => {
                setActiveTab("clients");
                setCurrentIndex(0);
              }}
              className={`px-6 py-3 rounded-full transition-all duration-300 flex items-center space-x-2 ${
                activeTab === "clients"
                  ? "bg-[#FFC933] text-[#0C0C0C] shadow-lg shadow-[#FFC933]/30"
                  : "text-gray-400 hover:text-white"
              }`}
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              <Briefcase className="w-4 h-4" />
              <span className="font-semibold text-sm">Clients</span>
            </button>
          </div>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${activeTab}-${currentIndex}`}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl">
                {/* Quote Icon */}
                <div className="absolute top-8 left-8 opacity-10">
                  <Quote className="w-16 h-16 text-white" fill="white" />
                </div>

                {/* Rating */}
                <div className="flex items-center space-x-1 mb-6">
                  {[...Array(activeTestimonials[currentIndex].rating)].map(
                    (_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-[#FFC933]"
                        fill="#FFC933"
                      />
                    )
                  )}
                </div>

                {/* Testimonial Text */}
                <p
                  className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed relative z-10"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  "{activeTestimonials[currentIndex].text}"
                </p>

                {/* Achievement Badge */}
                <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#2B6EFF]/20 to-[#FFC933]/20 border border-white/10 mb-8">
                  <div className="w-2 h-2 rounded-full bg-[#FFC933]" />
                  <span
                    className="text-sm text-gray-300"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {activeTestimonials[currentIndex].achievement}
                  </span>
                </div>

                {/* Profile */}
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#2B6EFF] to-[#71A6FF] flex items-center justify-center text-3xl shadow-lg">
                    {activeTestimonials[currentIndex].image}
                  </div>
                  <div>
                    <h4
                      className="text-lg font-bold text-white mb-1"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      {activeTestimonials[currentIndex].name}
                    </h4>
                    <p
                      className="text-sm text-gray-400"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {activeTestimonials[currentIndex].role} at{" "}
                      {activeTestimonials[currentIndex].company}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-center space-x-4 mt-8">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-all"
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>

            {/* Dots Indicator */}
            <div className="flex items-center space-x-2">
              {activeTestimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`transition-all duration-300 rounded-full ${
                    index === currentIndex
                      ? "w-8 h-2 bg-gradient-to-r from-[#2B6EFF] to-[#FFC933]"
                      : "w-2 h-2 bg-white/20 hover:bg-white/40"
                  }`}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-all"
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>
          </div>
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
        >
          {[
            { value: "4.9/5", label: "Average Rating" },
            { value: "98%", label: "Satisfaction Rate" },
            { value: "500+", label: "Success Stories" },
            { value: "100+", label: "Partner Companies" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={
                isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
              }
              transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
              className="text-center"
            >
              <div
                className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#2B6EFF] to-[#FFC933] bg-clip-text text-transparent mb-1"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                {stat.value}
              </div>
              <div
                className="text-xs text-gray-400"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
