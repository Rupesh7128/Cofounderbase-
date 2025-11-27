import React, { useEffect, useRef, useState } from 'react';
import { AppPreview } from './components/AppPreview';
import { Button } from './components/Button';
import { YOUFORM_LINK, LAUNCH_DATE } from './constants';
import { ChevronDown, Rocket, Users, Lock, Zap } from 'lucide-react';

const App: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [founderCount, setFounderCount] = useState(125);
  const [displayCount, setDisplayCount] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll effects for parallax and header
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      
      // Header shrinking logic
      setIsScrolled(scrolled > 50);

      // Parallax logic
      const stars = document.getElementById('stars');
      if (stars) {
        stars.style.transform = `translateY(${scrolled * 0.5}px)`;
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Founder Counter Logic
  useEffect(() => {
    // Increment every 3 minutes (180,000 ms)
    const interval = setInterval(() => {
      setFounderCount(c => c + 1);
    }, 180000);

    return () => clearInterval(interval);
  }, []);

  // Animation for the counter on load
  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const increment = founderCount / steps;
    let current = 0;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= founderCount) {
        setDisplayCount(founderCount);
        clearInterval(timer);
      } else {
        setDisplayCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [founderCount]);

  const scrollToWaitlist = () => {
    document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen relative selection:bg-brand-500 selection:text-white">
      
      {/* Background & Parallax Elements */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div id="stars" className="absolute inset-0 opacity-30" 
             style={{backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '50px 50px'}}></div>
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-brand-600/20 rounded-full blur-[120px] mix-blend-screen animate-pulse-slow" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] mix-blend-screen" />
      </div>

      {/* Header */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
          isScrolled 
            ? 'h-16 bg-black/80 backdrop-blur-xl border-white/10 shadow-lg' 
            : 'h-24 bg-transparent border-transparent'
        }`}
      >
        <div className="container mx-auto px-6 h-full flex items-center justify-between transition-all duration-300">
          <div className="flex items-center gap-2">
            <div className={`transition-all duration-300 bg-gradient-to-tr from-brand-600 to-blue-500 rounded-lg flex items-center justify-center font-bold text-white ${isScrolled ? 'w-8 h-8 text-lg' : 'w-10 h-10 text-xl'}`}>C</div>
            <span className={`font-bold tracking-tight text-white transition-all duration-300 ${isScrolled ? 'text-xl' : 'text-2xl'}`}>Cofounder<span className="text-brand-400">Base</span></span>
          </div>
          <div className="flex items-center gap-6">
            <span className="hidden md:inline-flex px-3 py-1 rounded-full border border-brand-500/30 bg-brand-500/10 text-brand-300 text-xs font-medium">
              Launching Jan 2026
            </span>
            <Button size={isScrolled ? 'sm' : 'md'} onClick={scrollToWaitlist}>Join Waitlist</Button>
          </div>
        </div>
      </header>

      <main className="relative z-10 pt-32 pb-20">
        
        {/* HERO SECTION */}
        <section className="container mx-auto px-6 mb-32 text-center pt-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-300 text-sm mb-8 animate-fadeIn">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            {displayCount.toLocaleString()} Founders waiting online
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold mb-8 leading-tight tracking-tight">
            Stop Building <span className="gradient-text">Alone</span>. <br />
            Find Your <span className="text-white relative inline-block">
              Perfect Match
              <svg className="absolute w-full h-3 -bottom-1 left-0 text-brand-600" viewBox="0 0 200 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.00025 6.99997C2.00025 6.99997 54.5003 1.5 100.5 1.5C146.5 1.5 198 6.99997 198 6.99997" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/></svg>
            </span>.
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-8 leading-relaxed">
            The exclusive directory for serious founders. We use advanced behavioral matching to pair you with the co-founder you've been searching for.
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-12">
            <Button size="lg" onClick={scrollToWaitlist} className="w-full md:w-auto">
              <Rocket className="w-5 h-5 mr-2" />
              Join the Waitlist
            </Button>
            <Button variant="secondary" size="lg" className="w-full md:w-auto group" onClick={() => document.getElementById('preview')?.scrollIntoView({behavior:'smooth'})}>
              See How It Works
              <ChevronDown className="w-5 h-5 ml-2 group-hover:translate-y-1 transition-transform" />
            </Button>
          </div>

          <p className="text-brand-400/80 text-sm font-medium tracking-wide">
            Only $1/month membership fee upon launch.
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-8 border-y border-white/5 py-12 max-w-2xl mx-auto mt-16">
            {[
              { label: 'Founders Waiting', value: displayCount.toLocaleString() },
              { label: 'Beta Launch', value: 'Jan 2026' },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-sm text-gray-500 uppercase tracking-wider font-semibold">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* APP PREVIEW SECTION */}
        <section id="preview" className="container mx-auto px-6 mb-32">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Everything you need to <span className="text-brand-400">scale</span></h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              From discovery to equity agreements, CofounderBase handles the messy human part of building a startup.
            </p>
          </div>
          <AppPreview />
        </section>

        {/* FEATURES GRID */}
        <section className="container mx-auto px-6 mb-32">
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {[
               { icon: Users, title: "Verified Profiles", desc: "No more wantrepreneurs. Every profile is vetted manually to ensure high-intent founders." },
               { icon: Zap, title: "Velocity Matching", desc: "Our algorithm matches you based on speed of execution, not just skills on paper." },
               { icon: Lock, title: "Equity Contracts", desc: "Built-in legal templates for Vesting, IP assignment, and Co-founder agreements." }
             ].map((feature, i) => (
               <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors">
                 <div className="w-12 h-12 bg-brand-900/50 rounded-lg flex items-center justify-center mb-6 text-brand-400">
                   <feature.icon className="w-6 h-6" />
                 </div>
                 <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                 <p className="text-gray-400 leading-relaxed">{feature.desc}</p>
               </div>
             ))}
           </div>
        </section>

        {/* WAITLIST / YOUFORM SECTION */}
        <section id="waitlist" className="container mx-auto px-6 mb-20">
          <div className="max-w-4xl mx-auto glass-panel p-1 rounded-3xl relative">
            <div className="absolute inset-0 bg-gradient-to-r from-brand-600 to-purple-600 opacity-20 blur-2xl -z-10 rounded-3xl"></div>
            <div className="bg-black rounded-[20px] overflow-hidden">
              <div className="p-8 md:p-12 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Secure your spot for 2026</h2>
                <p className="text-gray-400 mb-8">We are limiting the first cohort to 2,000 founders. Don't miss out.</p>
                
                <div className="w-full h-[600px] md:h-[800px] bg-white rounded-xl overflow-hidden">
                   <iframe 
                    src={YOUFORM_LINK} 
                    loading="lazy" 
                    width="100%" 
                    height="100%" 
                    frameBorder="0" 
                    marginHeight={0} 
                    marginWidth={0}
                    title="CofounderBase Waitlist"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-black pt-20 pb-10 relative z-10">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
               <div className="w-6 h-6 bg-gradient-to-tr from-brand-600 to-blue-500 rounded flex items-center justify-center font-bold text-white text-xs">C</div>
               <span className="font-bold text-lg text-white">CofounderBase</span>
            </div>
            <div className="flex gap-8 text-sm text-gray-400">
              <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Contact</a>
            </div>
          </div>
          <div className="text-center md:text-left text-gray-600 text-sm">
            &copy; {new Date().getFullYear()} CofounderBase Inc. All rights reserved. Launching {LAUNCH_DATE}.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;