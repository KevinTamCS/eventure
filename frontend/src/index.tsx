import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'typeface-inter';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'normalize.css';

export const API_URL = 'http://ec2-3-238-17-230.compute-1.amazonaws.com';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
