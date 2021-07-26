import './App.css';
import Hero from './Hero';
import MenuBar from './MenuBar';
import Venue from './Venue'
import When from './When'
import Registry from './Registry'

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
      <Registry />
      </div>
  </div>
  );
}

export default App;
