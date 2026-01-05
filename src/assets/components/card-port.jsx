import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import trafficImage from '../images/X-1.png';
import des from '../images/des.png';
import ca from '../images/ca.png';  

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
        "title": "CA Housing Analysis - Full Stack Application",
        "text": "EDA and Modeling to Predict Median California Housing Prices",
        "buttonText": "View Project",
        "link": "/CA_housing",
        "imageSrc": ca
    },
    {
        "id": 3,
        "title": "Portfolio Project - Full Stack Application",
        "text": "Another portfolio project with unique content.",
        "buttonText": "View Project",
        "imageSrc": des
    }
];

function BasicExample() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', justifyContent: 'center', border: '2px solid #e0c304ff', padding: '2rem' }}
    >
      {portfolioData.map((portfolio, index) => (
        <motion.div 
          key={portfolio.id} 
          variants={cardVariants}
          whileHover={{ 
            y: -10, 
            boxShadow: '0 12px 24px rgba(0,0,0,0.15)',
            transition: { duration: 0.3 }
          }}
          style={{
            width: '280px',
            backgroundColor: 'white',
            border: '1px solid #e0e0e0',
            borderRadius: '0',
            overflow: 'hidden',
            boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
          }}
        >
          <img 
            src={portfolio.imageSrc} 
            alt={portfolio.title}
            style={{ 
              width: '100%',
              height: '180px', 
              objectFit: 'cover', 
              display: 'block'
            }} 
          />
          <div style={{ padding: '1.5rem' }}>
            <h3 style={{ 
              fontSize: '1.1rem',
              fontWeight: '600',
              marginBottom: '0.75rem',
              fontFamily: 'Spectral, serif',
              color: '#2c2c2c',
              lineHeight: '1.4'
            }}>{portfolio.title}</h3>
            <p style={{ 
              fontSize: '0.9rem',
              color: '#666',
              marginBottom: '1.25rem',
              lineHeight: '1.6'
            }}>
              {portfolio.text}
            </p>
            {portfolio.link ? (
              <Link to={portfolio.link} style={{ textDecoration: 'none' }}>
                <span style={{
                  fontSize: '0.9rem',
                  fontWeight: '600',
                  color: '#2c2c2c',
                  borderBottom: '2px solid #e0c304ff',
                  paddingBottom: '2px',
                  transition: 'color 0.2s ease'
                }}>{portfolio.buttonText} →</span>
              </Link>
            ) : (
              <span style={{
                fontSize: '0.9rem',
                fontWeight: '600',
                color: '#2c2c2c',
                borderBottom: '2px solid #e0c304ff',
                paddingBottom: '2px',
                cursor: 'pointer'
              }}>{portfolio.buttonText} →</span>
            )}
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}

export default BasicExample;