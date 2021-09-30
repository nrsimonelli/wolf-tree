import React from 'react';
import Nav from './Nav';
import ThemeToggle from './ThemeToggle';

const App = () => {
  return (
    <>
      <Nav />
      <div className='flex flex-col items-center justify-center min-h-screen'>
        <div className='m-16 text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-l from-secondary-400 to-accent-600'>
          WolfTree
        </div>
        <ThemeToggle
          size='sm'
          toDarkMode='Dark Mode'
          toLightMode='Light Mode'
          toggleStyle='text-white dark:text-black bg-accent-500 hover:bg-accent-600 dark:hover:bg-accent-400'
        />
      </div>
    </>
  );
};

export default App;
