// components/HeroSection.jsx
"use client";
import React from "react";
import { motion } from "framer-motion";
import Head from "next/head";

const HeroSection = () => {
  return (
    <>
      {/* Import Google Font */}
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <section className="relative bg-gradient-to-b from-[#020617] via-[#0a0f1f] to-[#020617] text-white py-24 px-6 sm:px-10 overflow-hidden">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* LEFT CONTENT */}
          <div className="z-10">
            <motion.h2
              className="text-sm sm:text-base md:text-lg font-medium uppercase tracking-[0.25em] mb-4 bg-gradient-to-r from-[#FFD52D] via-[#227AFF] to-[#0058F0] bg-clip-text text-transparent drop-shadow-md"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Web3.0 Made Simple
            </motion.h2>

            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight bg-gradient-to-r from-[#0058F0] via-[#227AFF] to-[#FFD52D] bg-clip-text text-transparent"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Join 2,000+ Students Building the Decentralized Future
            </motion.h1>

            <motion.p
              className="text-gray-300 text-base sm:text-lg mb-8 max-w-lg leading-relaxed"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              We empower Web3 learners and startups — removing barriers and
              helping you build confidently in the decentralized ecosystem.
            </motion.p>

            <ul className="list-none space-y-3 text-gray-300 mb-10">
              <li className="flex items-start gap-2">
                <span className="text-[#FFD52D] text-lg">•</span>
                Scholarship Placements for Web3 Students
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#FFD52D] text-lg">•</span>
                Free Accommodation & Feeding (Onsite)
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#FFD52D] text-lg">•</span>
                Web3 Community, Exposure & Hackathons
              </li>
            </ul>

            <motion.a
              href="#"
              className="inline-block bg-gradient-to-r from-[#0058F0] via-[#227AFF] to-[#FFD52D] hover:opacity-90 transition-opacity text-black font-semibold py-3 px-6 rounded-full shadow-lg"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              Join the Next Cohort →
            </motion.a>
          </div>

          {/* RIGHT IMAGE */}
          <motion.div
            className="relative w-full flex justify-center md:justify-end"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <img
              src="/path-to-your-image.jpg"
              alt="Students learning Web3"
              className="rounded-2xl shadow-2xl w-full max-w-md md:max-w-lg object-cover"
            />
          </motion.div>
        </div>

        {/* SOFT BACKGROUND GLOW */}
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_#0058F020,_transparent_60%)] animate-pulse-slow"></div>
      </section>
    </>
  );
};

export default HeroSection;
