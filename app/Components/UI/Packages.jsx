'use client';
import React, { useState } from 'react';
import { font } from '../Font/Font';

const Packages = () => {
  const [activeCategory, setActiveCategory] = useState('Website Development');
  const packages = [
    // Website Development Packages
    {
      id: 1,
      category: "Website Development",
      title: "Starter Site",
      description: "Suitable for strong startups looking to create a client base and develop a unique brand",
      price: "$499",
      originalPrice: "$699",
      features: [
        "Up to 5 Informational Pages",
        "Mobile Responsive",
        "Contact Form & Map",
        "Basic SEO",
        "1 Revision",
        "1-2 Weeks Delivery"
      ]
    },
    {
      id: 2,
      category: "Website Development",
      title: "Business Pro",
      description: "Suitable for mid sized startups/enterprises who are looking to take it on the next level",
      price: "$999",
      originalPrice: "$1200",
      features: [
        "Up to 12 Informational Pages",
        "Mobile Responsive",
        "Shopping Cart & Payment Integration",
        "Basic Inventory",
        "Newsletter Signup",
        "2-3 Weeks Delivery"
      ]
    },
    {
      id: 3,
      category: "Website Development",
      title: "Custom Development",
      description: "Suitable for strong/mid/large sized enterprises and startups who are looking to grow",
      price: "$1999+",
      originalPrice: "$3998+",
      features: [
        "Custom Content Management System (CMS)",
        "React / Node.js Tech Stack",
        "Advanced Features & APIs",
        "SEO, Analytics & Security Layers",
        "Complete Custom Development",
        "4-6 Weeks Delivery (Based on Scope)"
      ]
    },
    // App Development Packages
    {
      id: 4,
      category: "App Development",
      title: "MVP Package",
      description: "Single platform app for small businesses or MVPs.",
      price: "$2,499",
      originalPrice: "$4,998",
      features: [
        "Up to 5 Screens",
        "Android or iOS",
        "Simple UI/UX",
        "Contact Form & Push Notifications",
        "Delivery: 3-4 Weeks"
      ]
    },
    {
      id: 5,
      category: "App Development",
      title: "Cross-Platform App",
      description: "Cross-platform mobile solution for growing brands.",
      price: "$5,999",
      originalPrice: "$11,998",
      features: [
        "Up to 15 Screens",
        "React Native or Flutter",
        "User Authentication + Admin Panel",
        "API Integrations",
        "Delivery: 5-7 Weeks"
      ]
    },
    {
      id: 6,
      category: "App Development",
      title: "Enterprise App",
      description: "Fully scalable app tailored to your business logic.",
      price: "$15,000+",
      originalPrice: "$30,000+",
      features: [
        "Unlimited Screens (Per Scope)",
        "Native or Cross-Platform",
        "Custom Backend (Node.js, Firebase, etc.)",
        "Real-Time Features, Admin Roles, Payment Systems",
        "Delivery: Based on Requirements"
      ]
    },
    // SEO Packages
    {
      id: 7,
      category: "SEO",
      title: "Starter SEO",
      description: "For businesses starting with local or basic organic visibility.",
      price: "$399",
      originalPrice: "$599",
      features: [
        "5 Keywords",
        "On-Page Optimization",
        "1 Blog Post / Month",
        "Basic Link Building",
        "Monthly Reports"
      ]
    },
    {
      id: 8,
      category: "SEO",
      title: "Basic Growth SEO",
      description: "More keywords, better content, deeper analysis.",
      price: "$799",
      originalPrice: "$1199",
      features: [
        "15 Keywords",
        "Competitor Research",
        "Technical SEO Fixes",
        "2 Blogs / Month",
        "Schema Markup + Monthly Strategy Call"
      ]
    },
    {
      id: 9,
      category: "SEO",
      title: "Enterprise SEO",
      description: "Advanced SEO strategy for national reach & long-term growth.",
      price: "$1,499+",
      originalPrice: "$2299+",
      features: [
        "30+ Keywords",
        "High Authority Backlinks",
        "4 SEO Blogs / Month",
        "Conversion Optimization",
        "Dedicated SEO Manager + Dashboard"
      ]
    },
    // Social Media Packages
    {
      id: 10,
      category: "Social Media",
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
      id: 11,
      category: "Social Media",
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
      id: 12,
      category: "Social Media",
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
    },
    // Design & Video Editing Packages
    {
      id: 13,
      category: "Design & Video Editing",
      title: "Creative Starter",
      description: "Simple, clean designs and videos for startups.",
      price: "$299",
      originalPrice: "$499",
      features: [
        "10 Graphic Posts",
        "2 Reels or Short Videos (30s)",
        "2 Revisions Each",
        "Turnaround: 3-5 Days"
      ]
    },
    {
      id: 14,
      category: "Design & Video Editing",
      title: "Growth Creative",
      description: "A full content design service for active social or digital campaigns.",
      price: "$599",
      originalPrice: "$899",
      features: [
        "20 Graphics",
        "4 Edited Videos (up to 60s)",
        "Motion Graphics + Brand Templates",
        "Strategy Support"
      ]
    },
    {
      id: 15,
      category: "Design & Video Editing",
      title: "Pro Visual Suite",
      description: "A full design & video editing partner for content-heavy operations.",
      price: "$1,299+",
      originalPrice: "$1999+",
      features: [
        "Unlimited* Graphic Requests (Fair Use)",
        "8+ Edited Videos / Month",
        "Product Videos, Animations, Promo Visuals",
        "Dedicated Manager + Weekly Delivery Cycle"
      ]
    }
  ];

  const categories = ['Website Development', 'App Development', 'Social Media', 'SEO', 'Design & Video Editing'];
  
  const filteredPackages = packages.filter(pkg => pkg.category === activeCategory);

  // Predefined aurora particle configurations to avoid hydration issues
  const auroraParticles = [
    { left: '10%', animationDelay: '0s', animationDuration: '8s' },
    { left: '25%', animationDelay: '1s', animationDuration: '12s' },
    { left: '40%', animationDelay: '2s', animationDuration: '10s' },
    { left: '60%', animationDelay: '3s', animationDuration: '14s' },
    { left: '75%', animationDelay: '4s', animationDuration: '9s' }
  ];

  return (
    <div className={`relative min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-950 ${font.className}`}>
      {/* Aurora Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Main gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-slate-900 to-blue-950"></div>
        
        {/* Aurora streaks */}
        {auroraParticles.map((particle, index) => (
          <div
            key={index}
            className="absolute top-0 bottom-0 opacity-30"
            style={{
              left: particle.left,
              width: '80px',
              background: 'linear-gradient(180deg, transparent 0%, rgba(34, 197, 94, 0.3) 15%, rgba(59, 130, 246, 0.4) 35%, rgba(147, 51, 234, 0.3) 55%, rgba(34, 197, 94, 0.2) 75%, transparent 100%)',
              transform: 'skewX(-12deg)',
              filter: 'blur(8px)',
              animationName: 'aurora-move',
              animationDuration: particle.animationDuration,
              animationDelay: particle.animationDelay,
              animationIterationCount: 'infinite',
              animationTimingFunction: 'ease-in-out',
              animationDirection: 'alternate'
            }}
          />
        ))}
        
        {/* Additional blending aurora layers */}
        {auroraParticles.map((particle, index) => (
          <div
            key={`blend-${index}`}
            className="absolute top-0 bottom-0 opacity-20"
            style={{
              left: `calc(${particle.left} + 40px)`,
              width: '120px',
              background: 'linear-gradient(180deg, transparent 0%, rgba(59, 130, 246, 0.2) 20%, rgba(147, 51, 234, 0.3) 40%, rgba(34, 197, 94, 0.2) 60%, rgba(59, 130, 246, 0.1) 80%, transparent 100%)',
              transform: 'skewX(-8deg)',
              filter: 'blur(15px)',
              animationName: 'aurora-move',
              animationDuration: `${parseFloat(particle.animationDuration) + 2}s`,
              animationDelay: `${parseFloat(particle.animationDelay) + 0.5}s`,
              animationIterationCount: 'infinite',
              animationTimingFunction: 'ease-in-out',
              animationDirection: 'alternate-reverse'
            }}
          />
        ))}
        
        {/* Subtle overlay gradients for depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 via-transparent to-purple-500/5"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent"></div>
      </div>

      {/* Grid pattern overlay - Above aurora */}
      <div 
        className="absolute inset-0 z-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          pointerEvents: 'none'
        }}
      ></div>

      {/* Grid pattern overlay - ABOVE aurora */}
      <div 
        className="absolute inset-0 z-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          pointerEvents: 'none'
        }}
      ></div>

      {/* CSS Keyframes for Aurora Animation */}
      <style jsx>{`
        @keyframes aurora-move {
          0% { transform: skewX(-15deg) translateY(-10px); opacity: 0.2; }
          50% { transform: skewX(-10deg) translateY(10px); opacity: 0.4; }
          100% { transform: skewX(-15deg) translateY(-5px); opacity: 0.3; }
        }
        

      `}</style>

      {/* Content */}
      <div className="relative z-10 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center mb-12 sm:mb-14 lg:mb-16">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6">
              Our <span style={{ color: '#204092' }}>Packages</span>
            </h1>
            <p className="text-gray-300 text-base sm:text-lg max-w-3xl mx-auto px-4">
              Choose the perfect package for your business needs. All packages come with our 100% satisfaction guarantee.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-12 sm:mb-14 lg:mb-16">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base font-semibold transition-all duration-300 backdrop-blur-sm border ${
                  activeCategory === category
                    ? 'bg-[#204092] text-white border-[#204092] shadow-lg shadow-[#204092]/25'
                    : 'bg-white/10 text-gray-300 border-white/20 hover:bg-white/20 hover:text-white'
                }`}
              >
                {category === 'COMBO PACKAGES' ? 'COMBO' : category}
              </button>
            ))}
          </div>

          {/* Packages Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
            {filteredPackages.map((pkg) => (
              <div key={pkg.id} className="group relative h-full">
                {/* Package Card with Glass Effect */}
                <div className="relative bg-gray-900/50 backdrop-blur-xl border border-gray-700/50 rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 hover:bg-gray-800/60 hover:border-gray-600/60 h-full flex flex-col">
                  
                  {/* Category Badge */}
                  <div className="absolute top-6 left-6 right-6">
                    <div className="inline-flex items-center justify-center w-full">
                      <span 
                        className="px-4 py-2 text-xs font-bold text-white rounded-full backdrop-blur-sm"
                        style={{ 
                          backgroundColor: pkg.category === 'BRANDING' ? '#10B981' : 
                                         pkg.category === 'VIDEO ANIMATION' ? '#374151' : '#204092'
                        }}
                      >
                        {pkg.category}
                      </span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="pt-20 p-8 flex-1 flex flex-col">
                    
                    {/* Title */}
                    <h3 className="text-xl sm:text-2xl font-bold text-white text-center mb-4 leading-tight">
                      {pkg.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-gray-300 text-sm text-center mb-6 leading-relaxed">
                      {pkg.description}
                    </p>
                    
                    {/* Pricing */}
                    <div className="text-center mb-8">
                      <div className="flex items-center justify-center gap-3 mb-2">
                        <span className="text-3xl sm:text-4xl font-bold" style={{ color: '#204092' }}>
                          {pkg.price}
                        </span>
                        <span className="text-lg text-gray-400 line-through">
                          {pkg.originalPrice}
                        </span>
                      </div>
                    </div>
                    
                    {/* Features List */}
                    <div className="space-y-3 mb-8 flex-1">
                      {pkg.features.map((feature, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <div className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5" style={{ backgroundColor: '#204092' }}>
                            <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="text-gray-300 text-sm leading-relaxed">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    {/* Select Button */}
                    <button className="w-full bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white font-bold py-4 px-6 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                      SELECT THIS PACKAGE
                    </button>
                    
                    {/* Bottom Actions */}
                    <div className="flex justify-between items-center mt-6 pt-6 border-t border-gray-700/50">
                      
                      
                      <div className="flex items-center gap-2 text-gray-400 hover:text-[#204092] cursor-pointer transition-colors">
                        {/* <span className="text-sm font-medium">Want to Discuss?</span> */}
                        <div className="flex items-center gap-1">
                          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                          <span className="text-sm font-bold">Live Chat</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Packages;