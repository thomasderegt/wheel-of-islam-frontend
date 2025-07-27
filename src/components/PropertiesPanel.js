import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';
import { useNavigate } from 'react-router-dom';

const PropertiesPanel = ({ isOpen, onClose, sharedGoal, setSharedGoal, sharedLevel, setSharedLevel }) => {
  const { language, setLanguage } = useLanguage();
  const { themeName, setThemeName, theme } = useTheme();
  const navigate = useNavigate();
  const [currentGoal, setCurrentGoal] = useState('');
  const [currentLevel, setCurrentLevel] = useState(1);
  const [isHovered, setIsHovered] = useState(false);

  // Goal options
  const goalOptions = [
    { key: 'Doubts', label: 'I\'m experiencing doubts and looking for answers' },
    { key: 'Explore', label: 'I just want to have a look around!' },
    { key: 'Improve', label: 'I want to improve my practice of Islam and my connection with God' },
  ];

  // Level options
  const levelOptions = [
    { value: 1, label: 'Level 1 - Novice' },
    // { value: 2, label: 'Level 2 - Beginner' },
    // { value: 3, label: 'Level 3 - Intermediate' },
    // { value: 4, label: 'Level 4 - Advanced' },
    // { value: 5, label: 'Level 5 - Proficient' },
  ];

  // Load current goal and level on component mount
  useEffect(() => {
    const goal = localStorage.getItem('userGoal');
    const level = parseInt(localStorage.getItem('userLevel')) || 1;
    setCurrentGoal(goal || '');
    setCurrentLevel(level);
  }, []);

  // Update shared state when currentGoal/currentLevel changes
  useEffect(() => {
    if (currentGoal && setSharedGoal) {
      setSharedGoal(currentGoal);
    }
    if (setSharedLevel) {
      setSharedLevel(currentLevel);
    }
  }, [currentGoal, currentLevel, setSharedGoal, setSharedLevel]);

  // Handle goal change
  const handleGoalChange = (newGoal) => {
    setCurrentGoal(newGoal);
    localStorage.setItem('userGoal', newGoal);
    // Update shared state
    if (setSharedGoal) {
      setSharedGoal(newGoal);
    }
  };

  // Handle level change
  const handleLevelChange = (newLevel) => {
    setCurrentLevel(newLevel);
    localStorage.setItem('userLevel', newLevel);
    // Update shared state
    if (setSharedLevel) {
      setSharedLevel(newLevel);
    }
  };

  const panelStyle = {
    position: 'fixed',
    top: 0,
    right: 0,
    width: window.innerWidth <= 768 ? '100vw' : '400px',
    height: '100vh',
    backgroundColor: theme.background,
    borderLeft: window.innerWidth <= 768 ? 'none' : `2px solid ${theme.secondary}`,
    boxShadow: (isOpen || isHovered) ? `-4px 0 20px rgba(0, 242, 250, 0.3)` : 'none',
    transition: 'transform 0.3s ease-in-out',
    zIndex: 1000,
    overflowY: 'auto',
    padding: window.innerWidth <= 768 ? '1rem' : '2rem',
    transform: (isOpen || isHovered) ? 'translateX(0)' : 'translateX(100%)',
  };

  const hoverTriggerStyle = {
    position: 'fixed',
    top: 0,
    right: 0,
    width: '20px',
    height: '100vh',
    zIndex: 999,
    cursor: 'pointer',
  };

  const visibleTabStyle = {
    position: 'fixed',
    top: '50%',
    right: 0,
    transform: 'translateY(-50%)',
    width: window.innerWidth <= 768 ? '40px' : '30px',
    height: window.innerWidth <= 768 ? '160px' : '120px',
    backgroundColor: theme.background,
    border: `2px solid ${theme.secondary}`,
    borderRight: 'none',
    borderTopRightRadius: '8px',
    borderBottomRightRadius: '8px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: window.innerWidth <= 768 ? '12px' : '8px',
    zIndex: 998,
    boxShadow: `-2px 0 8px rgba(0, 242, 250, 0.3)`,
  };





  const sectionStyle = {
    marginBottom: '2rem',
    padding: '1.5rem',
    border: `1px solid ${theme.secondary}`,
    borderRadius: '8px',
    backgroundColor: 'rgba(0, 242, 250, 0.05)',
  };

  const sectionTitleStyle = {
    fontSize: '1.25rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
    color: theme.secondary,
    textShadow: '0 0 8px #00f2fa',
  };

  const selectStyle = {
    width: '100%',
    padding: '0.75rem',
    backgroundColor: theme.background,
    color: theme.secondary,
    border: `2px solid ${theme.secondary}`,
    borderRadius: '6px',
    fontSize: '1rem',
    marginBottom: '0.5rem',
  };

  const buttonStyle = {
    width: '100%',
    padding: '0.75rem',
    backgroundColor: theme.secondary,
    color: theme.background,
    border: 'none',
    borderRadius: '6px',
    fontSize: '1rem',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'all 0.2s',
    marginBottom: '0.5rem',
  };

  const closeButtonStyle = {
    position: 'absolute',
    top: '1rem',
    right: '1rem',
    background: 'none',
    border: 'none',
    color: theme.secondary,
    fontSize: '1.5rem',
    cursor: 'pointer',
    padding: '0.5rem',
  };

  return (
    <>
      {/* Visible Tab */}
      <div 
        style={visibleTabStyle}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div style={{ fontSize: window.innerWidth <= 768 ? '20px' : '16px', color: theme.secondary }}>⚙️</div>
        <div style={{ fontSize: window.innerWidth <= 768 ? '20px' : '16px', color: theme.secondary }}>🎯</div>
        <div style={{ fontSize: window.innerWidth <= 768 ? '20px' : '16px', color: theme.secondary }}>🌐</div>
        <div style={{ fontSize: window.innerWidth <= 768 ? '20px' : '16px', color: theme.secondary }}>🎨</div>
      </div>

      {/* Hover Trigger */}
      <div 
        style={hoverTriggerStyle}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      />
      
      {/* Panel */}
      <div 
        style={panelStyle}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Close Button */}
        <button style={closeButtonStyle} onClick={onClose}>
          ✕
        </button>

        {/* Header */}
        <h1 style={{ 
          fontSize: '1.75rem', 
          fontWeight: 'bold', 
          marginBottom: '2rem',
          color: theme.secondary,
          textShadow: '0 0 8px #00f2fa',
          textAlign: 'center'
        }}>
          Properties
        </h1>

        {/* Goal Settings Section */}
        <div style={sectionStyle}>
          <h2 style={sectionTitleStyle}>🎯 Goal Settings</h2>
          
          <div style={{ marginBottom: '1rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', color: theme.secondary, fontWeight: 'bold' }}>
              Goal:
            </label>
            <select
              value={currentGoal || goalOptions[0]?.key || ''}
              onChange={(e) => handleGoalChange(e.target.value)}
              style={selectStyle}
            >
              {goalOptions.map(opt => (
                <option key={opt.key} value={opt.key}>
                  {opt.key}
                </option>
              ))}
            </select>
            <p style={{ fontSize: '0.875rem', color: theme.text, opacity: 0.8, marginTop: '0.5rem' }}>
              Choose your primary intention for using the app
            </p>
          </div>
          
          <div style={{ marginBottom: '1rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', color: theme.secondary, fontWeight: 'bold' }}>
              Level:
            </label>
            <select
              value={currentLevel}
              onChange={(e) => handleLevelChange(parseInt(e.target.value))}
              style={selectStyle}
            >
              {levelOptions.map(opt => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
            <p style={{ fontSize: '0.875rem', color: theme.text, opacity: 0.8, marginTop: '0.5rem' }}>
              Choose your current learning level
            </p>
          </div>
        </div>

        {/* Language Settings Section */}
        <div style={sectionStyle}>
          <h2 style={sectionTitleStyle}>🌐 Language Settings</h2>
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            style={selectStyle}
          >
            <option value="english">English Only</option>
            <option value="english_phonetic">English + Phonetic</option>
          </select>
          <p style={{ fontSize: '0.875rem', color: theme.text, opacity: 0.8 }}>
            Choose your preferred language display
          </p>
        </div>

        {/* Theme Settings Section */}
        <div style={sectionStyle}>
          <h2 style={sectionTitleStyle}>🎨 Theme Settings</h2>
          <select
            value={themeName}
            onChange={(e) => setThemeName(e.target.value)}
            style={selectStyle}
          >
            <option value="neon">💡 Neon</option>
            <option value="story">📖 Story</option>
          </select>
          <p style={{ fontSize: '0.875rem', color: theme.text, opacity: 0.8 }}>
            Choose your preferred visual theme
          </p>
        </div>

        {/* Action Buttons */}
        <div style={{ marginTop: '2rem' }}>
          <button
            style={buttonStyle}
            onClick={onClose}
          >
            Back to Wheel
          </button>
          
          <button
            style={{
              ...buttonStyle,
              backgroundColor: 'transparent',
              color: theme.secondary,
              border: `2px solid ${theme.secondary}`,
            }}
            onClick={() => {
              localStorage.removeItem('userGoal');
              localStorage.removeItem('userLevel');
              window.location.reload();
            }}
          >
            Reset All Settings
          </button>
        </div>
      </div>
    </>
  );
};

export default PropertiesPanel; 