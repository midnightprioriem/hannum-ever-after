import React from 'react';
import './App.css';
import Hero from './Hero';
import MenuBar from './MenuBar';
import Venue from './Venue';
import When from './When';
import Registry from './Registry';
import Rsvp from './Rsvp';
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
          <Venue id='venue'/>
          <When id='when'/>
          <Registry id='registry'/>
          <Rsvp id='rsvp'/>
          <Footer />
        </div>
      </div>

    </div>
  );
}

export default App;
