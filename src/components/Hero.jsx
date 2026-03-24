import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import heroImg from '../assets/hero.jpg';

/**
 * Hero Section Component.
 * The primary landing viewport for the application mapping "Peak Clarity" logic.
 * Encompasses a full-bleed Unsplash image with gradient overlays, 
 * alongside highly prominent staggered typography entrance animations.
 */
export default function Hero() {
  // Container ref utilized as the top-level GSAP Context boundary
  const container = useRef(null);
  
  /**
   * Effect Hook orchestrating our entrance animations.
   * `gsap.context` guarantees safe cleanup of all generated tweens 
   * localized purely to this specific `<section>`.
   */
  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".hero-text", {
        y: 100,
        opacity: 0,
        duration: 1.2,
        stagger: 0.08,
        ease: "power3.out",
        delay: 0.2
      });
    }, container);
    return () => ctx.revert();
  }, []);

  // Using a peak/cloud-heavy Unsplash image suitable for Preset E.
  return (
    <section ref={container} id="hero" className="relative h-[100dvh] w-full flex items-end justify-start pb-24 px-8 md:px-16 overflow-hidden">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImg} 
          alt="Peak Clarity Mountains" 
          className="w-full h-full object-cover object-bottom" 
        />
        {/* Primary to dark gradient overlay simulating text contrast and blend */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent"></div>
        <div className="absolute inset-0 bg-accent/10"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 w-full max-w-5xl rounded-[3rem]">
        <p className="hero-text font-mono text-accent text-sm md:text-base font-bold mb-6 tracking-widest uppercase">
          Anton Ko — Full-Stack Engineer
        </p>
        <h1 className="font-heading font-black text-6xl md:text-[8rem] leading-[1.1] flex flex-col text-dark">
          <span className="hero-text">Explore my</span>
          <span className="hero-text font-serif italic text-primary/90 mt-[-10px]">portfolio.</span>
        </h1>
      </div>
    </section>
  );
}
