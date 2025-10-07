import React, { useEffect } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  Phone,
  Twitter,
  Linkedin,
  Github,
  Send,
  ArrowRight,
} from "lucide-react";

const Footer = () => {
  // Load Google Fonts
  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
    return () => document.head.removeChild(link);
  }, []);

  const footerLinks = {
    academy: [
      { name: "Course Tracks", href: "#courses" },
      { name: "Curriculum", href: "#curriculum" },
      { name: "Enrollment", href: "#enrollment" },
      { name: "Alumni Network", href: "#alumni" },
      { name: "Success Stories", href: "#success" },
    ],
    services: [
      { name: "Web Development", href: "#web-dev" },
      { name: "UI/UX Design", href: "#design" },
      { name: "Blockchain Integration", href: "#blockchain" },
      { name: "Consultation", href: "#consulting" },
      { name: "Portfolio", href: "#portfolio" },
    ],
    company: [
      { name: "About Us", href: "#about" },
      { name: "Our Team", href: "#team" },
      { name: "Careers", href: "#careers" },
      { name: "Partners", href: "#partners" },
      { name: "Blog", href: "#blog" },
    ],
    resources: [
      { name: "Events", href: "#events" },
      { name: "Buildathons", href: "#buildathons" },
      { name: "Community", href: "#community" },
      { name: "Documentation", href: "#docs" },
      { name: "Support", href: "#support" },
    ],
  };

  const socialLinks = [
    {
      name: "Twitter",
      icon: Twitter,
      href: "https://twitter.com",
      color: "#1DA1F2",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://linkedin.com",
      color: "#0A66C2",
    },
    {
      name: "Github",
      icon: Github,
      href: "https://github.com",
      color: "#FFFFFF",
    },
    {
      name: "Telegram",
      icon: Send,
      href: "https://telegram.org",
      color: "#0088cc",
    },
  ];

  return (
    <footer className="relative bg-[#0C0C0C] border-t border-white/5 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.03, 0.05, 0.03],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -top-[50%] left-[20%] w-[600px] h-[600px] rounded-full bg-gradient-to-br from-[#2B6EFF]/20 to-transparent blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.03, 0.05, 0.03],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute -bottom-[50%] right-[20%] w-[500px] h-[500px] rounded-full bg-gradient-to-tl from-[#FFC933]/20 to-transparent blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        {/* Main Footer Content */}
        <div className="py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 md:gap-8">
            {/* Brand Column */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                {/* Logo */}
                <div className="flex items-center space-x-2 mb-6">
                  <div
                    className="text-2xl font-bold text-white"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    <span className="text-[#2B6EFF]">Web3</span>Nova
                  </div>
                </div>

                <p
                  className="text-gray-400 text-sm mb-6 leading-relaxed"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Empowering the next generation of Web3 builders through
                  world-class education and premium digital solutions.
                </p>

                {/* Contact Info */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-3 text-sm text-gray-400">
                    <Mail className="w-4 h-4 text-[#2B6EFF]" />
                    <span style={{ fontFamily: "'Inter', sans-serif" }}>
                      hello@web3nova.com
                    </span>
                  </div>
                  <div className="flex items-center space-x-3 text-sm text-gray-400">
                    <Phone className="w-4 h-4 text-[#2B6EFF]" />
                    <span style={{ fontFamily: "'Inter', sans-serif" }}>
                      +234 (0) 123 456 789
                    </span>
                  </div>
                  <div className="flex items-center space-x-3 text-sm text-gray-400">
                    <MapPin className="w-4 h-4 text-[#2B6EFF]" />
                    <span style={{ fontFamily: "'Inter', sans-serif" }}>
                      Lagos, Nigeria
                    </span>
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex items-center space-x-3">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all"
                    >
                      <social.icon className="w-5 h-5" />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Academy Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3
                className="text-white font-bold mb-4 text-sm uppercase tracking-wider"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Academy
              </h3>
              <ul className="space-y-3">
                {footerLinks.academy.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-[#2B6EFF] transition-colors text-sm inline-flex items-center group"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      <span>{link.name}</span>
                      <ArrowRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Services Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3
                className="text-white font-bold mb-4 text-sm uppercase tracking-wider"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Services
              </h3>
              <ul className="space-y-3">
                {footerLinks.services.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-[#FFC933] transition-colors text-sm inline-flex items-center group"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      <span>{link.name}</span>
                      <ArrowRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Company Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3
                className="text-white font-bold mb-4 text-sm uppercase tracking-wider"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Company
              </h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors text-sm inline-flex items-center group"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      <span>{link.name}</span>
                      <ArrowRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Resources Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h3
                className="text-white font-bold mb-4 text-sm uppercase tracking-wider"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Resources
              </h3>
              <ul className="space-y-3">
                {footerLinks.resources.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors text-sm inline-flex items-center group"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      <span>{link.name}</span>
                      <ArrowRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="py-8 border-t border-white/5"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3
                className="text-white font-bold mb-2 text-lg"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Stay Updated
              </h3>
              <p
                className="text-gray-400 text-sm"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Subscribe to our newsletter for the latest updates and exclusive
                content.
              </p>
            </div>
            <div className="flex w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 md:w-64 px-4 py-3 bg-white/5 border border-white/10 rounded-l-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#2B6EFF] transition-colors text-sm"
                style={{ fontFamily: "'Inter', sans-serif" }}
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-gradient-to-r from-[#2B6EFF] to-[#71A6FF] text-white font-semibold rounded-r-xl hover:shadow-lg hover:shadow-[#2B6EFF]/30 transition-all"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-white/5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
            <p style={{ fontFamily: "'Inter', sans-serif" }}>
              © {new Date().getFullYear()} Web3Nova. All rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              <a
                href="#privacy"
                className="hover:text-white transition-colors"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Privacy Policy
              </a>
              <a
                href="#terms"
                className="hover:text-white transition-colors"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Terms of Service
              </a>
              <a
                href="#cookies"
                className="hover:text-white transition-colors"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
