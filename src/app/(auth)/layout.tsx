"use client";

import React, { useEffect, useState } from 'react';
import logo from '../../../public/images/logo.png';
import bgImage from '../../../public/images/BackgroundCapCons.png';

const AuthLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setIsDarkMode(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setIsDarkMode(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  return (
    <div className={`flex min-h-screen ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
      <div className="absolute top-3 left-5 m-4 flex items-center">
        <img src={logo.src} alt="Company Logo" className="h-10 w-10 mr-2" />
        <h2 className="text-h2 font-h2">CapCons.</h2>
      </div>
      <div className={`flex flex-col justify-center px-5 w-96 ${isDarkMode ? 'bg-[#15151B]' : 'bg-gray-100'}`}>
        {children}
      </div>
      <div className="hidden lg:block">
        <img
          className="absolute h-full w-4/5 object-cover"
          src={bgImage.src}
          alt=""
        />
      </div>
    </div>
  );
};

export default AuthLayout;
