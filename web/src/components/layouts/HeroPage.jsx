import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import ButtonInternalLink from '../common/ButtonInternalLink';

const HeroPage = ({
  imgHeroBg,
  altText,
  headerText,
  subheaderText,
  buttonLabel,
}) => {
  return (
    <div className="relative">
      <div className="absolute inset-0">
        <GatsbyImage
          image={imgHeroBg}
          className="w-full h-full object-cover"
          alt={altText}
          loading="eager"
        />
        <div
          className="absolute inset-0 bg-gray-500"
          style={{ mixBlendMode: 'multiply' }}
          aria-hidden="true"
        ></div>
      </div>
      <div className="relative max-w-2xl py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
          {headerText}
        </h1>
        <p className="mt-6 text-xl text-indigo-100 max-w-3xl">
          {subheaderText}
        </p>
        <div className="flex mt-10">
          <div className="col-1 gap-4">
            <ButtonInternalLink
              btnLink="#"
              bgColor="bg-yellow-500"
              bgHoverColor="bg-yellow-600"
              textColor="text-white"
            >
              {buttonLabel}
            </ButtonInternalLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroPage;
