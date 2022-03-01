import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { App } from './App';

const darkTheme = {
  background: '#736b5e',
  text: '#e8e6e3',
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);

/**
 * background dark = #736b5e;
color-dark:#e8e6e3;
 */
