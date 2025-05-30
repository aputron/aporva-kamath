// components/icons/CustomDiagramIcon.tsx
import React from 'react';

type CustomIconProps = {
  className?: string;
};

const GeneticCircuitIcon: React.FC<CustomIconProps> = ({ className = 'w-12 h-12 text-black' }) => (
  <svg
    viewBox="0 0 68.035629 29.659737"
    fill="none"
    stroke="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <g transform="translate(-33.167813,-9.2524011)">
      <rect
        stroke="currentColor"
        strokeWidth={1}
        x={33.55}
        y={9.63}
        width={67.28}
        height={28.9}
        ry={14.45}
      />
      <path d="M 46.05,29.37 H 87.88" transform="matrix(0.1763,0,0,1,32.46,-4.59)" />
      <path d="M 46.05,29.37 H 87.88" transform="matrix(0.1085,0,0,1,84.68,-4.59)" />
      <path d="M 46.05,29.37 H 87.88" transform="matrix(0.3275,0,0,1,47.11,-4.59)" />
      <path d="m 51.85,20.89 -0.001,0.001 -3.82,3.70 3.76,4.06 h10.20 V 20.89 Z" />
      <path d="m 85.98,28.67 0.001,-0.001 3.82,-3.70 -3.76,-4.06 h-10.20 v7.78 z" />
      <path d="M 46.05,29.37 H 87.88" transform="matrix(0.0929,0,0,1,37.08,-8.89)" />
      <path d="M 46.05,29.37 H 87.88" transform="matrix(0,-0.0955,-1,0,72.57,28.81)" />
      <path d="M 46.05,29.37 H 87.88" transform="matrix(0.0929,0,0,1,85.79,-8.80)" />
      <path d="M 46.05,29.37 H 87.88" transform="matrix(0,-0.0955,-1,0,121.28,28.89)" />
      <path d="M 46.05,29.37 H 87.88" transform="matrix(0.0929,0,0,1,59.96,-8.72)" />
      <path d="M 46.05,29.37 H 87.88" transform="matrix(0,-0.0955,-1,0,97.32,28.97)" />
      <path d="M 46.05,29.37 H 87.88" transform="matrix(-0.0929,0,0,1,77.63,-8.80)" />
      <path d="M 46.05,29.37 H 87.88" transform="matrix(0,-0.0955,1,0,40.27,28.90)" />
    </g>
  </svg>
);

export default GeneticCircuitIcon;
