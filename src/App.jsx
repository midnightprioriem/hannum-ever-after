import logo from './logo.svg';
import './App.css';
import Hero from './Hero';
import MenuBar from './MenuBar';
import Grid from '@material-ui/core/Grid';
import Venue from './Venue'
import When from './When'

const contentDivStyle = {
  position: 'absolute',
  top: '100%',
  width: '100%',
}

function App() {
  return (
    <div className="container">
      <MenuBar />
      <Hero />
      <div style={contentDivStyle}>
      <Venue />
      <When />
      </div>
  </div>
  );
}

export default App;
