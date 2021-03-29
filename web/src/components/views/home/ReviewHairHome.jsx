import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

const ReviewHairHome = () => {
  const data = useStaticQuery(graphql`
    query ReviewHairHomeQ {
      imgReview: file(
        relativePath: {
          eq: "assets/images/home/hair-coloring-5-star-review-aristocracy-salon-day-spa-plymouth-ma.jpg"
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

  const imgReview = data.imgReview.childImageSharp.fluid;

  return (
    <div className="bg-white pt-16 lg:py-24">
      <div className="pb-16 bg-secondary lg:pb-0 lg:z-10 lg:relative">
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:gap-8">
          <div className="relative lg:-my-8">
            <div
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-1/2 bg-white lg:hidden"
            ></div>
            <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:p-0 lg:h-full">
              <div className="aspect-w-10 aspect-h-6 rounded-xl shadow-xl overflow-hidden sm:aspect-w-16 sm:aspect-h-7 lg:aspect-none lg:h-full">
                <Img
                  fluid={imgReview}
                  className="object-cover lg:h-full lg:w-full"
                />
              </div>
            </div>
          </div>
          <div className="mt-12 lg:m-0 lg:col-span-2 lg:pl-8">
            <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:px-0 lg:py-20 lg:max-w-none">
              <blockquote>
                <div>
                  <svg
                    className="h-12 w-12 text-white opacity-25"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                    aria-hidden="true"
                  >
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                  <p className="mt-6 text-2xl font-medium text-white">
                    Amazing place to go to get your hair done. Everyone is
                    always polite, courteous, and you're always checking on you
                    to make sure that you don't need anything. Alissa is a
                    fabulous hairdresser and she's the only one I let do my
                    hair. I've seen the other girls work on other clients and
                    they always look amazing. Most definitely five stars!
                  </p>
                </div>
                <div className="mt-6">
                  <p className="text-base font-medium text-white">
                    Mary Dingman
                  </p>
                  <div className="flex flex-row">
                    <span className="h-6 mt-3 text-center text-yellow-400">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <span className="ml-3 text-base font-semibold text-indigo-100">
                        Google Review
                      </span>
                    </span>
                  </div>
                  {/* <p className="text-base font-medium text-indigo-100">
                    Plymouth, MA
                  </p> */}
                </div>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewHairHome;