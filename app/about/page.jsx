"use client";

import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Navbar from '../Components/UI/Navbar'
import AuroraBackground from '../Components/UI/AuroraBackground'
import { font } from '../Components/Font/Font'
import Clients from '../Components/UI/Clients';
import Footer from '../Components/UI/Footer';

gsap.registerPlugin(ScrollTrigger)

const AboutPage = () => {
  const heroRef = useRef(null)
  const titleRef = useRef(null)
  const lineRef = useRef(null)
  const particlesRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const titleTl = gsap.timeline({
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top center",
          end: "bottom top",
          scrub: 1,
        }
      })

      titleTl
        .to(titleRef.current, {
          scale: 1.5,
          y: -100,
          rotationX: 15,
          transformPerspective: 1000,
          ease: "none"
        })
        .to(lineRef.current, {
          width: "200px",
          backgroundColor: "#ff6b6b",
          ease: "none"
        }, 0)

      // Particles floating animation
      gsap.to(particlesRef.current?.children || [], {
        y: -200,
        rotation: 360,
        scale: 0.5,
        stagger: 0.1,
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 2,
        }
      })



      // Background parallax effect
      gsap.to(heroRef.current, {
        backgroundPosition: "50% 100%",
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      })



    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <div className={`${font.className} bg-black min-h-screen overflow-hidden`}>
      {/* Navbar */}
      <Navbar />
      
      {/* Hero Section with Complex Animations */}
      <div ref={heroRef} className="relative bg-black h-screen">
        <AuroraBackground>
          <div className="h-screen flex items-center justify-center pt-20">
            {/* Animated Grid pattern overlay */}
            <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:50px_50px] opacity-50"></div>
            
            {/* Complex Floating Particles */}
            <div ref={particlesRef} className="absolute inset-0">
              <div className="absolute top-20 left-10 w-2 h-2 bg-gradient-to-r from-blue-400 to-teal-400 rounded-full blur-sm"></div>
              <div className="absolute top-32 left-20 w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-sm"></div>
              <div className="absolute top-40 left-32 w-1 h-1 bg-white/60 rounded-full"></div>
              <div className="absolute top-28 left-96 w-2 h-2 bg-gradient-to-r from-teal-400 to-blue-400 rounded-full blur-sm"></div>
              <div className="absolute top-60 left-80 w-4 h-4 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full blur-md opacity-70"></div>
              <div className="absolute top-80 left-40 w-1 h-1 bg-white/40 rounded-full"></div>
              <div className="absolute top-96 left-60 w-3 h-3 bg-gradient-to-r from-blue-400 to-teal-400 rounded-full blur-sm"></div>
              <div className="absolute top-52 right-40 w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-sm"></div>
              <div className="absolute top-72 right-60 w-1 h-1 bg-white/50 rounded-full"></div>
              <div className="absolute top-44 right-80 w-4 h-4 bg-gradient-to-r from-teal-400 to-blue-400 rounded-full blur-md opacity-60"></div>
              <div className="absolute top-88 right-20 w-2 h-2 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full blur-sm"></div>
              <div className="absolute bottom-40 left-24 w-3 h-3 bg-gradient-to-r from-blue-400 to-teal-400 rounded-full blur-sm"></div>
              <div className="absolute bottom-60 right-32 w-1 h-1 bg-white/60 rounded-full"></div>
              <div className="absolute bottom-80 left-72 w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-sm"></div>
              <div className="absolute bottom-32 right-96 w-4 h-4 bg-gradient-to-r from-teal-400 to-blue-400 rounded-full blur-md opacity-50"></div>
            </div>

            {/* Animated Title with 3D Effects */}
            <div className={`${font.className} relative z-20 text-center`}>
              <h1 
                ref={titleRef}
                className="text-white text-6xl md:text-7xl lg:text-8xl font-bold tracking-wider mb-8 transform-gpu"
                style={{ 
                  textShadow: '0 0 30px rgba(59, 130, 246, 0.5), 0 0 60px rgba(16, 185, 129, 0.3)',
                  filter: 'drop-shadow(0 4px 20px rgba(0,0,0,0.5))'
                }}
              >
                ABOUT
              </h1>
              <div 
                ref={lineRef}
                className="w-24 h-1 bg-gradient-to-r from-blue-400 to-teal-400 mx-auto transition-all duration-1000"
                style={{ boxShadow: '0 0 20px rgba(59, 130, 246, 0.6)' }}
              ></div>
            </div>
          </div>
        </AuroraBackground>
      </div>

      {/* Spectrum of Software Strategies Section */}
      <div className="relative min-h-screen bg-black py-20 overflow-hidden">
        {/* Multiple Grid Layers */}
        <div className="absolute inset-0 bg-grid-white/[0.1] bg-[size:50px_50px]"></div>
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:100px_100px]"></div>
        <div className="absolute inset-0 bg-grid-white/[0.03] bg-[size:25px_25px]"></div>
        
        {/* Animated Grid Overlay */}
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:75px_75px] animate-pulse"></div>
        
        {/* Static Glass Effect Spotlights (No Animations) */}
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
          
          {/* Soft Blended Beams */}
          <div className="absolute top-0 left-0 w-full h-full">
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
          </div>
        </div>

        {/* Content - Glass Card Container */}
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:p-8 lg:p-10 shadow-2xl">
            {/* Inner grid pattern for the card */}
            <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:30px_30px] rounded-2xl"></div>
            
            {/* Card glass effect overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/5 rounded-2xl"></div>
            
            {/* Content inside glass card */}
            <div className="relative z-10">
              {/* WEBERIUM Label */}
              <div className="inline-block px-4 py-2 bg-gradient-to-r from-teal-500/30 to-blue-500/30 border border-teal-400/40 rounded-lg backdrop-blur-md mb-6 shadow-lg">
                <span className="text-teal-300 text-sm font-semibold tracking-wider">WEBERIUM</span>
              </div>
              
              {/* Main Title */}
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6 leading-tight">
                The Spectrum of <span className="bg-gradient-to-r from-teal-300 to-blue-300 bg-clip-text text-transparent">Software Strategies</span>
              </h1>
              
              {/* Description */}
              <div className="max-w-4xl mb-8">
                <p className="text-gray-200 text-base md:text-lg leading-relaxed mb-4">
                  We are a super-Digital planet with no limits for what can be designed and optimized for the future of software and digital products. Initiated by a group of growth strategists who prophesied the spectrum of opportunities available in the design and development ecosystem.
                </p>
                <p className="text-gray-200 text-base md:text-lg leading-relaxed mb-4">
                  All of our intelligent brains sit together to design insight-driven business strategies and our creative geeks use the magic of storytelling to humanize brands. We make it easy for businesses to enter the software ecosystem and bridge the gap between the digital sphere and the human world.
                </p>
              </div>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-4 bg-gradient-to-r from-teal-500 to-teal-600 text-white font-semibold rounded-full hover:from-teal-600 hover:to-teal-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-teal-500/25 backdrop-blur-sm">
                  LET'S GET STARTED
                </button>
                <button className="px-8 py-4 border-2 border-teal-400/60 text-teal-300 font-semibold rounded-full hover:border-teal-400 hover:bg-teal-400/20 transition-all duration-300 backdrop-blur-md shadow-lg">
                  +44 7401 242864
                </button>
              </div>
            </div>
          </div>
          
          {/* Statistics Glass Card - Inside same section */}
          <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:p-8 lg:p-10 shadow-2xl mt-12">
            {/* Inner grid pattern for the card */}
            <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:30px_30px] rounded-2xl"></div>
            
            {/* Card glass effect overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/5 rounded-2xl"></div>
            
            {/* Content inside glass card */}
            <div className="relative z-10 text-center">
              {/* Main Title */}
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
                SATISFIED CLIENTELE IN THE <span className="bg-gradient-to-r from-teal-300 to-blue-300 bg-clip-text text-transparent">SUPER-DIGITAL PLANET!</span>
              </h1>
              
              {/* Subtitle */}
              <p className="text-gray-300 text-base md:text-lg mb-8 max-w-4xl mx-auto">
                We have outgrown ourselves in the industry as a leading web design company, with talents spanning the digital and branding landscape.
              </p>
              
              {/* Secondary Title */}
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-6">
                We are a forward-thinking Web Design & Marketing Agency
              </h2>
              
              {/* Description */}
              <p className="text-gray-300 text-base md:text-lg mb-12 max-w-3xl mx-auto">
                We love to discuss numbers that define our performance to our clients and customers.
              </p>
              
              {/* Statistics Bars */}
              <div className="space-y-8">
                {/* ROI Increase */}
                <div className="text-left">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-white font-semibold text-lg">ROI INCREASE</span>
                    <span className="text-teal-300 font-bold text-lg">95%</span>
                  </div>
                  <div className="w-full bg-gray-700/50 rounded-full h-2 backdrop-blur-sm">
                    <div 
                      className="bg-gradient-to-r from-teal-400 to-teal-500 h-2 rounded-full shadow-lg"
                      style={{ width: '95%' }}
                    ></div>
                  </div>
                </div>
                
                {/* Conversion Rate Increase */}
                <div className="text-left">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-white font-semibold text-lg">CONVERSION RATIO INCREASE</span>
                    <span className="text-teal-300 font-bold text-lg">85%</span>
                  </div>
                  <div className="w-full bg-gray-700/50 rounded-full h-2 backdrop-blur-sm">
                    <div 
                      className="bg-gradient-to-r from-teal-400 to-teal-500 h-2 rounded-full shadow-lg"
                      style={{ width: '85%' }}
                    ></div>
                  </div>
                </div>
                
                {/* Satisfied Clients */}
                <div className="text-left">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-white font-semibold text-lg">SATISFIED CLIENTS</span>
                    <span className="text-teal-300 font-bold text-lg">99%</span>
                  </div>
                  <div className="w-full bg-gray-700/50 rounded-full h-2 backdrop-blur-sm">
                    <div 
                      className="bg-gradient-to-r from-teal-400 to-teal-500 h-2 rounded-full shadow-lg"
                      style={{ width: '99%' }}
                    ></div>
                  </div>
                </div>
                
                {/* Returning Customers */}
                <div className="text-left">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-white font-semibold text-lg">RETURNING CUSTOMERS</span>
                    <span className="text-teal-300 font-bold text-lg">65%</span>
                  </div>
                  <div className="w-full bg-gray-700/50 rounded-full h-2 backdrop-blur-sm">
                    <div 
                      className="bg-gradient-to-r from-teal-400 to-teal-500 h-2 rounded-full shadow-lg"
                      style={{ width: '65%' }}
                    ></div>
                  </div>
                </div>
                
                {/* Unique Customers */}
                <div className="text-left">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-white font-semibold text-lg">UNIQUE CUSTOMERS</span>
                    <span className="text-teal-300 font-bold text-lg">80%</span>
                  </div>
                  <div className="w-full bg-gray-700/50 rounded-full h-2 backdrop-blur-sm">
                    <div 
                      className="bg-gradient-to-r from-teal-400 to-teal-500 h-2 rounded-full shadow-lg"
                      style={{ width: '80%' }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
          <div className='mt-10'>
          <Clients/>
          </div>
      </div>
          <Footer/>


    </div>
  )
}

export default AboutPage