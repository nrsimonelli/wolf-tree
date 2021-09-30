const ThemeBackground = ({ children }) => {
  return (
    // Remove transition-all to disable the background color transition.
    <div className='bg-primary-50 dark:bg-primary-900 dark:text-primary-100 text-primary-800 transition-all duration-500'>
      {children}
    </div>
  );
};

export default ThemeBackground;
