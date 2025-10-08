import React, { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { Shield, Award, Users, TrendingUp } from "lucide-react";

const PartnersSection = () => {
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

  // Partner logos - representing major Web3 and tech companies
  const partners = [
    { name: "Coinbase", color: "#0052FF" },
    { name: "Binance", color: "#F3BA2F" },
    { name: "Polygon", color: "#8247E5" },
    { name: "Base", color: "#0052FF" },
    { name: "Optimism", color: "#FF0420" },
    { name: "Arbitrum", color: "#28A0F0" },
    { name: "Ethereum", color: "#627EEA" },
    { name: "Solana", color: "#14F195" },
    { name: "Avalanche", color: "#E84142" },
    { name: "Chainlink", color: "#375BD2" },
    { name: "Uniswap", color: "#FF007A" },
    { name: "OpenSea", color: "#2081E2" },
  ];

  // Metrics data
  const metrics = [
    {
      icon: Users,
      value: "500+",
      label: "Active Students",
      color: "from-[#2B6EFF] to-[#71A6FF]",
    },
    {
      icon: Award,
      value: "50+",
      label: "Projects Delivered",
      color: "from-[#FFC933] to-[#FFB300]",
    },
    {
      icon: Shield,
      value: "95%",
      label: "Success Rate",
      color: "from-[#71A6FF] to-[#2B6EFF]",
    },
    {
      icon: TrendingUp,
      value: "$2M+",
      label: "Value Created",
      color: "from-[#FFB300] to-[#FFC933]",
    },
  ];

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
      className="relative bg-[#0C0C0C] py-12 md:py-16 overflow-hidden"
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
          className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[800px] h-[800px]"
        >
          <div className="w-full h-full bg-gradient-to-r from-[#2B6EFF]/20 via-[#FFC933]/20 to-[#2B6EFF]/20 rounded-full blur-3xl" />
        </motion.div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-10"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-4"
          >
            <Shield className="w-4 h-4 text-[#FFC933]" />
            <span className="text-sm text-gray-300 font-['Inter']">
              Trusted by Industry Leaders
            </span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-5xl font-bold text-white mb-4 font-['Space_Grotesk']"
          >
            Backed by{" "}
            <span className="bg-gradient-to-r from-[#2B6EFF] to-[#FFC933] bg-clip-text text-transparent">
              Global Partners
            </span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-base text-gray-400 max-w-2xl mx-auto font-['Inter']"
          >
            Collaborating with the world's leading Web3 protocols and technology
            companies to deliver exceptional outcomes.
          </motion.p>
        </motion.div>

        {/* Partners Carousel */}
        <div className="relative mb-12">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0C0C0C] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0C0C0C] to-transparent z-10 pointer-events-none" />

          {/* Infinite Scroll Container */}
          <div className="overflow-hidden py-6">
            <motion.div
              className="flex space-x-8"
              animate={{
                x: [0, -1536],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 30,
                  ease: "linear",
                },
              }}
            >
              {/* Render partners twice for seamless loop */}
              {[...partners, ...partners].map((partner, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, y: -3 }}
                  className="flex-shrink-0 group"
                >
                  <div className="relative w-32 h-20 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center overflow-hidden transition-all duration-300 group-hover:border-white/30 group-hover:bg-white/10">
                    {/* Glow Effect on Hover */}
                    <motion.div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{
                        background: `radial-gradient(circle at center, ${partner.color}20, transparent)`,
                      }}
                    />

                    {/* Partner Name/Logo */}
                    <div className="relative z-10">
                      <p
                        className="text-lg font-bold font-['Space_Grotesk'] transition-colors duration-300"
                        style={{ color: "#fff" }}
                      >
                        {partner.name}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Second Row - Reverse Direction */}
          <div className="overflow-hidden py-6">
            <motion.div
              className="flex space-x-8"
              animate={{
                x: [-1536, 0],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 30,
                  ease: "linear",
                },
              }}
            >
              {/* Render partners twice for seamless loop */}
              {[...partners, ...partners].map((partner, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, y: -3 }}
                  className="flex-shrink-0 group"
                >
                  <div className="relative w-32 h-20 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center overflow-hidden transition-all duration-300 group-hover:border-white/30 group-hover:bg-white/10">
                    {/* Glow Effect on Hover */}
                    <motion.div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{
                        background: `radial-gradient(circle at center, ${partner.color}20, transparent)`,
                      }}
                    />

                    {/* Partner Name/Logo */}
                    <div className="relative z-10">
                      <p
                        className="text-lg font-bold font-['Space_Grotesk']"
                        style={{ color: "#fff" }}
                      >
                        {partner.name}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Impact Metrics */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-12"
        >
          <motion.div variants={itemVariants} className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 font-['Space_Grotesk']">
              Our Impact in Numbers
            </h3>
            <p className="text-sm text-gray-400 font-['Inter']">
              Real results from real partnerships
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {metrics.map((metric, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group relative"
              >
                <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5 md:p-6 overflow-hidden transition-all duration-300 group-hover:border-white/30 group-hover:bg-white/10">
                  {/* Background Glow */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${metric.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                  />

                  {/* Icon */}
                  <div className="relative z-10 mb-3">
                    <div
                      className={`inline-flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br ${metric.color} shadow-lg`}
                    >
                      <metric.icon className="w-5 h-5 text-white" />
                    </div>
                  </div>

                  {/* Value */}
                  <motion.div
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.05 }}
                    className="relative z-10"
                  >
                    <div
                      className={`text-2xl md:text-3xl font-bold bg-gradient-to-r ${metric.color} bg-clip-text text-transparent mb-1 font-['Space_Grotesk']`}
                    >
                      {metric.value}
                    </div>
                    <div className="text-xs text-gray-400 font-['Inter']">
                      {metric.label}
                    </div>
                  </motion.div>

                  {/* Hover Border Effect */}
                  <motion.div
                    className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      boxShadow: `0 0 20px ${
                        metric.color === "from-[#2B6EFF] to-[#71A6FF]"
                          ? "rgba(43, 110, 255, 0.3)"
                          : "rgba(255, 201, 51, 0.3)"
                      }`,
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-10"
        >
          <p className="text-gray-400 mb-4 text-sm font-['Inter']">
            Want to become a partner?
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-6 py-3 rounded-full bg-white/5 backdrop-blur-sm border-2 border-white/20 text-white font-semibold hover:border-[#2B6EFF] transition-all font-['Inter'] group text-sm"
          >
            <span>Get in Touch</span>
            <motion.svg
              className="ml-2 w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              animate={{ x: [0, 3, 0] }}
              transition={{
                repeat: Infinity,
                duration: 1.5,
                ease: "easeInOut",
              }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </motion.svg>
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default PartnersSection;
