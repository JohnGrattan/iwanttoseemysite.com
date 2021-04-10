import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import ButtonInternalLink from '../../common/ButtonInternalLink';

const HeroHome = () => {
  const data = useStaticQuery(graphql`
    query HeroHomeQ {
      imgHeroBg: file(
        relativePath: {
          eq: "assets/images/home/hair-design-aristocracy-salon-day-spa-plymouth-ma.jpg"
        }
      ) {
        childImageSharp {
          gatsbyImageData(quality: 90, layout: FULL_WIDTH, placeholder: BLURRED)
        }
      }
    }
  `);

  const imgHeroBg = data.imgHeroBg.childImageSharp.gatsbyImageData;

  return (
    //  <!-- This example requires Tailwind CSS v2.0+ -->
    <div className="relative min-h-screen">
      <div className="absolute inset-0">
        <GatsbyImage
          image={imgHeroBg}
          className="w-full h-full object-cover"
          alt="Hero"
        />
        {/* <img
          className="h-full w-full object-cover"
          src="https://thumbnails.yayimages.com/1600/1/ef2/1ef2f2e.jpg"
          alt="People working on laptops"
        /> */}
        <div
          className="absolute inset-0 bg-gray-200"
          style={{ mixBlendMode: 'multiply' }}
          aria-hidden="true"
        ></div>
      </div>
      <div className="relative max-w-2xl py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
          Beauty And Balance From The Inside Out
        </h1>
        <p className="mt-6 text-xl text-indigo-100 max-w-3xl">
          <strong className="text-indigo-400">
            Aristocracy Salon & Day Spa
          </strong>{' '}
          is a team of beauty professionals dedicated to providing high-quality
          hair, skin, and nail care.
        </p>
        <p className="mt-3 text-xl text-indigo-100 max-w-3xl">
          We are conveniently located in downtown{' '}
          <strong className="text-indigo-400">Plymouth, MA</strong>.
        </p>
        {/* <p className="mt-3 text-xl text-yellow-300 max-w-3xl font-bold">
          We use only the finest products in the industry because we believe
          that <em>you deserve the best</em>.
        </p> */}
        <div className="flex mt-10">
          <div className="col-1 gap-4">
            <ButtonInternalLink
              btnLink="#"
              bgColor="bg-yellow-500"
              bgHoverColor="bg-yellow-600"
              textColor="text-white"
            >
              Schedule Appointment
            </ButtonInternalLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroHome;
