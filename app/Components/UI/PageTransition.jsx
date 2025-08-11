"use client";

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { font } from '../Font/Font';

const PageTransition = ({ isActive, targetPage, onComplete }) => {
  const overlayRef = useRef(null);
  const textRef = useRef(null);
  const circleRef = useRef(null);
  const particles = useRef([]);
  const timelineRef = useRef(null);

  useEffect(() => {
    if (isActive) {
      // Small delay to ensure DOM elements are rendered
      const animationTimeout = setTimeout(() => {
        if (overlayRef.current && textRef.current && circleRef.current) {
          // Kill any existing timeline
          if (timelineRef.current) {
            timelineRef.current.kill();
          }
          
          const tl = gsap.timeline({
        onComplete: () => {
          // Call onComplete to trigger navigation
          onComplete?.();
          
          // After navigation, start exit animation
          setTimeout(() => {
            // Check if elements still exist before exit animation
            if (overlayRef.current && textRef.current && particles.current.length > 0) {
              const exitTl = gsap.timeline({
                onComplete: () => {
                  // Hide the overlay completely after exit
                  if (overlayRef.current) {
                    gsap.set(overlayRef.current, { display: 'none' });
                  }
                }
              });
              
              exitTl.to(textRef.current, {
                opacity: 0,
                y: -30,
                rotationX: -90,
                duration: 0.5,
                ease: "power2.in"
              })
              .to(particles.current.filter(p => p !== null), {
                opacity: 0,
                scale: 0,
                duration: 0.3,
                stagger: 0.05
              }, "-=0.3")
              .to(overlayRef.current, {
                clipPath: 'circle(0% at 50% 50%)',
                duration: 0.8,
                ease: "power2.inOut"
              }, "-=0.2");
            }
          }, 800); // Wait for page to load
        }
      });

      // Create the main transition timeline
      tl.set(overlayRef.current, { 
        display: 'flex',
        clipPath: 'circle(0% at 50% 50%)'
      })
      .set(textRef.current, { 
        opacity: 0, 
        y: 50,
        rotationX: 90 
      })
      .set(circleRef.current, { 
        scale: 0,
        rotation: 0 
      })
      
      // Animate the circular reveal
      .to(overlayRef.current, {
        clipPath: 'circle(150% at 50% 50%)',
        duration: 1.2,
        ease: "power2.inOut"
      })
      
      // Animate the expanding circle
      .to(circleRef.current, {
        scale: 1,
        rotation: 360,
        duration: 1,
        ease: "back.out(1.7)"
      }, "-=0.8")
      
      // Animate text entrance
      .to(textRef.current, {
        opacity: 1,
        y: 0,
        rotationX: 0,
        duration: 0.8,
        ease: "power2.out"
      }, "-=0.6")
      
      // Animate particles (filter out null refs)
      .to(particles.current.filter(p => p !== null), {
        opacity: 1,
        scale: 1,
        rotation: 360,
        duration: 0.6,
        stagger: 0.1,
        ease: "back.out(1.7)"
      }, "-=0.4")
      
      // Hold for the page name display
      .to({}, { duration: 0.5 });
      
          // Store timeline reference for cleanup
          timelineRef.current = tl;
        }
      }, 50); // 50ms delay

      return () => {
        clearTimeout(animationTimeout);
      };
    }
  }, [isActive, onComplete]);

  // Cleanup effect
  useEffect(() => {
    return () => {
      if (timelineRef.current) {
        timelineRef.current.kill();
      }
    };
  }, []);

  const createParticles = () => {
    return Array.from({ length: 12 }, (_, i) => (
      <div
        key={i}
        ref={el => particles.current[i] = el}
        className="absolute w-2 h-2 bg-teal-400 rounded-full opacity-0"
        style={{
          left: `${Math.cos((i * 30) * Math.PI / 180) * 80}px`,
          top: `${Math.sin((i * 30) * Math.PI / 180) * 80}px`,
          transform: 'translate(-50%, -50%)',
        }}
      />
    ));
  };

  if (!isActive) return null;

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[9999] bg-gradient-to-br from-gray-900 via-blue-900 to-teal-900 hidden items-center justify-center"
      style={{ clipPath: 'circle(0% at 50% 50%)' }}
    >
      {/* Background pattern */}
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:50px_50px]"></div>
      
      {/* Animated circle */}
      <div
        ref={circleRef}
        className="absolute w-32 h-32 border-2 border-teal-400/50 rounded-full"
        style={{ transform: 'scale(0)' }}
      />
      
      {/* Particles */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-0 h-0">
          {createParticles()}
        </div>
      </div>
      
      {/* Transition text */}
      <div className={`${font.className} text-center relative z-10`}>
        <h2
          ref={textRef}
          className="text-4xl md:text-6xl font-bold text-white mb-4"
          style={{ opacity: 0 }}
        >
          {targetPage?.toUpperCase() || 'LOADING'}
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-teal-400 mx-auto"></div>
      </div>
      
      {/* Loading dots */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2">
        <div className="flex space-x-2">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="w-2 h-2 bg-teal-400 rounded-full animate-pulse"
              style={{ animationDelay: `${i * 0.2}s` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PageTransition; 