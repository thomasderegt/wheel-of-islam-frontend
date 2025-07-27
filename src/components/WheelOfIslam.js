// zelfde imports als voorheen
import React, { useState, useRef, useLayoutEffect } from 'react';
import NamesOfAllah from './NamesOfAllah';
import NameDetail from './NameDetail';
import Settings from './Settings';
import TazkiyyahLanding from './TazkiyyahLanding';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';
import { useNavigate } from 'react-router-dom';

// Goal-based topic configurations
const askTopics = [
  { english: 'Evidence', arabic: 'Adillah', color: '#8E7DBE', icon: '🔍' },
  { english: 'Common Questions', arabic: 'As\'ilah', color: '#F4A261', icon: '❓' },
  { english: 'Misconceptions', arabic: 'Su\' al-Mafahim', color: '#2A9D8F', icon: '💭' },
  { english: 'Scientific Proofs', arabic: 'Al-Burhan Al-Ilmi', color: '#E76F51', icon: '🧬' },
  { english: 'Historical Evidence', arabic: 'Al-Burhan Al-Tarikhi', color: '#E9C46A', icon: '📚' },
  { english: 'Logical Arguments', arabic: 'Al-Hujaj Al-Mantiqiyyah', color: '#A26769', icon: '🧠' },
  { english: 'Community Support', arabic: 'Al-Ta\'awun', color: '#6C91BF', icon: '🤝' },
  { english: 'Personal Journey', arabic: 'Al-Rihlah Al-Shakhsiyyah', color: '#B5838D', icon: '🌟' },
];

const exploreTopics = [
  { english: 'Purification', arabic: 'Tazkiyyah', color: '#8E7DBE', icon: '💖' },
  { english: 'Prophets', arabic: 'Al-Anbiya\'', color: '#F4A261', icon: '📖' },
  { english: 'Islamic History', arabic: 'At-Tarikh', color: '#2A9D8F', icon: '🏛️' },
  { english: 'Islamic Art', arabic: 'Al-Fann', color: '#E76F51', icon: '🎨' },
  { english: 'Islamic Science', arabic: 'Al-Ulum', color: '#E9C46A', icon: '🔬' },
  { english: 'Islamic Philosophy', arabic: 'Al-Falsafah', color: '#A26769', icon: '🧠' },
  { english: 'Islamic Literature', arabic: 'Al-Adab', color: '#6C91BF', icon: '📚' },
  { english: 'Islamic Architecture', arabic: 'Al-Mi\'mar', color: '#B5838D', icon: '🕌' },
];

const improveTopics = [
  { english: 'Prayer', arabic: 'As-Salah', color: '#8E7DBE', icon: '🕌' },
  { english: 'Fasting', arabic: 'As-Sawm', color: '#F4A261', icon: '🌙' },
  { english: 'Charity', arabic: 'Az-Zakah', color: '#2A9D8F', icon: '🤲' },
  { english: 'Pilgrimage', arabic: 'Al-Hajj', color: '#E76F51', icon: '🕋' },
  { english: 'Good Character', arabic: 'Al-Akhlaq', color: '#E9C46A', icon: '💎' },
  { english: 'Family', arabic: 'Al-Usrah', color: '#A26769', icon: '👨‍👩‍👧‍👦' },
  { english: 'Community', arabic: 'Al-Jama\'ah', color: '#6C91BF', icon: '🤝' },
  { english: 'Daily Dhikr', arabic: 'Adh-Dhikr', color: '#B5838D', icon: '📿' },
];

// Default topics (fallback)
const defaultTopics = [
  { english: 'Purification', arabic: 'Tazkiyyah', color: '#8E7DBE', icon: '💖' },
  { english: 'Divine Law', arabic: 'Sharia', color: '#F4A261', icon: '⚖️' },
  { english: 'Revelation', arabic: "Qur'an", color: '#2A9D8F', icon: '📖' },
  { english: 'Prophetic Guidance', arabic: 'Hadith & Sunnah', color: '#E76F51', icon: '🕊️' },
  { english: 'Worship', arabic: 'Al Ibadah', color: '#E9C46A', icon: '🙏' },
  { english: 'Afterlife', arabic: 'Akhirah', color: '#A26769', icon: '🌅' },
  { english: 'Prophets', arabic: 'Anbiya', color: '#6C91BF', icon: '' },
  { english: 'Unseen', arabic: 'Al-Ghayb', color: '#B5838D', icon: '✨' },
];

