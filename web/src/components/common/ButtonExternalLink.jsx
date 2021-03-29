import React from 'react';
import { Link } from 'gatsby';

const ButtonExternalLink = ({
  btnLink,
  textColor,
  btnColor,
  btnHoverColor,
  children,
}) => {
  return (
    <a
      href={btnLink}
      className={`inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-${textColor} bg-${btnColor} hover:bg-${btnHoverColor} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
    >
      {children}
    </a>
  );
};

export default ButtonExternalLink;
