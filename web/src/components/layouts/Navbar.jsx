import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
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
