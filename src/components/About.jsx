import React from 'react';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';

export default function About() {
   return (
      <div style={styles.container}>
         <h1>About Us</h1>
         <p style={{ maxWidth: '650px' }}>
            <span style={{ display: 'block' }}>
               We are a friendly company <InsertEmoticonIcon />
            </span>
            Our mission is to provide quality services and create a positive impact in our
            community. We value collaboration, creativity, and customer satisfaction.
         </p>
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
