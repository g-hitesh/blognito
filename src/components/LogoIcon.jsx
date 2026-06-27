const LogoIcon = ({ className, size = 24 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="140 80 220 320" 
      width={size} 
      height={size} 
      className={className}
    >
      <defs>
        <linearGradient id="accentGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#8A2387"/>
          <stop offset="50%" stop-color="#E94057"/>
          <stop offset="100%" stop-color="#F27121"/>
        </linearGradient>

        <filter id="dropShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="#000000" floodOpacity="0.15"/>
        </filter>
      </defs>

      <g transform="translate(0, -20)">
        <path 
          d="M 250 80 L 360 120 L 360 230 C 360 310 290 380 250 400 C 210 380 140 310 140 230 L 140 120 Z"  
          fill="none" 
          stroke="#d1d5db" 
          strokeWidth="6" 
          strokeLinejoin="round" 
        />

        <g filter="url(#dropShadow)">
          <path d="M 170 200 C 170 200, 250 170, 330 200 C 350 208, 360 215, 350 220 C 340 225, 160 225, 150 220 C 140 215, 150 208, 170 200 Z" fill="url(#accentGrad)"/>
          
          <path d="M 195 190 L 210 130 C 215 110, 230 110, 250 115 C 270 110, 285 110, 290 130 L 305 190 Z" fill="url(#accentGrad)"/>
          
          <path d="M 190 195 L 310 195 L 306 175 L 194 175 Z" fill="#374151" opacity="0.8"/>

          <path 
            d="M 210 240 C 190 240 180 255 190 270 C 200 285 220 285 235 270 C 240 260 260 260 265 270 C 280 285 300 285 310 270 C 320 255 310 240 290 240 C 275 240 265 245 250 245 C 235 245 225 240 210 240 Z" 
            fill="#1f2937"
          />
            
          <path d="M 235 270 L 250 320 L 265 270 Z" fill="#1f2937"/>
          <line x1="250" y1="285" x2="250" y2="310" stroke="#fafaf9" strokeWidth="3" strokeLinecap="round"/>
        </g>
      </g>
    </svg>
  );
};

export default LogoIcon;