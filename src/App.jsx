import './App.css';
import Hero from './Hero';
import MenuBar from './MenuBar';
import Venue from './Venue'
import When from './When'
import Registry from './Registry'
import React from 'react';
import Hashtag from './Hashtag';
import styles from './app.module.css';
import Footer from './Footer';

function App() {

  return (
    <div className="container">
      <MenuBar />
      <Hero />
      <div className={styles.background}>
        <div
          className={styles.contentDivStyle}>
          <Hashtag />
          <Venue id='venue'/>
          <When id='when'/>
          <Registry id='registry'/>
          <Footer />
        </div>
      </div>

    </div>
  );
}

export default App;
