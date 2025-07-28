import React from 'react';

const MenuItem = ({ 
  children, 
  onClick, 
  className = '', 
  style = {},
  disabled = false,
  active = false,
  hover = false
}) => {
  const baseClasses = 'transition-all duration-200 cursor-pointer';
  const activeClasses = active ? 'bg-blue-600 bg-opacity-20 border-blue-500' : '';
  const hoverClasses = hover ? 'hover:scale-105' : '';
  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed' : '';
  
  return (
    <div
      onClick={disabled ? undefined : onClick}
      className={`${baseClasses} ${activeClasses} ${hoverClasses} ${disabledClasses} ${className}`}
      style={style}
    >
      {children}
    </div>
  );
};

export default MenuItem; 