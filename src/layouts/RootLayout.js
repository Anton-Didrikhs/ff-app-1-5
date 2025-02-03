import React from 'react';
import NavBarMenu from '../components/NavBarMenu.js';
import Footer from '../components/Footer.js';

const RootLayout = ({ children, menuItems }) => {
  return (
    <div style={styles.layout}>
      <NavBarMenu items={menuItems} />
      <main style={styles.content}>{children}</main>
      <Footer />
    </div>
  );
};

const styles = {
  layout: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  content: {
    flex: 1,
    padding: '20px',
  },
};

export default RootLayout;
