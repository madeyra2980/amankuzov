import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GlobalStyle } from './styles/GlobalStyles';
import { AnalysisProvider } from './services/AnalysisContext';
import Home from './pages/Home';
import Camera from './pages/Camera';
import Analysis from './pages/Analysis';
import Results from './pages/Results';

function App() {
  return (
    <AnalysisProvider>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/camera" element={<Camera />} />
          <Route path="/analysis" element={<Analysis />} />
          <Route path="/results" element={<Results />} />
        </Routes>
      </Router>
    </AnalysisProvider>
  );
}

export default App;