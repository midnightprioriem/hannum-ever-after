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
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'components/toastify.css';

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
            <Rsvp id="rsvp" />
            <Footer />
          </div>
        </div>
        <ToastContainer
          position="top-right"
          autoClose={10000}
          hideProgressBar={false}
          newestOnTop={true}
          closeOnClick
          draggable
          pauseOnHover />
      </StylesProvider>
    </ThemeProvider>
  );
}

export default App;
