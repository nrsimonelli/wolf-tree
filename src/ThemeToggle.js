import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from './ThemeContext';
import { RiMoonClearLine, RiSunFoggyFill } from 'react-icons/ri';

const ThemeToggle = ({
  isButton = true,
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
    xs: 'h-16 w-16',
    sm: 'h-20 w-20',
    md: 'h-24 w-24',
    lg: 'h-32 w-32',
    xl: 'h-40 w-40',
  };

  if (!iconSize[size]) {
    size = 'sm';
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
      className={isButton ? `btn ${toggleStyle}` : ` ${toggleStyle}`}
      onClick={nextTheme}
    >
      {theme === 'dark' ? toLightMode : toDarkMode}
    </div>
  );
};

ThemeToggle.propTypes = {
  isButton: PropTypes.bool,
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
  toLightMode: PropTypes.node,
  toDarkMode: PropTypes.node,
  toggleStyle: PropTypes.string,
};

export default ThemeToggle;
