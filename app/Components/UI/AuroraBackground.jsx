"use client";
import React from "react";

export const AuroraBackground = ({ children, className = "" }) => {
  return (
    <div className={`relative min-h-screen overflow-hidden ${className}`}>
      {/* Base dark background */}
      <div className="absolute inset-0 bg-black"></div>
      
      {/* Aurora layers */}
      <div className="absolute inset-0">
        {/* Primary aurora waves */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-gray-900 to-blue-900/50"></div>
        
                 {/* Aurora curtains - full height with side blending */}
         <div className="absolute inset-0 opacity-50">
           {/* Thin aurora streaks with horizontal fading */}
           <div 
             className="absolute top-0 left-1/4 w-32 h-full transform -skew-x-12 filter blur-sm"
             style={{
               background: `
                 linear-gradient(to bottom, 
                   rgba(34, 197, 94, 0.6) 0%, 
                   rgba(34, 197, 94, 0.8) 25%, 
                   rgba(59, 130, 246, 0.6) 50%, 
                   rgba(147, 51, 234, 0.4) 75%, 
                   rgba(34, 197, 94, 0.6) 100%
                 )
               `,
               maskImage: 'linear-gradient(to right, transparent 0%, black 20%, black 80%, transparent 100%)',
               animation: 'aurora-flow 8s ease-in-out infinite alternate'
             }}
           ></div>
           
           <div 
             className="absolute top-0 right-1/3 w-24 h-full transform skew-x-6 filter blur-sm"
             style={{
               background: `
                 linear-gradient(to bottom, 
                   rgba(59, 130, 246, 0.7) 0%, 
                   rgba(147, 51, 234, 0.8) 30%, 
                   rgba(34, 197, 94, 0.5) 60%, 
                   rgba(59, 130, 246, 0.7) 100%
                 )
               `,
               maskImage: 'linear-gradient(to right, transparent 0%, black 25%, black 75%, transparent 100%)',
               animation: 'aurora-flow-reverse 12s ease-in-out infinite alternate'
             }}
           ></div>
           
           <div 
             className="absolute top-0 left-1/2 w-20 h-full transform -skew-x-6 filter blur-sm"
             style={{
               background: `
                 linear-gradient(to bottom, 
                   rgba(147, 51, 234, 0.6) 0%, 
                   rgba(59, 130, 246, 0.7) 33%, 
                   rgba(34, 197, 94, 0.5) 66%, 
                   rgba(147, 51, 234, 0.6) 100%
                 )
               `,
               maskImage: 'linear-gradient(to right, transparent 0%, black 30%, black 70%, transparent 100%)',
               animation: 'aurora-flow 10s ease-in-out infinite alternate',
               animationDelay: '2s'
             }}
           ></div>
           
           <div 
             className="absolute top-0 right-1/4 w-16 h-full transform skew-x-12 filter blur-sm"
             style={{
               background: `
                 linear-gradient(to bottom, 
                   rgba(34, 197, 94, 0.5) 0%, 
                   rgba(59, 130, 246, 0.6) 40%, 
                   rgba(147, 51, 234, 0.7) 80%, 
                   rgba(34, 197, 94, 0.5) 100%
                 )
               `,
               maskImage: 'linear-gradient(to right, transparent 0%, black 35%, black 65%, transparent 100%)',
               animation: 'aurora-flow-reverse 14s ease-in-out infinite alternate',
               animationDelay: '1s'
             }}
           ></div>
           
           <div 
             className="absolute top-0 left-2/3 w-28 h-full transform -skew-x-3 filter blur-sm"
             style={{
               background: `
                 linear-gradient(to bottom, 
                   rgba(59, 130, 246, 0.5) 0%, 
                   rgba(34, 197, 94, 0.7) 25%, 
                   rgba(147, 51, 234, 0.6) 50%, 
                   rgba(59, 130, 246, 0.5) 75%, 
                   rgba(34, 197, 94, 0.7) 100%
                 )
               `,
               maskImage: 'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)',
               animation: 'aurora-flow 9s ease-in-out infinite alternate',
               animationDelay: '3s'
             }}
           ></div>
         </div>
        
        {/* Dancing light particles */}
        <div className="absolute inset-0 opacity-20">
          {[
            { left: 15, top: 25, duration: 4.2, delay: 0.5 },
            { left: 85, top: 35, duration: 5.8, delay: 1.2 },
            { left: 45, top: 70, duration: 3.6, delay: 0.8 },
            { left: 75, top: 15, duration: 6.1, delay: 1.8 },
            { left: 25, top: 85, duration: 4.9, delay: 0.3 },
            { left: 65, top: 55, duration: 5.2, delay: 1.5 },
            { left: 35, top: 40, duration: 3.8, delay: 0.9 },
            { left: 90, top: 80, duration: 4.5, delay: 0.6 },
            { left: 10, top: 60, duration: 5.5, delay: 1.1 },
            { left: 55, top: 20, duration: 4.1, delay: 0.4 },
            { left: 80, top: 75, duration: 5.9, delay: 1.7 },
            { left: 20, top: 45, duration: 3.9, delay: 0.7 },
            { left: 70, top: 90, duration: 4.7, delay: 1.3 },
            { left: 40, top: 10, duration: 5.3, delay: 0.2 },
            { left: 85, top: 50, duration: 4.4, delay: 1.0 },
            { left: 30, top: 65, duration: 5.7, delay: 1.6 },
            { left: 60, top: 30, duration: 3.7, delay: 0.1 },
            { left: 95, top: 85, duration: 4.8, delay: 1.4 },
            { left: 5, top: 15, duration: 5.1, delay: 0.5 },
            { left: 50, top: 95, duration: 4.3, delay: 1.9 }
          ].map((particle, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-blue-400 rounded-full"
              style={{
                left: `${particle.left}%`,
                top: `${particle.top}%`,
                animation: `aurora-particle ${particle.duration}s ease-in-out infinite`,
                animationDelay: `${particle.delay}s`
              }}
            ></div>
          ))}
        </div>
        
        {/* Subtle moving gradients */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full mix-blend-screen filter blur-3xl animate-float"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full mix-blend-screen filter blur-3xl animate-float-delayed"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-green-400/10 rounded-full mix-blend-screen filter blur-3xl animate-float-slow"></div>
        </div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default AuroraBackground; 