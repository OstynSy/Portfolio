import React from 'react'
import './Layout.css';

//import Footer from '../components/Footer/Footer'
import NavBar from '../components/NavBar/NavBar';
import Footer from '../components/Footer/Footer';

export const Layout = ({children}) => {
  return (
    <div class="container">
        <NavBar/>
        <main>{children}</main>
        <Footer />
    </div>
  );
};