import React from 'react';
import { Link } from 'gatsby';

const classes = {
  wrapperLogo: 'flex-shrink-0 flex items-center',
};

const NavLogo = ({ children }) => {
  return (
    <div className={classes.wrapperLogo}>
      <Link to="/">{children}</Link>
    </div>
  );
};

export default NavLogo;
