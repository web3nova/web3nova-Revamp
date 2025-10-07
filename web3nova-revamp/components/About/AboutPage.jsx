import React, { useState, useEffect } from "react";
import { Shield, Eye, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";
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

  const nextTestimonial = () =>
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  const prevTestimonial = () =>
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );

  return (
    <div
      className="relative min-h-screen text-gray-900 dark:text-white overflow-hidden transition-colors duration-700"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      {/* 🌌 Animated Background */}
      <motion.div
        className="absolute inset-0 -z-10 bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 dark:from-black dark:via-gray-900 dark:to-gray-800"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{ backgroundSize: "400% 400%" }}
      />

      {/* ✨ Floating Lights */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <motion.span
            key={i}
            className="absolute rounded-full bg-blue-400/10 dark:bg-yellow-200/10 blur-md"
            style={{
              width: Math.random() * 8 + 2,
              height: Math.random() * 8 + 2,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{ y: [0, -10, 0], opacity: [0.2, 0.8, 0.2] }}
            transition={{
              duration: Math.random() * 4 + 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

     {/* Hero Section */}
<section className="pt-32 md:pt-40 pb-16 md:pb-24 px-4 sm:px-6 text-center">
  <motion.h1
    className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-[#0058F0] via-[#227AFF] to-[#FFD52D] bg-clip-text text-transparent leading-tight"
    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
  >
    About Web3Nova
  </motion.h1>

  <motion.p
    className="text-base sm:text-lg md:text-2xl lg:text-3xl text-gray-700 dark:text-gray-300 max-w-lg sm:max-w-2xl md:max-w-3xl mx-auto font-light tracking-wide leading-relaxed"
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
            <p className="text-gray-600 dark:text-gray-400 mb-6 font-light leading-relaxed">
              Web3Nova started as a bold idea to merge Web3 education and
              real-world innovation. We wanted to make blockchain learning
              accessible, hands-on, and exciting.
            </p>
            <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed">
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
              <div className="w-32 h-40 bg-white dark:bg-gray-900 rounded-2xl shadow-2xl"></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Values Section (joined cards) */}
      <section className="py-32 px-6 bg-gradient-to-b from-transparent to-gray-50 dark:to-[#0A0A0A] relative overflow-hidden">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2
            className="text-5xl md:text-6xl font-bold mb-20 bg-gradient-to-r from-[#0058F0] via-[#227AFF] to-[#FFD52D] bg-clip-text text-transparent"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            Our Core Values
          </motion.h2>

          <div className="flex flex-col md:flex-row justify-center items-stretch gap-0 mb-24">
            {[
              {
                title: "Transparency",
                desc: "Clear processes, open communication, and verifiable blockchain solutions ensure trust at every step.",
                gradient: "from-[#0058F0] to-[#88B9E6]",
                rotate: "-rotate-3",
              },
              {
                title: "Security",
                desc: "Robust encryption, secure smart contracts, and best practices protect your assets and data.",
                gradient: "from-[#FDB913] to-[#FFD52D]",
                rotate: "rotate-0 z-10",
              },
              {
                title: "Creativity",
                desc: "Innovative design, cutting-edge development, and user-first thinking bring your Web3 vision to life.",
                gradient: "from-[#4A90E2] to-[#0058F0]",
                rotate: "rotate-3",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                className={`flex-1 p-10 bg-black/70 dark:bg-gray-900/70 border border-gray-800 backdrop-blur-md shadow-[0_0_40px_rgba(0,88,240,0.1)] transition-all duration-500 hover:scale-105 ${item.rotate}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2, duration: 0.8 }}
              >
                <div
                  className={`w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br ${item.gradient} blur-sm`}
                />
                <h3 className="text-2xl font-semibold mb-4 text-white">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-10 border-t border-gray-800 pt-12">
            {[
              { value: "70+", label: "Projects Delivered" },
              { value: "35+", label: "Tokens Launched" },
              { value: "10+", label: "Blockchain Solutions Implemented" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                className="flex flex-col items-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 + 0.5, duration: 0.8 }}
              >
                <div className="text-5xl md:text-6xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm tracking-wide">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
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
            className="relative bg-gradient-to-br from-gray-100 to-white dark:from-[#0A0A0A] dark:to-black rounded-3xl p-16 border border-gray-200 dark:border-gray-800 min-h-[320px] shadow-[0_0_30px_#0058F0]/10"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-10 leading-relaxed font-light">
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

          {/* Navigation Dots */}
          <div className="flex justify-center space-x-3 mt-10">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial
                    ? "bg-gradient-to-r from-[#0058F0] to-[#FFD52D] w-10"
                    : "bg-gray-400 dark:bg-gray-700"
                }`}
              />
            ))}
          </div>

          {/* Prev / Next */}
          <div className="flex justify-center space-x-10 mt-12">
            <button
              onClick={prevTestimonial}
              className="p-4 bg-gray-200 dark:bg-gray-900 hover:bg-gray-300 dark:hover:bg-gray-800 rounded-full border border-gray-300 dark:border-gray-800 hover:border-[#0058F0]/70 transition-all duration-300"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextTestimonial}
              className="p-4 bg-gray-200 dark:bg-gray-900 hover:bg-gray-300 dark:hover:bg-gray-800 rounded-full border border-gray-300 dark:border-gray-800 hover:border-[#0058F0]/70 transition-all duration-300"
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
