import React from 'react';

const ArticlesBanner = () => {
  return (
    <div style={styles.container}>
      <span style={styles.label}>Adobe Illustrator</span>
      <span style={styles.label}>Writing</span>
      <span style={styles.label}>Photography</span>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: '#5FBCE2', // dark gray
    color: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '2rem',
    gap: '200px',
    height: '100px',
    fontSize: '1.5rem',
    fontWeight: '500',
  },
  label: {
    whiteSpace: 'nowrap',
  },
};

export default ArticlesBanner;