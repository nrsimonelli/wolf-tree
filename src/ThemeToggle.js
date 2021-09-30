import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

const ThemeToggle = ({ toLightMode, toDarkMode, toggleStyle }) => {
  const { theme, setTheme } = useContext(ThemeContext);

  if (toLightMode === undefined) {
    toLightMode = 'light mode';
  }
  if (toDarkMode === undefined) {
    toDarkMode = 'dark mode';
  }

  const nextTheme = () => {
    if (theme === 'dark') {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  };

  return (
    <div
      className={`btn transition-all duration-500 ease-in-out ${toggleStyle}`}
      onClick={nextTheme}
    >
      {theme === 'dark' ? toLightMode : toDarkMode}
    </div>
  );
};

export default ThemeToggle;
