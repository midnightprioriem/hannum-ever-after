import React from 'react';
import { StylesProvider } from '@material-ui/core/styles';
import './App.css';
import Hero from 'sections/Hero';
import MenuBar from 'components/MenuBar';
import SectionOne from 'sections/SectionOne';
import SectionTwo from 'sections/SectionTwo';
import Rsvp from 'components/Rsvp';
import styles from 'app.module.css';
import Footer from 'components/Footer';

function App() {

  return (
    <StylesProvider injectFirst>
      <div className="container">
        <MenuBar />
        <div
          className={styles.appRoot}>
          <Hero />
          <SectionOne />
          <SectionTwo />
          <Footer />
        </div>
      </div>
    </StylesProvider>
  );
}

export default App;
