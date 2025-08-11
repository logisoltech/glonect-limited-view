"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { font } from '../Font/Font';
import AuroraBackground from './AuroraBackground';

const Footer = () => {
  return (
    <div className="relative">
      {/* Wave Section with Black Background */}
      

      {/* Footer Content with Aurora Background */}
      <AuroraBackground>
        <div className="relative -mt-1">
          {/* Grid pattern overlay */}
          <div className="absolute inset-0 bg-grid-white/[0.1] bg-[size:50px_50px]"></div>
          
          <div className={`${font.className} relative`}>
            <div className="max-w-7xl mx-auto px-6 py-12 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                
                {/* Logo and Quick Links */}
                <div className="lg:col-span-1">
                  {/* Logo */}
                  <div className="mb-6">
                    <div className="flex items-center mb-4">
                     <img src="/glonect-logo-01.png" className='w-auto h-10'/>
                    </div>
                  </div>

                  {/* Quick Links */}
                  <div>
                    <h4 className="text-white text-lg font-semibold mb-4">Quick Links</h4>
                    <ul className="space-y-2">
                      <li><a href="#" className="text-gray-300 hover:text-teal-400 text-sm transition-colors">Home</a></li>
                      <li><Link href="/about" className="text-gray-300 hover:text-teal-400 text-sm transition-colors">About Us</Link></li>
                      <li><a href="#" className="text-gray-300 hover:text-teal-400 text-sm transition-colors">Portfolio</a></li>
                      <li><a href="#" className="text-gray-300 hover:text-teal-400 text-sm transition-colors">Packages</a></li>
                      <li><a href="#" className="text-gray-300 hover:text-teal-400 text-sm transition-colors">Contact Us</a></li>
                    </ul>
                  </div>
                </div>

                {/* Services */}
                <div>
                  <h4 className="text-white text-lg font-semibold mb-4">Services</h4>
                  <ul className="space-y-2">
                    <li><a href="#" className="text-gray-300 hover:text-teal-400 text-sm transition-colors">Cv Writing</a></li>
                    <li><a href="#" className="text-gray-300 hover:text-teal-400 text-sm transition-colors">Wordpress Development</a></li>
                    <li><a href="#" className="text-gray-300 hover:text-teal-400 text-sm transition-colors">Ecommerce Website</a></li>
                    <li><a href="#" className="text-gray-300 hover:text-teal-400 text-sm transition-colors">Logo Services</a></li>
                    <li><a href="#" className="text-gray-300 hover:text-teal-400 text-sm transition-colors">Magento Development</a></li>
                    <li><a href="#" className="text-gray-300 hover:text-teal-400 text-sm transition-colors">SEO Services</a></li>
                    <li><a href="#" className="text-gray-300 hover:text-teal-400 text-sm transition-colors">Mobile App Design</a></li>
                    <li><a href="#" className="text-gray-300 hover:text-teal-400 text-sm transition-colors">Web App Development</a></li>
                  </ul>
                </div>

                {/* Additional Services */}
                <div>
                  <h4 className="text-white text-lg font-semibold mb-4 opacity-0">Services</h4>
                  <ul className="space-y-2">
                    <li><a href="#" className="text-gray-300 hover:text-teal-400 text-sm transition-colors">Video Animation</a></li>
                    <li><a href="#" className="text-gray-300 hover:text-teal-400 text-sm transition-colors">Domain Hosting</a></li>
                    <li><a href="#" className="text-gray-300 hover:text-teal-400 text-sm transition-colors">React Native Development</a></li>
                    <li><a href="#" className="text-gray-300 hover:text-teal-400 text-sm transition-colors">Website Maintenance</a></li>
                    <li><a href="#" className="text-gray-300 hover:text-teal-400 text-sm transition-colors">Open Cart development</a></li>
                    <li><a href="#" className="text-gray-300 hover:text-teal-400 text-sm transition-colors">Big Commerce Development</a></li>
                    <li><a href="#" className="text-gray-300 hover:text-teal-400 text-sm transition-colors">Branding</a></li>
                    <li><a href="#" className="text-gray-300 hover:text-teal-400 text-sm transition-colors">Shopify Development</a></li>
                    <li><a href="#" className="text-gray-300 hover:text-teal-400 text-sm transition-colors">Woo Commerce</a></li>
                  </ul>
                </div>

                {/* Stay In Touch */}
                <div>
                  <h4 className="text-white text-lg font-semibold mb-4">Stay In Touch</h4>
                  
                  {/* Address */}
                  <div className="mb-6">
                    <p className="text-gray-300 text-sm mb-2">
                      <span className="font-semibold">UK Address:</span> Suite S 7 Rays House, North Circular Road, London, United Kingdom, NW10 7XP
                    </p>
                    <p className="text-gray-300 text-sm">
                      <span className="text-teal-400">📞 +44 7401 242864</span>
                    </p>
                  </div>

                  {/* Awards/Badges */}
                  <div className="space-y-3">
                    <div className="rounded-lg overflow-hidden w-32">
                      <Image 
                        src="/bark.png" 
                        alt="Bark Award" 
                        width={120} 
                        height={80}
                        className="w-full h-auto"
                      />
                    </div>
                    
                    <div className="rounded-lg overflow-hidden w-32">
                      <Image 
                        src="/bark-2.png" 
                        alt="Bark Rating" 
                        width={120} 
                        height={80}
                        className="w-full h-auto"
                      />
                    </div>

                    <div className="rounded-lg overflow-hidden w-32">
                      <Image 
                        src="/bark-3.png" 
                        alt="Bark Trophy" 
                        width={120} 
                        height={80}
                        className="w-full h-auto"
                      />
                    </div>
                  </div>

                  {/* Social Icons */}
                  <div className="flex space-x-3 mt-6">
                    <a href="#" className="w-10 h-10 bg-teal-500 rounded-full flex items-center justify-center hover:bg-teal-600 transition-colors">
                      <FaFacebook className="text-white text-lg" />
                    </a>
                    <a href="#" className="w-10 h-10 bg-teal-500 rounded-full flex items-center justify-center hover:bg-teal-600 transition-colors">
                      <FaLinkedin className="text-white text-lg" />
                    </a>
                    <a href="#" className="w-10 h-10 bg-teal-500 rounded-full flex items-center justify-center hover:bg-teal-600 transition-colors">
                      <FaTwitter className="text-white text-lg" />
                    </a>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </AuroraBackground>
    </div>
  );
};

export default Footer;