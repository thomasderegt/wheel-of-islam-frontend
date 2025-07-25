import React from 'react';
import WheelOfIslam from './components/WheelOfIslam';
import { ThemeProvider } from './context/ThemeContext';
import './App.css';
import bgCircuitBoard from './assets/background-circuit-board.png';

function App() {
  return (
    <>
      <div
        style={{
          position: 'fixed',
          top: 0, left: 0, right: 0, bottom: 0,
          zIndex: -2,
          background: `#000 url(${bgCircuitBoard}) center center/cover no-repeat`,
          opacity: 1,
        }}
      ></div>
      <ThemeProvider>
        <WheelOfIslam />
      </ThemeProvider>
    </>
  );
}

export default App;
