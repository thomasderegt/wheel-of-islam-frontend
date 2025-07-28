import React from 'react';

const MenuContainer = ({ 
  children, 
  variant = 'default',
  className = '',
  style = {}
}) => {
  const variantClasses = {
    default: 'min-h-screen flex flex-col items-center justify-center p-4',
    modal: 'fixed inset-0 flex items-center justify-center z-50 p-4',
    card: 'bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-6 border border-gray-700',
    fullscreen: 'min-h-screen w-full'
  };

  const baseClasses = variantClasses[variant] || variantClasses.default;

  return (
    <div
      className={`${baseClasses} ${className}`}
      style={style}
    >
      {children}
    </div>
  );
};

export default MenuContainer; 