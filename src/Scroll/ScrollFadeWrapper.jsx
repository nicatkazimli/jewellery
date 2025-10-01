// ScrollFadeWrapper.jsx
import React, { useEffect, useRef, useState } from 'react';
import './ScrollFadeWrapper.css';

const ScrollFadeWrapper = ({ children, className }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(domRef.current); // bir dəfə animasiya üçün
        }
      },
      { threshold: 0.1 } // 10% göründükdə trigger
    );

    if (domRef.current) observer.observe(domRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={domRef}
      className={`scroll-fade-wrapper ${isVisible ? 'is-visible' : ''} ${className || ''}`}
    >
      {children}
    </div>
  );
};

export default ScrollFadeWrapper;
