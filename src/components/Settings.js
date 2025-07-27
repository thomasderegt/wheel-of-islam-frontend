import React from 'react';

const Settings = ({ isOpen, onClose, sharedGoal, setSharedGoal, sharedLevel, setSharedLevel }) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 flex items-center justify-center z-50 p-4"
      style={{
        background: `linear-gradient(135deg, rgba(0, 0, 0, 0.9) 0%, rgba(26, 26, 46, 0.9) 50%, rgba(22, 33, 62, 0.9) 100%), url(${process.env.PUBLIC_URL}/assets/background-circuit-board.png)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backdropFilter: 'blur(15px)',
      }}
    >
      <div 
        className="rounded-lg p-6 max-w-sm w-full max-h-[80vh] overflow-y-auto border-2"
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          borderColor: '#00f2fa',
          boxShadow: '0 0 20px #00f2fa, 0 0 40px #00f2fa, inset 0 0 20px rgba(0, 242, 250, 0.1)',
        }}
      >
        <div className="flex justify-between items-center mb-6">
          <h2 
            className="text-xl font-bold"
            style={{ 
              color: '#00f2fa', 
              textShadow: '0 0 10px #00f2fa, 0 0 20px #00f2fa' 
            }}
          >
            Settings
          </h2>
          <button 
            onClick={onClose}
            className="text-2xl transition-all duration-200 hover:scale-110"
            style={{ 
              color: '#00f2fa',
              textShadow: '0 0 5px #00f2fa'
            }}
          >
            ✕
          </button>
        </div>
        
        <div className="space-y-6">
          {/* Goal Setting */}
          <div>
            <label 
              className="block text-sm font-medium mb-2"
              style={{ color: '#00f2fa', textShadow: '0 0 5px #00f2fa' }}
            >
              Goal
            </label>
            <select 
              value={sharedGoal || ''}
              onChange={(e) => {
                setSharedGoal(e.target.value);
                localStorage.setItem('userGoal', e.target.value);
              }}
              className="w-full p-3 rounded border-2 transition-all duration-200"
              style={{
                backgroundColor: 'rgba(0, 0, 0, 0.6)',
                borderColor: '#00f2fa',
                color: '#00f2fa',
                boxShadow: '0 0 5px #00f2fa'
              }}
            >
              <option value="Doubts">I'm experiencing doubts</option>
              <option value="Explore">I want to explore</option>
              <option value="Improve">I want to improve</option>
            </select>
          </div>
          
          {/* Level Setting */}
          <div>
            <label 
              className="block text-sm font-medium mb-2"
              style={{ color: '#00f2fa', textShadow: '0 0 5px #00f2fa' }}
            >
              Level
            </label>
            <select 
              value={sharedLevel || 1}
              onChange={(e) => {
                setSharedLevel(parseInt(e.target.value));
                localStorage.setItem('userLevel', e.target.value);
              }}
              className="w-full p-3 rounded border-2 transition-all duration-200"
              style={{
                backgroundColor: 'rgba(0, 0, 0, 0.6)',
                borderColor: '#00f2fa',
                color: '#00f2fa',
                boxShadow: '0 0 5px #00f2fa'
              }}
            >
              <option value={1}>Level 1 - Novice</option>
            </select>
          </div>
          
          {/* Action Buttons */}
          <div className="flex gap-4 pt-4">
            <button 
              onClick={onClose}
              className="flex-1 py-3 px-4 rounded-lg border-2 transition-all duration-200 active:scale-95"
              style={{
                color: '#FF007F',
                borderColor: '#FF007F',
                backgroundColor: 'transparent',
                boxShadow: '0 0 10px #FF007F, 0 0 20px #FF007F'
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = 'rgba(255, 0, 127, 0.1)';
                e.target.style.boxShadow = '0 0 15px #FF007F, 0 0 30px #FF007F, inset 0 0 10px rgba(255, 0, 127, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'transparent';
                e.target.style.boxShadow = '0 0 10px #FF007F, 0 0 20px #FF007F';
              }}
            >
              Cancel
            </button>
            <button 
              onClick={() => {
                onClose();
                window.location.reload();
              }}
              className="flex-1 py-3 px-4 rounded-lg border-2 transition-all duration-200 active:scale-95"
              style={{
                color: '#00f2fa',
                borderColor: '#00f2fa',
                backgroundColor: 'transparent',
                boxShadow: '0 0 10px #00f2fa, 0 0 20px #00f2fa'
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = 'rgba(0, 242, 250, 0.1)';
                e.target.style.boxShadow = '0 0 15px #00f2fa, 0 0 30px #00f2fa, inset 0 0 10px rgba(0, 242, 250, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'transparent';
                e.target.style.boxShadow = '0 0 10px #00f2fa, 0 0 20px #00f2fa';
              }}
            >
              Save & Reload
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings; 