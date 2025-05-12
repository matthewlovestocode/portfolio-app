import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Container, CssBaseline } from '@mui/material';
import { HomePage } from './pages/Home';

function App() {
  return (
    <div>
      <CssBaseline />
      <Routes>
        <Route path="/portfolio-app/" element={<HomePage />} />
      </Routes>
    </div>
  )
}

export default App
