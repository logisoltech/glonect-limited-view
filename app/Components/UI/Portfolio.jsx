"use client";

import React, { useState } from 'react'
import Image from 'next/image'
import { font } from '../Font/Font'

const Portfolio = () => {
  const [showMore, setShowMore] = useState(false);
  
  const portfolioItems = [
    { id: 1, title: "App Lab", category: "App Development" },
    { id: 2, title: "Flow 98z", category: "Health" },
    { id: 3, title: "Mountains Of Utah", category: "Nature" },
    { id: 4, title: "Side Chics", category: "Food" },
    { id: 5, title: "Ferguson", category: "Aviation" },
    { id: 6, title: "Cloud Republic", category: "SaaS" }
  ]
  
  const additionalItems = [
    { id: 7, title: "App Lab", category: "App Development" },
    { id: 8, title: "Flow 98z", category: "Health" },
    { id: 9, title: "Mountains Of Utah", category: "Nature" },
    { id: 10, title: "Side Chics", category: "Food" },
    { id: 11, title: "Ferguson", category: "Aviation" },
    { id: 12, title: "Cloud Republic", category: "SaaS" }
  ]
  
  const displayItems = showMore ? [...portfolioItems, ...additionalItems] : portfolioItems;

  return (
    <div className={`relative min-h-screen bg-black ${font.className}`}>
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-grid-white/[0.1] bg-[size:50px_50px]"></div>
      
      {/* Spotlight Effects Targeting Portfolio Title */}
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
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6">
              Our <span style={{ color: '#204092' }}>Portfolio</span>
            </h1>
            <p className="text-gray-300 text-base sm:text-lg max-w-3xl mx-auto px-4">
              Using latest technologies and 100% satisfaction guarantees, we ensure that we always bring out the best of your brand.
            </p>
          </div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {displayItems.map((item) => (
              <div key={item.id} className="group relative">
                {/* Portfolio Item Container */}
                <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl overflow-hidden hover:border-gray-600 transition-all duration-300">
                  
                  {/* Image Container with full scroll effect */}
                  <div className="relative w-full h-64 sm:h-72 lg:h-80 overflow-hidden">
                    <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:-translate-y-[70%]">
                      <Image
                        src={`/${item.id > 6 ? ((item.id - 7) % 6) + 1 : item.id}.png`}
                        alt={item.title}
                        width={600}
                        height={800}
                        className="w-full h-auto object-cover object-top"
                        style={{ minHeight: '400px' }}
                      />
                    </div>
                    
                    {/* Gradient overlay for better text readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Hover overlay with project info */}
                    <div className="absolute inset-0 flex items-end p-4 sm:p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="text-white">
                        <span className="inline-block px-2 sm:px-3 py-1 text-xs font-semibold rounded-full mb-2" style={{ backgroundColor: '#204092' }}>
                          {item.category}
                        </span>
                        <h3 className="text-base sm:text-lg font-bold">{item.title}</h3>
                      </div>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="p-4 sm:p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="inline-block px-2 sm:px-3 py-1 text-xs font-semibold text-gray-400 bg-gray-800 rounded-full mb-2">
                          {item.category}
                        </span>
                        <h3 className="text-white text-base sm:text-lg font-semibold group-hover:text-[#204092] transition-colors duration-300">
                          {item.title}
                        </h3>
                      </div>
                      
                      {/* View Project Arrow */}
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="w-8 h-8 rounded-full flex items-center justify-center border border-gray-600 group-hover:border-[#204092] transition-colors duration-300">
                          <svg className="w-4 h-4 text-gray-400 group-hover:text-[#204092] transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          {!showMore && (
            <div className="text-center mt-12 sm:mt-14 lg:mt-16">
              <button 
                onClick={() => setShowMore(true)}
                className="bg-transparent text-[#204092] hover:bg-[#204092] border border-[#204092] hover:text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full font-semibold text-base sm:text-lg transition-colors glow-custom-blue hover:glow-custom-blue-strong"
              >
                Load More
              </button>
            </div>
          )}

       

        </div>
      </div>
    </div>
  )
}

export default Portfolio