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

const TestimonialsPage = () => {
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
                TESTIMONIALS
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

      <Clients/>
      
      {/* Testimonials Section */}
      <div className="relative min-h-screen bg-black py-20 overflow-hidden">
        {/* Multiple Grid Layers */}
        <div className="absolute inset-0 bg-grid-white/[0.1] bg-[size:50px_50px]"></div>
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:100px_100px]"></div>
        <div className="absolute inset-0 bg-grid-white/[0.03] bg-[size:25px_25px]"></div>
        
        {/* Animated Grid Overlay */}
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:75px_75px] animate-pulse"></div>
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              What Our <span className="bg-gradient-to-r from-teal-300 to-blue-300 bg-clip-text text-transparent">Clients Say</span>
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Don't just take our word for it - hear from our satisfied clients about their experience working with us.
            </p>
          </div>
          
          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 - James Poole */}
            <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl hover:bg-white/10 transition-all duration-300 group">
              <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:20px_20px] rounded-2xl"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/5 rounded-2xl"></div>
              
              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-teal-400 to-blue-400 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    JP
                  </div>
                  <div className="ml-4">
                    <h3 className="text-white font-semibold text-lg">James Poole</h3>
                    <div className="flex text-yellow-400 text-sm">
                      {'★'.repeat(5)}
                    </div>
                  </div>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed italic">
                  "Great company, really helpful and take the time to listen and support when needed. I really like the fact that I can pop in when needed on webcam with the design while sharing the screens t..."
                </p>
              </div>
            </div>

            {/* Testimonial 2 - Samuel Day */}
            <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl hover:bg-white/10 transition-all duration-300 group">
              <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:20px_20px] rounded-2xl"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/5 rounded-2xl"></div>
              
              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    SD
                  </div>
                  <div className="ml-4">
                    <h3 className="text-white font-semibold text-lg">Samuel Day</h3>
                    <div className="flex text-yellow-400 text-sm">
                      {'★'.repeat(5)}
                    </div>
                  </div>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed italic">
                  "Stewart and this team carried out some amazing design work on our website once this was completed they also have been running a monthly SEO package since last april which is..."
                </p>
              </div>
            </div>

            {/* Testimonial 3 - Tina Woodridge */}
            <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl hover:bg-white/10 transition-all duration-300 group">
              <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:20px_20px] rounded-2xl"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/5 rounded-2xl"></div>
              
              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-teal-400 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    TW
                  </div>
                  <div className="ml-4">
                    <h3 className="text-white font-semibold text-lg">Tina Woodridge</h3>
                    <div className="flex text-yellow-400 text-sm">
                      {'★'.repeat(5)}
                    </div>
                  </div>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed italic">
                  "Got my website made in a short time. Responsive and helpful staff. I was made on competitive rates and within my budget. Thank you Greg for being so helpful."
                </p>
              </div>
            </div>

            {/* Testimonial 4 - Steven Adams */}
            <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl hover:bg-white/10 transition-all duration-300 group">
              <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:20px_20px] rounded-2xl"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/5 rounded-2xl"></div>
              
              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-teal-400 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    SA
                  </div>
                  <div className="ml-4">
                    <h3 className="text-white font-semibold text-lg">Steven Adams</h3>
                    <div className="flex text-yellow-400 text-sm">
                      {'★'.repeat(5)}
                    </div>
                  </div>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed italic">
                  "It was a real pleasure to be able to share my ideas with Brad and let him to understand how to portray them through illustration. Very professional and always kept me up to date with..."
                </p>
              </div>
            </div>

            {/* Testimonial 5 - Samantha Rowley */}
            <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl hover:bg-white/10 transition-all duration-300 group">
              <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:20px_20px] rounded-2xl"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/5 rounded-2xl"></div>
              
              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    SR
                  </div>
                  <div className="ml-4">
                    <h3 className="text-white font-semibold text-lg">Samantha Rowley</h3>
                    <div className="flex text-yellow-400 text-sm">
                      {'★'.repeat(5)}
                    </div>
                  </div>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed italic">
                  "Was such an ease working with Richard and Greg. They designed a logo for my new business and Richard had a few ideas of what I wanted and he created a lovely bespoke design for m..."
                </p>
              </div>
            </div>

            {/* Testimonial 6 - Joshua Heather */}
            <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl hover:bg-white/10 transition-all duration-300 group">
              <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:20px_20px] rounded-2xl"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/5 rounded-2xl"></div>
              
              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-red-400 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    JH
                  </div>
                  <div className="ml-4">
                    <h3 className="text-white font-semibold text-lg">Joshua Heather</h3>
                    <div className="flex text-yellow-400 text-sm">
                      {'★'.repeat(5)}
                    </div>
                  </div>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed italic">
                  "So happy I found Glonect Web Solutions Ltd, when starting my business I was confused on where to go but the team at Glonect do everything I could ever need and for a cheaper, I've checked..."
                </p>
              </div>
            </div>

            {/* Testimonial 7 - Nicola Owen */}
            <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl hover:bg-white/10 transition-all duration-300 group">
              <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:20px_20px] rounded-2xl"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/5 rounded-2xl"></div>
              
              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-400 to-blue-400 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    NO
                  </div>
                  <div className="ml-4">
                    <h3 className="text-white font-semibold text-lg">Nicola Owen</h3>
                    <div className="flex text-yellow-400 text-sm">
                      {'★'.repeat(5)}
                    </div>
                  </div>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed italic">
                  "I had an amazing experience working with Glonect Web Solutions to develop my mobile app. Right from the start the team was professional, responsive, and really listened to my ideas. They guide..."
                </p>
              </div>
            </div>

            {/* Testimonial 8 - Lucas Edwards */}
            <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl hover:bg-white/10 transition-all duration-300 group">
              <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:20px_20px] rounded-2xl"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/5 rounded-2xl"></div>
              
              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    LE
                  </div>
                  <div className="ml-4">
                    <h3 className="text-white font-semibold text-lg">Lucas Edwards</h3>
                    <div className="flex text-yellow-400 text-sm">
                      {'★'.repeat(5)}
                    </div>
                  </div>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed italic">
                  "Great service for a really fair price! Emails and questions were always answered promptly as well as any requests for the changes. I highly recommend Glonect Web Solutions for website desig..."
                </p>
              </div>
            </div>

            {/* Testimonial 9 - Anita */}
            <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl hover:bg-white/10 transition-all duration-300 group">
              <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:20px_20px] rounded-2xl"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/5 rounded-2xl"></div>
              
              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-rose-400 to-pink-400 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    A
                  </div>
                  <div className="ml-4">
                    <h3 className="text-white font-semibold text-lg">Anita</h3>
                    <div className="flex text-yellow-400 text-sm">
                      {'★'.repeat(5)}
                    </div>
                  </div>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed italic">
                  "First I doubted, I thought was a scam. Easily done- in the end - fabulous cv- nice completed - please ask them - absolutely lovely experience if you give them the chance! No scam that I can..."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer/>


    </div>
  )
}

export default TestimonialsPage