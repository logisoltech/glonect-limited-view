'use client';
import React, { useState } from 'react';
import { font } from '../Font/Font';

const Services = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const services = [
    {
      id: 1,
      icon: "🌐",
      title: "WEB DEVELOPMENT",
      description: "Our web development discipline is a leap from the current web-based software and transforms the backend and the infrastructure for open and great user experience."
    },
    {
      id: 2,
      icon: "🛒",
      title: "ECOMMERCE",
      description: "Transform your business with our comprehensive ecommerce solutions that drive sales and enhance customer experience. We build robust online stores with secure payment gateways."
    },
    {
      id: 3,
      icon: "🎬",
      title: "VIDEO PRODUCTION",
      description: "Our digital video production services tell your brand's story through compelling visual narratives. From concept to completion, we handle every aspect of video creation including scripting."
    },
    {
      id: 4,
      icon: "🎨",
      title: "BRANDING",
      description: "Our comprehensive branding solutions explore the galaxy of brand identity and strategic marketing positioning. We create the best online presence for you."
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % services.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + services.length) % services.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className={`relative min-h-screen bg-black ${font.className}`}>
      {/* Blue Blending Borders */}
      <div className="absolute inset-0">
        {/* Top border */}
        <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-blue-600/30 to-transparent"></div>
        {/* Bottom border */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-blue-600/30 to-transparent"></div>
        {/* Left border */}
        <div className="absolute top-0 bottom-0 left-0 w-20 bg-gradient-to-r from-blue-600/30 to-transparent"></div>
        {/* Right border */}
        <div className="absolute top-0 bottom-0 right-0 w-20 bg-gradient-to-l from-blue-600/30 to-transparent"></div>
      </div>

      {/* Blue Dots Background */}
      <div 
        className="absolute inset-0 overflow-hidden"
        style={{
          background: `
            radial-gradient(circle at 10% 15%, rgba(59, 130, 246, 0.15) 80px, transparent 80px),
            radial-gradient(circle at 85% 25%, rgba(59, 130, 246, 0.12) 60px, transparent 60px),
            radial-gradient(circle at 20% 45%, rgba(59, 130, 246, 0.08) 70px, transparent 70px),
            radial-gradient(circle at 75% 60%, rgba(59, 130, 246, 0.1) 65px, transparent 65px),
            radial-gradient(circle at 15% 75%, rgba(59, 130, 246, 0.09) 75px, transparent 75px),
            radial-gradient(circle at 60% 35%, rgba(59, 130, 246, 0.11) 55px, transparent 55px),
            radial-gradient(circle at 60% 80%, rgba(59, 130, 246, 0.13) 67px, transparent 67px)
          `,
          filter: 'blur(30px)'
        }}
      />

      {/* Content */}
      <div className="relative z-10 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-teal-400 mb-6 sm:mb-8 leading-tight">
              Empowering the digital revolution with predictive<br />
              <span className="text-white">software solutions</span>
            </h1>
            <p className="text-gray-300 text-base sm:text-lg max-w-5xl mx-auto leading-relaxed">
              Our approach follows emerging predictive analytics and our digital products are designed for executives to make smarter decisions. We strive on big data and our revolution is stretching across the digital olenix galaxy with many new stars in the making.
            </p>
          </div>

          {/* Services Carousel */}
          <div className="relative max-w-3xl mx-auto px-16">
            
            {/* Navigation Buttons - Outside the carousel */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-800/80 backdrop-blur-sm border border-gray-600/50 text-white p-3 rounded-full hover:bg-gray-700/80 transition-all duration-300 z-20"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-gray-800/80 backdrop-blur-sm border border-gray-600/50 text-white p-3 rounded-full hover:bg-gray-700/80 transition-all duration-300 z-20"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            
            {/* Carousel Container */}
            <div className="relative overflow-hidden rounded-2xl">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {services.map((service) => (
                  <div key={service.id} className="w-full flex-shrink-0">
                    {/* Fixed Rectangular Service Card */}
                    <div className="relative bg-gray-900/80 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 sm:p-8 lg:p-10 overflow-hidden hover:border-gray-600/60 transition-all duration-300 h-[200px] sm:h-[220px] lg:h-[240px]">
                      
                      {/* Grid Background */}
                      <div 
                        className="absolute inset-0"
                        style={{
                          backgroundImage: `
                            linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)
                          `,
                          backgroundSize: '30px 30px'
                        }}
                      />
                      
                      {/* Content - Horizontal Layout */}
                      <div className="relative z-10 flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 h-full">
                        
                        {/* Left Side - Icon and Title */}
                        <div className="flex flex-col items-center sm:items-start text-center sm:text-left sm:min-w-0 sm:flex-shrink-0 sm:w-48">
                          {/* Icon */}
                          <div className="text-3xl sm:text-4xl lg:text-5xl mb-2 sm:mb-3">
                            {service.icon}
                          </div>
                          
                          {/* Title */}
                          <h3 className="text-base sm:text-lg lg:text-xl font-bold text-white tracking-wider leading-tight">
                            {service.title}
                          </h3>
                        </div>
                        
                        {/* Right Side - Description */}
                        <div className="flex-1 text-center sm:text-left flex items-center">
                          <p className="text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed">
                            {service.description}
                          </p>
                        </div>
                        
                      </div>
                      
                      {/* Hover Glow Effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-blue-500/5 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-8 space-x-3">
              {services.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide 
                      ? 'bg-teal-400 scale-125' 
                      : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                />
              ))}
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default Services;