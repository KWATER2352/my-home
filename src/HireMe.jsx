import './App.css';
import { Container } from 'react-bootstrap';
import me from './assets/images/me.png';
import resume from './assets/files/resume.pdf';
function HireMe() {
  return (
    <div className="App">
      <Container className='portfolio-container' style={{ paddingTop: '5rem' }}>

        <h1 className="portfolio-title" style={{ margin: '2rem' }}>Hire Me</h1>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'left' }}>
          <p className="project-text" style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
            I'm currently available for freelance projects and full-time opportunities in UI/UX design and 
            front-end development.
          </p>
          
          <h2 className="project-title" style={{ fontSize: '1.8rem', marginTop: '2rem', marginBottom: '1rem' }}>
            What I Offer
          </h2>
          <ul className="project-text" style={{ fontSize: '1.1rem', lineHeight: '2', color: '#555', paddingLeft: '1.5rem' }}>
            <li>UI/UX Design & Prototyping</li>
            <li>Front-End Development (React, JavaScript)</li>
            <li>Responsive Web Design</li>
            <li>Data Visualization</li>
            <li>User Research & Testing</li>
          </ul>

          <h2 className="project-title" style={{ fontSize: '1.8rem', marginTop: '2rem', marginBottom: '1rem' }}>
            Let's Connect
          </h2>
          <p className="project-text" style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
            Interested in working together? Feel free to reach out to discuss your project or opportunity.
          </p>
          <div style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
            <p className="project-text" style={{ marginBottom: '0.5rem' }}>
              <strong>Email:</strong>{' '}
              <a href="mailto:kwaterford7151@sdsu.edu" style={{ color: '#5FBCE2', textDecoration: 'none' }}>
                kwaterford7151@sdsu.edu
              </a>
            </p>
            <p className="project-text" style={{ marginBottom: '0.5rem' }}>
              <strong>Resume:</strong>{' '}
              <a href={resume} target="_blank" rel="noopener noreferrer" style={{ color: '#5FBCE2', textDecoration: 'none' }}>
                Download Here
              </a>
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default HireMe;
