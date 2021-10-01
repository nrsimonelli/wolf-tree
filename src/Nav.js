import React from 'react';
import ThemeToggle from './ThemeToggle';

const Nav = () => {
  return (
    <div className='sticky top-0 w-full transition-all duration-500 shadow h-60 bg-primary-50 dark:bg-primary-800'>
      <div className='flex flex-row items-center justify-between h-full max-w-screen-xl px-16 mx-auto'>
        <div className='capitalize text-20'>title</div>
        <div>links</div>
        <ThemeToggle
          size='sm'
          toggleStyle='hover:bg-primary-200 dark:hover:bg-primary-600'
        />
      </div>
    </div>
  );
};

export default Nav;
