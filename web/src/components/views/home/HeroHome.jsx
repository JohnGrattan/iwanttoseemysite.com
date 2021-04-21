import React, { useEffect } from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

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

  const variants = {
    hidden: { opacity: 0, scale: 0.8, x: -100 },
    visible: { opacity: 1, scale: 1, x: 0 },
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
    //  <!-- This example requires Tailwind CSS v2.0+ -->
    <div className="relative min-h-screen">
      <div className="absolute inset-0">
        <GatsbyImage
          image={imgHeroBg}
          className="w-full h-full object-cover"
          alt="Hero"
        />
        <div
          className="absolute inset-0 bg-gray-200"
          style={{ mixBlendMode: 'multiply' }}
          aria-hidden="true"
        ></div>
      </div>
      <div className="relative max-w-2xl py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <motion.h1
          ref={ref}
          variants={variants}
          initial={'hidden'}
          animate={controls}
          transition={{ duration: 0.5, delay: 0 }}
          className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl"
        >
          Beauty And Balance From The Inside Out
        </motion.h1>
        <motion.p
          ref={ref}
          variants={variants}
          initial={'hidden'}
          animate={controls}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-6 text-xl text-indigo-100 max-w-3xl"
        >
          <motion.strong
            initial={{ color: '#E0E7FF' }}
            animate={{ color: '#818CF8' }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            Aristocracy Salon & Day Spa
          </motion.strong>{' '}
          is a team of beauty professionals dedicated to providing high-quality
          hair, skin, and nail care.
        </motion.p>
        <motion.p
          ref={ref}
          variants={variants}
          initial={'hidden'}
          animate={controls}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-3 text-xl text-indigo-100 max-w-3xl"
        >
          We are conveniently located in downtown{' '}
          <motion.strong
            initial={{ color: '#E0E7FF' }}
            animate={{ color: '#818CF8' }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            Plymouth, MA
          </motion.strong>
          .
        </motion.p>
        {/* <p className="mt-3 text-xl text-yellow-300 max-w-3xl font-bold">
          We use only the finest products in the industry because we believe
          that <em>you deserve the best</em>.
        </p> */}
        <motion.div
          ref={ref}
          variants={variants}
          initial={'hidden'}
          animate={controls}
          transition={{
            duration: 0.5,
            delay: 0.6,
          }}
          className="flex mt-10"
        >
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
        </motion.div>
      </div>
    </div>
  );
};

export default HeroHome;
