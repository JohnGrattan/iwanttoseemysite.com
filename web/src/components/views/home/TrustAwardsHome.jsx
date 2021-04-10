import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';

const TrustAwardsHome = () => {
  const data = useStaticQuery(graphql`
    query TrustAwardsHomeQ {
      imgAward: file(
        relativePath: {
          eq: "assets/graphics/2020-best-of-plymouth-ma-beauty-salon-aristocracy-salon-day-spa.png"
        }
      ) {
        childImageSharp {
          gatsbyImageData(
            quality: 90
            width: 150
            layout: FIXED
            placeholder: BLURRED
          )
        }
      }
    }
  `);

  const imgAward = data.imgAward.childImageSharp.gatsbyImageData;

  return (
    <div className="bg-indigo-200 bg-opacity-25">
      <div className="max-w-4xl mx-auto py-10 lg:py-8 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="sm:block lg:flex flex-sm-none flex-lg-row justify-center">
          <div className="pb-3 lg:pb-0 text-center text-lg-left">
            <GatsbyImage
              image={imgAward}
              className="container mx-auto lg:mx-0"
              alt="Awards"
            />
          </div>
          <div className="flex-col mt-4 ml-0 lg:ml-8">
            <h2 className="max-w-md mb-3 text-3xl font-extrabold text-indigo-800 lg:max-w-xl lg:text-left">
              Aristocracy Salon & Day Spa Receives{' '}
              <em className="text-yellow-600">2020 Best of Plymouth Award</em>
            </h2>
            <p className="text-gray-500">
              "We are so honored and grateful to be selected by the Plymouth
              Awards Program in the category of Beauty Salon!"{' '}
              <em>- Amy Chapman, President</em>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustAwardsHome;
