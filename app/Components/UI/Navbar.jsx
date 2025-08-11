"use client";

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { font } from '../Font/Font'
import PageTransition from './PageTransition'
import { usePageTransition } from '../../hooks/usePageTransition'

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false)
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { isTransitioning, targetPage, navigateWithTransition, handleTransitionComplete, getCurrentPage } = usePageTransition()
  const activeItem = mounted ? getCurrentPage() : 'Home' // Prevent hydration mismatch

  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const handleNavClick = (item, e) => {
    if (item === 'About') {
      e.preventDefault()
      navigateWithTransition('/about', 'About')
    } else if (item === 'Home') {
      e.preventDefault()
      navigateWithTransition('/', 'Home')
    } else if (item === 'Portfolio') {
      e.preventDefault()
      navigateWithTransition('/portfolio', 'Portfolio')
    } else if (item === 'Testimonials') {
      e.preventDefault()
      navigateWithTransition('/testimonials', 'Testimonials')
    } else if (item === 'Packages') {
      e.preventDefault()
      navigateWithTransition('/packages', 'Packages')
    }
    setIsMobileMenuOpen(false) // Close mobile menu when item is clicked
  }

  const handleServiceClick = (service, e) => {
    e.preventDefault()
    navigateWithTransition(service.link, service.title)
    setIsMobileMenuOpen(false)
  }

  const getNavItemClasses = (item) => {
    return activeItem === item 
      ? "text-blue-400 px-3 py-2 text-sm font-medium transition-colors"
      : "text-gray-300 hover:text-blue-400 px-3 py-2 text-sm font-medium transition-colors"
  }

  const getMobileNavItemClasses = (item) => {
    return activeItem === item 
      ? "text-blue-400 text-sm font-medium transition-colors"
      : "text-gray-300 hover:text-blue-400 text-sm font-medium transition-colors"
  }

  // Services data
  const services = [
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      ),
      title: "SEO Services",
      link: "/services/seo"
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1.01M15 10h1.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Video Animation",
      link: "/services/video-animation"
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
        </svg>
      ),
      title: "Wordpress",
      link: "/services/wordpress"
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      title: "App Design",
      link: "/services/app-design"
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
        </svg>
      ),
      title: "Domain Hosting",
      link: "/services/domain-hosting"
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      ),
      title: "Ecommerce",
      link: "/services/ecommerce"
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      title: "Web App",
      link: "/services/web-app"
    },
    // {
    //   icon: (
    //     <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    //       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2M7 4h10M7 4l-2 16h14l-2-16" />
    //     </svg>
    //   ),
    //   title: "Logo Services",
    //   link: "/services/logo-services"
    // },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "React Native",
      link: "/services/react-native"
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
      title: "Magento",
      link: "/services/magento"
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      ),
      title: "WOO commerce",
      link: "/services/woo-commerce"
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: "Social Media",
      link: "/services/social-media"
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4 4 4 0 004-4V5z" />
        </svg>
      ),
      title: "Branding",
      link: "/services/branding"
    },
    // {
    //   icon: (
    //     <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    //       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
    //     </svg>
    //   ),
    //   title: "Shopify",
    //   link: "/services/shopify"
    // },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "Website Upkeep",
      link: "/services/website-upkeep"
    }
  ]

  return (
    <>
      <PageTransition 
        isActive={isTransitioning} 
        targetPage={targetPage}
        onComplete={handleTransitionComplete}
      />
      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-full max-w-[93%] z-50 px-4">
        <div className={`${font.className} bg-black/80 backdrop-blur-md rounded-2xl border border-gray-800 shadow-2xl`}>
          <div className="px-6 py-4">
            <div className="flex items-center justify-between lg:justify-start">
              {/* Logo */}
              <div className="flex items-center">
                <Image 
                  src="/glonect-logo-01.png" 
                  alt="Glonect" 
                  width={120} 
                  height={40}
                  className="h-8 md:h-10 w-auto"
                />
              </div>

              {/* Desktop Navigation - Centered */}
              <nav className="hidden lg:flex items-center space-x-3 xl:space-x-4 flex-1 justify-center">
                <Link href="/" className={getNavItemClasses('Home')} onClick={(e) => handleNavClick('Home', e)}>
                  Home
                </Link>
                <Link href="/about" className={getNavItemClasses('About')} onClick={(e) => handleNavClick('About', e)}>
                  About
                </Link>
                
                {/* Services Dropdown */}
                <div 
                  className="relative group"
                  onMouseEnter={() => setIsServicesDropdownOpen(true)}
                  onMouseLeave={() => setIsServicesDropdownOpen(false)}
                >
                  <a 
                    href="#" 
                    className={`${getNavItemClasses('Services')} flex items-center space-x-1`}
                    onClick={(e) => e.preventDefault()}
                  >
                    <span>Services</span>
                    <svg 
                      className={`w-4 h-4 transition-transform duration-200 ${isServicesDropdownOpen ? 'rotate-180' : ''}`} 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </a>

                  {/* Services Dropdown Menu */}
                  {isServicesDropdownOpen && (
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 pt-2 w-[95vw] max-w-[800px] z-50">
                      <div className="relative bg-black rounded-2xl border border-gray-800 shadow-2xl p-4 sm:p-6 lg:p-8">
                        {/* White grid pattern overlay */}
                        <div className="absolute inset-0 bg-grid-white/[0.1] bg-[size:50px_50px] rounded-2xl"></div>
                        
                        <div className="relative z-10">
                          {/* Responsive Grid */}
                          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
                            {services.map((service, index) => (
                              <a 
                                key={index}
                                href={service.link}
                                onClick={(e) => handleServiceClick(service, e)}
                                className="group bg-white/5 hover:bg-white/10 rounded-xl p-3 sm:p-4 transition-all duration-300 hover:scale-105 cursor-pointer border border-white/10 hover:border-blue-400/50 block"
                              >
                                <div className="flex items-center space-x-2">
                                  <div className="text-blue-400 group-hover:text-blue-300 transition-colors flex-shrink-0">
                                    {service.icon}
                                  </div>
                                  <h4 className="text-white font-medium text-xs sm:text-sm group-hover:text-blue-100 transition-colors leading-tight">
                                    {service.title}
                                  </h4>
                                </div>
                              </a>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <Link href="/portfolio" className={getNavItemClasses('Portfolio')} onClick={(e) => handleNavClick('Portfolio', e)}>
                  Portfolio
                </Link>
                
                <Link href="/testimonials" className={getNavItemClasses('Testimonials')} onClick={(e) => handleNavClick('Testimonials', e)}>
                  Testimonials
                </Link>
                <Link href="/packages" className={getNavItemClasses('Packages')} onClick={(e) => handleNavClick('Packages', e)}>
                  Packages
                </Link>
              </nav>

              {/* Desktop Contact Button */}
              <div className="hidden lg:flex items-center">
                <button className="bg-transparent text-[#204092] hover:bg-blue-700 border border-[#204092] hover:text-white px-6 py-2 rounded-lg text-sm font-medium transition-colors">
                  Contact
                </button>
              </div>

                          {/* Mobile menu button */}
            <div className="lg:hidden flex items-center">
              {/* Hamburger Menu */}
              <button 
                onClick={toggleMobileMenu}
                className="text-white hover:text-blue-400 p-2"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
            </div>

            {/* Mobile Navigation Menu */}
            {isMobileMenuOpen && (
              <div className="lg:hidden mt-4 pt-4 border-t border-gray-700">
                <div className="flex flex-col space-y-3">
                  <Link href="/" className={getMobileNavItemClasses('Home')} onClick={(e) => handleNavClick('Home', e)}>
                    Home
                  </Link>
                  <Link href="/about" className={getMobileNavItemClasses('About')} onClick={(e) => handleNavClick('About', e)}>
                    About
                  </Link>
                  
                  {/* Mobile Services Dropdown */}
                  <div>
                    <button 
                      className={`${getMobileNavItemClasses('Services')} w-full text-left flex items-center justify-between`}
                      onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                    >
                      <span>Services</span>
                      <svg 
                        className={`w-4 h-4 transition-transform duration-200 ${isMobileServicesOpen ? 'rotate-180' : ''}`} 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    
                    {/* Mobile Services List */}
                    {isMobileServicesOpen && (
                      <div className="mt-2 ml-4 space-y-2">
                        {services.map((service, index) => (
                          <a 
                            key={index}
                            href={service.link} 
                            onClick={(e) => handleServiceClick(service, e)}
                            className="flex items-center space-x-2 text-gray-400 hover:text-blue-400 text-sm py-2 transition-colors"
                          >
                            <div className="text-blue-400">
                              {service.icon}
                            </div>
                            <span>{service.title}</span>
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                  <Link href="/portfolio" className={getMobileNavItemClasses('Portfolio')} onClick={(e) => handleNavClick('Portfolio', e)}>
                    Portfolio
                  </Link>
                  <Link href="/testimonials" className={getMobileNavItemClasses('Testimonials')} onClick={(e) => handleNavClick('Testimonials', e)}>
                    Testimonials
                  </Link>
                  <Link href="/packages" className={getMobileNavItemClasses('Packages')} onClick={(e) => handleNavClick('Packages', e)}>
                    Packages
                  </Link>
                  
                  {/* Mobile Contact Button */}
                  <div className="pt-2 mt-2 border-t border-gray-700">
                    <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg text-sm font-medium transition-colors">
                      Contact Us
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar