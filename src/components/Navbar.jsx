import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Github, Mail, Linkedin } from 'lucide-react';
import resumePdf from '../assets/anton_ko_resume.pdf';

gsap.registerPlugin(ScrollTrigger);

/**
 * Global Floating Navbar Component.
 * Responsive pill-shaped container that actively toggles its background context 
 * and shadows based on the user's scroll position relative to the underlying sections.
 */
export default function Navbar() {
  const navRef = useRef(null);
  const [navTheme, setNavTheme] = useState('transparent'); 

  useEffect(() => {
    let ctx = gsap.context(() => {
      const sections = document.querySelectorAll('section');
      
      const updateTheme = (id) => {
        if (id === 'hero') {
          setNavTheme('transparent');
        } else if (id === 'contact') {
          setNavTheme('dark');
        } else {
          setNavTheme('light');
        }
      };

      sections.forEach((sec) => {
        ScrollTrigger.create({
          trigger: sec,
          start: "top 45px", // roughly the center of the navbar vertically
          end: "bottom 45px",
          onEnter: () => updateTheme(sec.id),
          onEnterBack: () => updateTheme(sec.id),
        });
      });
      
    });
    
    return () => ctx.revert();
  }, []);

  const getNavClasses = () => {
    switch (navTheme) {
      case 'dark':
        // Over dark section: dark glassy background, white text
        return 'bg-dark/40 backdrop-blur-xl shadow-lg border-white/10 text-white';
      case 'light':
        // Over light section: light glassy background, dark text
        return 'bg-background/80 backdrop-blur-xl shadow-lg border-dark/10 text-dark';
      case 'transparent':
      default:
        // Over hero image: transparent background, dark text
        return 'bg-transparent border-transparent shadow-none text-dark';
    }
  };

  const handleScrollTo = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav ref={navRef} className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 flex items-center justify-between w-[90%] md:w-[600px] py-3 px-6 rounded-[3rem] border transition-all duration-300 ${getNavClasses()}`}>
      <div 
        className="font-heading font-bold text-lg hover-lift cursor-pointer"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        Anton Ko
      </div>
      <div className="hidden md:flex items-center gap-6 font-sans text-sm font-medium opacity-80">
        <a href="#about" onClick={(e) => handleScrollTo(e, 'about')} className="hover-lift hover:opacity-100 transition-opacity">About Me</a>
        <a href="#projects" onClick={(e) => handleScrollTo(e, 'projects')} className="hover-lift hover:opacity-100 transition-opacity">Projects</a>
        <a href={resumePdf} download="Anton_Ko_Resume.pdf" className="hover-lift hover:opacity-100 transition-opacity">Resume</a>
      </div>
      <div className="flex items-center gap-4">
        <a href="https://github.com/AntonK0" target="_blank" rel="noreferrer" className="magnetic-btn hover-lift hover:text-primary transition-colors">
          <Github size={20} />
        </a>
        <a href="mailto:anton.ko0408@gmail.com" className="magnetic-btn hover-lift hover:text-primary transition-colors">
          <Mail size={20} />
        </a>
        <a href="https://www.linkedin.com/in/anton-m-ko/" target="_blank" rel="noreferrer" className="magnetic-btn hover-lift hover:text-primary transition-colors">
          <Linkedin size={20} />
        </a>
      </div>
    </nav>
  );
}
