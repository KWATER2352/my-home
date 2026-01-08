import React from 'react';
import underline from '../images/Vector.png';

const GreenBoxMessage = () => {
  return (
    <div className='home-msg' style={styles.box}>
      <h1 style={styles.heading}>Home</h1>
      <img className='underlineimg' src={underline} alt="title underline" style={styles.underline} />
      <p style={styles.text}>Design based on my love for travel and culture</p>
    </div>
  );
};

const styles = {
  box: {
    backgroundColor: 'rgba(254, 255, 240, 0.95)', // light cream background
    color: '#2c2c2c',
    padding: '2rem 2.5rem',
    border: '1px solid #e0c304ff',
    borderLeft: '4px solid #e0c304ff',
    textAlign: 'left',
    boxShadow: '0 2px 12px rgba(0, 0, 0, 0.1)',
    pointerEvents: 'auto',
    backdropFilter: 'blur(10px)',
  },
  heading: {
    color: '#2c2c2c',
    margin: '0 0 0.5rem 0',
    fontSize: 'clamp(1.5rem, 5vw, 2rem)',
    fontWeight: '600',
    fontFamily: 'Spectral, serif',
    letterSpacing: '0.5px',
  },
  underline: {
    width: 'clamp(80px, 25%, 120px)',
    marginTop: '-0.3rem',
    marginBottom: '0.8rem',
    display: 'block',
  },
  text: {
    margin: '0',
    fontSize: 'clamp(0.85rem, 2.5vw, 0.95rem)',
    fontWeight: '400',
    fontFamily: 'Georgia, serif',
    color: '#555',
    lineHeight: '1.6',
  },
};

export default GreenBoxMessage;