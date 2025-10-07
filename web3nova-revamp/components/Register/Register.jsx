"use client"; // <-- Add this line at the top

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";

export default function Register() {
    const router = useRouter();
  const [selected, setSelected] = useState(null);
  const [expanded, setExpanded] = useState({});

  const courses = [
    {
      id: "rust",
      title: "Rust Blockchain Protocol Development",
      short: "Master-class for blockchain protocol engineering with Rust.",
      long: "Dive deep into memory-safe systems programming while building high-performance blockchain nodes, P2P layers, and consensus engines. You will architect real protocols used in production networks.",
    },
    {
      id: "backend",
      title: "Backend Development (Web2 Advanced)",
      short: "Build powerful server-side apps with Python, Django & more.",
      long: "Learn to design scalable REST & GraphQL APIs, handle authentication, optimise databases, deploy with Docker/K8s, and integrate Web3 tooling where needed.",
    },
    {
      id: "frontend",
      title: "Frontend Development (Web2 Advanced)",
      short: "Modern React, advanced JavaScript (ES6), CSS & tooling.",
      long: "Master component architecture, state management, TypeScript, unit/e2e testing, CI/CD, performance tuning, and connecting to smart-contract backends.",
    },
    {
      id: "launchpad",
      title: "Web2 Launchpad",
      short: "Fundamentals of web dev with HTML5, CSS & modern frameworks.",
      long: "Perfect starter track: semantic HTML, responsive CSS, JavaScript essentials, Git/GitHub, and your first hosted projects. Graduate ready for advanced stacks.",
    },
    {
      id: "solidity",
      title: "Solidity (Web3 Development)",
      short: "Smart-contracts & dApp development with Solidity.",
      long: "Write, test, and deploy secure contracts; integrate front-ends via Ethers.js; learn upgradable patterns, gas optimisation, and audited best practices.",
    },
  ];

  const toggleExpand = (id) => setExpanded((p) => ({ ...p, [id]: !p[id] }));

  return (
    <>
      {/* Google Font */}
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap");
        body {
          font-family: "Space Grotesk", sans-serif;
        }
      `}</style>

      <main className="min-h-screen bg-gradient-to-b from-[#020617] via-[#0a0f1f] to-[#020617] text-white flex items-center justify-center p-6">
        <div className="w-full max-w-2xl">
          {/* Header */}
          <div className="mb-8 text-center md:text-left">
            <p className="text-sm text-gray-400">Select Course — Step 1 of 3</p>
            <h1 className="text-3xl md:text-4xl font-bold mt-1 bg-gradient-to-r from-[#0058F0] via-[#227AFF] to-[#FFD52D] bg-clip-text text-transparent">
              Choose Your Track
            </h1>
            <div className="h-1 w-12 bg-[#0058F5] mt-3 rounded-full mx-auto md:mx-0" />
          </div>

          {/* Course Options */}
          <fieldset>
            <legend className="sr-only">Available Courses</legend>
            <div className="space-y-4">
              {courses.map((c) => {
                const isOpen = !!expanded[c.id];
                return (
                  <label
                    key={c.id}
                    className={`group relative flex cursor-pointer flex-col sm:flex-row items-start gap-3 rounded-xl border p-4 transition ${
                      selected === c.id
                        ? "border-[#0058F5] bg-[#0058F5]/10"
                        : "border-gray-800 hover:border-gray-700"
                    }`}
                  >
                    <input
                      type="radio"
                      name="course"
                      value={c.id}
                      checked={selected === c.id}
                      onChange={() => setSelected(c.id)}
                      className="sr-only"
                    />
                    <span
                      aria-hidden="true"
                      className={`h-5 w-5 rounded-full border-2 flex items-center justify-center mt-1 ${
                        selected === c.id
                          ? "border-[#0058F5]"
                          : "border-gray-600 group-hover:border-gray-500"
                      }`}
                    >
                      {selected === c.id && (
                        <span className="h-2.5 w-2.5 rounded-full bg-[#0058F5]" />
                      )}
                    </span>

                    <div className="flex-1">
                      <p className="font-semibold">{c.title}</p>
                      <p className="text-sm text-gray-400 mt-1">{c.short}</p>

                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25 }}
                            className="mt-3 text-sm text-gray-300 overflow-hidden"
                          >
                            {c.long}
                          </motion.div>
                        )}
                      </AnimatePresence>

                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleExpand(c.id);
                        }}
                        className="mt-3 text-sm text-[#0058F5] hover:underline focus:outline-none"
                      >
                        {isOpen ? "Show Less" : "Show More"}
                      </button>
                    </div>
                  </label>
                );
              })}
            </div>
          </fieldset>

          {/* Continue Button */}
          <div className="mt-10 flex justify-end">
            <button

             onClick={() => {
    if (!selected) return;        // safety
    router.push("/register/step2");
  }}
              disabled={!selected}
              className={`rounded-lg px-6 py-3 font-semibold transition ${
                selected
                  ? "bg-gradient-to-r from-[#0058F0] via-[#227AFF] to-[#FFD52D] text-black hover:opacity-90"
                  : "bg-gray-800 text-gray-500 cursor-not-allowed"
              }`}
            >

    
              Continue
            </button>
          </div>
        </div>
      </main>
    </>
  );
}
