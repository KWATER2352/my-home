import React from 'react';
import underline from '../images/Vector.png';

const BlueBoxMessage = () => {
  return (
    <div className='home-msg' style={styles.box}>
      <h1 style={styles.heading}>Articles</h1>
      <img className='underlineimg' src={underline} alt="title underline" style={styles.underline} />
      <p style={styles.text}>Sharing my journeys</p>
    </div>
  );
};

const styles = {
  box: {
    backgroundColor: '#9ED9F1', // light blue background
    color: '#2c2c2c',
    padding: '2rem 2.5rem',
    border: '1px solid #5FBCE2',
    borderLeft: '4px solid #5FBCE2',
    textAlign: 'left',
    boxShadow: '0 2px 12px rgba(0, 0, 0, 0.1)',
    pointerEvents: 'auto',
    backdropFilter: 'blur(10px)',
  },
  heading: {
    color: '#2c2c2c',
    margin: '0 0 0.5rem 0',
    fontSize: '2rem',
    fontWeight: '600',
    fontFamily: 'Spectral, serif',
    letterSpacing: '0.5px',
  },
  underline: {
    width: '120px',
    marginTop: '-0.3rem',
    marginBottom: '0.8rem',
  },
  text: {
    margin: '0',
    fontSize: '0.95rem',
    fontWeight: '400',
    fontFamily: 'Georgia, serif',
    color: '#555',
    lineHeight: '1.6',
  },
};

export default BlueBoxMessage;