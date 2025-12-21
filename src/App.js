// Imports
import './App.css';
import Button from 'react-bootstrap/Button';

// components
import BasicNav from './assets/components/nav';

// images
import cart from './assets/images/cartagena-day-01.png';
import msg from './assets/images/group-8.png'
import bottoms from './assets/images/Frame-24.png'
import { Container } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <header className="App-header">
                <BasicNav />

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
      <img src={bottoms}  alt="background-cartagena" />
    </div>
  );
}

export default App;
