import React from 'react';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';

export default function About() {
  return (
    <div style={styles.container}>
      <h1>About Us</h1>
      <p>We are a friendly company <InsertEmoticonIcon /></p>
      <p>Our mission is to provide quality services and create a positive impact in our community.</p>
      <p>We value collaboration, creativity, and customer satisfaction.</p>
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
    padding: '20px',
  },
};
