import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'typeface-inter';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'normalize.css';

export const API_URL = 'http://localhost:3001';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
