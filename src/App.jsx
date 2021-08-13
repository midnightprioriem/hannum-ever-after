import React from 'react';
import { StylesProvider, ThemeProvider, createTheme } from '@material-ui/core/styles';
import './App.css';
import Hero from 'sections/Hero';
import SectionOne from 'sections/SectionOne';
import SectionTwo from 'sections/SectionTwo';
import Rsvp from 'components/Rsvp';
import styles from 'app.module.css';
import Footer from 'components/Footer';
import PhotoGallery from 'components/PhotoGallery';

const theme = createTheme({
  palette: {
    primary: {
      main: '#BEA456',
    },
    secondary: {
      main: '#BEA456',
    },
    typography: {
      fontFamily: ['"Josefin Sans"'].join(',')
    },
  },
});

function App() {

  return (
    <ThemeProvider theme={theme}>
      <StylesProvider injectFirst>
        <div className="container">
          <div
            className={styles.appRoot}>
            <Hero />
            <SectionOne />
            <SectionTwo />
            <PhotoGallery />
            <Rsvp id="rsvp"/>
            <Footer />
          </div>
        </div>
      </StylesProvider>
    </ThemeProvider>
  );
}

export default App;
