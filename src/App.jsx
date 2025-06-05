import { useEffect, useState } from 'react';
import React from 'react';
import Layout from './Layout';
import Hero from './Component/Hero';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  const [isDark, setIsDark] = useState(() => {
    // Get theme preference from localStorage or system preference
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('theme');
      if (stored) return stored === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const toggleDarkMode = () => setIsDark(prev => !prev);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Layout isDark={isDark} toggleDarkMode={toggleDarkMode} />}
        >
          <Route
            index
            element={<Hero isDark={isDark} toggleDarkMode={toggleDarkMode} />}
          />
       
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
