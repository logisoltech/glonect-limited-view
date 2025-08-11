"use client";

import React from 'react';
import { font } from '../Font/Font';

const Clients = () => {
  const stats = [
    {
      id: 1,
      number: "4.8/5",
      title: "Ratings",
      description: "That's our average ratings from 27689 clients"
    },
    {
      id: 2,
      number: "24/7",
      title: "Creativity",
      description: "Professionals online for your services"
    },
    {
      id: 3,
      number: "27689",
      title: "",
      description: "Happy clients so far"
    },
    {
      id: 4,
      number: "648+",
      title: "",
      description: "Open projects"
    }
  ];

  return (
    <div className={`relative bg-black ${font.className}`}>
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-grid-white/[0.1] bg-[size:50px_50px]"></div>
      
      {/* Spotlight Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Left Top Corner Spotlight */}
        <div className="absolute top-0 left-0 w-[300px] h-[200px] sm:w-[400px] sm:h-[300px] lg:w-[600px] lg:h-[400px] opacity-60">
          <div 
            className="w-full h-full"
            style={{
              background: `radial-gradient(circle at 0% 0%, 
                rgba(255, 255, 255, 0.4) 0%,
                rgba(255, 255, 255, 0.3) 15%,
                rgba(255, 255, 255, 0.2) 30%,
                rgba(255, 255, 255, 0.12) 45%,
                rgba(255, 255, 255, 0.06) 60%,
                transparent 75%)`,
              filter: 'blur(3px)',
              clipPath: 'path("M 0 0 L 100% 0 Q 100% 15% 85% 30% Q 70% 45% 55% 60% Q 40% 75% 25% 90% L 0 100% Z")'
            }}
          ></div>
        </div>
        
        {/* Right Top Corner Spotlight */}
        <div className="absolute top-0 right-0 w-[300px] h-[200px] sm:w-[400px] sm:h-[300px] lg:w-[600px] lg:h-[400px] opacity-60">
          <div 
            className="w-full h-full"
            style={{
              background: `radial-gradient(circle at 100% 0%, 
                rgba(255, 255, 255, 0.4) 0%,
                rgba(255, 255, 255, 0.3) 15%,
                rgba(255, 255, 255, 0.2) 30%,
                rgba(255, 255, 255, 0.12) 45%,
                rgba(255, 255, 255, 0.06) 60%,
                transparent 75%)`,
              filter: 'blur(3px)',
              clipPath: 'path("M 100% 0 L 0 0 Q 0 15% 15% 30% Q 30% 45% 45% 60% Q 60% 75% 75% 90% L 100% 100% Z")'
            }}
          ></div>
        </div>
        
        {/* Title Focus Area */}
        <div className="absolute top-8 sm:top-12 lg:top-16 left-1/2 transform -translate-x-1/2 w-64 sm:w-80 lg:w-96 h-20 sm:h-24 lg:h-32 opacity-25">
          <div 
            className="w-full h-full"
            style={{
              background: `radial-gradient(ellipse 90% 100% at center, 
                rgba(255, 255, 255, 0.2) 0%,
                rgba(255, 255, 255, 0.12) 30%,
                rgba(255, 255, 255, 0.06) 60%,
                transparent 85%)`,
              filter: 'blur(20px)'
            }}
          ></div>
        </div>
        
        {/* Soft Blended Beams Toward Center */}
        <div className="absolute top-0 left-0 w-full h-full">
          {/* Left soft beam */}
          <div 
            className="absolute top-0 left-0 w-3/5 h-2/5 opacity-25"
            style={{
              background: `radial-gradient(ellipse 60% 80% at 0% 0%, 
                rgba(255, 255, 255, 0.3) 0%, 
                rgba(255, 255, 255, 0.2) 25%, 
                rgba(255, 255, 255, 0.1) 50%,
                rgba(255, 255, 255, 0.05) 70%,
                transparent 90%)`,
              filter: 'blur(3px)',
              transform: 'rotate(20deg)',
              transformOrigin: '0% 0%'
            }}
          ></div>
          
          {/* Right soft beam */}
          <div 
            className="absolute top-0 right-0 w-3/5 h-2/5 opacity-25"
            style={{
              background: `radial-gradient(ellipse 60% 80% at 100% 0%, 
                rgba(255, 255, 255, 0.3) 0%, 
                rgba(255, 255, 255, 0.2) 25%, 
                rgba(255, 255, 255, 0.1) 50%,
                rgba(255, 255, 255, 0.05) 70%,
                transparent 90%)`,
              filter: 'blur(3px)',
              transform: 'rotate(-20deg)',
              transformOrigin: '100% 0%'
            }}
          ></div>
          
          {/* Additional soft glow layers */}
          <div 
            className="absolute top-0 left-0 w-1/2 h-1/3 opacity-15"
            style={{
              background: `radial-gradient(ellipse 70% 100% at 0% 0%, 
                rgba(255, 255, 255, 0.2) 0%, 
                rgba(255, 255, 255, 0.1) 40%,
                transparent 70%)`,
              filter: 'blur(8px)',
              transform: 'rotate(25deg)',
              transformOrigin: '0% 0%'
            }}
          ></div>
          
          <div 
            className="absolute top-0 right-0 w-1/2 h-1/3 opacity-15"
            style={{
              background: `radial-gradient(ellipse 70% 100% at 100% 0%, 
                rgba(255, 255, 255, 0.2) 0%, 
                rgba(255, 255, 255, 0.1) 40%,
                transparent 70%)`,
              filter: 'blur(8px)',
              transform: 'rotate(-25deg)',
              transformOrigin: '100% 0%'
            }}
          ></div>
        </div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center mb-12 sm:mb-14 lg:mb-16">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-4 sm:mb-6">
              Our Clients <span className="text-white">Love Us</span>
            </h1>
            <p className="text-gray-300 text-base sm:text-lg max-w-3xl mx-auto px-4">
              The greatest gratification is to receive recognition for what we have built.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12">
            {stats.map((stat) => (
              <div key={stat.id} className="text-center">
                {/* Stat Number */}
                <div className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-2 sm:mb-4">
                  {stat.number}
                  {stat.title && (
                    <span className="block text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-white mt-1">
                      {stat.title}
                    </span>
                  )}
                </div>
                
                {/* Stat Description */}
                <p className="text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed max-w-xs mx-auto">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Clients;