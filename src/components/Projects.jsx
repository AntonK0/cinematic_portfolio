import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, Github } from 'lucide-react';
import snaprecImg from '../assets/SnapRec.png';
import roostImg from '../assets/roost.png';
import spaceshipTitanicImg from '../assets/spaceship_titanic.png';

gsap.registerPlugin(ScrollTrigger);

/**
 * Projects Stacking Archive Component.
 * Iterates through flagship projects and applies a cohesive 
 * sticky stacking animation effect utilizing GSAP scroll triggers.
 */
export default function Projects() {
  // Container ref mapped to bound the complete scrolling timeline.
  const container = useRef(null);
  
  const projects = [
    {
      title: "SnapRec",
      type: "Full-Stack / Web Development",
      description: "Developed a mobile-first AI recommendation engine that reduces consumer decision-overload, achieving 1st Place Grand Prize at WebJam 2025.",
      tech: ["Gemini API", "Python", "FastAPI", "Pydantic", "TypeScript", "React", "TailwindCSS", "DaisyUI", "Vercel"],
      link: "https://devpost.com/software/snaprec",
      github: "https://github.com/AntonK0/webjam2025",
      color: "bg-background",
      image: snaprecImg,
      imageFit: "object-contain bg-white" // Filings gaps above and below with white
    },
    {
      title: "ROOST",
      type: "Embedded System / Computer Vision",
      description: "Built an accountability-focused smart alarm system that uses a web dashboard, an Arduino-controlled physical mechanism, and YOLOv8 pose detection to ensure you've actually left your bed before the alarm stops.",
      tech: ["Arduino Uno Q", "C++", "Python", "JavaScript", "HTML", "CSS", "OpenCV", "YOLOv8"],
      link: "https://devpost.com/software/roost",
      github: "https://github.com/realtimml/irvinehacks2026",
      color: "bg-background border-t border-dark/5",
      image: roostImg
    },
    {
      title: "Spaceship Titanic",
      type: "Machine Learning / Data Science",
      description: "Competed in the Kaggle Spaceship Titanic competition, achieving a 79% accuracy rate with KNN model.",
      tech: ["Python", "Scikit-learn", "Pandas", "NumPy", "Kaggle"],
      link: "https://www.kaggle.com/c/spaceship-titanic",
      github: "https://github.com/AntonK0/spaceship_titanic",
      color: "bg-background border-t border-dark/5",
      image: spaceshipTitanicImg
    }
  ];

  /**
   * Effect Hook for handling pinned card stacking effects.
   * Leverages ScrollTrigger to fix the outer card container in place,
   * while actively scaling down and blurring the internal layout block 
   * synchronously as the subsequent project card scrolls up.
   */
  useEffect(() => {
    let ctx = gsap.context(() => {
      const cards = gsap.utils.toArray('.project-card');
      
      cards.forEach((card, index) => {
        const isLast = index === cards.length - 1;
        const content = card.querySelector('.card-content');

        // Pin the outer container so that it stays in place
        ScrollTrigger.create({
          trigger: card,
          start: "top top",
          endTrigger: container.current,
          end: "bottom bottom",
          pin: true,
          pinSpacing: false, // Prevents layout manipulation; allows native overlap
        });

        // Animate the inner content shrinking/fading as the next card scrolls up
        if (!isLast) {
          gsap.to(content, {
            scale: 0.9,
            filter: "blur(20px)",
            opacity: 0.5,
            ease: "none",
            scrollTrigger: {
              trigger: cards[index + 1],
              start: "top bottom",
              end: "top top",
              scrub: true,
            }
          });
        }
      });
    }, container);
    
    return () => ctx.revert();
  }, []);

  return (
    <section ref={container} id="projects" className="w-full bg-background relative z-20">
      <div className="w-full flex flex-col relative">
        {projects.map((proj, i) => (
          <div key={i} className="project-card h-[100dvh] w-full relative z-10">
            <div className={`card-content absolute inset-0 w-full h-full flex items-center justify-center px-8 md:px-16 ${proj.color} shadow-[0_-5px_40px_rgba(27,42,56,0.05)] pt-12 origin-top will-change-transform`}>
              <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row gap-12 lg:gap-24 items-center">
               
               <div className="flex-1 flex flex-col items-start text-left">
                 <p className="font-mono text-primary font-bold tracking-widest uppercase mb-4 text-xs md:text-sm">{proj.type}</p>
                 <h2 className="font-heading font-black text-4xl md:text-6xl text-dark mb-6 leading-tight">{proj.title}</h2>
                 <p className="font-sans text-dark/70 text-base md:text-lg leading-relaxed mb-8 max-w-2xl">{proj.description}</p>
                 <div className="flex flex-wrap gap-3 mb-10">
                   {proj.tech.map((t, idx) => (
                     <span key={idx} className="px-4 py-2 rounded-[2rem] border border-dark/10 text-xs font-bold text-dark/80 bg-background hover:bg-dark/5 transition-colors cursor-default">{t}</span>
                   ))}
                 </div>
                 <div className="flex items-center gap-4">
                   <a href={proj.github} target="_blank" rel="noopener noreferrer" className="magnetic-btn flex items-center gap-2 bg-dark text-background px-6 py-3 rounded-[3rem] text-sm font-bold">
                     GitHub <Github size={16} />
                   </a>
                   <a href={proj.link} target="_blank" rel="noopener noreferrer" className="magnetic-btn flex items-center gap-2 border border-dark/20 text-dark px-6 py-3 rounded-[3rem] text-sm font-bold hover:bg-dark/5">
                     <ArrowUpRight size={16} /> Other Info
                   </a>
                 </div>
               </div>

               <div className="w-full md:flex-1 items-center justify-center hidden md:flex">
                 <div className="w-full aspect-[4/3] rounded-[3rem] bg-dark/5 border border-dark/10 overflow-hidden relative group">
                    <img src={proj.image} alt={proj.title} className={`w-full h-full ${proj.imageFit || 'object-cover'} filter saturate-50 group-hover:saturate-100 transition-all duration-700`} />
                    <div className="absolute inset-0 bg-primary/20 mix-blend-overlay group-hover:bg-transparent transition-colors duration-700"></div>
                 </div>
               </div>

             </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
