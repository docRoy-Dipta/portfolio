import React from "react";

/**
 * Props accepted by OryntelLogo
 * (This MUST match what you pass in JSX)
 */
export interface LogoProps {
  width?: number;
  height?: number;
  className?: string;
  showText?: boolean;
}

/**
 * Oryntel Logo Component
 */
const OryntelLogo: React.FC<LogoProps> = ({
  width = 200,
  height = 240,
  className = "",
  showText = true,
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 200 240"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Circular Frame */}
      <circle
        cx="100"
        cy="80"
        r="70"
        stroke="currentColor"
        strokeWidth="3"
        fill="none"
        className="text-gray-600 dark:text-gray-300"
      />

      {/* Human Profile Silhouette */}
      <path
        d="M45 80 Q45 50 60 40 Q70 35 75 45 Q78 50 80 55 Q82 65 85 75 Q88 85 85 95 Q80 105 70 110 Q60 112 50 108 Q45 100 45 80 Z"
        stroke="currentColor"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-gray-600 dark:text-gray-300"
      />

      {/* Neural Network Nodes */}
      <circle cx="65" cy="60" r="2.5" fill="currentColor" className="text-blue-500" />
      <circle cx="75" cy="55" r="2.5" fill="currentColor" className="text-blue-500" />
      <circle cx="70" cy="70" r="2.5" fill="currentColor" className="text-blue-500" />
      <circle cx="80" cy="65" r="2.5" fill="currentColor" className="text-blue-500" />
      <circle cx="72" cy="80" r="2.5" fill="currentColor" className="text-blue-500" />
      <circle cx="85" cy="75" r="2.5" fill="currentColor" className="text-blue-500" />

      {/* Neural Network Connections */}
      <line x1="65" y1="60" x2="75" y2="55" stroke="currentColor" strokeWidth="1.5" className="text-blue-400" />
      <line x1="75" y1="55" x2="80" y2="65" stroke="currentColor" strokeWidth="1.5" className="text-blue-400" />
      <line x1="70" y1="70" x2="80" y2="65" stroke="currentColor" strokeWidth="1.5" className="text-blue-400" />
      <line x1="70" y1="70" x2="72" y2="80" stroke="currentColor" strokeWidth="1.5" className="text-blue-400" />
      <line x1="80" y1="65" x2="85" y2="75" stroke="currentColor" strokeWidth="1.5" className="text-blue-400" />
      <line x1="72" y1="80" x2="85" y2="75" stroke="currentColor" strokeWidth="1.5" className="text-blue-400" />

      {/* Circuit Lines */}
      <line x1="130" y1="65" x2="180" y2="65" stroke="currentColor" strokeWidth="2" className="text-gray-600 dark:text-gray-300" />
      <line x1="135" y1="75" x2="175" y2="75" stroke="currentColor" strokeWidth="2" className="text-gray-600 dark:text-gray-300" />
      <line x1="140" y1="85" x2="185" y2="85" stroke="currentColor" strokeWidth="2" className="text-gray-600 dark:text-gray-300" />

      {/* Circuit Nodes */}
      <circle cx="180" cy="65" r="3" fill="currentColor" className="text-purple-500" />
      <circle cx="175" cy="75" r="3" fill="currentColor" className="text-purple-500" />
      <circle cx="185" cy="85" r="3" fill="currentColor" className="text-purple-500" />

      {/* ORYNTEL Text */}
      {showText && (
        <text
          x="100"
          y="200"
          textAnchor="middle"
          fill="currentColor"
          fontSize="24"
          fontWeight="bold"
          fontFamily="Inter, system-ui, sans-serif"
          letterSpacing="2px"
          className="text-gray-800 dark:text-gray-200"
        >
          ORYNTEL
        </text>
      )}
    </svg>
  );
};

export default OryntelLogo;
