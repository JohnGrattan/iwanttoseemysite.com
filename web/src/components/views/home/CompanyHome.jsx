import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

const CompanyHome = () => {
  const data = useStaticQuery(graphql`
    query CompanyHomeQ {
      imgCompany: file(
        relativePath: {
          eq: "assets/images/home/hair-stylists-estheticians-aristocracy-salon-day-spa-plymouth-ma.jpg"
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

  const imgCompany = data.imgCompany.childImageSharp.fluid;

  return (
    <div className="relative bg-white py-16 sm:py-24">
      <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-24 lg:items-start">
        <div className="relative sm:py-16 lg:py-0">
          <div
            aria-hidden="true"
            className="hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen"
          >
            <div className="absolute inset-y-0 right-1/2 w-full bg-gray-50 rounded-r-3xl lg:right-72"></div>
            <svg
              className="absolute top-8 left-1/2 -ml-3 lg:-right-8 lg:left-auto lg:top-12"
              width="404"
              height="392"
              fill="none"
              viewBox="0 0 404 392"
            >
              <defs>
                <pattern
                  id="02f20b47-fd69-4224-a62a-4c9de5c763f7"
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
                height="392"
                fill="url(#02f20b47-fd69-4224-a62a-4c9de5c763f7)"
              />
            </svg>
          </div>
          <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0 lg:max-w-none lg:py-1">
            {/* <!-- Testimonial card--> */}
            <div className="relative pb-10 rounded-2xl shadow-xl overflow-hidden">
              <Img
                fluid={imgCompany}
                className="absolute inset-0 z-10 h-full w-full object-cover"
                alt=""
              />
              {/* <img
                className="absolute inset-0 h-full w-full object-cover"
                src="https://images.unsplash.com/photo-1521510895919-46920266ddb3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&fp-x=0.5&fp-y=0.6&fp-z=3&width=1440&height=1440&sat=-100"
                alt=""
              /> */}
              <div
                className="absolute inset-0 bg-secondary-dark"
                style={{ mixBlendMode: 'multiply' }}
              ></div>
              <div className="relative px-8">
                <blockquote className="mt-8">
                  <div className="relative text-lg font-medium text-white md:flex-grow">
                    <svg
                      className="absolute top-0 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 text-secondary"
                      fill="currentColor"
                      viewBox="0 0 32 32"
                      aria-hidden="true"
                    >
                      <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                    </svg>
                    <p className="relative">
                      The ladies at Aristocracy are the best! I always leave
                      feeling <em>(and looking)</em> like a million bucks!
                    </p>
                  </div>

                  <footer className="mt-4">
                    <p className="text-base font-semibold text-secondary-lighter">
                      Lisa Butler - Plymouth, MA
                    </p>
                    <div className="flex flex-row">
                      <span className="h-6 mt-3 text-center text-yellow-400">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <span className="ml-3 text-base font-semibold text-secondary-lighter">
                          Google Review
                        </span>
                      </span>
                    </div>
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
        </div>

        <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0">
          {/* <!-- Content area --> */}
          <div className="pt-12 sm:pt-16 lg:pt-20">
            <h2 className="text-3xl text-gray-900 font-extrabold tracking-tight sm:text-4xl">
              Our mission is for you to look and feel your best
            </h2>
            <div className="mt-6 text-gray-500 space-y-6">
              <p className="text-lg">
                Aristocracy Salon & Day Spa was founded in Spring 1994 by{' '}
                <strong className="text-yellow-600">Amy Chapman</strong>, a
                beauty-loving stylist who wanted to bring her vision to
                Plymouth, MA.
              </p>
              <p className="text-base leading-7">
                With a love of all things glamorous, the salon has a
                contemporary-style elegance that will make you feel like a VIP
                as soon as you walk in the door.
              </p>
              <p className="text-base leading-7">
                Every detail of our salon is designed for you to feel pampered
                and beautiful at all times, from our signature hair salon rooms
                to the aromatherapy day spa.
              </p>
              <p className="text-base leading-7">
                You're going to love our relaxing environment and friendly
                staff, as well as our commitment to personal attention and care.
              </p>
            </div>
          </div>

          {/* <!-- Stats section --> */}
          <div className="mt-10">
            <dl className="grid grid-cols-2 gap-x-4 gap-y-8">
              <div className="border-t-2 border-gray-100 pt-6">
                <dt className="text-base font-medium text-gray-500">
                  Established
                </dt>
                <dd className="text-3xl font-extrabold tracking-tight text-gray-900">
                  1994
                </dd>
              </div>

              <div className="border-t-2 border-gray-100 pt-6">
                <dt className="text-base font-medium text-gray-500">
                  Incorporated
                </dt>
                <dd className="text-3xl font-extrabold tracking-tight text-gray-900">
                  2005
                </dd>
              </div>

              <div className="border-t-2 border-gray-100 pt-6">
                <dt className="text-base font-medium text-gray-500">
                  Employees
                </dt>
                <dd className="text-3xl font-extrabold tracking-tight text-gray-900">
                  9
                </dd>
              </div>

              <div className="border-t-2 border-gray-100 pt-6">
                <dt className="text-base font-medium text-gray-500">Awards</dt>
                <dd className="text-3xl font-extrabold tracking-tight text-gray-900">
                  5
                </dd>
              </div>
            </dl>
            <div className="mt-10">
              <a
                href="#"
                className="text-lg font-medium text-yellow-600 hover:text-yellow-500"
              >
                {' '}
                Learn more about Aristocracy Salon & Day Spa{' '}
                <span aria-hidden="true">&rarr;</span>{' '}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyHome;
