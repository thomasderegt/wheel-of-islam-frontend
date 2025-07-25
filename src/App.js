import React from 'react';
import WheelOfIslam from './components/WheelOfIslam';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <WheelOfIslam />
    </ThemeProvider>
  );
}

export default App;
