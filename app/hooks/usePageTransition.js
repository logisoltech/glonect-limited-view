import { useState, useCallback } from 'react';
import { useRouter, usePathname } from 'next/navigation';

export const usePageTransition = () => {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [targetPage, setTargetPage] = useState('');
  const [targetHref, setTargetHref] = useState('');
  const router = useRouter();
  const pathname = usePathname();

  const navigateWithTransition = useCallback((href, pageName) => {
    setTargetPage(pageName);
    setTargetHref(href);
    setIsTransitioning(true);
  }, []);

  const handleTransitionComplete = useCallback(() => {
    // Navigate to the target page after the animation
    if (targetHref) {
      router.push(targetHref);
      
      // Wait for navigation to complete, then hide transition
      setTimeout(() => {
        setIsTransitioning(false);
        setTargetPage('');
        setTargetHref('');
      }, 1000); // Give time for page to load
    }
  }, [router, targetHref]);

  const getCurrentPage = useCallback(() => {
    if (pathname === '/about') return 'About';
    if (pathname === '/portfolio') return 'Portfolio';
    if (pathname === '/testimonials') return 'Testimonials';
    if (pathname === '/packages') return 'Packages';
    if (pathname === '/services/seo') return 'SEO Services';
    if (pathname.startsWith('/services/')) return 'Services';
    if (pathname === '/') return 'Home';
    return 'Home';
  }, [pathname]);

  return {
    isTransitioning,
    targetPage,
    navigateWithTransition,
    handleTransitionComplete,
    getCurrentPage,
    currentPath: pathname
  };
}; 