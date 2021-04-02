import React from 'react';
import NavbarMain from '../common/NavbarMain';
import NavbarSecondary from '../common/NavbarSecondary';

const Navbar = () => {
  return (
    <nav className="fixed z-50 w-full">
      <NavbarSecondary />
      <NavbarMain />
    </nav>
  );
};

export default Navbar;
