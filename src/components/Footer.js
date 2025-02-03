import React from 'react';
import Logo from '../logo.svg';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.content}>
      <img src={Logo} alt="University Logo" style={styles.logo} />
        <p style={styles.text}>
          Author: Anton Didrikhs | Email: <a href="mailto:anton.didrikhs@microsoft.wsei.edu.pl">anton.didrikhs@microsoft.wsei.edu.pl</a>
        </p>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#222',
    color: '#fff',
    padding: '20px 0',
    textAlign: 'center',
    marginTop: 'auto',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '10px',
  },
  logo: {
    height: '50px',
    width: 'auto',
  },
  text: {
    margin: 0,
    fontSize: '14px',
  },
};

export default Footer;
