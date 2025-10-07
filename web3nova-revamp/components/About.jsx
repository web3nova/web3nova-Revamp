import React, { useState, useEffect } from 'react';
import { Shield, Eye, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';

const AboutPage = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

  const testimonials = [
    {
      text: "Your work is awesome. We'll keep using your services",
      author: "David",
      role: "CEO/Founder Digital A",
      company: "Paal AI"
    },
    {
      text: "Outstanding innovation and dedication to excellence in every project",
      author: "Sarah Chen",
      role: "CTO",
      company: "BlockChain Ventures"
    },
    {
      text: "The best Web3 development team we've worked with",
      author: "Michael Ross",
      role: "Product Lead",
      company: "DeFi Solutions"
    }
  ];

  const features = [
    {
      icon: <Eye className="w-10 h-10" />,
      title: "Transparency",
      description: "Clear processes, open communication, and verifiable blockchain solutions ensure trust at every step.",
      gradient: "from-blue-500 via-blue-600 to-purple-600"
    },
    {
      icon: <Shield className="w-10 h-10" />,
      title: "Security",
      description: "Robust encryption, secure smart contracts, and best practices protect your assets and data.",
      gradient: "from-purple-500 via-pink-500 to-purple-700"
    },
    {
      icon: <Sparkles className="w-10 h-10" />,
      title: "Creativity",
      description: "Innovative design, cutting-edge development, and user first thinking bring your Web3 vision to life.",
      gradient: "from-pink-500 via-purple-500 to-blue-600"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[data-animate]').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="min-h-screen bg-black text-white" style={{ fontFamily: "'Inter', sans-serif" }}>
      <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-md z-50 border-b border-gray-900">
        <div className="max-w-7xl mx-auto px-6 py-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-white rounded-md flex items-center justify-center">
                <span className="text-black font-bold text-lg">⬡</span>
              </div>
              <span className="text-lg font-semibold tracking-wider" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>LUXEN LABS</span>
            </div>
            <div className="hidden md:flex space-x-10 text-sm">
              <a href="/" className="text-gray-400 hover:text-white transition-colors">Home</a>
              <a href="/services" className="text-gray-400 hover:text-white transition-colors">Services</a>
              <a href="/portfolio" className="text-gray-400 hover:text-white transition-colors">Portfolio</a>
              <a href="/blog" className="text-gray-400 hover:text-white transition-colors">Blog</a>
              <a href="/about" className="text-white font-medium">About Us</a>
              <a href="/whitepaper" className="text-gray-400 hover:text-white transition-colors">Whitepaper</a>
            </div>
          </div>
        </div>
      </nav>

      <section className="pt-40 pb-24 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-7xl md:text-8xl font-bold mb-12 animate-fade-in" style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700 }}>
            About Us
          </h1>
          <div className="flex justify-center mb-8">
            <div className="text-8xl text-gray-800 leading-none" style={{ fontFamily: "'Georgia', serif" }}>"   "</div>
          </div>
          <p className="text-2xl md:text-3xl text-gray-500 max-w-3xl mx-auto animate-fade-in-delay font-light tracking-wide">
            Pioneering decentralized innovation<br />through design and technology.
          </p>
        </div>
      </section>

      <section className="py-24 px-6" id="story" data-animate>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className={`transition-all duration-1000 ${isVisible.story ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <h2 className="text-5xl md:text-6xl font-bold mb-8" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Our Story</h2>
              <p className="text-gray-400 text-base leading-relaxed mb-6 font-light">
                At Luxen Labs, we're a team of designers and developers obsessed with pushing the boundaries of Web3. We began as a small team united by a shared belief: the next generation of digital products should be as intuitive as they are groundbreaking.
              </p>
              <p className="text-gray-400 text-base leading-relaxed font-light">
                Today, we partner with visionary founders and enterprises to turn bold ideas into reality — crafting secure, scalable, and user-centric solutions that redefine industries.
              </p>
            </div>
            <div className={`transition-all duration-1000 delay-300 ${isVisible.story ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-3xl p-16 flex items-center justify-center aspect-square shadow-2xl hover:scale-105 transition-transform duration-300">
                <div className="text-white w-full h-full flex items-center justify-center">
                  <div className="w-32 h-40 bg-white rounded-2xl shadow-xl"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6" id="features" data-animate>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br from-gray-900 to-black rounded-3xl p-10 border border-gray-800 hover:border-gray-700 transition-all duration-500 hover:scale-105 hover:shadow-2xl ${
                  isVisible.features ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className={`bg-gradient-to-br ${feature.gradient} w-20 h-20 rounded-2xl flex items-center justify-center mb-8 shadow-lg`}>
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold mb-5" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{feature.title}</h3>
                <p className="text-gray-500 leading-relaxed text-sm font-light">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6" id="stats" data-animate>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { number: "70+", label: "Projects Delivered" },
              { number: "35+", label: "Tokens Launched" },
              { number: "10+", label: "Blockchain Solutions Implemented" }
            ].map((stat, index) => (
              <div
                key={index}
                className={`text-center p-10 border-t border-gray-900 transition-all duration-700 ${
                  isVisible.stats ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="text-6xl md:text-7xl font-bold mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif", color: '#fff' }}>
                  {stat.number}
                </div>
                <div className="text-gray-500 text-base font-light">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6" id="testimonials" data-animate>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-20" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Loved by founders worldwide.
          </h2>
          <div className={`relative transition-all duration-700 ${isVisible.testimonials ? 'opacity-100' : 'opacity-0'}`}>
            <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-16 border border-gray-800 min-h-[320px] flex flex-col justify-center">
              <p className="text-xl text-gray-300 mb-10 text-center font-light leading-relaxed">
                "{testimonials[currentTestimonial].text}"
              </p>
              <div className="flex items-center justify-center space-x-6">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-lg">
                  <span className="text-xl font-bold">{testimonials[currentTestimonial].author[0]}</span>
                </div>
                <div>
                  <div className="font-semibold text-lg">{testimonials[currentTestimonial].author}</div>
                  <div className="text-sm text-gray-500">{testimonials[currentTestimonial].role}</div>
                </div>
                <div className="flex items-center space-x-3 ml-6">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500"></div>
                  <span className="text-base font-medium">{testimonials[currentTestimonial].company}</span>
                </div>
              </div>
            </div>
            
            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-20 bg-gray-900 hover:bg-gray-800 rounded-full p-4 transition-all duration-300 hover:scale-110 border border-gray-800"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-20 bg-gray-900 hover:bg-gray-800 rounded-full p-4 transition-all duration-300 hover:scale-110 border border-gray-800"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <div className="flex justify-center space-x-3 mt-12">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentTestimonial ? 'bg-white w-10' : 'bg-gray-700'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-black border-t border-gray-900 py-16 px-6 mt-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-white rounded-md flex items-center justify-center">
                  <span className="text-black font-bold text-xl">⬡</span>
                </div>
                <span className="text-xl font-semibold tracking-wider" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>LUXEN LABS</span>
              </div>
              <p className="text-gray-500 text-sm font-light leading-relaxed">World class design & development trusted by Web3 founders.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-6 text-base" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Services</h4>
              <ul className="space-y-3 text-gray-500 text-sm font-light">
                <li><a href="#" className="hover:text-white transition-colors">Portfolio</a></li>
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Whitepaper</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-6 text-base" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>UI/UX Design</h4>
              <ul className="space-y-3 text-gray-500 text-sm font-light">
                <li><a href="#" className="hover:text-white transition-colors">Fullstack Websites</a></li>
                <li><a href="#" className="hover:text-white transition-colors">DApps Development</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Smart Contracts</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-6 text-base" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Telegram Bots</h4>
              <ul className="space-y-3 text-gray-500 text-sm font-light">
                <li><a href="#" className="hover:text-white transition-colors">2D/3D Animation</a></li>
              </ul>
            </div>
          </div>
          <div className="flex justify-center space-x-8 pt-12 border-t border-gray-900">
            <a href="#" className="text-gray-600 hover:text-white transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
            <a href="#" className="text-gray-600 hover:text-white transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416c-.546-1.387-1.333-1.756-1.333-1.756c-1.089-.745.083-.729.083-.729c1.205.084 1.839 1.237 1.839 1.237c1.07 1.834 2.807 1.304 3.492.997c.107-.775.418-1.305.762-1.604c-2.665-.305-5.467-1.334-5.467-5.931c0-1.311.469-2.381 1.236-3.221c-.124-.303-.535-1.524.117-3.176c0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404c2.291-1.552 3.297-1.23 3.297-1.23c.653 1.653.242 2.874.118 3.176c.77.84 1.235 1.911 1.235 3.221c0 4.609-2.807 5.624-5.479 5.921c.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
            </a>
            <a href="#" className="text-gray-600 hover:text-white transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
            <a href="#" className="text-gray-600 hover:text-white transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M13.5 2H6v20l6-4 6 4V2h-4.5z"/></svg>
            </a>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        .animate-fade-in-delay {
          animation: fade-in 1s ease-out 0.3s both;
        }
      `}</style>
    </div>
  );
};

export default AboutPage;