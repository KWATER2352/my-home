import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import aior from '../images/aior.png';
import oneone from '../images/book.jpg';

const articlesData = [
    {
        "id": 1,
        "title": "AI or Real?",
        "text":  "We prioritize authenticity and user trust, are we compromising those values by utilizing AI tools?",
        "buttonText": "Read Article",
        "link": "/article1",
        "imageSrc": aior
    },
    {
        "id": 2,
        "title": "El Casco Viejo",
        "text": "My journey exploring the historic El Casco Viejo neighborhood in Panama City, rich in sights and culture.",
        "buttonText": "Coming soon",
        "link": "/article2",
        "imageSrc": oneone
    },
    {
        "id": 3,
        "title": "La Villa del Vino",
        "text": "The highway of wine at Ensenada Mexico",
        "buttonText": "Coming soon",
        "link": "/article3",
        "imageSrc": oneone
    }
];

function ArticleCards() {
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
      style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', justifyContent: 'center', border: '2px solid #5FBCE2', padding: '2rem' }}
    >
      {articlesData.map((article, index) => (
        <motion.div 
          key={article.id} 
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
            src={article.imageSrc} 
            alt={article.title}
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
            }}>{article.title}</h3>
            <p style={{ 
              fontSize: '0.9rem',
              color: '#666',
              marginBottom: '1.25rem',
              lineHeight: '1.6'
            }}>
              {article.text}
            </p>
            {article.link ? (
              <Link to={article.link} style={{ textDecoration: 'none' }}>
                <span style={{
                  fontSize: '0.9rem',
                  fontWeight: '600',
                  color: '#2c2c2c',
                  borderBottom: '2px solid #5FBCE2',
                  paddingBottom: '2px',
                  transition: 'color 0.2s ease'
                }}>{article.buttonText} →</span>
              </Link>
            ) : (
              <span style={{
                fontSize: '0.9rem',
                fontWeight: '600',
                color: '#2c2c2c',
                borderBottom: '2px solid #5FBCE2',
                paddingBottom: '2px',
                cursor: 'pointer'
              }}>{article.buttonText} →</span>
            )}
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}

export default ArticleCards;
