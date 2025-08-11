"use client";

import React from 'react'
import Navbar from '@/app/Components/UI/Navbar';
import AuroraBackground from '@/app/Components/UI/AuroraBackground'
import { font } from '@/app/Components/Font/Font'
import Footer from '@/app/Components/UI/Footer';
import Portfolio from '@/app/Components/UI/Portfolio';
import Clients from '@/app/Components/UI/Clients';

const SocialMediaPage = () => {
  return (
    <>
      <div className={`${font.className} bg-black min-h-screen`}>
        <Navbar />

        {/* HERO SECTION */}
        <div className="relative bg-black h-screen">
          <AuroraBackground>
            <div className="h-screen flex items-center justify-center pt-20">
              
              {/* TITLE */}
              <div className={`${font.className} relative z-20 text-center`}>
                <h1 
                  className="text-white uppercase text-6xl md:text-7xl lg:text-8xl font-bold tracking-wider mb-8"
                  style={{ 
                    textShadow: '0 0 30px rgba(59, 130, 246, 0.5)'
                  }}
                >
                  SOCIAL MEDIA
                </h1>
                <div 
                  className="w-32 h-2 bg-gradient-to-r from-blue-400 via-purple-500 to-teal-400 mx-auto"
                  style={{ boxShadow: '0 0 20px rgba(59, 130, 246, 0.6)' }}
                ></div>
              </div>
            </div>
          </AuroraBackground>
        </div>

        {/* FEATURES SECTION */}
        <div className="relative min-h-screen bg-black">
          {/* Grid pattern overlay */}
          <div className="absolute inset-0 bg-grid-white/[0.1] bg-[size:50px_50px]"></div>
          
          <div className="relative z-10 py-24">
            <div className="max-w-7xl mx-auto px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                
                {/* FEATURE CARDS */}
                <div className="space-y-6">
                  {[
                    {
                      icon: (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                        </svg>
                      ),
                      title: "QUALITY",
                      color: "from-cyan-400 to-blue-500"
                    },
                    {
                      icon: (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      ),
                      title: "TIME",
                      color: "from-green-400 to-teal-500"
                    },
                    {
                      icon: (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                        </svg>
                      ),
                      title: "REASONABLE",
                      color: "from-blue-400 to-purple-500"
                    },
                    {
                      icon: (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      ),
                      title: "SATISFACTION",
                      color: "from-teal-400 to-green-500"
                    }
                  ].map((feature, index) => (
                    <div key={index} className="group">
                      <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-500 cursor-pointer hover:scale-105">
                        <div className="flex items-center space-x-4">
                          <div className={`p-3 rounded-xl bg-gradient-to-r ${feature.color} shadow-lg`}>
                            <div className="text-white">
                              {feature.icon}
                            </div>
                          </div>
                          <h3 className="text-white text-lg font-bold tracking-wide">
                            {feature.title}
                          </h3>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* CONTENT */}
                <div className="space-y-8">
                  <div>
                    <h2 className="text-white text-3xl lg:text-5xl font-bold leading-tight mb-6">
                    We Don't Talk -{' '}
                      <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                      We Let The Numbers Speak.
                      </span>
                    </h2>
                    <p className="text-gray-300 text-lg leading-relaxed">
                    Our team at Glonect SMM believes in hard numbers and solid results when it comes to effective paid and organic marketing. This is one of the main reasons we offer a complete refund – if our 3-month performance does not provide month-on-month ROI! Clients can also opt to get free services till they receive positive ROI – that’s how confident we are on our services!
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <button className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
                      LET'S GET STARTED
                    </button>
                    <button className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-full font-semibold text-lg hover:bg-cyan-400 hover:text-white transition-all duration-300 hover:scale-105">
                      +44 7401 242864
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <Portfolio/>
        </div>

        {/* SOCIAL MEDIA PACKAGES */}
        <div className="relative min-h-screen bg-black">
          {/* Grid pattern overlay */}
          <div className="absolute inset-0 bg-grid-white/[0.1] bg-[size:50px_50px]"></div>
          
          <div className="relative z-10 py-24">
            <div className="max-w-7xl mx-auto px-8">
              
              <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                  Social Media <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Packages</span>
                </h2>
                <p className="text-gray-300 text-xl max-w-3xl mx-auto">
                  Choose the perfect social media package for your business needs. All packages come with our 100% satisfaction guarantee.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
                {[
                  {
                    title: "Starter Social",
                    description: "Consistent, quality content for growing a basic social presence.",
                    price: "$399",
                    originalPrice: "$599",
                    features: [
                      "2 Platforms (e.g., Facebook + Instagram)",
                      "8 Posts/Month",
                      "Basic Design & Hashtags",
                      "Monthly Reporting"
                    ]
                  },
                  {
                    title: "Growth Social",
                    description: "Elevated content, light ads, and strategic engagement.",
                    price: "$799",
                    originalPrice: "$1199",
                    features: [
                      "3 Platforms",
                      "16 Posts + 4 Reels / Month",
                      "Comments & DMs Monitoring",
                      "Ad Campaign Setup",
                      "Monthly Strategy Call"
                    ]
                  },
                  {
                    title: "Pro Social",
                    description: "High-volume, data-driven content management for growing brands.",
                    price: "$1,499",
                    originalPrice: "$2299",
                    features: [
                      "All Major Platforms",
                      "30+ Posts / Month + 8 Reels",
                      "Community Management",
                      "Paid Campaign Management",
                      "Competitor Research + Reporting Dashboard"
                    ]
                  }
                ].map((pkg, i) => (
                  <div key={i} className="group relative h-full">
                    <div className="relative bg-gray-900/50 backdrop-blur-xl border border-gray-700/50 rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 hover:bg-gray-800/60 hover:border-gray-600/60 h-full flex flex-col cursor-pointer hover:scale-105">
                      
                      <div className="pt-8 p-8 flex-1 flex flex-col">
                        
                        <h3 className="text-2xl font-bold text-white text-center mb-4">
                          {pkg.title}
                        </h3>
                        
                        <p className="text-gray-300 text-center mb-6">
                          {pkg.description}
                        </p>
                        
                        <div className="text-center mb-8">
                          <div className="flex items-center justify-center gap-3 mb-2">
                            <span className="text-4xl font-bold text-cyan-400">
                              {pkg.price}
                            </span>
                            <span className="text-xl text-gray-400 line-through">
                              {pkg.originalPrice}
                            </span>
                          </div>
                        </div>
                        
                        <div className="space-y-4 mb-8 flex-1">
                          {pkg.features.map((feature, index) => (
                            <div key={index} className="flex items-start gap-3">
                              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-cyan-400 flex items-center justify-center mt-0.5">
                                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                </svg>
                              </div>
                              <span className="text-gray-300">{feature}</span>
                            </div>
                          ))}
                        </div>
                        
                        <button className="w-full bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600 text-white font-bold py-4 px-6 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                          SELECT THIS PACKAGE
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div>
          <Clients/>
        </div>
        
        <Footer/>
      </div>
    </>
  )
}

export default SocialMediaPage 