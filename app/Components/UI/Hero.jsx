"use client";

import React from 'react'
import { font } from '../Font/Font'
import Image from 'next/image'
import AuroraBackground from './AuroraBackground'

const Hero = () => {
  return (
    <AuroraBackground className={font.className}>
      <div className="pt-32 pb-8 lg:pt-36 lg:pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center">
          
                     {/* Left Content */}
           <div className="space-y-4">
             {/* Header */}
             <div className="space-y-3">
               <p className="text-xs font-semibold tracking-wide uppercase" style={{ color: '#204092' }}>
                 CUSTOM WEBSITE DEVELOPMENT SOLUTION
               </p>
               <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight">
                 Custom Website Design Services start from{' '}
                 <span style={{ color: '#204092' }}>$599 ONLY</span>
               </h1>
             </div>

             {/* Description */}
             <p className="text-gray-300 text-base leading-relaxed">
               Stand out with one of the best web agency & get your web designed in Just 24 Hours. Online Store (ecommerce), Portfolio Design, Informative Website etc.
             </p>

                         {/* Features List */}
             <div className="space-y-2">
               <div className="flex items-center space-x-3">
                 <div className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center" style={{ backgroundColor: '#204092' }}>
                   <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                     <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                   </svg>
                 </div>
                                  <span className="text-gray-300 text-sm">
                   Informative Website <span className="font-semibold" style={{ color: '#204092' }}>$599</span>
                 </span>
               </div>
               
               <div className="flex items-center space-x-3">
                 <div className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center" style={{ backgroundColor: '#204092' }}>
                   <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                     <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                   </svg>
                 </div>
                 <span className="text-gray-300 text-sm">
                   Content Management System (CMS) Software Integration
                 </span>
               </div>
               
               <div className="flex items-center space-x-3">
                 <div className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center" style={{ backgroundColor: '#204092' }}>
                   <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                     <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                   </svg>
                 </div>
                 <span className="text-gray-300 text-sm">
                   Creative concept from professional designer with in 24hrs
                 </span>
               </div>
               
               <div className="flex items-center space-x-3">
                 <div className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center" style={{ backgroundColor: '#204092' }}>
                   <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                     <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                   </svg>
                 </div>
                 <span className="text-gray-300 text-sm">
                   100% satisfaction guarantee
                 </span>
               </div>
            </div>

            {/* Trust Badges */}
            <div className="flex items-center space-x-6 pt-4">
              <div className="flex items-center">
                <Image 
                  src="/google.webp" 
                  alt="Google Partner" 
                  width={100} 
                  height={40}
                  className="h-12 w-auto"
                />
               </div>
               
               <div className="flex items-center">
                 <Image 
                   src="/trust.webp" 
                   alt="Trustpilot" 
                   width={100} 
                   height={40}
                   className="h-12 w-auto"
                 />
               </div>
              
              <div className="flex items-center">
                <Image 
                  src="/design-rush.svg" 
                  alt="Design Rush" 
                  width={100} 
                  height={40}
                  className="h-12 w-auto"
                />
              </div>
            </div>

                         {/* CTA Buttons */}
             <div className="flex flex-col sm:flex-row gap-3 pt-4">
               <button className="bg-transparent text-[#204092] hover:bg-[#204092] border border-[#204092] hover:text-white px-6 py-2 rounded-full font-semibold text-sm transition-colors glow-custom-blue hover:glow-custom-blue-strong">
                 GET A HYBRID SOFTWARE PLAN!
               </button>
               <button className="border-2 px-6 py-2 rounded-full text-sm transition-colors hover:text-white text-[#204092] border-[#204092]" onMouseEnter={(e) => e.target.style.backgroundColor = '#204092'} onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}>
                 +44 7401 242864
               </button>
             </div>
          </div>

                     {/* Right Content - Contact Form */}
           <div className="relative flex justify-center lg:justify-end">
             <div className="w-full max-w-sm">
               {/* Discount Badge */}
               <div className="absolute -top-8 left-36 w-24 h-24 rounded-full flex flex-col items-center justify-center text-white font-bold z-10 glow-custom-blue" style={{ backgroundColor: '#204092' }}>
                 <span className="text-xs">Up to</span>
                 <span className="text-lg">50%</span>
                 <span className="text-xs">OFF</span>
               </div>

               {/* Form Container */}
               <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 relative overflow-hidden">
                 {/* Form Header */}
                 <div className="text-center mb-8">
                   <h3 className="text-white text-base font-bold mb-2">
                     TAP INTO OUR SUPER-DIGITAL CONCEPT
                   </h3>
                   <p className="text-gray-300 text-xs">
                     for a functional web presence!
                   </p>
                 </div>

                 {/* Contact Form */}
                 <form className="space-y-6">
                   <div>
                     <input
                       type="text"
                       placeholder="Full Name"
                       className="w-full bg-transparent border-b-2 border-gray-600 text-white placeholder-gray-400 py-3 px-0 focus:outline-none transition-colors text-sm"
                       style={{ '--focus-border-color': '#204092' }}
                       onFocus={(e) => e.target.style.borderColor = '#204092'}
                       onBlur={(e) => e.target.style.borderColor = '#6b7280'}
                     />
                   </div>
                   
                   <div>
                     <input
                       type="email"
                       placeholder="Email Address"
                       className="w-full bg-transparent border-b-2 border-gray-600 text-white placeholder-gray-400 py-3 px-0 focus:outline-none transition-colors text-sm"
                       onFocus={(e) => e.target.style.borderColor = '#204092'}
                       onBlur={(e) => e.target.style.borderColor = '#6b7280'}
                     />
                   </div>
                   
                   <div>
                     <input
                       type="tel"
                       placeholder="Phone Number"
                       className="w-full bg-transparent border-b-2 border-gray-600 text-white placeholder-gray-400 py-3 px-0 focus:outline-none transition-colors text-sm"
                       onFocus={(e) => e.target.style.borderColor = '#204092'}
                       onBlur={(e) => e.target.style.borderColor = '#6b7280'}
                     />
                   </div>
                   
                   <div>
                     <textarea
                       placeholder="Brief Description"
                       rows="3"
                       className="w-full bg-transparent border-b-2 border-gray-600 text-white placeholder-gray-400 py-3 px-0 focus:outline-none transition-colors resize-none text-sm"
                       onFocus={(e) => e.target.style.borderColor = '#204092'}
                       onBlur={(e) => e.target.style.borderColor = '#6b7280'}
                     ></textarea>
                   </div>
                   
                   {/* reCAPTCHA Placeholder */}
                   <div className="flex items-center space-x-2 py-2">
                     <input type="checkbox" className="w-3 h-3" />
                     <span className="text-gray-300 text-xs">I'm not a robot</span>
                   </div>
                   
                   <button
                     type="submit"
                     className="w-full text-white py-3 rounded-full text-sm transition-colors glow-custom-blue hover:glow-custom-blue-strong mt-4"
                     style={{ backgroundColor: '#204092' }}
                   >
                     Get a Quote
                   </button>
                 </form>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </AuroraBackground>
  )
}

export default Hero