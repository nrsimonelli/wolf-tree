import React from 'react';
import ThemeToggle from './ThemeToggle';

const App = () => {
  return (
    <div className='min-h-screen flex flex-col items-center justify-center'>
      <div className='text-5xl m-16 font-semibold text-transparent bg-clip-text bg-gradient-to-l from-secondary-400 to-accent-600'>
        WolfTree
      </div>
      <ThemeToggle toggleStyle='text-white dark:text-black bg-accent-500 hover:bg-accent-600 dark:hover:bg-accent-400' />
    </div>
  );
};

export default App;
