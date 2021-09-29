import React from 'react'
import './Layout.css';

//import Footer from '../components/Footer/Footer'
import NavBar from '../components/NavBar/NavBar';

export const Layout = ({children}) => {
  return (
    <div class="container">
        <NavBar/>
        <main>{children}</main>    
    </div>
  );
};