import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import ButtonInternalLink from '../../common/ButtonInternalLink';

const CtaHome = () => {
  const data = useStaticQuery(graphql`
    query CtaHomeQ {
      imgCta: file(
        relativePath: {
          eq: "assets/images/home/schedule-appointment-aristocracy-salon-day-spa-plymouth-ma.jpg"
        }
      ) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  const imgCta = data.imgCta.childImageSharp.fluid;

  return (
    <div className="relative bg-gray-800">
      <div className="h-56 bg-indigo-600 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2">
        {/* <img
          className="w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixqx=j5aMyqRXkv&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&blend=6366F1&sat=-100&blend-mode=multiply"
          alt=""
        /> */}
        <Img fluid={imgCta} className="w-full h-full object-cover" alt="" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="md:ml-auto md:w-1/2 md:pl-10">
          <h2 className="text-base font-semibold uppercase tracking-wider text-gray-300">
            Award winning services
          </h2>
          <p className="mt-2 text-white text-3xl font-extrabold tracking-tight sm:text-4xl">
            Schedule An Appointment
          </p>
          <p className="mt-3 text-lg text-gray-300">
            Scheduling an appointment is easy! To get started, just let us know
            the day and time you are available for your appointment. We will try
            to accommodate your schedule as best as we can.
          </p>
          <p className="mt-3 text-lg text-gray-300">
            If you're running late or just need to reschedule, please let us
            know at least 24 hours in advance by calling{' '}
            <a
              href="tel:+15087470744"
              className="text-yellow-500 hover:text-yellow-300 font-bold"
            >
              (508) 747-0744
            </a>
            . If you'd like to cancel or change your appointment, please give us
            24 hours notice.
          </p>
          <p className="mt-3 text-lg text-gray-300">
            Our salon is open weekdays and Saturdays from 9 a.m. to 6 p.m.
            Appointments are required for all services. We hope to see you soon!
          </p>
          <div className="mt-8">
            <div className="inline-flex rounded-md shadow">
              {/* <a
                href="#"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-white hover:bg-gray-50"
              >
                Contact Us
                <!-- Heroicon name: solid/external-link -->
                <svg
                  className="-mr-1 ml-3 h-5 w-5 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                  <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                </svg>
              </a> */}
              <ButtonInternalLink
                btnLink="#"
                bgColor="bg-yellow-500"
                bgHoverColor="bg-yellow-600"
                textColor="text-white"
              >
                Contact Us
              </ButtonInternalLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CtaHome;
