import React from 'react';

export default function Contact() {
  return (
    <div style={styles.container}>
      <h1>Contact Us</h1>
      <p>If you have any questions or need assistance, feel free to reach out!</p>
      <div style={styles.symbol}>
        <span role="img" aria-label="envelope">📧</span> 
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    textAlign: 'center',
  },
  symbol: {
    fontSize: '50px', 
    marginTop: '20px',
  },
};
