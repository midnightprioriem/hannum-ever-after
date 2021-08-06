import React from 'react';
import { StylesProvider } from '@material-ui/core/styles';
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
    <StylesProvider injectFirst>
      <div className="container">
        <MenuBar />
        <div
          className={styles.appRoot}>
          <Hero />
            <div className={styles.sectionOne}>
              <Venue id='venue' />
              <When id='when' />
              <Registry id='registry' />
            </div>
          <Rsvp id='rsvp' />
          <Footer />
        </div>
      </div>
    </StylesProvider>
  );
}

export default App;
