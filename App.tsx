
import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Eras from './pages/Eras';
import Topics from './pages/Topics';
import Quiz from './pages/Quiz';
import Results from './pages/Results';

const App: React.FC = () => {
  return (
    <Router>
      <div className="max-w-[430px] mx-auto min-h-screen relative shadow-2xl bg-background-light dark:bg-background-dark overflow-x-hidden">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/eras" element={<Eras />} />
          <Route path="/topics/:eraId" element={<Topics />} />
          <Route path="/quiz/:topicId" element={<Quiz />} />
          <Route path="/results" element={<Results />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
