// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';
import Header from './components/Header';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'typeface-lato';
import './index.scss';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <main>
        <Routes />
      </main>
      <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
