import React from 'react';
import resumePdf from '../assets/anton_ko_resume.pdf';

/**
 * Contact and Global Footer Component.
 * Built to serve as the finalizing CTA "Hook" for visitors. 
 * Integrates an overlapping dark background to seamlessly anchor the page.
 */
export default function ContactFooter() {
  return (
    <section id="contact" className="w-full min-h-[100dvh] bg-accent text-background rounded-t-[4rem] px-8 md:px-16 pt-32 pb-12 flex flex-col justify-between relative z-30 -mt-10 overflow-hidden">
      
      {/* Decorative background element matching Preset E */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-center justify-center flex-1 text-center mb-24">
        <p className="font-mono text-primary font-bold tracking-widest uppercase mb-6 md:mb-8 text-sm">Ready to build</p>
        <h2 className="font-heading font-black text-5xl md:text-[8rem] leading-[1.1] text-background mb-12 md:mb-20">
          Let's Start an <span className="font-serif italic text-primary block mt-2 md:mt-4">Initiative.</span>
        </h2>
        
        <a href="mailto:anton.ko0408@gmail.com" className="magnetic-btn bg-primary text-accent px-12 md:px-16 py-5 md:py-6 rounded-[3rem] text-xl md:text-2xl font-bold hover:bg-white transition-colors shadow-[0_10px_40px_rgba(117,170,219,0.2)]">
          Contact Me
        </a>
      </div>

      {/* Footer */}
      <div className="relative z-10 w-full max-w-7xl mx-auto border-t border-background/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="w-2.5 h-2.5 rounded-full bg-[#4ADE80] animate-pulse"></div>
          <span className="font-mono text-xs md:text-sm text-background/70 tracking-wide uppercase">Available for new opportunities</span>
        </div>
        
        <div className="font-heading text-lg font-bold text-background opacity-90">
          Anton Ko
        </div>
        
        <div className="flex items-center gap-6 font-sans text-sm font-medium text-background/70">
          <a href="https://www.linkedin.com/in/anton-m-ko/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors hover-lift">LinkedIn</a>
          <a href="https://github.com/AntonK0" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors hover-lift">GitHub</a>
          <a href={resumePdf} download="Anton_Ko_Resume.pdf" className="hover:text-primary transition-colors hover-lift">Resume</a>
        </div>
      </div>
      
    </section>
  );
}
