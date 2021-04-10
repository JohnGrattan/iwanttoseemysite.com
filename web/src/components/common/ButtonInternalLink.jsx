import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

const ButtonInternalLink = ({
  btnLink,
  textColor,
  textSize,
  bgColor,
  bgHoverColor,
  bgWidth,
  bgHeight,
  children,
}) => {
  return (
    <Link
      to={btnLink}
      className={`inline-flex items-center ${bgWidth} ${bgHeight} border border-transparent ${textSize} font-medium rounded-md shadow-md ${textColor} ${bgColor} hover:${bgHoverColor} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
    >
      <span className="drop-shadow">{children}</span>
    </Link>
  );
};

ButtonInternalLink.defaultProps = {
  btnLink: `/`,
  textColor: `text-white`,
  textSize: `text-lg`,
  bgColor: `bg-yellow-500`,
  bgHoverColor: `hover:bg-yellow-600`,
  bgWidth: `px-6`,
  bgHeight: `py-3`,
};

ButtonInternalLink.propTypes = {
  btnLink: PropTypes.string,
  textColor: PropTypes.string,
  textSize: PropTypes.string,
  bgColor: PropTypes.string,
  bgHoverColor: PropTypes.string,
  bgWidth: PropTypes.string,
  bgHeight: PropTypes.string,
};

export default ButtonInternalLink;
