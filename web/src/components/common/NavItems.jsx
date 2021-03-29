import React from 'react';

const classes = {
  wrapperNavItems: 'hidden sm:ml-6 sm:flex sm:space-x-8',
  navItem:
    'border-transparent text-gray-500 hover:border-yellow-400 hover:text-yellow-500 inline-flex items-center px-1 pt-1 text-lg font-medium',
};

const NavItems = ({
  item1Link,
  item1Text,
  item2Link,
  item2Text,
  item3Link,
  item3Text,
  item4Link,
  item4Text,
}) => {
  return (
    <div className={classes.wrapperNavItems}>
      {/* <!-- Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" --> */}
      <a href={item1Link} className={classes.navItem}>
        {item1Text}
      </a>
      <a href={item2Link} className={classes.navItem}>
        {item2Text}
      </a>
      <a href={item3Link} className={classes.navItem}>
        {item3Text}
      </a>
      <a href={item4Link} className={classes.navItem}>
        {item4Text}
      </a>
    </div>
  );
};

export default NavItems;
