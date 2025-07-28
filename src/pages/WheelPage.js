import React, { useState, useEffect } from 'react';
import CircularMenu from '../organisms/CircularMenu';
import Settings from '../components/Settings';

const WheelPage = () => {
  const [selectedName, setSelectedName] = useState(null);
  const [isPropertiesPanelOpen, setIsPropertiesPanelOpen] = useState(false);
  const [userGoal, setUserGoal] = useState(localStorage.getItem('userGoal'));
  const [userLevel, setUserLevel] = useState(parseInt(localStorage.getItem('userLevel')) || 1);

  // Shared state for PropertiesPanel
  const [sharedGoal, setSharedGoal] = useState(userGoal);
  const [sharedLevel, setSharedLevel] = useState(userLevel);

  // Update shared state when userGoal/userLevel changes
  useEffect(() => {
    setSharedGoal(userGoal);
    setSharedLevel(userLevel);
  }, [userGoal, userLevel]);

  const handleResetOnboarding = () => {
    localStorage.removeItem('userGoal');
    localStorage.removeItem('userLevel');
    setUserGoal(null);
    setUserLevel(1);
    window.location.reload();
  };

  const handleSettingsClick = () => {
    setIsPropertiesPanelOpen(true);
  };

  const handleAIClick = () => {
    const messages = {
      doubts: `Hey! How are you? 👋\n\nI'm here to answer your questions about Islam at Level ${userLevel}.\nNo judgment, no pressure - just honest, helpful answers.\n\nWhat's on your mind?`,
      explore: `Ready to discover? Let's explore together! 🌟\n\nI'm here to guide your learning journey through Islam at Level ${userLevel}.\nLet's find the perfect topics for you to explore!`,
      improve: `Ready to grow? Let's build better habits! 🎯\n\nI'm here to help you set goals, track progress, and improve your practice at Level ${userLevel}.\nWhat area would you like to focus on first?`
    };
    alert(messages[userGoal] || "Hello! How can I help you today?");
  };

  return (
    <>
      <CircularMenu
        userGoal={sharedGoal || userGoal}
        userLevel={sharedLevel || userLevel}
        onSettingsClick={handleSettingsClick}
        onResetClick={handleResetOnboarding}
        onAIClick={handleAIClick}
      />

      {/* Settings Component */}
      <Settings 
        isOpen={isPropertiesPanelOpen}
        onClose={() => setIsPropertiesPanelOpen(false)}
        sharedGoal={sharedGoal}
        setSharedGoal={setSharedGoal}
        sharedLevel={sharedLevel}
        setSharedLevel={setSharedLevel}
      />
    </>
  );
};

export default WheelPage; 