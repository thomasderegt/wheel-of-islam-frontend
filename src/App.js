import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import WheelOfIslam from './components/WheelOfIslam';
import NamesOfAllah from './components/NamesOfAllah';
import NameDetail from './components/NameDetail';
import TazkiyyahLanding from './components/TazkiyyahLanding';
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
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<WheelOfIslam />} />
            <Route path="/names" element={<NamesOfAllah />} />
            <Route path="/names/:nameId" element={<NameDetail />} />
            <Route path="/tazkiyyah" element={<TazkiyyahLanding />} />
            {/* Add more routes as needed */}
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
