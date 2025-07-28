import React from 'react';

const MenuIcon = ({ 
  icon, 
  size = 'medium',
  color = '#00f2fa',
  className = '',
  style = {}
}) => {
  const sizeClasses = {
    small: 'text-sm',
    medium: 'text-lg',
    large: 'text-2xl',
    xlarge: 'text-4xl'
  };

  const baseClasses = `${sizeClasses[size]} ${className}`;

  return (
    <div
      className={baseClasses}
      style={{
        color: color,
        textShadow: `0 0 6px ${color}`,
        ...style
      }}
    >
      {icon}
    </div>
  );
};

export default MenuIcon; 