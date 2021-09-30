import React from 'react';
import ThemeToggle from './ThemeToggle';

const Nav = () => {
  return (
    <div className='sticky top-0 w-full h-16 transition-all duration-500 shadow bg-primary-50 dark:bg-primary-800'>
      <div className='flex flex-row items-center justify-between h-full max-w-screen-xl px-4 mx-auto'>
        <div>title</div>
        <div>links</div>
        <ThemeToggle isButton={false} size='sm' />
      </div>
    </div>
  );
};

export default Nav;
