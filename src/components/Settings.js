import React from 'react';
import { useTheme } from '../context/ThemeContext';

const Settings = ({ language, setLanguage, onBack }) => {
  const { themeName, setThemeName, theme } = useTheme();

  return (
    <div
      className="p-6 flex flex-col items-center justify-center min-h-screen"
      style={{ backgroundColor: theme.background, color: theme.text }}
    >
      <h2 className="text-2xl mb-4" style={{ color: theme.secondary }}>
        Language Settings
      </h2>

      <select
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
        className="px-4 py-2 text-lg mb-6"
        style={{
          backgroundColor: theme.background,
          color: theme.secondary,
          border: `2px solid ${theme.secondary}`,
          borderRadius: '8px',
        }}
      >
        <option value="english">English Only</option>
        <option value="english_phonetic">English + Phonetic</option>
      </select>

      <h2 className="text-2xl mb-4" style={{ color: theme.secondary }}>
        Theme
      </h2>

      <select
        value={themeName}
        onChange={(e) => setThemeName(e.target.value)}
        className="px-4 py-2 text-lg"
        style={{
          backgroundColor: theme.background,
          color: theme.secondary,
          border: `2px solid ${theme.secondary}`,
          borderRadius: '8px',
        }}
      >
        <option value="neon">💡 Neon</option>
        <option value="story">📖 Story</option>
      </select>

      <button
        onClick={onBack}
        className="mt-6 px-4 py-2 text-lg font-bold rounded-lg"
        style={{
          color: theme.secondary,
          border: `2px solid ${theme.secondary}`,
          backgroundColor: 'transparent',
        }}
      >
        Back to Main
      </button>
    </div>
  );
};

export default Settings;
