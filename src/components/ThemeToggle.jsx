import React from 'react';

const ThemeToggle = () => {
  const toggleTheme = () => {
    const htmlElement = document.documentElement;
    if (htmlElement.classList.contains('dark')) {
      htmlElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      htmlElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
  };

  React.useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  return (
    <button
      onClick={toggleTheme}
      className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition"
    >
      Toggle Theme
    </button>
  );
};

export default ThemeToggle;