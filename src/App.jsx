import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ContactFooter from './components/ContactFooter';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * The root Application component structure.
 * Assembles all layout components and registers global page-wide interactions, 
 * strictly adhering to the "Cinematic Portfolio" design rules.
 */
function App() {
  /**
   * Global effect hook to initialize the "Magnetic Button" micro-interaction.
   * Targets all anchor tags and buttons holding the '.magnetic-btn' class.
   * Attaches pointer events to compute cursor coordinates and maps them 
   * via GSAP tweens onto x,y transforms, making buttons 'pull' toward the cursor.
   */
  useEffect(() => {
    // Global magnetic button logic
    const magneticBtns = document.querySelectorAll('.magnetic-btn');
    
    magneticBtns.forEach(btn => {
      const handleMouseMove = (e) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        
        gsap.to(btn, {
          x: x * 0.3,
          y: y * 0.3,
          duration: 0.3,
          ease: "power2.out",
        });
      };
      
      const handleMouseLeave = () => {
        gsap.to(btn, {
          x: 0,
          y: 0,
          duration: 0.7,
          ease: "elastic.out(1, 0.3)",
        });
      };

      btn.addEventListener('mousemove', handleMouseMove);
      btn.addEventListener('mouseleave', handleMouseLeave);
      
      return () => {
        btn.removeEventListener('mousemove', handleMouseMove);
        btn.removeEventListener('mouseleave', handleMouseLeave);
      };
    });
  }, []);

  return (
    <main className="w-full min-h-screen bg-background text-dark font-sans overflow-x-hidden selection:bg-accent selection:text-background relative">
      <div className="noise-overlay"></div>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <ContactFooter />
    </main>
  );
}

export default App;
