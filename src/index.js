import React from 'react';
import ReactDOM from 'react-dom';
import 'tailwindcss/tailwind.css';
import './common.css';
import App from './App';

import { ThemeProvider } from './ThemeContext';
import ThemeBackground from './ThemeBackground';

ReactDOM.render(
  <ThemeProvider>
    <ThemeBackground>
      <App />
    </ThemeBackground>
  </ThemeProvider>,
  document.getElementById('root')
);
