import React, { useEffect, useRef, useState } from 'react';
import './ScrollFadeWrapper.css';

const ScrollFadeWrapper = ({ children, className }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const handleObserver = () => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(domRef.current);
          }
        },
        {
          threshold: 0.1,
          rootMargin: '0px 0px -100px 0px',
        }
      );
      if (domRef.current) observer.observe(domRef.current);
      return () => observer.disconnect();
    };

    handleObserver(); // həmişə observer qur — mobildə də animasiya et
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
