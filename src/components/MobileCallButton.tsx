import React from 'react';
import { PhoneIcon } from '@heroicons/react/24/outline';

const MobileCallButton: React.FC = () => {
  return (
    <a 
      href="tel:1300520121"
      className="fixed bottom-6 right-6 z-50 sm:hidden bg-blue-600 text-white rounded-full p-4 shadow-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
      aria-label="Call now"
    >
      <PhoneIcon className="w-6 h-6" />
      <span className="font-medium">Call Now</span>
    </a>
  );
};

export default MobileCallButton;
