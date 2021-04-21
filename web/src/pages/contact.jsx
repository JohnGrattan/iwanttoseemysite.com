import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/common/Seo';
import HeaderPage from '../components/layouts/HeroPage';
import { MailIcon, PhoneIcon } from '@heroicons/react/solid';

const ContactPage = () => {
  const data = useStaticQuery(graphql`
    query ContactPageQ {
      imgHeroBg: file(
        relativePath: {
          eq: "assets/images/contact/contact-us-front-desk-aristocracy-salon-day-spa-plymouth-ma.jpg"
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
    <Layout>
      <SEO
        title="Full-Service Beauty Salon & Day Spa in Plymouth, MA | Aristocracy Salon & Day Spa"
        description="Full-Service Beauty Salon & Day Spa in Plymouth, MA | Aristocracy Salon & Day Spa"
      />
      <HeaderPage
        imgHeroBg={imgHeroBg}
        headerText="Contact Aristocracy Salon & Day Spa"
        subheaderText="Call us today to schedule your next appointment"
        buttonLabel="Schedule Appointment"
      />
      <div className="bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="relative bg-white shadow-xl">
            <h2 className="sr-only">Contact us</h2>

            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Contact information */}
              <div className="relative overflow-hidden py-10 px-6 bg-gray-700 sm:px-10 xl:p-12">
                <div
                  className="absolute inset-0 pointer-events-none sm:hidden"
                  aria-hidden="true"
                >
                  <svg
                    className="absolute inset-0 w-full h-full"
                    width={343}
                    height={388}
                    viewBox="0 0 343 388"
                    fill="none"
                    preserveAspectRatio="xMidYMid slice"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M-99 461.107L608.107-246l707.103 707.107-707.103 707.103L-99 461.107z"
                      fill="url(#linear1)"
                      fillOpacity=".1"
                    />
                    <defs>
                      <linearGradient
                        id="linear1"
                        x1="254.553"
                        y1="107.554"
                        x2="961.66"
                        y2="814.66"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#fff" />
                        <stop offset={1} stopColor="#fff" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <div
                  className="hidden absolute top-0 right-0 bottom-0 w-1/2 pointer-events-none sm:block lg:hidden"
                  aria-hidden="true"
                >
                  <svg
                    className="absolute inset-0 w-full h-full"
                    width={359}
                    height={339}
                    viewBox="0 0 359 339"
                    fill="none"
                    preserveAspectRatio="xMidYMid slice"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M-161 382.107L546.107-325l707.103 707.107-707.103 707.103L-161 382.107z"
                      fill="url(#linear2)"
                      fillOpacity=".1"
                    />
                    <defs>
                      <linearGradient
                        id="linear2"
                        x1="192.553"
                        y1="28.553"
                        x2="899.66"
                        y2="735.66"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#fff" />
                        <stop offset={1} stopColor="#fff" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <div
                  className="hidden absolute top-0 right-0 bottom-0 w-1/2 pointer-events-none lg:block"
                  aria-hidden="true"
                >
                  <svg
                    className="absolute inset-0 w-full h-full"
                    width={160}
                    height={678}
                    viewBox="0 0 160 678"
                    fill="none"
                    preserveAspectRatio="xMidYMid slice"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M-161 679.107L546.107-28l707.103 707.107-707.103 707.103L-161 679.107z"
                      fill="url(#linear3)"
                      fillOpacity=".1"
                    />
                    <defs>
                      <linearGradient
                        id="linear3"
                        x1="192.553"
                        y1="325.553"
                        x2="899.66"
                        y2="1032.66"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#fff" />
                        <stop offset={1} stopColor="#fff" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <h3 className="text-2xl font-medium text-indigo-200">
                  Contact Information
                </h3>
                <p className="mt-6 text-base text-indigo-50 max-w-3xl">
                  Aristocracy Salon & Day Spa is a team of beauty professionals
                  that are dedicated to providing high-quality services to our
                  clients in Plymouth, MA. We strive to make every client feel
                  beautiful and confident.
                </p>
                <p className="mt-6 text-base font-bold italic text-indigo-50 max-w-3xl">
                  Give us a call to schedule an appointment or stop by our salon
                  & day spa for a consultation and we’ll be happy to help you!
                </p>
                <dl className="mt-8 space-y-6">
                  <dt>
                    <span className="sr-only">Phone number</span>
                  </dt>
                  <dd className="flex text-base text-yellow-100">
                    <div className="flex my-auto">
                      <a
                        href="tel:+15087470744"
                        target="_blank"
                        className="flex"
                      >
                        <i className="fas fa-2x fa-phone mr-3 text-yellow-500 hover:text-yellow-400"></i>
                        <span className="text-yellow-100 hover:text-yellow-600 text-lg">
                          (508) 747-0744
                        </span>
                      </a>
                    </div>
                  </dd>
                  <dt>
                    <span className="sr-only">Email</span>
                  </dt>
                  <dd className="flex text-base">
                    <div className="flex my-auto">
                      <a
                        href="mailto:customerservice@aristocracysalondayspa.com?Subject=Important%20Email%20From%20Website"
                        target="_blank"
                        className="flex"
                      >
                        <i className="fas fa-2x fa-envelope mr-3 text-yellow-500 hover:text-yellow-400"></i>
                        <span className="text-yellow-100 hover:text-yellow-600 text-lg">
                          customerservice@aristocracysalondayspa.com
                        </span>
                      </a>
                    </div>
                  </dd>
                  <dt>
                    <span className="sr-only">Address</span>
                  </dt>
                  <dd className="flex text-base text-yellow-100">
                    <div className="flex my-auto">
                      <a
                        href="https://www.google.com/maps?cid=16857748915379533306"
                        target="_blank"
                        className="flex"
                      >
                        <i className="fas fa-2x fa-map-marker-alt ml-1 mr-2 text-yellow-500 hover:text-yellow-400"></i>
                        <span className="text-yellow-100 hover:text-yellow-600 text-lg ml-2">
                          25 South Park Ave, Plymouth, MA 02360
                        </span>
                      </a>
                    </div>
                  </dd>
                </dl>
                <ul className="mt-12 ml-1 flex space-x-12" role="list">
                  <li>
                    <a
                      className="text-indigo-200 hover:text-indigo-100"
                      href="#"
                    >
                      <span className="sr-only">Facebook</span>
                      <i
                        className="fab fa-2x fa-facebook"
                        aria-hidden="true"
                      ></i>
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-indigo-200 hover:text-indigo-100"
                      href="#"
                    >
                      <span className="sr-only">Instagram</span>
                      <i
                        className="fab fa-2x fa-instagram"
                        aria-hidden="true"
                      ></i>
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-indigo-200 hover:text-indigo-100"
                      href="#"
                    >
                      <span className="sr-only">Twitter</span>
                      <i
                        className="fab fa-2x fa-twitter"
                        aria-hidden="true"
                      ></i>
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2966.8402945581665!2d-70.67064938455628!3d41.960765279215714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe9f2c15285ec75fa!2sAristocracy%20Salon%20%26%20Day%20Spa!5e0!3m2!1sen!2sus!4v1617843697790!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  className="w-full h-full"
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ContactPage;
