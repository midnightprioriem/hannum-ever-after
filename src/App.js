import logo from './logo.svg';
import './App.css';
import Hero from './Hero'
import MenuBar from './MenuBar'

const contentDivStyle = {
  position: 'absolute',
  top: '100%',
}

function App() {
  return (
    <div className="container">
      <MenuBar />
      <Hero />
      <div style={contentDivStyle}>
        <section>
          <p>hello world!</p>
        </section>
        <section>
          <p>hello world!</p>
        </section>
        <section>
          <p>hello world!</p>
        </section>
        <section>
          <p>hello world!</p>
        </section>
        <section>
          <p>hello world!</p>
        </section>
        <section>
          <p>hello world!</p>
        </section>
        <section>
          <p>hello world!</p>
        </section>
        <section>
          <p>hello world!</p>
        </section>
      </div>
    </div>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
