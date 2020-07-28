import React from 'react';
import Logo from '../../assets/Logo.png';
import './Menu.css';
import Button from '../Button';

const Menu = () => {
  return (
    <nav className="Menu">
      <img className="Logo" src={Logo} alt="Logo AluraFix"/>
      <Button as="a" className="ButtonLink" href="/">
        Novo Vídeo
      </Button>
    </nav>
  );
}

export default Menu;
