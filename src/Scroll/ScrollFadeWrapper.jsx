import React, { useEffect, useRef, useState } from 'react';
import './ScrollFadeWrapper.css';

const ScrollFadeWrapper = ({ children, className }) => {
  const [isVisible, setIsVisible] = useState(
    window.innerWidth < 992 ? true : false
  );
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(domRef.current);
        }
      },
      {
        threshold: 0,
        rootMargin: '0px 0px -200px 0px',
      }
    );

    if (domRef.current) observer.observe(domRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={domRef}
      className={`scroll-fade-wrapper ${isVisible ? 'is-visible' : ''} ${className || ''}`}
      style={{ willChange: 'opacity, transform' }}
    >
      {children}
    </div>
  );
};

export default ScrollFadeWrapper;
