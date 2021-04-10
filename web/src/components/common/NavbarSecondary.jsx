import React from 'react';
import PropTypes from 'prop-types';

const NavbarSecondary = () => {
  return (
    <div className="hidden lg:block bg-indigo-50 z-50 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-10">
          <div className="flex my-auto">
            <a
              href="mailto:customerservice@aristocracysalondayspa.com?Subject=Important%20Email%20From%20Website"
              target="_blank"
            >
              <i className="fas fa-envelope mr-3 text-yellow-500 hover:text-yellow-400"></i>
              <span className="text-gray-800 hover:text-yellow-600 text-sm font-thin ">
                customerservice@aristocracysalondayspa.com
              </span>
            </a>
          </div>
          <div className="flex my-auto">
            <a
              href="https://www.google.com/maps?cid=16857748915379533306"
              target="_blank"
            >
              <i className="fas fa-map-marker-alt mr-3 text-yellow-500 hover:text-yellow-400"></i>
              <span className="text-gray-800 hover:text-yellow-600 text-sm font-thin ">
                25 South Park Ave, Plymouth, MA 02360
              </span>
            </a>
          </div>

          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <a href="tel:+15087470744">
              <i className="fas fa-phone mr-3 text-yellow-500 hover:text-yellow-400"></i>
              <span className="text-gray-800 hover:text-yellow-600 text-sm font-thin ">
                (508) 747-0744
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

NavbarSecondary.propTypes = {
  siteTitle: PropTypes.string,
};

NavbarSecondary.defaultProps = {
  siteTitle: ``,
};

export default NavbarSecondary;
