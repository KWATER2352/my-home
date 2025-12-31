// Imports
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { Container } from 'react-bootstrap';

// components
import BasicNav from './assets/components/nav';
import BasicExample from './assets/components/card-port';
import Articles from './Articles';
import TrafficGo from './assets/TrafficGo';

// images
import cart from './assets/images/cartagena-day-01.png';
import msg from './assets/images/group-8.png'
import bottoms from './assets/images/Frame-24.png'
import underline from './assets/images/Vector.png'

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={cart} className="App-top" alt="background-cartagena" />
        <img src={msg} className="home-msg" alt="background-cartagena" />
        <Button className="button-msg" variant="success">See Portfolio</Button>

        {/* <img src={cart} className="App-background" alt="background-cartagena" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>

      <img src={bottoms} className="App-bottom" alt="background-cartagena" />

      <Container className='portfolio-container'>
        <div className='portfolio-title'>
          <h1 className="portfolio-title">Portfolio</h1>
          <img className='underlineimg' src={underline} alt="portfolio title underline" />
        </div>

          <BasicExample />
      </Container>
    </div>
  );
}

function App() {
  return (
    <>
      <BasicNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/trafficgo" element={<TrafficGo />} />
      </Routes>
    </>
  );
}

export default App;
