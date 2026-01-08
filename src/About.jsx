import './App.css';
import { Container } from 'react-bootstrap';
import me from './assets/images/me.png';
function About() {
  return (
    <div className="App">
      <Container className='portfolio-container' style={{ paddingTop: '5rem' }}>
            <img src={me} alt="Me" style={{ maxWidth: '200px', borderRadius: '50%', marginBottom: '1rem' }} />

        <h1 className="portfolio-title" style={{ margin: '2rem' }}>About</h1>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'left' }}>
          <p className="project-text" style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
            Welcome! I'm a UI/UX designer and developer passionate about creating meaningful digital experiences 
            that bridge technology and human connection. My work is inspired by my love for travel, culture, 
            and storytelling.
          </p>
          <p className="project-text" style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
            With expertise in React JS, UI/UX Design, and data visualization using Pandas, I bring a unique 
            blend of design sensibility and technical skills to every project. Whether I'm crafting intuitive 
            interfaces or analyzing data to inform design decisions, I strive to create solutions that are 
            both beautiful and functional.
          </p>
          <p className="project-text" style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
            When I'm not designing or coding, you'll find me exploring new places, capturing moments through 
            photography, or writing about my experiences. Each journey enriches my perspective and influences 
            my approach to design.
          </p>
        </div>
      </Container>
    </div>
  );
}

export default About;
