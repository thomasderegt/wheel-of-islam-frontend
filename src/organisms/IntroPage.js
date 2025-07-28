import React from 'react';
import { useNavigate } from 'react-router-dom';
import MenuContainer from '../atoms/MenuContainer';
import MenuText from '../atoms/MenuText';
import MenuButton from '../atoms/MenuButton';
import ProgressBar from '../components/ProgressBar';

const IntroPage = ({ 
  title = 'The One True God',
  subtitle = 'The God of Adam',
  videoPlaceholder = true,
  navigationButtons = [],
  progressBar = null,
  className = '',
  style = {}
}) => {
  const navigate = useNavigate();

  return (
    <MenuContainer variant="default" className={`min-h-screen text-white flex flex-col items-center justify-center p-6 ${className}`} style={style}>
      <div className="max-w-4xl mx-auto text-center">
        {/* Header */}
        <MenuText variant="title" className="mb-8">
          {title}
        </MenuText>
        
        {/* Subtitle */}
        <MenuText variant="subtitle" className="mb-8">
          {subtitle}
        </MenuText>

        {/* Main Content */}
        <div className="text-lg md:text-xl leading-relaxed mb-12 max-w-3xl mx-auto">
          
          {/* Video Window */}
          {videoPlaceholder && (
            <div className="mb-8">
              <div className="relative w-full max-w-2xl mx-auto">
                <div className="aspect-video bg-gray-900 rounded-lg border-2 border-gray-700 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4">🎥</div>
                    <MenuText variant="body" className="text-lg text-gray-400">
                      Introduction Video
                    </MenuText>
                    <MenuText variant="caption" className="text-sm text-gray-500 mt-2">
                      Coming Soon
                    </MenuText>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Navigation Buttons */}
        {navigationButtons.length > 0 && (
          <div className="flex flex-col gap-4 justify-center items-center mt-12 mb-12">
            {navigationButtons.map((button, index) => (
              <MenuButton
                key={button.id || index}
                onClick={button.onClick}
                color={button.color || '#00f2fa'}
                width="200px"
                size={button.size || 'medium'}
              >
                {button.label}
              </MenuButton>
            ))}
          </div>
        )}

        {/* Progress Bar */}
        {progressBar && (
          <ProgressBar {...progressBar} />
        )}
      </div>
    </MenuContainer>
  );
};

export default IntroPage; 