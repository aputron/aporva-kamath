'use client';

import React, { useState } from 'react';
import { ChevronDownIcon, BeakerIcon } from '@heroicons/react/24/outline'; // You can change the icon here

type CollapsibleCardProps = {
  title: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
};

const CollapsibleCard: React.FC<CollapsibleCardProps> = ({ title, icon, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="max-w-2xl mx-auto my-6 border border-gray-300 dark:border-gray-700 rounded-lg shadow-md hover:bg-gray-900">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lowercase w-full px-6 py-4 flex justify-between 
        items-center text-left font-semibold transition"
      >
        <span className="flex items-center gap-1">
          {icon}
          {title}
        </span>
        <ChevronDownIcon
          className={`w-5 h-5 transform transition-transform ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      {isOpen && (
        <div className="px-6 py-4 text-gray-700">
          {children}
        </div>
      )}
    </div>
  );
};

export default CollapsibleCard;
