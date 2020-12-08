import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
// import { Provider } from 'react-redux';
// import store from 'store';
import GlobalStyle from './globalStyles';
import ScrollToTop from './components/ScrollToTop';
import Header from './components/Header';
import Routes from './routes';
import Footer from './components/Footer';
import 'react-toastify/dist/ReactToastify.css';

const App = (): JSX.Element => {
  return (
    <>
      <Router>
        <GlobalStyle />
        <ScrollToTop />
        <Header />
        <main>
          <Routes />
        </main>
        <Footer />
      </Router>
      <ToastContainer
        style={{
          marginTop: '4rem',
        }}
      />
    </>
  );
};

export default App;
