"use client";

import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Navbar from '../Components/UI/Navbar'
import AuroraBackground from '../Components/UI/AuroraBackground'
import { font } from '../Components/Font/Font'
import Clients from '../Components/UI/Clients';
import Footer from '../Components/UI/Footer';
import Portfolio from '../Components/UI/Portfolio';
import Packages from '../Components/UI/Packages';

gsap.registerPlugin(ScrollTrigger)

const PackagesPage = () => {
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
                PACKAGES
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
      <Portfolio/>
        <Packages/>
          <Footer/>


    </div>
  )
}

export default PackagesPage