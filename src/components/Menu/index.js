import React from 'react';
import Logo from '../../assets/Logo.png';
import './Menu.css';

const Menu = () => {
  return (
    <nav className="Menu">
      <img className="Logo" src={Logo} alt="Logo AluraFix"/>
    </nav>
  );
}

export default Menu;
