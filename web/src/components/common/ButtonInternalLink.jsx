import React from 'react';
import { Link } from 'gatsby';

const ButtonInternalLink = ({
  btnLink,
  textColor,
  bgColor,
  bgHoverColor,
  children,
}) => {
  return (
    <Link
      to={btnLink}
      className={`inline-flex items-center px-6 py-3 border border-transparent text-lg font-medium rounded-md shadow-md ${textColor} ${bgColor} hover:${bgHoverColor} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
    >
      <span className="drop-shadow">{children}</span>
    </Link>
  );
};

export default ButtonInternalLink;
