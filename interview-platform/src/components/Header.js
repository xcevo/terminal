import React from 'react';

const Header = () => {
  return (
    <div style={styles.header}>
      <h1 style={styles.title}>
        <span style={styles.ic}>IC</span>
        <span style={styles.shell}>Shell</span>
      </h1>
    </div>
  );
};

const styles = {
  header: {
    width: '100%',
    height: '60px',
    backgroundColor: '#1e1e1e',
    display: 'flex',
    justifyContent: 'flex-start', // left align
    alignItems: 'center',
    color: 'white',
    borderBottom: '2px solid #444',
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: 1000,
    paddingLeft: '20px', // left se thoda gap
  },
  title: {
    margin: 0,
    fontFamily: 'Arial, sans-serif',
    fontSize: '24px',
    fontWeight: 'bold',
  },
  ic: {
    color: '#00c853', // green color
  },
  shell: {
    color: '#ffffff', // white color
  },
};

export default Header;
