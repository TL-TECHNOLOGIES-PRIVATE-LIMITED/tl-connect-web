// LoadingSpinner.js
import React from 'react';
import logo from '../img/Logo-TL.png'

const FuturisticLoadingScreen = () => {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-slate-900 z-50 overflow-hidden">
      {/* Hexagonal Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <pattern id="hexagons" width="50" height="43.4" patternUnits="userSpaceOnUse">
            <path 
              d="M25 0 L50 14.4 L50 43.4 L25 57.8 L0 43.4 L0 14.4 Z" 
              fill="none" 
              stroke="#4F46E5" 
              strokeWidth="0.5"
            >
              <animate 
                attributeName="stroke-opacity" 
                values="0.5;1;0.5" 
                dur="3s" 
                repeatCount="indefinite"
              />
            </path>
          </pattern>
          <rect width="100%" height="100%" fill="url(#hexagons)" />
        </svg>
      </div>

      {/* Main Loading Container */}
      <div className="relative z-10 flex flex-col items-center gap-8">
        {/* Logo Container */}
        <div className="relative w-24 h-24">
          <img src={logo} alt="logo tl" className="h-full w-auto relative z-10" />
          
          {/* Rotating Rings */}
          <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40" viewBox="0 0 100 100">
            {[0, 1, 2].map((index) => (
              <circle
                key={index}
                cx="50"
                cy="50"
                r={40 + index * 5}
                fill="none"
                stroke={`rgb(${79 + index * 20}, ${70 + index * 20}, ${229 + index * 20})`}
                strokeWidth="0.5"
                strokeDasharray="40 60"
                className="animate-spin"
                style={{ 
                  animationDuration: `${4 + index}s`,
                  transformOrigin: 'center',
                  animation: `spin${4 + index} ${4 + index}s linear infinite`
                }}
              />
            ))}
          </svg>

          {/* Energy Pulse Effect */}
          <div className="absolute inset-0 animate-pulse">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <circle cx="50" cy="50" r="48" fill="none" stroke="#4F46E5" strokeWidth="1">
                <animate
                  attributeName="r"
                  values="48;52;48"
                  dur="2s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="stroke-opacity"
                  values="1;0.5;1"
                  dur="2s"
                  repeatCount="indefinite"
                />
              </circle>
            </svg>
          </div>
        </div>

        {/* Company Name */}
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold text-white tracking-wider mb-2">
            TL BEING DIGITAL
          </h1>
          {/* Futuristic Loading Bar */}
          <div className="w-64 h-1.5 bg-slate-800 rounded-full overflow-hidden">
            <div className="h-full w-full bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full animate-shimmer" 
                 style={{
                   backgroundSize: '200% 100%',
                   animation: 'shimmer 2s linear infinite'
                 }}
            />
          </div>
        </div>

        {/* Loading Status */}
        <div className="flex items-center gap-2 text-slate-400">
          <div className="flex gap-1">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="w-2 h-2 bg-indigo-500 rounded-full animate-bounce"
                style={{ animationDelay: `${i * 0.15}s` }}
              />
            ))}
          </div>
          <span className="text-sm font-medium tracking-wider">LOADING SYSTEM</span>
        </div>
      </div>

      {/* Add the required styles */}
      <style jsx>{`
        @keyframes shimmer {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
        @keyframes spin4 {
          100% { transform: rotate(360deg); }
        }
        @keyframes spin5 {
          100% { transform: rotate(-360deg); }
        }
        @keyframes spin6 {
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default FuturisticLoadingScreen;