import React, { useState, useEffect } from "react";
import {
  Shield,
  Eye,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Rocket,
} from "lucide-react";
import { motion } from "framer-motion";

const AboutPage = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);

  const testimonials = [
    {
      text: "Web3Nova helped us unlock blockchain learning for our global team. The experience was seamless and inspiring.",
      author: "David Johnson",
      role: "CEO",
      company: "Paal AI",
    },
    {
      text: "Their mix of creativity, security, and tech mastery is unmatched in the Web3 education space.",
      author: "Sarah Chen",
      role: "CTO",
      company: "BlockChain Ventures",
    },
    {
      text: "We built our first dApp with Web3Nova’s mentorship — they turn learning into real-world innovation.",
      author: "Michael Ross",
      role: "Founder",
      company: "DeFi Learners",
    },
  ];

  const features = [
    {
      icon: <Eye className="w-10 h-10" />,
      title: "Transparency",
      description:
        "From project insights to smart contracts, transparency is at the core of how we educate and build.",
      gradient: "from-[#0058F0] via-[#227AFF] to-[#FFD52D]",
    },
    {
      icon: <Shield className="w-10 h-10" />,
      title: "Security",
      description:
        "We emphasize security-first development, helping learners understand how to protect Web3 ecosystems.",
      gradient: "from-[#1E40AF] via-[#0058F0] to-[#FFD52D]",
    },
    {
      icon: <Sparkles className="w-10 h-10" />,
      title: "Innovation",
      description:
        "Blending creativity and technology, we build experiences that shape the next era of decentralized learning.",
      gradient: "from-[#FFD52D] via-[#227AFF] to-[#0058F0]",
    },
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div
      className="min-h-screen bg-black text-white overflow-hidden"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      {/* Navbar */}
      <motion.nav
        className="fixed top-0 w-full bg-black/80 backdrop-blur-md z-50 border-b border-gray-800"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-br from-[#0058F0] to-[#FFD52D] rounded-md flex items-center justify-center">
              <Rocket className="w-4 h-4 text-white" />
            </div>
            <span
              className="text-lg font-semibold tracking-wider"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Web3Nova
            </span>
          </div>
          <div className="hidden md:flex space-x-10 text-sm">
            {["Home", "Courses", "Projects", "Events", "About"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="pt-40 pb-24 px-6 text-center relative overflow-hidden">
        <motion.h1
          className="text-7xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-[#0058F0] via-[#227AFF] to-[#FFD52D] bg-clip-text text-transparent"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          About Web3Nova
        </motion.h1>
        <motion.p
          className="text-2xl md:text-3xl text-gray-400 max-w-3xl mx-auto font-light tracking-wide"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          Empowering creators and learners to build the decentralized future.
        </motion.p>
      </section>

      {/* Our Story */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h2
              className="text-5xl md:text-6xl font-bold mb-8"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Our Story
            </h2>
            <p className="text-gray-400 text-base leading-relaxed mb-6 font-light">
              Web3Nova started as a bold idea to merge Web3 education and
              real-world innovation. We wanted to make blockchain learning
              accessible, hands-on, and exciting.
            </p>
            <p className="text-gray-400 text-base leading-relaxed font-light">
              Today, we’re building an ecosystem that empowers developers,
              designers, and dreamers to explore decentralized technologies and
              create scalable solutions for the world.
            </p>
          </motion.div>
          <motion.div
            className="relative group"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="bg-gradient-to-br from-[#0058F0] to-[#FFD52D] rounded-3xl p-16 flex items-center justify-center shadow-[0_0_40px_#0058F0]/30 group-hover:scale-105 transition-transform duration-500">
              <div className="w-32 h-40 bg-white rounded-2xl shadow-2xl"></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 px-6 bg-gradient-to-b from-black to-gray-950">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="rounded-3xl p-10 border border-gray-800 bg-black hover:border-[#0058F0]/70 transition-all duration-500 hover:scale-105 hover:shadow-[0_0_30px_#0058F0]/30"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
            >
              <div
                className={`bg-gradient-to-br ${feature.gradient} w-20 h-20 rounded-2xl flex items-center justify-center mb-8`}
              >
                {feature.icon}
              </div>
              <h3
                className="text-2xl font-bold mb-4"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                {feature.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed font-light">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2
            className="text-5xl font-bold mb-16 bg-gradient-to-r from-[#0058F0] via-[#227AFF] to-[#FFD52D] bg-clip-text text-transparent"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            What Our Partners Say
          </h2>
          <motion.div
            key={currentTestimonial}
            className="relative bg-gradient-to-br from-[#0A0A0A] to-black rounded-3xl p-16 border border-gray-800 min-h-[320px] shadow-[0_0_30px_#0058F0]/10"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xl text-gray-300 mb-10 leading-relaxed font-light">
              “{testimonials[currentTestimonial].text}”
            </p>
            <div className="flex items-center justify-center space-x-4">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#0058F0] to-[#FFD52D] flex items-center justify-center text-white font-bold">
                {testimonials[currentTestimonial].author[0]}
              </div>
              <div className="text-left">
                <div className="font-semibold text-lg">
                  {testimonials[currentTestimonial].author}
                </div>
                <div className="text-sm text-gray-500">
                  {testimonials[currentTestimonial].role} •{" "}
                  {testimonials[currentTestimonial].company}
                </div>
              </div>
            </div>
          </motion.div>

          <div className="flex justify-center space-x-3 mt-10">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial
                    ? "bg-gradient-to-r from-[#0058F0] to-[#FFD52D] w-10"
                    : "bg-gray-700"
                }`}
              />
            ))}
          </div>

          <div className="flex justify-center space-x-10 mt-12">
            <button
              onClick={prevTestimonial}
              className="p-4 bg-gray-900 hover:bg-gray-800 rounded-full border border-gray-800 hover:border-[#0058F0]/70 transition-all duration-300"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextTestimonial}
              className="p-4 bg-gray-900 hover:bg-gray-800 rounded-full border border-gray-800 hover:border-[#0058F0]/70 transition-all duration-300"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
