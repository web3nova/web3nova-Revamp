import React, { useRef, useEffect } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import {
  GraduationCap,
  Rocket,
  ArrowRight,
  Code,
  Palette,
  Users,
  Zap,
  BookOpen,
  Briefcase,
} from "lucide-react";

const OverviewSplit = () => {
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

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.6, 0.01, 0.05, 0.9],
      },
    },
  };

  const cardHoverVariants = {
    rest: { scale: 1, y: 0 },
    hover: {
      scale: 1.02,
      y: -8,
      transition: {
        duration: 0.4,
        ease: "easeOut",
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
          style={{ y }}
          className="absolute top-[20%] left-[-10%] w-[600px] h-[600px] rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.08, 0.15, 0.08],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="w-full h-full bg-gradient-to-r from-[#2B6EFF]/20 to-transparent rounded-full blur-3xl" />
        </motion.div>

        <motion.div
          style={{ y: useTransform(scrollYProgress, [0, 1], [-30, 30]) }}
          className="absolute bottom-[10%] right-[-5%] w-[500px] h-[500px] rounded-full"
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.08, 0.12, 0.08],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        >
          <div className="w-full h-full bg-gradient-to-l from-[#FFC933]/20 to-transparent rounded-full blur-3xl" />
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-10 md:mb-12"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-4"
          >
            <Zap className="w-4 h-4 text-[#FFC933]" />
            <span className="text-sm text-gray-300 font-['Inter']">
              Your Path to Success
            </span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-5xl font-bold text-white mb-4 font-['Space_Grotesk']"
          >
            Two Ways to{" "}
            <span className="bg-gradient-to-r from-[#2B6EFF] to-[#FFC933] bg-clip-text text-transparent">
              Transform
            </span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-base text-gray-400 max-w-2xl mx-auto font-['Inter']"
          >
            Whether you're ready to learn or ready to build, Web3Nova has you
            covered with world-class education and premium digital solutions.
          </motion.p>
        </motion.div>

        {/* Split Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-5 md:gap-6"
        >
          {/* Academy Card */}
          <motion.div
            variants={itemVariants}
            initial="rest"
            whileHover="hover"
            className="group relative"
          >
            <motion.div
              variants={cardHoverVariants}
              className="relative h-full bg-gradient-to-br from-[#2B6EFF]/10 to-[#71A6FF]/5 rounded-2xl border border-[#2B6EFF]/20 p-6 md:p-8 overflow-hidden backdrop-blur-sm"
            >
              {/* Card Glow Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-[#2B6EFF]/0 to-[#2B6EFF]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background:
                    "radial-gradient(circle at top left, rgba(43, 110, 255, 0.15), transparent)",
                }}
              />

              {/* Animated Border Glow */}
              <motion.div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  boxShadow: "0 0 30px rgba(43, 110, 255, 0.3)",
                }}
              />

              <div className="relative z-10">
                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-[#2B6EFF] to-[#71A6FF] mb-4 shadow-lg shadow-[#2B6EFF]/30"
                >
                  <GraduationCap className="w-7 h-7 text-white" />
                </motion.div>

                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 font-['Space_Grotesk']">
                  Academy
                </h3>

                <p className="text-gray-400 text-sm md:text-base mb-6 leading-relaxed font-['Inter']">
                  Master Web2 and Web3 development through hands-on learning.
                  From UI/UX design to blockchain development, we prepare you
                  for the future of tech.
                </p>

                {/* Features */}
                <div className="space-y-3 mb-6">
                  {[
                    { icon: Code, text: "Comprehensive Web3 Curriculum" },
                    { icon: Users, text: "Industry Expert Mentorship" },
                    { icon: Zap, text: "Real-World Project Experience" },
                  ].map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={
                        isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                      }
                      transition={{ delay: 0.3 + index * 0.1 }}
                      className="flex items-center space-x-3"
                    >
                      <div className="flex-shrink-0 w-7 h-7 rounded-lg bg-[#2B6EFF]/20 flex items-center justify-center">
                        <feature.icon className="w-4 h-4 text-[#71A6FF]" />
                      </div>
                      <span className="text-gray-300 text-sm font-['Inter']">
                        {feature.text}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* CTA */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group/btn w-full py-3 rounded-xl bg-gradient-to-r from-[#2B6EFF] to-[#71A6FF] text-white font-semibold flex items-center justify-center space-x-2 shadow-lg shadow-[#2B6EFF]/30 hover:shadow-[#2B6EFF]/50 transition-all font-['Inter'] text-sm"
                >
                  <span>Start Learning</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </motion.button>

                <div className="mt-3 text-center">
                  <span className="text-xs text-gray-500 font-['Inter']">
                    Next cohort starts January 2026
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Services Card */}
          <motion.div
            variants={itemVariants}
            initial="rest"
            whileHover="hover"
            className="group relative"
          >
            <motion.div
              variants={cardHoverVariants}
              className="relative h-full bg-gradient-to-br from-[#FFC933]/10 to-[#FFC933]/5 rounded-2xl border border-[#FFC933]/20 p-6 md:p-8 overflow-hidden backdrop-blur-sm"
            >
              {/* Card Glow Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-[#FFC933]/0 to-[#FFC933]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background:
                    "radial-gradient(circle at top right, rgba(255, 201, 51, 0.15), transparent)",
                }}
              />

              {/* Animated Border Glow */}
              <motion.div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  boxShadow: "0 0 30px rgba(255, 201, 51, 0.3)",
                }}
              />

              <div className="relative z-10">
                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: -5, scale: 1.1 }}
                  className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-[#FFC933] to-[#FFB300] mb-4 shadow-lg shadow-[#FFC933]/30"
                >
                  <Rocket className="w-7 h-7 text-[#0C0C0C]" />
                </motion.div>

                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 font-['Space_Grotesk']">
                  Services
                </h3>

                <p className="text-gray-400 text-sm md:text-base mb-6 leading-relaxed font-['Inter']">
                  Transform your vision into reality with our premium design and
                  development services. We build digital experiences that scale
                  and captivate.
                </p>

                {/* Features */}
                <div className="space-y-3 mb-6">
                  {[
                    { icon: Palette, text: "World-Class UI/UX Design" },
                    { icon: Code, text: "Full-Stack Development" },
                    { icon: Zap, text: "Blockchain Integration" },
                  ].map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={
                        isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                      }
                      transition={{ delay: 0.3 + index * 0.1 }}
                      className="flex items-center space-x-3"
                    >
                      <div className="flex-shrink-0 w-7 h-7 rounded-lg bg-[#FFC933]/20 flex items-center justify-center">
                        <feature.icon className="w-4 h-4 text-[#FFC933]" />
                      </div>
                      <span className="text-gray-300 text-sm font-['Inter']">
                        {feature.text}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* CTA */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group/btn w-full py-3 rounded-xl bg-gradient-to-r from-[#FFC933] to-[#FFB300] text-[#0C0C0C] font-semibold flex items-center justify-center space-x-2 shadow-lg shadow-[#FFC933]/30 hover:shadow-[#FFC933]/50 transition-all font-['Inter'] text-sm"
                >
                  <span>View Our Work</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </motion.button>

                <div className="mt-3 text-center">
                  <span className="text-xs text-gray-500 font-['Inter']">
                    50+ projects delivered worldwide
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 md:mt-12 text-center"
        >
          <p className="text-gray-500 text-xs mb-6 font-['Inter']">
            Trusted by forward-thinking organizations
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { value: "95%", label: "Success Rate" },
              { value: "500+", label: "Alumni Network" },
              { value: "24/7", label: "Support" },
              { value: "100%", label: "Job Ready" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={
                  isInView
                    ? { opacity: 1, scale: 1 }
                    : { opacity: 0, scale: 0.8 }
                }
                transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                className="relative group"
              >
                <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#2B6EFF] to-[#FFC933] bg-clip-text text-transparent mb-1 font-['Space_Grotesk']">
                  {stat.value}
                </div>
                <div className="text-xs text-gray-400 font-['Inter']">
                  {stat.label}
                </div>

                {/* Hover Glow */}
                <motion.div className="absolute inset-0 rounded-lg bg-gradient-to-r from-[#2B6EFF]/0 to-[#FFC933]/0 group-hover:from-[#2B6EFF]/10 group-hover:to-[#FFC933]/10 transition-all duration-300 -z-10" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default OverviewSplit;
