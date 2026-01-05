import './App.css';
import Button from 'react-bootstrap/Button';

// components
import BasicExample from './assets/components/card-port';
import ArticlesBanner from './assets/components/articleskills';
// images
import port from './assets/images/porty-01 1.png';
import msg from './assets/images/Group-9.png'
import bottoms from './assets/images/Frame-24.png';
import { Container } from 'react-bootstrap';
import BlueBoxMessage from './assets/components/articlemsg';
import underline from './assets/images/Vector.png';

function Articles() {
  return (
    <div id="Articles" className="Articles">
      <header className="Articles-header">
        <img src={port} className="App-top" alt="background-cartagena" />
         <BlueBoxMessage />
        <Button className="blue-button" variant="success">See Articles</Button>

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
      <ArticlesBanner />
      <Container className='portfolio-container'>
        <div className='portfolio-title'>
          <h1 className="portfolio-title">Articles</h1>
          <img className='underlineimg' src={underline} alt="articles title underline" />
        </div> 
      </Container>
      </div>
  );
}


export default Articles;