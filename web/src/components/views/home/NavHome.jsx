import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

const NavHome = () => {
  const data = useStaticQuery(graphql`
    query NavHomeQ {
      imgAbout: file(
        relativePath: {
          eq: "assets/images/home/about-aristocracy-salon-day-spa-plymouth-ma.jpg"
        }
      ) {
        childImageSharp {
          fixed(quality: 90, width: 300) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
      imgServices: file(
        relativePath: {
          eq: "assets/images/home/hair-spa-eyelash-services-aristocracy-salon-day-spa-plymouth-ma.jpg"
        }
      ) {
        childImageSharp {
          fixed(quality: 90, width: 300) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
      imgGiftCard: file(
        relativePath: {
          eq: "assets/images/home/gift-card-aristocracy-salon-day-spa-plymouth-ma.jpg"
        }
      ) {
        childImageSharp {
          fixed(quality: 90, width: 300) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
    }
  `);

  const imgAbout = data.imgAbout.childImageSharp.fixed;
  const imgServices = data.imgServices.childImageSharp.fixed;
  const imgGiftCard = data.imgGiftCard.childImageSharp.fixed;

  return (
    <div className="relative bg-indigo-200 bg-opacity-25 py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
        <h2 className="text-base font-semibold tracking-wider text-indigo-600 uppercase">
          Aristocracy Salon & Day Spa
        </h2>
        <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
          Our Services Will Renew & Rejuvenate You
        </p>
        <p className="mt-5 mx-auto text-xl text-gray-500">
          We pride ourselves on offering our community complete salon and spa
          services.
        </p>
        <p className="mt-3 max-w-2xl mx-auto text-base lead-7 text-gray-500">
          No matter your age, lifestyle, or budget, Aristocracy Salon & Day Spa
          has something to offer you. Our professional staff is committed to
          helping you look and feel your best so you can leave the stresses of
          your daily life behind and enjoy the pleasures of being pampered.
        </p>
        <div className="mt-12">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="pt-6">
              <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                <div className="-mt-6">
                  <div>
                    <span className="inline-flex items-center justify-center p-1 bg-indigo-400 rounded-md shadow-lg">
                      <Img fixed={imgAbout} className="" />
                    </span>
                  </div>
                  <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                    About Aristocracy
                  </h3>
                  <p className="mt-5 text-base text-gray-500">
                    Ac tincidunt sapien vehicula erat auctor pellentesque
                    rhoncus. Et magna sit morbi lobortis.
                  </p>
                  <div className="mt-3">
                    <Link
                      to="#"
                      className="text-lg font-medium text-yellow-600 hover:text-yellow-500"
                    >
                      Learn more <span aria-hidden="true">&rarr;</span>{' '}
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                <div className="-mt-6">
                  <div>
                    <span className="inline-flex items-center justify-center p-1 bg-indigo-400 rounded-md shadow-lg">
                      <Img fixed={imgServices} className="" />
                    </span>
                  </div>
                  <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                    See Our Services
                  </h3>
                  <p className="mt-5 text-base text-gray-500">
                    Ac tincidunt sapien vehicula erat auctor pellentesque
                    rhoncus. Et magna sit morbi lobortis.
                  </p>
                  <div className="mt-3">
                    <Link
                      to="#"
                      className="text-lg font-medium text-yellow-600 hover:text-yellow-500"
                    >
                      Learn more <span aria-hidden="true">&rarr;</span>{' '}
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                <div className="-mt-6">
                  <div>
                    <span className="inline-flex items-center justify-center p-1 bg-indigo-400 rounded-md shadow-lg">
                      <Img fixed={imgGiftCard} className="" />
                    </span>
                  </div>
                  <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                    Buy A Gift Card
                  </h3>
                  <p className="mt-5 text-base text-gray-500">
                    Ac tincidunt sapien vehicula erat auctor pellentesque
                    rhoncus. Et magna sit morbi lobortis.
                  </p>
                  <div className="mt-3">
                    <Link
                      to="#"
                      className="text-lg font-medium text-yellow-600 hover:text-yellow-500"
                    >
                      Learn more <span aria-hidden="true">&rarr;</span>{' '}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavHome;
