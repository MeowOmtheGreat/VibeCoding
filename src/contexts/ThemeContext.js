import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [favorites, setFavorites] = useState([]);

  // Load theme and favorites from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const savedFavorites = localStorage.getItem('favorites');

    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
    }

    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites));
    }
  }, []);

  // Save theme to localStorage when it changes
  useEffect(() => {
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  // Save favorites to localStorage when they change
  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const toggleTheme = () => {
    setIsDarkMode(prev => !prev);
  };

  const addToFavorites = (player) => {
    setFavorites(prev => {
      if (prev.some(fav => fav.jerseyNumber === player.jerseyNumber)) {
        return prev.filter(fav => fav.jerseyNumber !== player.jerseyNumber);
      }
      return [...prev, player];
    });
  };

  const isFavorite = (playerId) => {
    return favorites.some(fav => fav.jerseyNumber === playerId);
  };

  const value = {
    isDarkMode,
    toggleTheme,
    favorites,
    addToFavorites,
    isFavorite,
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};