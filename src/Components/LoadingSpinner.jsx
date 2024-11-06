// LoadingSpinner.js
import React from 'react';
import logo from '../img/Logo-TL.png'

const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center gap-6 bg-white z-50">
      {/* Logo Container with Pulse */}
      <div className="relative w-20 h-20 animate-pulse">
        <img src={logo} alt="logo tl" className="h-full w-auto" />
        
        {/* Circular SVG Animation */}
        <svg
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 w-24 h-24 animate-spin"
          viewBox="0 0 100 100"
        >
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="#E5E7EB"
            strokeWidth="8"
          />
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="#3B82F6"
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray="70 283"
            className="animate-spin"
          />
        </svg>
      </div>

      {/* Company Name with Typing Effect */}
      <div className="text-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-1 relative overflow-hidden">
          TL BEING DIGITAL
          <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500">
            <span className="absolute top-0 left-0 w-full h-full bg-white animate-typewriter"></span>
          </span>
        </h1>
      </div>

      {/* Dots Loading Animation */}
      <div className="flex gap-2">
        {[0, 1, 2].map((index) => (
          <div
            key={index}
            className="w-3 h-3 rounded-full bg-blue-500 animate-bounce"
            style={{ animationDelay: `${index * 0.15}s` }}
          />
        ))}
      </div>
      
      {/* Background Decoration */}
      <svg
        className="absolute opacity-10 w-48 h-48"
        viewBox="0 0 100 100"
      >
        <circle cx="50" cy="50" r="40" fill="none" stroke="#3B82F6" strokeWidth="2">
          <animate
            attributeName="r"
            from="40"
            to="48"
            dur="1.5s"
            begin="0s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="opacity"
            from="1"
            to="0"
            dur="1.5s"
            begin="0s"
            repeatCount="indefinite"
          />
        </circle>
        <circle cx="50" cy="50" r="40" fill="none" stroke="#3B82F6" strokeWidth="2">
          <animate
            attributeName="r"
            from="40"
            to="48"
            dur="1.5s"
            begin="0.5s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="opacity"
            from="1"
            to="0"
            dur="1.5s"
            begin="0.5s"
            repeatCount="indefinite"
          />
        </circle>
      </svg>

      {/* Add required styles to your CSS/Tailwind config */}
      <style jsx>{`
        @keyframes typewriter {
          from { transform: translateX(0); }
          to { transform: translateX(100%); }
        }
        
        .animate-typewriter {
          animation: typewriter 2s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default LoadingSpinner;