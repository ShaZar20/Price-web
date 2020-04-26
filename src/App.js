import React from 'react';
import Header from './components/Header';
import HomePage from './components/HomePage.js';
import './styles/styles.scss';
import Footer from './components/Footer';


function App() {
  return (
    <div className="page-box">
      <Header />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;
