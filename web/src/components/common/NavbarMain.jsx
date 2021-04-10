import React, { useState } from 'react';
import { Transition } from '@headlessui/react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import PropTypes from 'prop-types';

import NavLogo from './NavLogo';
import NavItems from './NavItems';
import ButtonInternalLink from './ButtonInternalLink';

const NavbarMain = () => {
  const data = useStaticQuery(graphql`
    query NavbarMainQ {
      imgLogo: file(
        relativePath: {
          eq: "assets/graphics/aristocracy-salon-day-spa-logo-navbar-500x105.png"
        }
      ) {
        childImageSharp {
          gatsbyImageData(
            quality: 90
            width: 225
            layout: FIXED
            placeholder: BLURRED
          )
        }
      }
    }
  `);

  const imgLogo = data.imgLogo.childImageSharp.gatsbyImageData;

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white shadow-md z-50 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex">
            <NavLogo>
              <GatsbyImage image={imgLogo} alt="Logo" loading="eager" />
            </NavLogo>
          </div>
          <div className="flex">
            <NavItems
              item1Link="/"
              item1Text="Home"
              item2Link="/about/"
              item2Text="About Us"
              item3Link="/services/"
              item3Text="Services"
              item4Link="/gift-cards/"
              item4Text="Gift Cards"
            />
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <ButtonInternalLink
              btnLink="/contact/"
              bgColor="bg-yellow-500"
              bgHoverColor="bg-yellow-600"
              textColor="text-white"
            >
              Schedule Appointment
            </ButtonInternalLink>
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            {/* <!-- Mobile menu button --> */}
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {/* <!--
            Icon when menu is closed.

            Heroicon name: outline/menu

            Menu open: "hidden", Menu closed: "block"
          --> */}
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              {/* <!--
            Icon when menu is open.

            Heroicon name: outline/x

            Menu open: "block", Menu closed: "hidden"
          --> */}
              <svg
                className="hidden h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <Transition
        show={isOpen}
        enter="transition-opacity duration-75"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-150"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        {/* <!-- Mobile menu, show/hide based on menu state. --> */}
        <div className="sm:hidden" id="mobile-menu">
          <div className="pt-2 pb-3 space-y-1">
            {/* <!-- Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" --> */}
            <Link
              to="/"
              className="bg-indigo-50 border-indigo-500 text-indigo-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
            >
              Home
            </Link>
            <Link
              to="/about/"
              className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
            >
              About Us
            </Link>
            <Link
              to="/services/"
              className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
            >
              Services
            </Link>
            <Link
              to="/gift-cards/"
              className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
            >
              Gift Cards
            </Link>
            <Link
              to="/contact/"
              className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
            >
              Contact
            </Link>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <a href="tel:+15087470744" className="flex items-center px-4 py-5">
              <div className="flex-shrink-0">
                <i className="fas fa-2x fa-phone mr-3 text-yellow-500 hover:text-white"></i>
              </div>
              <div className="ml-3">
                <div className="text-base font-medium text-gray-800">
                  Call Us
                </div>
                <div className="text-sm font-medium text-gray-500">
                  (508) 747-0744
                </div>
              </div>
            </a>
            <a
              href="mailto:customerservice@aristocracysalondayspa.com?Subject=Important%20Email%20From%20Website"
              target="_blank"
              className="flex items-center px-4 pb-5"
            >
              <div className="flex-shrink-0">
                <i className="fas fa-2x fa-envelope mr-3 text-yellow-500 hover:text-white"></i>
              </div>
              <div className="ml-3">
                <div className="text-base font-medium text-gray-800">
                  Email Us
                </div>
                <div className="text-sm font-medium text-gray-500">
                  customerservice@aristocracysalondayspa.com
                </div>
              </div>
            </a>
            <a
              href="https://www.google.com/maps?cid=16857748915379533306"
              target="_blank"
              className="flex items-center px-4 pb-5"
            >
              <div className="flex-shrink-0">
                <i className="fas fa-2x fa-map-marker-alt mr-5 text-yellow-500 hover:text-white"></i>
              </div>
              <div className="ml-3">
                <div className="text-base font-medium text-gray-800">
                  Get Directions
                </div>
                <div className="text-sm font-medium text-gray-500">
                  25 South Park Ave, Plymouth, MA 02360
                </div>
              </div>
            </a>
          </div>
        </div>
      </Transition>
    </div>
  );
};

NavbarMain.propTypes = {
  siteTitle: PropTypes.string,
};

NavbarMain.defaultProps = {
  siteTitle: ``,
};

export default NavbarMain;
