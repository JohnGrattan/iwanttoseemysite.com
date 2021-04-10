import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
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
          gatsbyImageData(quality: 90, layout: FULL_WIDTH, placeholder: BLURRED)
        }
      }
    }
  `);

  const imgCta = data.imgCta.childImageSharp.gatsbyImageData;

  return (
    <div className="relative bg-gray-800">
      <div className="h-56 bg-indigo-600 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2">
        <GatsbyImage
          image={imgCta}
          className="w-full h-full object-cover"
          alt="Cta"
        />
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
              <ButtonInternalLink
                btnLink="/contact/"
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
