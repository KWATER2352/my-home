import './App.css';
import Button from 'react-bootstrap/Button';

// components
import BasicExample from './assets/components/card-port';

// images
import port from './assets/images/porty-01 1.png';
import msg from './assets/images/Group-9.png'
import bottoms from './assets/images/Frame-24.png';
import { Container } from 'react-bootstrap';

function Articles() {
  return (
    <div id="Articles" className="Articles">
      <header className="Articles-header">
        <img src={port} className="App-top" alt="background-cartagena" />
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
      <img src={bottoms}  alt="background-cartagena" />
      </div>
  );
}

export default Articles;