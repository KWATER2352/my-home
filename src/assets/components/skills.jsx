import React from 'react';

const SkillsBanner = () => {
  return (
    <div style={styles.container}>
      <span style={styles.label}>React JS</span>
      <span style={styles.label}>UI/UX Design</span>
            <span style={styles.label}>Pandas</span>

    </div>
  );
};

const styles = {
  container: {
    backgroundColor: '#88c44bff', // dark gray
    color: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '200px',
    height: '100px',
    fontSize: '1.5rem',
    fontWeight: '500',
  },
  label: {
    whiteSpace: 'nowrap',
  },
};

export default SkillsBanner;