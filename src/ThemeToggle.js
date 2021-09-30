import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from './ThemeContext';
import { RiMoonClearLine, RiSunFoggyFill } from 'react-icons/ri';

const ThemeToggle = ({
  size,
  toLightMode,
  toDarkMode,
  toggleStyle,
}) => {
  const { theme, setTheme } = useContext(ThemeContext);

  const nextTheme = () => {
    if (theme === 'dark') {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  };

  const iconSize = {
    sm: 'h-4 w-4',
    md: 'h-6 w-6',
    lg: 'h-8 w-8',
    xl: 'h-10 w-10',
  };

  if (!iconSize[size]) {
    size = 'md';
  }

  const lightModeIcon = <RiSunFoggyFill className={iconSize[size]} />;
  const darkModeIcon = <RiMoonClearLine className={iconSize[size]} />;

  if (!toLightMode) {
    toLightMode = lightModeIcon;
  }
  if (!toDarkMode) {
    toDarkMode = darkModeIcon;
  }

  return (
    <div
      className={`btn transition-all duration-500 ease-in-out ${toggleStyle}`}
      onClick={nextTheme}
    >
      {theme === 'dark' ? toLightMode : toDarkMode}
    </div>
  );
};

ThemeToggle.propTypes = {
  size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl']),
  toLightMode: PropTypes.node,
  toDarkMode: PropTypes.node,
  toggleStyle: PropTypes.string,
};

export default ThemeToggle;
