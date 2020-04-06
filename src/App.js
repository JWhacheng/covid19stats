import React from 'react';
import Header from './components/Header';
import WorldStats from './components/WorldStats';
import CountryStats from './components/CountryStats';
import Footer from './components/Footer';

function App() {
  return (
    <div className="main-container">
      <div className="content">
        <Header/>
        <div className="container">
          <WorldStats/>
          <CountryStats />
        </div>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
