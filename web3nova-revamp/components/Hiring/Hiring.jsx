import { motion } from "framer-motion";
import { Users, TrendingUp, Sparkles, ExternalLink } from "lucide-react";

function BackgroundEffects() {
  return (
    <>
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0 animate-grid-flow"
            style={{
              backgroundImage: `
                linear-gradient(rgba(74, 144, 226, 0.3) 1px, transparent 1px),
                linear-gradient(90deg, rgba(74, 144, 226, 0.3) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px',
              maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)',
              WebkitMaskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)',
            }}
          />
        </div>

        <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full blur-3xl animate-float-slow opacity-30" style={{ background: "radial-gradient(circle, #4A90E2, transparent)" }} />
        <div className="absolute top-1/2 right-0 w-80 h-80 rounded-full blur-3xl animate-float-medium opacity-25" style={{ background: "radial-gradient(circle, #FDB913, transparent)" }} />
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 rounded-full blur-3xl animate-float-fast opacity-20" style={{ background: "radial-gradient(circle, #4A90E2, transparent)" }} />
      </div>

      <style jsx>{`
        @keyframes float-slow {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(50px, 50px) scale(1.1); }
        }
        @keyframes float-medium {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-40px, 40px) scale(1.15); }
        }
        @keyframes float-fast {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(30px, -30px) scale(1.2); }
        }
        @keyframes grid-flow {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }
        .animate-float-slow { animation: float-slow 20s ease-in-out infinite; }
        .animate-float-medium { animation: float-medium 15s ease-in-out infinite; }
        .animate-float-fast { animation: float-fast 12s ease-in-out infinite; }
        .animate-grid-flow { animation: grid-flow 20s linear infinite; }
      `}</style>
    </>
  );
}

export default function HiringSection() {
  const roles = [
    {
      id: "social-media",
      title: "Social Media Managers",
      icon: <Users className="w-6 h-6" />,
      color: "#4A90E2",
      description: "Build and manage strong online presence across platforms",
      skills: ["Content Creation", "Community Management", "Analytics", "Brand Building"],
    },
    {
      id: "growth",
      title: "Growth Managers",
      icon: <TrendingUp className="w-6 h-6" />,
      color: "#FDB913",
      description: "Drive strategy, user acquisition, and product expansion",
      skills: ["Growth Strategy", "Data Analysis", "User Acquisition", "Product Marketing"],
    },
  ];

  return (
    <>
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap");
        body { font-family: "Space Grotesk", sans-serif; }
      `}</style>

      <main className="min-h-screen bg-black text-white relative overflow-hidden">
        <BackgroundEffects />
        
        <div className="relative z-10 flex items-center justify-center min-h-screen p-6 py-20">
          <div className="w-full max-w-6xl">
            {/* Header */}
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-16 text-center"
            >
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
                className="inline-block px-8 py-3 rounded-full mb-6 bg-gradient-to-r from-red-500/10 to-yellow-400/10 border border-red-500/30"
              >
                <span className="font-bold text-lg bg-gradient-to-r from-red-400 via-yellow-400 to-red-500 bg-clip-text text-transparent uppercase tracking-wider">
                  🚨 We're Hiring! 🚨
                </span>
              </motion.div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-blue-300 to-yellow-400 bg-clip-text text-transparent">
                Join Our Team
              </h1>
              
              <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed mb-4">
                Are you passionate about creativity, digital engagement, and growth?
              </p>
              
              <p className="text-gray-400 text-lg max-w-3xl mx-auto">
                We're on the lookout for talented individuals to join our team in building exciting things in the tech and Web3 space.
              </p>
            </motion.div>

            {/* Role Cards */}
            <div className="grid md:grid-cols-2 gap-6 mb-16 max-w-5xl mx-auto">
              {roles.map((role, index) => (
                <motion.div
                  key={role.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="group relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-white/20 hover:bg-white/10 transition-all duration-300"
                >
                  <div 
                    className="flex-shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center text-black mb-6 group-hover:scale-110 transition-transform duration-300"
                    style={{ backgroundColor: role.color }}
                  >
                    {role.icon}
                  </div>

                  <h3 className="font-bold text-2xl text-white mb-3 group-hover:text-blue-300 transition-colors">
                    {role.title}
                  </h3>

                  <p className="text-gray-400 text-base leading-relaxed mb-6">
                    {role.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {role.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-full text-xs font-semibold"
                        style={{ 
                          backgroundColor: `${role.color}20`,
                          color: role.color 
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <div 
                    className="absolute -inset-0.5 rounded-3xl opacity-0 group-hover:opacity-50 blur-lg -z-10 transition-opacity duration-300"
                    style={{ background: `radial-gradient(circle, ${role.color}, transparent)` }}
                  />
                </motion.div>
              ))}
            </div>

            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-center"
            >
              <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 max-w-3xl mx-auto mb-8">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <Sparkles className="w-6 h-6 text-yellow-400" />
                  <h2 className="text-2xl font-bold text-white">
                    Ready to Make an Impact?
                  </h2>
                  <Sparkles className="w-6 h-6 text-yellow-400" />
                </div>
                
                <p className="text-gray-300 text-lg mb-6">
                  Whether you're a rising talent or experienced in your field, we'd love to have you onboard!
                </p>

                <a
                  href="https://bit.ly/47Zag3N"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative group inline-flex items-center gap-3 px-12 py-5 rounded-full font-bold text-xl bg-gradient-to-r from-blue-400 to-yellow-400 text-black hover:scale-105 shadow-2xl transition-all duration-300"
                >
                  Apply Now
                  <ExternalLink className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                  
                  <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-400 to-yellow-400 opacity-50 blur-xl -z-10 group-hover:opacity-75 transition-opacity duration-300" />
                </a>
              </div>

              <p className="text-gray-500 text-sm">
                Applications are reviewed on a rolling basis
              </p>
            </motion.div>
          </div>
        </div>
      </main>
    </>
  );
}