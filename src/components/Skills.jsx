import React, { useEffect, useState } from 'react';
import { LocateFixed, Clock } from 'lucide-react';

/**
 * Skills & Location Component.
 * Implements two distinct functional Micro-UIs:
 * 1. An automated, continuously scrolling marquee displaying the technical stack.
 * 2. A real-time local clock synchronized to Pacific Time (Irvine, CA).
 */
export default function Skills() {
  const [time, setTime] = useState("");
  
  /**
   * Effect hook to manage the live clock interface.
   * Calculates the current localized time natively and schedules an update interval.
   */
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString('en-US', { timeZone: 'America/Los_Angeles', hour: '2-digit', minute: '2-digit', second: '2-digit' }));
    };
    updateTime();
    const int = setInterval(updateTime, 1000);
    return () => clearInterval(int);
  }, []);

  const techs = ["React 19", "Python", "C++", "Node.js", "Tailwind CSS", "HTML", "JavaScript", "Git"];

  return (
    <section id="skills" className="w-full px-8 md:px-16 pb-24 bg-background relative z-20">
      <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row gap-8">
        
        {/* Carousel Card */}
        <div className="flex-1 bg-background border border-dark/5 rounded-[3rem] p-8 md:p-10 shadow-[0_8px_30px_rgb(27,42,56,0.03)] hover-lift flex flex-col justify-between overflow-hidden relative">
          <div className="mb-10">
            <h3 className="font-mono text-sm tracking-widest text-primary font-bold uppercase mb-2">Technical Skills</h3>
            <p className="font-heading text-dark/60 text-sm">Languages, Frameworks, & Tools</p>
          </div>
          
          <div className="relative w-full flex overflow-hidden">
            <div className="flex gap-4 animate-scroll whitespace-nowrap py-4">
              {techs.concat(techs).map((tech, i) => (
                <div key={i} className="px-6 py-3 rounded-[2rem] bg-accent/5 text-accent font-mono text-sm border border-accent/10 whitespace-nowrap cursor-default transition-all hover:bg-accent hover:text-background">
                  {tech}
                </div>
              ))}
            </div>
            {/* Fade Edges */}
            <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none"></div>
            <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none"></div>
          </div>
        </div>

        {/* Local Time Card */}
        <div className="md:w-1/3 bg-background border border-dark/5 rounded-[3rem] p-8 md:p-10 shadow-[0_8px_30px_rgb(27,42,56,0.03)] hover-lift flex flex-col justify-between">
          <div>
            <h3 className="font-mono text-sm tracking-widest text-primary font-bold uppercase mb-4">My Timezone</h3>
            <div className="flex items-center gap-3 text-dark font-heading font-medium">
              <LocateFixed size={18} className="text-accent" />
              <span>Irvine, CA / PT</span>
            </div>
          </div>
          <div className="mt-8 flex items-center justify-between">
            <div className="text-3xl md:text-4xl font-heading font-black text-dark tracking-tight">{time}</div>
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center magnetic-btn">
               <Clock size={20} className="text-primary" />
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
}
