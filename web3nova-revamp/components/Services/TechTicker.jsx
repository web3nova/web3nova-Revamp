
// ===================================================================
// Components/Services/TechTicker.jsx
// ===================================================================

function TechTicker() {
    const techStack = [
      "Solidity", "Hardhat", "Ethers.js", "Web3.js", "Next.js", 
      "React", "TypeScript", "IPFS", "The Graph", "Wagmi", 
      "RainbowKit", "OpenZeppelin", "Chainlink", "Polygon", "Ethereum"
    ];
  
    return (
      <section className="relative py-6 overflow-hidden" style={{ backgroundColor: '#4A90E2' }}>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-50" />
        <div className="flex animate-scroll whitespace-nowrap relative z-10">
          {[...techStack, ...techStack].map((tech, index) => (
            <span 
              key={index} 
              className="inline-flex items-center px-6 text-white font-bold text-lg"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              {tech}
              <span className="mx-4 text-white/50">✦</span>
            </span>
          ))}
        </div>
  
        <style jsx>{`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-scroll { animation: scroll 30s linear infinite; }
        `}</style>
      </section>
    );
  }
  
  export default TechTicker;
  