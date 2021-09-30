import React from 'react';
import ThemeToggle from './ThemeToggle';
import { RiMoonClearLine, RiSunFoggyFill } from 'react-icons/ri';

const toLightIcon = <RiSunFoggyFill className='h-6 w-6' />;
const toDarkIcon = <RiMoonClearLine className='h-6 w-6' />;

const App = () => {
  return (
    <div className='min-h-screen flex flex-col items-center justify-center'>
      <div className='text-5xl m-16 font-semibold text-transparent bg-clip-text bg-gradient-to-l from-secondary-400 to-accent-600'>
        WolfTree
      </div>
      <ThemeToggle
        toggleStyle='text-white dark:text-black bg-accent-500 hover:bg-accent-600'
        toDarkMode={toDarkIcon}
        toLightMode={toLightIcon}
      />
    </div>
  );
};

export default App;
