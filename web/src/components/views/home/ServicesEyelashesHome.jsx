import React, { useEffect } from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import ButtonInternalLink from '../../common/ButtonInternalLink';

const ServicesEyelashesHome = () => {
  const data = useStaticQuery(graphql`
    query ServicesEyelashesHomeQ {
      imgEyelashes: file(
        relativePath: {
          eq: "assets/images/home/eye-lash-extensions-aristocracy-salon-day-spa-plymouth-ma.jpg"
        }
      ) {
        childImageSharp {
          gatsbyImageData(quality: 90, layout: FULL_WIDTH, placeholder: BLURRED)
        }
      }
    }
  `);

  const imgEyelashes = data.imgEyelashes.childImageSharp.gatsbyImageData;

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, delay: 0, staggerChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  const controls = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
    if (!inView) {
      controls.start('hidden');
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial={'hidden'}
      animate={controls}
      className="bg-white overflow-hidden"
    >
      <div className="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="hidden lg:block bg-gray-50 absolute top-0 bottom-0 left-3/4 w-screen"></div>
        <motion.div
          ref={ref}
          variants={itemVariants}
          className="mx-auto text-base max-w-prose lg:grid lg:grid-cols-2 lg:gap-8 lg:max-w-none"
        >
          <div>
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
              Extensions, Lifts, Tints
            </h2>
            <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Eyelash Services
            </h3>
          </div>
        </motion.div>
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
            <motion.div
              ref={ref}
              variants={itemVariants}
              className="relative text-base mx-auto max-w-prose lg:max-w-none rounded-lg shadow-lg overflow-hidden"
            >
              <figure>
                <div className="aspect-w-12 aspect-h-7 lg:aspect-none">
                  <GatsbyImage
                    image={imgEyelashes}
                    imgClassName="object-cover object-center"
                    alt="Eyelashes"
                  />
                </div>
              </figure>
            </motion.div>
          </div>
          <motion.div
            ref={ref}
            variants={itemVariants}
            className="mt-8 lg:mt-0"
          >
            <div className="text-base max-w-prose mx-auto lg:max-w-none">
              <p className="text-lg text-gray-500">
                Aristocracy Salon & Day Spa offers several eyelash services. Our
                team of professional beauty experts are trained in the latest
                eyelash extension techniques, and we use only the highest
                quality products on our clients.
              </p>
            </div>
            <div className="mt-5 prose prose-indigo text-gray-500 mx-auto lg:max-w-none lg:row-start-1 lg:col-start-1">
              <p className="italic">
                Our talented team is dedicated and excited to make sure that you
                leave our salon with your lashes looking longer and thicker.
              </p>
              <ul>
                <li>
                  <strong>Eyelash Extensions</strong>: Novalash eyelash
                  extensions, and more and more and more, etc.
                </li>
                <li>
                  <strong>Eyelash Extensions</strong>: Novalash eyelash
                  extensions, and more and more and more, etc.
                </li>
                <li>
                  <strong>Eyelash Extensions</strong>: Novalash eyelash
                  extensions, and more and more and more, etc.
                </li>
              </ul>
              <p>
                Not sure which eyelash service is right for you? Give us a call
                or stop by our salon for a consultation and we’ll be happy to
                personally help you!
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
                Get your professional eyelash treatment today! Scheduling an
                appointment is easy, just give us a call and let us know what
                services you're interested in and which day & time works best
                for you.
              </p>
              <p className="text-lg">
                <em>
                  We look forward to making your lashes look long and thick!
                </em>
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
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default ServicesEyelashesHome;
