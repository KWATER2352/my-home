import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import trafficImage from '../images/X-1.png';



const portfolioData = [
    {
        "id": 1,
        "title": "Traffic GO - Transportation Analytics",
        "text": "Traffic Monitoring App Meant to Cut Down Pesky Delays",
        "buttonText": "View Project",
        "link": "/trafficgo",
        "imageSrc": trafficImage

    },
    {
        "id": 2,
        "title": "CA Housing Analysis - Group Project",
        "text": "Some quick example text to build on the card title and make up the bulk of the card's content.",
        "buttonText": "Go somewhere",
        "imageSrc": "holder.js/100px180"
    },
    {
        "id": 3,
        "title": "Portfolio Project - Full Stack Application",
        "text": "Another portfolio project with unique content.",
        "buttonText": "View Project",
        "imageSrc": "holder.js/100px180"
    }
];

function BasicExample() {
  return (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
      {portfolioData.map((portfolio) => (
        <Card key={portfolio.id} style={{ width: '18rem' }}>
          <Card.Img variant="top" src={portfolio.imageSrc} style={{ height: '200px', objectFit: 'contain', objectPosition: 'center' }} />
          <Card.Body>
            <Card.Title>{portfolio.title}</Card.Title>
            <Card.Text>
              {portfolio.text}
            </Card.Text>
            {portfolio.link ? (
              <Link to={portfolio.link}>
                <Button variant="primary">{portfolio.buttonText}</Button>
              </Link>
            ) : (
              <Button variant="primary">{portfolio.buttonText}</Button>
            )}
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default BasicExample;