import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
// import { Provider } from 'react-redux';
// import store from 'store';
import ScrollToTop from './components/ScrollToTop';
import Header from './components/Header';
import Routes from './routes';
import Footer from './components/Footer';

const App = () => {
  return (
    // <Provider store={store}>
    <Router>
      <ScrollToTop />
      <Header />
      <main>
        <Routes />
      </main>
      <Footer />
    </Router>
    // </Provider>
  );
};

export default App;
