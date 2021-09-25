import React from 'react';
import Header from './Header';
import PyconLogo from './PyconLogo';
import Footer from './Footer';

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      <PyconLogo />
      {children}
      <Footer/>
    </>
  )
}

export default Layout;
