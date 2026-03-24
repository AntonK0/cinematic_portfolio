import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import pfpImg from '../assets/linkedin_pfp.jpg';

gsap.registerPlugin(ScrollTrigger);

/**
 * About Me Component.
 * Serves as the primary narrative focal point. Consists of a 
 * 100dvh asymmetric grid displaying the customized portrait and user bio.
 */
export default function About() {
  // Reference for the outer wrapper, mapping ScrollTrigger constraints.
  const container = useRef(null);
  
  /**
   * Generates a ScrollTrigger mapping tied bounds to the container ref.
   * The .about-fade elements stagger up as the user scrolls them into the 70% 
   * mark of their viewport.
   */
  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".about-fade", {
        scrollTrigger: {
          trigger: container.current,
          start: "top 70%",
        },
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power3.out"
      });
    }, container);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={container} id="about" className="min-h-[100dvh] w-full px-8 py-24 md:px-16 flex items-center bg-background rounded-t-[3rem] relative z-20">
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[2fr,3fr] gap-16 md:gap-24 items-center">
        
        {/* Left Column: Portrait */}
        <div className="about-fade relative w-full aspect-[4/5] md:aspect-[3/4] rounded-[3rem] overflow-hidden portrait-treated magnetic-btn">
          <img 
            src={pfpImg} 
            alt="Anton Ko Portrait" 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Column: Narrative */}
        <div className="flex flex-col gap-8">
          <h2 className="about-fade font-serif italic text-4xl md:text-5xl text-accent leading-tight">
            Hey there!
          </h2>
          <div className="font-heading text-lg text-dark/80 flex flex-col gap-6 leading-relaxed mt-4">
            <p className="about-fade">
              I'm Anton, and welcome to my portfolio.
            </p>
            <p className="about-fade">
              I'm currently studying Computer Science and Engineering at the University of California, Irvine. Areas I'm passionate about include AI/ML, robotics, autonomous systems, and software engineering.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
