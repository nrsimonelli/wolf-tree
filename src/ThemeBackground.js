const ThemeBackground = ({ children }) => {
  return (
    // Remove transition-all to disable the background color transition.
    <div className='transition-all duration-500 bg-primary-100 dark:bg-primary-900 dark:text-primary-100 text-primary-800'>
      {children}
    </div>
  );
};

export default ThemeBackground;
