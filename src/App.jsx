// Imports
import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Button from 'react-bootstrap/Button';
import { Container } from 'react-bootstrap';

// components
import BasicNav from './assets/components/nav';
import GreenBoxMessage from './assets/components/homePort';
import BasicExample from './assets/components/card-port';
import Articles from './Articles';
import About from './About';
import HireMe from './HireMe';
import TrafficGo from './assets/TrafficGo';
import CA_Housing from './assets/CA_housing';
import Article1 from './assets/components/article1';
import SkillsBanner from './assets/components/skills';
import PageTransition from './assets/components/PageTransition';

// images
import cart from './assets/images/cartagena-day-01.png';
import msg from './assets/images/group-8.png'
import bottoms from './assets/images/Frame-24.png'
import underline from './assets/images/Vector.png'
function Home() {
  const scrollToPortfolio = () => {
    const portfolioSection = document.querySelector('.portfolio-container');
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="App">
      <PageTransition>
        <header className="App-header">
        <img src={cart} className="App-top" alt="background-cartagena" />
        <GreenBoxMessage />
        <Button className="button-msg" variant="success" onClick={scrollToPortfolio}>See Portfolio</Button>

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

      <SkillsBanner />
      <Container className='portfolio-container'>
        <div className='portfolio-title'>
          <h1 className="portfolio-title" style={{margin: '2rem'}}>Portfolio</h1>
        </div>

          <BasicExample />
      </Container>
      </PageTransition>
    </div>
  );
}

function App() {
  const location = useLocation();
  
  return (
    <>
      <BasicNav />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/articles" element={<PageTransition><Articles /></PageTransition>} />
          <Route path="/about" element={<PageTransition><About /></PageTransition>} />
          <Route path="/hireme" element={<PageTransition><HireMe /></PageTransition>} />
          <Route path="/trafficgo" element={<PageTransition><TrafficGo /></PageTransition>} />
          <Route path="/CA_housing" element={<PageTransition><CA_Housing /></PageTransition>} />
          <Route path="/article1" element={<PageTransition><Article1 /></PageTransition>} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
