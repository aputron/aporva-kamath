// components/icons/ChartHistogramIcon.tsx
import React from 'react';

type FacsGraphIconProps = {
  className?: string;
};

const FacsGraphIcon: React.FC<FacsGraphIconProps> = ({ className = 'w-6 h-6 text-black' }) => (
  <svg
    viewBox="0 0 32 32"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path d="M31 31.36H1c-.199 0-.36-.161-.36-.36V1h.72v14.632c3.704-.168 5.584-2.933 7.405-5.609 1.8-2.646 3.662-5.382 7.235-5.382s5.435 2.736 7.235 5.382c1.879 2.762 3.821 5.618 7.765 5.618v.72c-4.324 0-6.376-3.016-8.36-5.933C20.867 7.822 19.192 5.36 16 5.36s-4.867 2.461-6.64 5.067c-1.928 2.834-3.92 5.763-8 5.926V30.64H3.64V20c0-.199.161-.36.36-.36H7.64V16c0-.199.161-.36.36-.36h3.64V11c0-.199.161-.36.36-.36h4c.199 0 .36.161.36.36v1.64H20c.199 0 .36.161.36.36v3.64H24c.199 0 .36.161.36.36v4.64H28c.199 0 .36.161.36.36v8.64H31Zm-6.64-.72h3.279V22.36H24.36Zm-4 0h3.279V17.36H20.36Zm-4 0h3.28V13.36h-3.28Zm-4 0h3.28V11.36H12.36Zm-4 0h3.28V16.36H8.36Zm-4 0H7.64V20.36H4.36Z" />
  </svg>
);

export default FacsGraphIcon;