const WheelOfIslam = () => {
  const [selectedName, setSelectedName] = useState(null);
  const svgRef = useRef(null);
  const [size, setSize] = useState(0);
  const { theme, themeName } = useTheme();
  const { language } = useLanguage();
  const navigate = useNavigate();

  // Get user's goal and determine topics
  const userGoal = localStorage.getItem('userGoal');
  let topics;
  let wheelTitle;
  let wheelSubtitle;

  switch (userGoal) {
    case 'doubts':
      topics = askTopics;
      wheelTitle = 'Wheel of Islam';
      wheelSubtitle = 'Find Answers';
      break;
    case 'explore':
      topics = exploreTopics;
      wheelTitle = 'Wheel of Islam';
      wheelSubtitle = 'Explore & Discover';
      break;
    case 'improve':
      topics = improveTopics;
      wheelTitle = 'Wheel of Islam';
      wheelSubtitle = 'Grow & Improve';
      break;
    default:
      topics = defaultTopics;
      wheelTitle = 'Wheel of Islam';
      wheelSubtitle = 'Your Digital Guide';
  }

  useLayoutEffect(() => {
    const updateSize = () => {
      if (svgRef.current) {
        const rect = svgRef.current.getBoundingClientRect();
        setSize(Math.min(rect.width, rect.height));
      }
    };
    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  const center = size / 2;
  const radius = center * 0.7;
  const outerRadius = center * 0.18;
  const centerRadius = center * 0.25;

  const calculatePoint = (angle, distance) => ({
    x: center + distance * Math.cos(angle),
    y: center + distance * Math.sin(angle),
  });

  const handleClick = (topic) => {
    if (topic === 'The (One and Only) True God' || topic === 'One True God') {
      navigate('/names');
    } else if (topic === 'Settings') {
      navigate('/settings');
    } else if (topic === 'Purification') {
      navigate('/tazkiyyah');
    } else {
      // Show different messages based on user goal
      const userGoal = localStorage.getItem('userGoal');
      let message = 'Coming soon!';
      
      if (userGoal === 'doubts') {
        message = 'This section will help you find evidence and answers to your questions. Coming soon!';
      } else if (userGoal === 'explore') {
        message = 'This section will help you explore and discover new aspects of Islam. Coming soon!';
      } else if (userGoal === 'improve') {
        message = 'This section will help you improve your practice and build better habits. Coming soon!';
      }
      
      alert(message);
    }
  };

  // Use a fixed font size for all topic titles (outer circles)
  const topicFontSize = outerRadius * 0.18;
  // Calculate font size for center title to fit within the center circle
  const getCenterFontSize = (text) => {
    const base = centerRadius * 0.22;
    if (text.length > 18) return base * 0.7;
    if (text.length > 14) return base * 0.8;
    if (text.length > 10) return base * 0.9;
    return base;
  };

  return (
    <div
      className={`min-h-screen flex items-center justify-center p-4 transition-all duration-500 ${
        themeName === 'story' ? 'animate-fade-in' : ''
      }`}
      style={{
        // backgroundColor: theme.background, // Removed to allow background image to show
        color: theme.text,
        fontFamily: themeName === 'story' ? `'Poppins', sans-serif` : 'inherit',
      }}
    >
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: scale(0.96);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
        .topic-hover:hover {
          transform: scale(1.08);
          filter: brightness(1.05);
        }
      `}</style>

      <div className="flex flex-col items-center">
        <h1
          className="text-3xl sm:text-5xl font-bold text-center"
          style={{ color: theme.secondary, textShadow: '0 0 6px #00f2fa', marginBottom: 0 }}
        >
          {wheelTitle}
        </h1>
        <div
          className="text-base sm:text-2xl font-semibold text-center mb-6"
          style={{ color: theme.secondary, textShadow: '0 0 6px #00f2fa', marginTop: 4 }}
        >
          {wheelSubtitle}
        </div>

        <div
          ref={svgRef}
          className="w-full aspect-square mx-auto flex items-center justify-center"
          style={{ maxWidth: '100vw', width: '100vw', padding: '0 8px' }}
        >
          <svg viewBox={`0 0 ${size} ${size}`} className="w-full h-full">
            {/* Radial gradient (Story only) */}
            {themeName === 'story' && (
              <defs>
                <radialGradient id="centerGradient" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#b18fff" />
                  <stop offset="100%" stopColor="#805ad5" />
                </radialGradient>
              </defs>
            )}

            {/* Buitenste ring */}
            <circle
              cx={center}
              cy={center}
              r={radius * 0.86}
              fill="none"
              stroke={theme.border}
              strokeWidth="2"
              style={themeName === 'neon' ? { filter: `drop-shadow(0 0 6px ${theme.border})` } : {}}
            />

            {/* Stralenlijnen */}
            {topics.map((_, index) => {
              const angle = (index / topics.length) * 2 * Math.PI;
              const lineStart = calculatePoint(angle, centerRadius);
              const lineEnd = calculatePoint(angle, radius * 0.86);
              return (
                <line
                  key={`line-${index}`}
                  x1={lineStart.x}
                  y1={lineStart.y}
                  x2={lineEnd.x}
                  y2={lineEnd.y}
                  stroke={theme.border}
                  strokeWidth="2"
                  style={themeName === 'neon' ? { filter: `drop-shadow(0 0 6px ${theme.border})` } : {}}
                />
              );
            })}

            {/* Centrale cirkel */}
            {(() => {
              const centerFill =
                themeName === 'story' ? 'url(#centerGradient)' : theme.background;
              const centerStroke =
                themeName === 'story' ? '#a084e8' : theme.border;
              const centerTextColor =
                themeName === 'story' ? '#ffffff' : theme.secondary;

              return (
                <>
                  <circle
                    cx={center}
                    cy={center}
                    r={centerRadius}
                    fill={centerFill}
                    stroke={centerStroke}
                    strokeWidth="3"
                    onClick={() => handleClick('The (One and Only) True God')}
                    style={themeName === 'neon' ? { cursor: 'pointer', filter: `drop-shadow(0 0 6px ${theme.border})` } : { cursor: 'pointer' }}
                  />
                  <text
                    x={center}
                    y={center}
                    textAnchor="middle"
                    fill={centerTextColor}
                    fontSize={getCenterFontSize('One True God')}
                    fontWeight="bold"
                    dy=".3em"
                    pointerEvents="none"
                    style={{ textShadow: '0 0 6px #00f2fa', textTransform: 'uppercase' }}
                  >
                    {'One True God'.toUpperCase()}
                  </text>
                </>
              );
            })()}

            {/* Buitenste cirkels + labels */}
            {topics.map((topic, index) => {
              const angle = (index / topics.length) * 2 * Math.PI;
              const pos = calculatePoint(angle, radius * 0.86);

              const fillColor =
                themeName === 'story' ? topic.color : theme.background;
              const textColor =
                themeName === 'story' ? '#ffffff' : theme.secondary;
              const strokeColor =
                themeName === 'story' ? topic.color : theme.border;

              return (
                <g
                  key={`topic-${index}`}
                  onClick={() => handleClick(topic.english)}
                  className={themeName === 'story' ? 'transition-all duration-300 topic-hover' : ''}
                  style={{ cursor: 'pointer' }}
                >
                  <circle
                    cx={pos.x}
                    cy={pos.y}
                    r={outerRadius}
                    fill={fillColor}
                    stroke={strokeColor}
                    strokeWidth="2"
                    style={themeName === 'neon' ? { filter: `drop-shadow(0 0 6px ${strokeColor})` } : {}}
                  />
                  {themeName === 'story' && (
                    <text
                      x={pos.x}
                      y={pos.y - outerRadius * 0.5}
                      textAnchor="middle"
                      fill={textColor}
                      fontSize={outerRadius * 0.24}
                      dy="0"
                    >
                      {topic.icon}
                    </text>
                  )}
                  <text
                    x={pos.x}
                    y={pos.y}
                    textAnchor="middle"
                    fill={textColor}
                    fontSize={topicFontSize}
                    fontWeight="bold"
                    dy="0"
                    style={{ textShadow: '0 0 6px #00f2fa', textTransform: 'uppercase' }}
                  >
                    {topic.english.toUpperCase()}
                  </text>
                  {language === 'english_phonetic' && (
                    <text
                      x={pos.x}
                      y={pos.y + outerRadius * 0.25}
                      textAnchor="middle"
                      fill={textColor}
                      fontSize={outerRadius * 0.13}
                    >
                      {topic.arabic}
                    </text>
                  )}
                </g>
              );
            })}
          </svg>
        </div>

        <button
          onClick={() => navigate('/settings')}
          className="mt-6 px-4 py-2 text-sm sm:text-lg font-bold rounded-full transition-all duration-200 hover:scale-105"
          style={{
            border: `2px solid ${theme.secondary}`,
            color: theme.secondary,
            backgroundColor: 'transparent',
            textShadow: '0 0 6px #00f2fa',
          }}
        >
          ⚙️ Settings
        </button>
        <button onClick={() => { localStorage.removeItem('userGoal'); window.location.reload(); }}>
          Reset Onboarding
        </button>
      </div>

      {/* Floating AI Companion Button */}
      {userGoal && (
        <button
          onClick={() => {
            const messages = {
              doubts: "Hey! How are you? 👋\n\nI'm here to answer your questions about Islam.\nNo judgment, no pressure - just honest, helpful answers.\n\nWhat's on your mind?",
              explore: "Ready to discover? Let's explore together! 🌟\n\nI'm here to guide your learning journey through Islam.\nLet's find the perfect topics for you to explore!",
              improve: "Ready to grow? Let's build better habits! 🎯\n\nI'm here to help you set goals, track progress, and improve your practice.\nWhat area would you like to focus on first?"
            };
            alert(messages[userGoal] || "Hello! How can I help you today?");
          }}
          className="fixed bottom-6 right-6 w-16 h-16 rounded-full text-white font-bold text-lg shadow-lg transition-all duration-200 hover:scale-110 hover:shadow-xl"
          style={{
            backgroundColor: theme.secondary,
            border: `2px solid ${theme.secondary}`,
            boxShadow: `0 4px 12px rgba(0, 242, 250, 0.3)`,
            zIndex: 1000,
          }}
        >
          {userGoal === 'doubts' ? '❓' : userGoal === 'explore' ? '🌟' : '🎯'}
        </button>
      )}

      {/* Remove all view state and conditional rendering for 'names', 'detail', etc. Only keep the wheel rendering for now. */}
      {/* {view === 'names' && (
        <NamesOfAllah
          onBack={() => setView('wheel')}
          onNameClick={(name) => {
            setSelectedName(name);
            setView('detail');
          }}
          language={language}
        />
      )} */}

      {/* {view === 'detail' && selectedName && (
        <NameDetail
          name={selectedName}
          onBack={() => setView('names')}
          onMore={() => alert('More info coming soon')}
        />
      )} */}

      {/* {view === 'settings' && (
        <Settings
          language={language}
          setLanguage={setLanguage}
          onBack={() => setView('wheel')}
        />
      )} */}

      {/* {view === 'tazkiyyah' && (
        <TazkiyyahLanding onBack={() => setView('wheel')} />
      )} */}
    </div>
  );
};

export default WheelOfIslam;
