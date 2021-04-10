import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { GatsbyImage } from "gatsby-plugin-image";

const TrustProductsHome = () => {
  // const data = useStaticQuery(graphql`
  //   query TrustProductsHomeQ {
  //     imgHeroBg: file(
  //       relativePath: {
  //         eq: "assets/images/home/about-mdh-construction-general-contractor-plymouth-ma.jpg"
  //       }
  //     ) {
  //       childImageSharp {
  //         fluid(quality: 90, maxWidth: 1920) {
  //           ...GatsbyImageSharpFluid_withWebp
  //         }
  //       }
  //     }
  //   }
  // `);

  // const imgHeroBg = data.imgHeroBg.childImageSharp.fluid;

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <p className="text-center text-base font-semibold uppercase text-gray-600 tracking-wider">
          We use only the industry's finest products because we believe that{' '}
          <em className="text-yellow-600">you deserve the best</em>.
        </p>
        <div className="mt-6 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-8">
          <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
            <img
              className="max-h-12"
              src="https://tailwindui.com/img/logos/transistor-logo-gray-400.svg"
              alt="Workcation"
            />
          </div>
          <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
            <img
              className="max-h-12"
              src="https://tailwindui.com/img/logos/mirage-logo-gray-400.svg"
              alt="Mirage"
            />
          </div>
          <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
            <img
              className="max-h-12"
              src="https://tailwindui.com/img/logos/tuple-logo-gray-400.svg"
              alt="Tuple"
            />
          </div>
          <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
            <img
              className="max-h-12"
              src="https://tailwindui.com/img/logos/laravel-logo-gray-400.svg"
              alt="Laravel"
            />
          </div>
          <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
            <img
              className="max-h-12"
              src="https://tailwindui.com/img/logos/statickit-logo-gray-400.svg"
              alt="StaticKit"
            />
          </div>
          <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
            <img
              className="max-h-12"
              src="https://tailwindui.com/img/logos/statamic-logo-gray-400.svg"
              alt="Statamic"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustProductsHome;
