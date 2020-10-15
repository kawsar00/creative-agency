import React from 'react';
import './Header.css'
import HeaderMain from '../HeaderMain/HeaderMain';
import Navbar from '../navbar/Navbar';


const Header = () => {
  return (
    <div className="header-container">
      <Navbar></Navbar>
      <HeaderMain></HeaderMain>
    </div>
  );
};

export default Header;