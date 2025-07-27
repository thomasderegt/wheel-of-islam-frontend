import React, { useState } from 'react';

const modalStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  background: 'rgba(0,0,0,0.5)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 1000,
  padding: '1rem',
};

const cardStyle = {
  background: '#111',
  borderRadius: '16px',
  padding: '1.5rem',
  width: '100%',
  maxWidth: '500px',
  minWidth: '280px',
  boxShadow: '0 4px 24px rgba(0,0,0,0.25)',
  textAlign: 'center',
  color: '#fff',
  border: '2px solid #FF007F',
  maxHeight: '90vh',
  overflowY: 'auto',
};

const buttonStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '0.75rem',
  width: '100%',
  padding: '0.875rem',
  margin: '0.5rem 0',
  border: 'none',
  borderRadius: '8px',
  background: '#222',
  color: '#fff',
  fontSize: '0.9rem',
  cursor: 'pointer',
  transition: 'background 0.2s, border 0.2s',
  wordWrap: 'break-word',
  textAlign: 'center',
  justifyContent: 'center',
};

// Icons for different goals (currently unused but kept for future use)
// const icons = [
//   '❓', // Doubts
//   '❤️', // Improve practice
//   '👁️', // Just looking
// ];

const themeOptions = [
  { key: 'neon', label: 'Neon', color: '#FF007F' },
  { key: 'story', label: 'Story', color: '#4a3f78' },
];

const goalOptions = [
  { key: 'doubts', label: 'I\'m experiencing doubts and looking for answers' },
  { key: 'improve', label: 'I want to improve my practice of Islam and my connection with God' },
  { key: 'explore', label: 'I just want to have a look around!' },
];

export default function OnboardingModal({ open, onSelect, onThemeChange, selectedTheme }) {
  // Set localTheme to null initially so user must select a theme
  const [localTheme, setLocalTheme] = useState(null);
  const [selectedGoal, setSelectedGoal] = useState(null);

  if (!open) return null;
  return (
    <div style={modalStyle}>
      <div style={cardStyle}>
        <h2 style={{ 
          marginBottom: '0.5rem', 
          color: '#00f2fa', 
          textShadow: '0 0 8px #00f2fa, 0 0 16px #00f2fa', 
          fontSize: 'clamp(1.5rem, 4vw, 2rem)',
          lineHeight: '1.2'
        }}>
          Peace be upon you! Glad you are here.
        </h2>
        <p style={{ 
          marginBottom: '1.5rem', 
          color: '#00f2fa', 
          textShadow: '0 0 8px #00f2fa, 0 0 16px #00f2fa', 
          fontSize: 'clamp(1rem, 3vw, 1.25rem)',
          lineHeight: '1.3'
        }}>
          Please select a goal and theme
        </p>
        <div style={{ 
          color: '#fff', 
          fontWeight: 'bold', 
          marginBottom: '0.5rem', 
          fontSize: 'clamp(0.9rem, 2.5vw, 1.1rem)' 
        }}>
          Goal
        </div>
        <div style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          gap: '0.75rem', 
          marginBottom: '1.5rem', 
          alignItems: 'center' 
        }}>
          {goalOptions.map(opt => (
            <button
              key={opt.key}
              style={{
                ...buttonStyle,
                width: '100%',
                maxWidth: '400px',
                minHeight: '60px',
                border: selectedGoal === opt.key ? '2px solid #00f2fa' : '2px solid #444',
                background: selectedGoal === opt.key ? '#222b' : '#222',
                boxShadow: selectedGoal === opt.key ? '0 0 8px 2px #00f2fa' : 'none',
                fontWeight: selectedGoal === opt.key ? 'bold' : 'normal',
                transition: 'all 0.2s',
                fontSize: 'clamp(0.8rem, 2.5vw, 1rem)',
              }}
              onClick={() => setSelectedGoal(opt.key)}
              onMouseEnter={e => e.currentTarget.style.background = '#333'}
              onMouseLeave={e => e.currentTarget.style.background = selectedGoal === opt.key ? '#222b' : '#222'}
            >
              {opt.label}
            </button>
          ))}
        </div>
        <div style={{ 
          margin: '1.5rem 0 0.75rem', 
          color: '#fff', 
          fontWeight: 'bold',
          fontSize: 'clamp(0.9rem, 2.5vw, 1.1rem)'
        }}>
          Theme
        </div>
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          flexDirection: 'column', 
          alignItems: 'center', 
          gap: '0.75rem', 
          marginBottom: '1.5rem' 
        }}>
          {themeOptions.map(opt => {
            const isNeon = opt.key === 'neon';
            const isSelected = localTheme === opt.key;
            let background = 'transparent';
            let border = isSelected ? `2px solid ${opt.color}` : '2px solid #444';
            let boxShadow = isSelected ? `0 0 8px 2px ${opt.color}` : 'none';
            if (isNeon && isSelected) {
              background = 'transparent';
              border = '2px solid #00f2fa';
              boxShadow = '0 0 8px 2px #00f2fa, 0 0 16px 4px #00f2fa';
            } else if (isSelected) {
              background = 'transparent';
            }
            return (
              <button
                key={opt.key}
                style={{
                  ...buttonStyle,
                  width: '100%',
                  maxWidth: '200px',
                  minHeight: '50px',
                  border,
                  background,
                  boxShadow,
                  fontWeight: isSelected ? 'bold' : 'normal',
                  color: '#fff',
                  transition: 'all 0.2s',
                  fontSize: 'clamp(0.9rem, 2.5vw, 1rem)',
                }}
                onClick={() => {
                  setLocalTheme(opt.key);
                  if (onThemeChange) onThemeChange(opt.key);
                }}
                onMouseEnter={e => {
                  if (isNeon && isSelected) {
                    e.currentTarget.style.background = 'transparent';
                  } else if (isSelected) {
                    e.currentTarget.style.background = 'transparent';
                  } else {
                    e.currentTarget.style.background = '#333';
                  }
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'transparent';
                }}
              >
                {opt.label}
              </button>
            );
          })}
        </div>
        <button
          style={{
            ...buttonStyle,
            width: '100%',
            maxWidth: '200px',
            margin: '1rem auto 0',
            background: selectedGoal && localTheme ? '#00f2fa' : '#444',
            color: selectedGoal && localTheme ? '#111' : '#888',
            border: 'none',
            fontWeight: 'bold',
            cursor: selectedGoal && localTheme ? 'pointer' : 'not-allowed',
            opacity: selectedGoal && localTheme ? 1 : 0.7,
            transition: 'background 0.2s, color 0.2s, opacity 0.2s',
            display: 'block',
            fontSize: 'clamp(0.9rem, 2.5vw, 1rem)',
            minHeight: '50px',
          }}
          disabled={!(selectedGoal && localTheme)}
          onClick={() => onSelect(selectedGoal)}
        >
          Lets go!
        </button>
        <p style={{ 
          marginTop: '1rem', 
          fontSize: 'clamp(0.75rem, 2vw, 0.9rem)', 
          color: '#888',
          lineHeight: '1.4'
        }}>
          You can always change your goal or theme later in settings.
        </p>
      </div>
    </div>
  );
} 