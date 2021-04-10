import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import ButtonInternalLink from '../../common/ButtonInternalLink';

const ServicesHairHome = () => {
  const data = useStaticQuery(graphql`
    query ServicesHairHomeQ {
      imgBeforeAfter: file(
        relativePath: {
          eq: "assets/images/home/hair-styling-before-after-aristocracy-salon-day-spa-plymouth-ma.jpg"
        }
      ) {
        childImageSharp {
          gatsbyImageData(quality: 90, layout: FULL_WIDTH, placeholder: BLURRED)
        }
      }
    }
  `);

  const imgBeforeAfter = data.imgBeforeAfter.childImageSharp.gatsbyImageData;

  return (
    <div className="bg-white overflow-hidden">
      <div className="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="hidden lg:block bg-gray-50 absolute top-0 bottom-0 left-3/4 w-screen"></div>
        <div className="mx-auto text-base max-w-prose lg:grid lg:grid-cols-2 lg:gap-8 lg:max-w-none">
          <div>
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
              Style, Design, Color
            </h2>
            <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Hair Salon Services
            </h3>
          </div>
        </div>
        <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
          <div className="relative lg:row-start-1 lg:col-start-2">
            <svg
              className="hidden lg:block absolute top-0 right-0 -mt-20 -mr-20"
              width="404"
              height="384"
              fill="none"
              viewBox="0 0 404 384"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="de316486-4a29-4312-bdfc-fbce2132a2c1"
                  x="0"
                  y="0"
                  width="20"
                  height="20"
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x="0"
                    y="0"
                    width="4"
                    height="4"
                    className="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width="404"
                height="384"
                fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)"
              />
            </svg>
            <div className="relative text-base mx-auto max-w-prose lg:max-w-none">
              <figure>
                <div className="aspect-w-12 aspect-h-7 lg:aspect-none">
                  <GatsbyImage
                    image={imgBeforeAfter}
                    className="rounded-lg shadow-lg object-cover object-center"
                    alt="Hair"
                  />
                </div>
              </figure>
            </div>
          </div>
          <div className="mt-8 lg:mt-0">
            <div className="text-base max-w-prose mx-auto lg:max-w-none">
              <p className="text-lg text-gray-500">
                Aristocracy Salon & Day Spa offers an array of services for
                men’s and women’s hair. Our stylists are highly trained and have
                years of experience in hair care.
              </p>
            </div>
            <div className="mt-5 prose prose-indigo text-gray-500 mx-auto lg:max-w-none lg:row-start-1 lg:col-start-1">
              <p>
                Our talented stylists are dedicated and excited to make sure
                that you leave our salon happy with your new look.
              </p>
              <ul>
                <li>
                  <strong>Hair Cuts & Designs</strong>: short hair cuts, long
                  hair cuts, children's designs & cuts, shampoo & conditioning,
                  scalp facials, updos & braiding, hair extensions
                </li>
                <li>
                  <strong>Color Services</strong>: hair color, foil highlights,
                  creative highlighting techniques, color glossing, color sync,
                  corrective hair coloring
                </li>
                <li>
                  <strong>Hair Texturing Services</strong>: smoothing treatments
                  (including Keratin)
                </li>
              </ul>
              <p>
                Not sure which hair service is right for you? Feel free to give
                us a call and talk with one of our stylists.
              </p>
              <h3>
                Give Us A Call:{' '}
                <a href="tel:+15087470744" className="no-underline">
                  <span className="text-yellow-500 hover:text-yellow-300 font-bold">
                    (508) 747-0744
                  </span>
                </a>
              </h3>
              <p>
                Get your professional hair care treatment today! Scheduling an
                appointment is easy, just give us a call and let us know what
                services you're interested in and which day & time works best
                for you.
              </p>
              <p className="text-lg">
                <em>We look forward to making you feel your best!</em>
              </p>
            </div>
            <div className="mt-10">
              <ButtonInternalLink
                btnLink="#"
                bgColor="bg-yellow-500"
                bgHoverColor="bg-yellow-600"
                textColor="text-white"
              >
                See All Services
              </ButtonInternalLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesHairHome;
