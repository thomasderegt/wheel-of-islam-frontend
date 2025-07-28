import React from 'react';

const MenuButton = ({ 
  children, 
  onClick, 
  color = '#00f2fa',
  width = 'auto',
  className = '',
  disabled = false,
  size = 'medium'
}) => {
  const sizeClasses = {
    small: 'px-3 py-1.5 text-xs',
    medium: 'px-6 py-3 text-base',
    large: 'px-8 py-4 text-lg'
  };

  const baseClasses = `${sizeClasses[size]} rounded-lg border-2 transition-all duration-200 active:scale-95`;
  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed' : '';

  return (
    <button 
      onClick={disabled ? undefined : onClick}
      className={`${baseClasses} ${disabledClasses} ${className}`}
      style={{
        color: color,
        borderColor: color,
        backgroundColor: 'transparent',
        width: width,
        boxShadow: `0 0 8px ${color}, 0 0 16px ${color}`
      }}
      onMouseEnter={(e) => {
        if (!disabled) {
          e.target.style.backgroundColor = `${color}1a`; // 10% opacity
          e.target.style.boxShadow = `0 0 15px ${color}, 0 0 30px ${color}, inset 0 0 10px ${color}4d`;
        }
      }}
      onMouseLeave={(e) => {
        if (!disabled) {
          e.target.style.backgroundColor = 'transparent';
          e.target.style.boxShadow = `0 0 10px ${color}, 0 0 20px ${color}`;
        }
      }}
      onMouseDown={(e) => {
        if (!disabled) {
          e.target.style.transform = 'scale(0.95)';
          e.target.style.boxShadow = `0 0 5px ${color}, 0 0 10px ${color}, inset 0 0 15px ${color}80`;
        }
      }}
      onMouseUp={(e) => {
        if (!disabled) {
          e.target.style.transform = 'scale(1)';
          e.target.style.boxShadow = `0 0 15px ${color}, 0 0 30px ${color}, inset 0 0 10px ${color}4d`;
        }
      }}
    >
      {children}
    </button>
  );
};

export default MenuButton; 