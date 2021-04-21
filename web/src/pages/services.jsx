import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import {
  GiftIcon,
  ScissorsIcon,
  ColorSwatchIcon,
  SortAscendingIcon,
} from '@heroicons/react/solid';
import WeddingIcon from '../assets/graphics/engagement-ring.svg';
import TexturizingIcon from '../assets/graphics/woman-with-long-hair.svg';
import ColorIcon from '../assets/graphics/hair-dye.svg';

import Layout from '../components/layout';
import SEO from '../components/common/Seo';
import HeaderPage from '../components/layouts/HeroPage';
import MenuGrid from '../components/common/MenuGrid';
// import MenuSidebar from '../components/common/MenuSidebar';

const ServicesPage = () => {
  const data = useStaticQuery(graphql`
    query ServicePageQ {
      imgHeroBg: file(
        relativePath: {
          eq: "assets/images/services/hair-services-aristocracy-salon-day-spa-plymouth-ma.jpg"
        }
      ) {
        childImageSharp {
          gatsbyImageData(quality: 90, layout: FULL_WIDTH, placeholder: BLURRED)
        }
      }
      imgHairServicesOne: file(
        relativePath: {
          eq: "assets/images/services/hair-cut-design-coloring-services-aristocracy-salon-day-spa-plymouth-ma.jpg"
        }
      ) {
        childImageSharp {
          gatsbyImageData(quality: 90, layout: FULL_WIDTH, placeholder: BLURRED)
        }
      }
      imgHairServicesTwo: file(
        relativePath: {
          eq: "assets/images/services/hair-cuts-mens-services-aristocracy-salon-day-spa-plymouth-ma.jpg"
        }
      ) {
        childImageSharp {
          gatsbyImageData(quality: 90, layout: FULL_WIDTH, placeholder: BLURRED)
        }
      }
      imgHairServicesThree: file(
        relativePath: {
          eq: "assets/images/services/hair-extensions-services-aristocracy-salon-day-spa-plymouth-ma.jpg"
        }
      ) {
        childImageSharp {
          gatsbyImageData(quality: 90, layout: FULL_WIDTH, placeholder: BLURRED)
        }
      }
      imgHairServicesFour: file(
        relativePath: {
          eq: "assets/images/services/hair-short-cuts-mens-services-aristocracy-salon-day-spa-plymouth-ma.jpg"
        }
      ) {
        childImageSharp {
          gatsbyImageData(quality: 90, layout: FULL_WIDTH, placeholder: BLURRED)
        }
      }
      imgHairColoringOne: file(
        relativePath: {
          eq: "assets/images/services/hair-coloring-womans-services-red-aristocracy-salon-day-spa-plymouth-ma.jpg"
        }
      ) {
        childImageSharp {
          gatsbyImageData(quality: 90, layout: FULL_WIDTH, placeholder: BLURRED)
        }
      }
      imgHairColoringTwo: file(
        relativePath: {
          eq: "assets/images/services/hair-coloring-womans-services-3-styles-aristocracy-salon-day-spa-plymouth-ma.jpg"
        }
      ) {
        childImageSharp {
          gatsbyImageData(quality: 90, layout: FULL_WIDTH, placeholder: BLURRED)
        }
      }
      imgHairColoringThree: file(
        relativePath: {
          eq: "assets/images/services/hair-coloring-womans-services-purple-aristocracy-salon-day-spa-plymouth-ma.jpg"
        }
      ) {
        childImageSharp {
          gatsbyImageData(quality: 90, layout: FULL_WIDTH, placeholder: BLURRED)
        }
      }
      imgHairColoringFour: file(
        relativePath: {
          eq: "assets/images/services/hair-coloring-womans-services-3-colors-aristocracy-salon-day-spa-plymouth-ma.jpg"
        }
      ) {
        childImageSharp {
          gatsbyImageData(quality: 90, layout: FULL_WIDTH, placeholder: BLURRED)
        }
      }
      imgHairTexturingOne: file(
        relativePath: {
          eq: "assets/images/services/hair-texturing-smoothing-services-aristocracy-salon-day-spa-plymouth-ma.jpg"
        }
      ) {
        childImageSharp {
          gatsbyImageData(quality: 90, layout: FULL_WIDTH, placeholder: BLURRED)
        }
      }
      imgHairTexturingTwo: file(
        relativePath: {
          eq: "assets/images/services/hair-texturing-smoothing-red-services-aristocracy-salon-day-spa-plymouth-ma.jpg"
        }
      ) {
        childImageSharp {
          gatsbyImageData(quality: 90, layout: FULL_WIDTH, placeholder: BLURRED)
        }
      }
      imgHairTexturingThree: file(
        relativePath: {
          eq: "assets/images/services/hair-texturing-smoothing-blonde-services-aristocracy-salon-day-spa-plymouth-ma.jpg"
        }
      ) {
        childImageSharp {
          gatsbyImageData(quality: 90, layout: FULL_WIDTH, placeholder: BLURRED)
        }
      }
      imgHairTexturingFour: file(
        relativePath: {
          eq: "assets/images/services/hair-texturing-smoothing-before-after-services-aristocracy-salon-day-spa-plymouth-ma.jpg"
        }
      ) {
        childImageSharp {
          gatsbyImageData(quality: 90, layout: FULL_WIDTH, placeholder: BLURRED)
        }
      }
      imgBridalOne: file(
        relativePath: {
          eq: "assets/images/services/bridal-package-hair-services-aristocracy-salon-day-spa-plymouth-ma.jpg"
        }
      ) {
        childImageSharp {
          gatsbyImageData(quality: 90, layout: FULL_WIDTH, placeholder: BLURRED)
        }
      }
      imgBridalTwo: file(
        relativePath: {
          eq: "assets/images/services/bridal-package-makeup-services-aristocracy-salon-day-spa-plymouth-ma.jpg"
        }
      ) {
        childImageSharp {
          gatsbyImageData(quality: 90, layout: FULL_WIDTH, placeholder: BLURRED)
        }
      }
      imgBridalThree: file(
        relativePath: {
          eq: "assets/images/services/bridal-package-flowers-services-aristocracy-salon-day-spa-plymouth-ma.jpg"
        }
      ) {
        childImageSharp {
          gatsbyImageData(quality: 90, layout: FULL_WIDTH, placeholder: BLURRED)
        }
      }
      imgBridalFour: file(
        relativePath: {
          eq: "assets/images/services/bridal-package-floral-services-aristocracy-salon-day-spa-plymouth-ma.jpg"
        }
      ) {
        childImageSharp {
          gatsbyImageData(quality: 90, layout: FULL_WIDTH, placeholder: BLURRED)
        }
      }
      imgBeautyOne: file(
        relativePath: {
          eq: "assets/images/services/day-of-beauty-packages-collage-services-aristocracy-salon-day-spa-plymouth-ma.jpg"
        }
      ) {
        childImageSharp {
          gatsbyImageData(quality: 90, layout: FULL_WIDTH, placeholder: BLURRED)
        }
      }
      imgBeautyTwo: file(
        relativePath: {
          eq: "assets/images/services/day-of-beauty-packages-facial-services-aristocracy-salon-day-spa-plymouth-ma.jpg"
        }
      ) {
        childImageSharp {
          gatsbyImageData(quality: 90, layout: FULL_WIDTH, placeholder: BLURRED)
        }
      }
      imgBeautyThree: file(
        relativePath: {
          eq: "assets/images/services/day-of-beauty-packages-spa-services-aristocracy-salon-day-spa-plymouth-ma.jpg"
        }
      ) {
        childImageSharp {
          gatsbyImageData(quality: 90, layout: FULL_WIDTH, placeholder: BLURRED)
        }
      }
      imgBeautyFour: file(
        relativePath: {
          eq: "assets/images/services/day-of-beauty-packages-stone-massage-services-aristocracy-salon-day-spa-plymouth-ma.jpg"
        }
      ) {
        childImageSharp {
          gatsbyImageData(quality: 90, layout: FULL_WIDTH, placeholder: BLURRED)
        }
      }
    }
  `);

  const imgHeroBg = data.imgHeroBg.childImageSharp.gatsbyImageData;
  const imgHairServicesOne =
    data.imgHairServicesOne.childImageSharp.gatsbyImageData;
  const imgHairServicesTwo =
    data.imgHairServicesTwo.childImageSharp.gatsbyImageData;
  const imgHairServicesThree =
    data.imgHairServicesThree.childImageSharp.gatsbyImageData;
  const imgHairServicesFour =
    data.imgHairServicesFour.childImageSharp.gatsbyImageData;
  const imgHairColoringOne =
    data.imgHairColoringOne.childImageSharp.gatsbyImageData;
  const imgHairColoringTwo =
    data.imgHairColoringTwo.childImageSharp.gatsbyImageData;
  const imgHairColoringThree =
    data.imgHairColoringThree.childImageSharp.gatsbyImageData;
  const imgHairColoringFour =
    data.imgHairColoringFour.childImageSharp.gatsbyImageData;
  const imgHairTexturingOne =
    data.imgHairTexturingOne.childImageSharp.gatsbyImageData;
  const imgHairTexturingTwo =
    data.imgHairTexturingTwo.childImageSharp.gatsbyImageData;
  const imgHairTexturingThree =
    data.imgHairTexturingThree.childImageSharp.gatsbyImageData;
  const imgHairTexturingFour =
    data.imgHairTexturingFour.childImageSharp.gatsbyImageData;
  const imgBridalOne = data.imgBridalOne.childImageSharp.gatsbyImageData;
  const imgBridalTwo = data.imgBridalTwo.childImageSharp.gatsbyImageData;
  const imgBridalThree = data.imgBridalThree.childImageSharp.gatsbyImageData;
  const imgBridalFour = data.imgBridalFour.childImageSharp.gatsbyImageData;
  const imgBeautyOne = data.imgBeautyOne.childImageSharp.gatsbyImageData;
  const imgBeautyTwo = data.imgBeautyTwo.childImageSharp.gatsbyImageData;
  const imgBeautyThree = data.imgBeautyThree.childImageSharp.gatsbyImageData;
  const imgBeautyFour = data.imgBeautyFour.childImageSharp.gatsbyImageData;

  const menuSalon = [
    {
      title: 'Hair Designs',
      description:
        "Add some flair to your look with our attractive hair designs. Our stylists can help you choose one that's right for you.",
      price: `$45 - $70`,
      icon: ScissorsIcon,
      iconForeground: 'text-indigo-700',
      iconBackground: 'bg-indigo-50',
      buttonLabel: 'Book',
      buttonLink: '/contact/',
    },
    {
      title: 'Basic Short Hair Cuts',
      description:
        'Our basic short haircut works for most hair types and will leave you with a style that is easy to maintain.',
      price: `$30 - $45`,
      note: "(Includes most men's haircuts)",
      icon: ScissorsIcon,
      iconForeground: 'text-indigo-700',
      iconBackground: 'bg-indigo-50',
      buttonLabel: 'Book',
      buttonLink: '/contact/',
    },
    {
      title: "Children's Hair Designs",
      description:
        'We specialize in creating fun hairstyles that children will love and provide a friendly atmosphere to make their experience enjoyable.',
      note: '(Under 12)',
      price: `$20 - $45`,
      icon: ScissorsIcon,
      iconForeground: 'text-indigo-700',
      iconBackground: 'bg-indigo-50',
      buttonLabel: 'Book',
      buttonLink: '/contact/',
    },
    {
      title: 'Shampoo & Styling',
      description:
        "With our new shampoos and styling products, you'll leave with hair looking healthier and shinier than ever before.",
      price: `$45+`,
      note: '(Long and/or thick hair may be additional)',
      icon: ScissorsIcon,
      iconForeground: 'text-indigo-700',
      iconBackground: 'bg-indigo-50',
      buttonLabel: 'Book',
      buttonLink: '/contact/',
    },
    {
      title: 'Scalp Facial Including Therapeutic Head Massage',
      description:
        'Revitalize your scalp and hair with a relaxing scalp facial. This luxurious treatment includes a deep cleansing, exfoliation, and an invigorating scalp massage. Your hair will thank you for it.',
      price: `$25`,
      note: '(Does not include blow-dry)',
      icon: ScissorsIcon,
      iconForeground: 'text-indigo-700',
      iconBackground: 'bg-indigo-50',
      buttonLabel: 'Book',
      buttonLink: '/contact/',
    },
    {
      title: 'Updos & Braiding',
      description:
        'Braids and updos can make all the difference in your appearance instead of having your hair down. We can create something that compliments your outfit and will help you to feel beautiful.',
      price: `$75+`,
      note:
        '(We recommend that you wear a button down shirt to avoid having to pull clothing over your head. Please arrive with dry hair.)',
      icon: ScissorsIcon,
      iconForeground: 'text-indigo-700',
      iconBackground: 'bg-indigo-50',
      buttonLabel: 'Book',
      buttonLink: '/contact/',
    },
    {
      title: 'Hair Extensions',
      description:
        "We offer the finest hair extensions in the industry, crafted from 100% real human hair. You'll be raving about how natural they look and feel.",
      price: `Price Varies (Consult Required)`,
      icon: ScissorsIcon,
      iconForeground: 'text-indigo-700',
      iconBackground: 'bg-indigo-50',
      buttonLabel: 'Book',
      buttonLink: '/contact/',
    },
  ];

  const menuColor = [
    {
      title: 'Hair Color',
      description:
        "Add some flair to your look with our attractive hair designs. Our stylists can help you choose one that's right for you.",
      price: `$70+`,
      icon: ColorIcon,
      iconForeground: 'text-indigo-700',
      iconBackground: 'bg-indigo-50',
      buttonLabel: 'Book',
      buttonLink: '/contact/',
    },
    {
      title: 'Brighten Solid Color with Foil Highlights',
      description:
        'A basic short haircut that works for most hair types. Recommended for medium-length hair.',
      price: `$45+`,
      note: "(Includes most men's haircuts)",
      icon: ColorIcon,
      iconForeground: 'text-indigo-700',
      iconBackground: 'bg-indigo-50',
      buttonLabel: 'Book',
      buttonLink: '/contact/',
    },
    {
      title: 'Foil Highlights',
      description:
        'We specialize in creating fun hairstyles that children will love and provide a friendly atmosphere to make their experience enjoyable.',
      note: '(Under 12)',
      price: `$100+ (Partial Foils: $90+)`,
      icon: ColorIcon,
      iconForeground: 'text-indigo-700',
      iconBackground: 'bg-indigo-50',
      buttonLabel: 'Book',
      buttonLink: '/contact/',
    },
    {
      title: 'Color Glossing',
      description:
        "With our new shampoos and styling products, you'll leave with hair looking healthier and shinier than ever before.",
      price: `$50+ (Semi-Permanent Color Gloss)`,
      note: '(Long and/or thick hair may be additional)',
      icon: ColorIcon,
      iconForeground: 'text-indigo-700',
      iconBackground: 'bg-indigo-50',
      buttonLabel: 'Book',
      buttonLink: '/contact/',
    },
    {
      title: 'Creative Highlighting Techniques',
      description:
        'Revitalize your scalp and hair with a relaxing scalp facial. This luxurious treatment includes a deep cleansing, exfoliation, and an invigorating scalp massage. Your hair will thank you for it.',
      price: `$100+`,
      note: '(Does not include blow-dry)',
      icon: ColorIcon,
      iconForeground: 'text-indigo-700',
      iconBackground: 'bg-indigo-50',
      buttonLabel: 'Book',
      buttonLink: '/contact/',
    },
    {
      title: 'Color Sync',
      description:
        'Braids and updos can make all the difference in your appearance instead of having your hair down. We can create something that compliments your outfit and will help you to feel beautiful.',
      price: `$65+ (Demi-Permanent Coloring)`,
      note:
        '(We recommend that you wear a button down shirt to avoid having to pull clothing over your head. Please arrive with dry hair.)',
      icon: ColorIcon,
      iconForeground: 'text-indigo-700',
      iconBackground: 'bg-indigo-50',
      buttonLabel: 'Book',
      buttonLink: '/contact/',
    },
    {
      title: 'Corrective Hair Coloring',
      description:
        "We offer the finest hair extensions in the industry, crafted from 100% real human hair. You'll be raving about how natural they look and feel.",
      price: `Price Varies (Consult Required)`,
      icon: ColorIcon,
      iconForeground: 'text-indigo-700',
      iconBackground: 'bg-indigo-50',
      buttonLabel: 'Book',
      buttonLink: '/contact/',
    },
  ];

  const menuTexturing = [
    {
      title: 'Smoothing Treatments (Including Karetin)',
      description:
        "Add some flair to your look with our attractive hair designs. Our stylists can help you choose one that's right for you.",
      price: `$150+`,
      icon: TexturizingIcon,
      iconForeground: 'text-indigo-700',
      iconBackground: 'bg-indigo-50',
      buttonLabel: 'Book',
      buttonLink: '/contact/',
    },
  ];

  const menuBridal = [
    {
      title: 'Trial Run',
      description:
        "Add some flair to your look with our attractive hair designs. Our stylists can help you choose one that's right for you.",
      price: `$70+`,
      icon: WeddingIcon,
      iconForeground: 'text-indigo-700',
      iconBackground: 'bg-indigo-50',
      buttonLabel: 'Book',
      buttonLink: '/contact/',
    },
    {
      title: 'Bridal Design',
      description:
        "Add some flair to your look with our attractive hair designs. Our stylists can help you choose one that's right for you.",
      price: `$110+`,
      note: `(Including veil placement)`,
      icon: WeddingIcon,
      iconForeground: 'text-indigo-700',
      iconBackground: 'bg-indigo-50',
      buttonLabel: 'Book',
      buttonLink: '/contact/',
    },
    {
      title: 'Bridal Makeup Trial Run',
      description:
        "Add some flair to your look with our attractive hair designs. Our stylists can help you choose one that's right for you.",
      price: `$150+`,
      icon: WeddingIcon,
      iconForeground: 'text-indigo-700',
      iconBackground: 'bg-indigo-50',
      buttonLabel: 'Book',
      buttonLink: '/contact/',
    },
    {
      title: 'Bridal Makeup',
      description:
        "Add some flair to your look with our attractive hair designs. Our stylists can help you choose one that's right for you.",
      price: `$150+`,
      icon: WeddingIcon,
      iconForeground: 'text-indigo-700',
      iconBackground: 'bg-indigo-50',
      buttonLabel: 'Book',
      buttonLink: '/contact/',
    },
    {
      title: 'Wedding Party - Hair Design',
      description:
        "Add some flair to your look with our attractive hair designs. Our stylists can help you choose one that's right for you.",
      price: `$150+`,
      icon: WeddingIcon,
      iconForeground: 'text-indigo-700',
      iconBackground: 'bg-indigo-50',
      buttonLabel: 'Book',
      buttonLink: '/contact/',
    },
    {
      title: 'Wedding Party - Makeup',
      description:
        "Add some flair to your look with our attractive hair designs. Our stylists can help you choose one that's right for you.",
      price: `$150+`,
      icon: WeddingIcon,
      iconForeground: 'text-indigo-700',
      iconBackground: 'bg-indigo-50',
      buttonLabel: 'Book',
      buttonLink: '/contact/',
    },
    {
      title: 'Bachelorette Package #1',
      description:
        "Add some flair to your look with our attractive hair designs. Our stylists can help you choose one that's right for you.",
      price: `$150+`,
      icon: WeddingIcon,
      iconForeground: 'text-indigo-700',
      iconBackground: 'bg-indigo-50',
      buttonLabel: 'Book',
      buttonLink: '/contact/',
    },
    {
      title: 'Bachelorette Package #2',
      description:
        "Add some flair to your look with our attractive hair designs. Our stylists can help you choose one that's right for you.",
      price: `$150+`,
      icon: WeddingIcon,
      iconForeground: 'text-indigo-700',
      iconBackground: 'bg-indigo-50',
      buttonLabel: 'Book',
      buttonLink: '/contact/',
    },
  ];

  const menuPackages = [
    {
      title: 'The Aristocrat',
      description:
        'This package includes a spa facial, spa manicure, spa pedicure, massage*, scalp massage, blow-dry styling, makeup application and light lunch.',
      price: `$369 (Allow 5 1/2 hrs)`,
      note: '* Depends on availability of massage therapist',
      icon: GiftIcon,
      iconForeground: 'text-indigo-700',
      iconBackground: 'bg-indigo-50',
      buttonLabel: 'Book',
      buttonLink: '/contact/',
    },
    {
      title: 'The Supreme',
      description:
        'This package includes a retexturizing facial, salt glow manicure, salt glow pedicure, stress buster, scalp massage, blow-dry styling, makeup application.',
      price: `$319 (Allow 4 1/2 hrs)`,
      icon: GiftIcon,
      iconForeground: 'text-indigo-700',
      iconBackground: 'bg-indigo-50',
      buttonLabel: 'Book',
      buttonLink: '/contact/',
    },
    {
      title: 'The Retreat',
      description:
        'This package includes therapeutic massage* or spa back treatment, multi-vitamin facial, aromatherapy manicure and pedicure, scalp massage and blow-dry styling.',
      price: `$275 (Allow 4 hrs)`,
      note: '* Depends on availability of massage therapist',
      icon: GiftIcon,
      iconForeground: 'text-indigo-700',
      iconBackground: 'bg-indigo-50',
      buttonLabel: 'Book',
      buttonLink: '/contact/',
    },
    {
      title: 'The Deluxe',
      description:
        'This package includes a deep cleansing facial, aromatherapy manicure, aromatherapy pedicure, blow-dry styling and makeup application.',
      price: `$239 (Allow 3 1/2 hrs)`,
      note: '* Depends on availability of massage therapist',
      icon: GiftIcon,
      iconForeground: 'text-indigo-700',
      iconBackground: 'bg-indigo-50',
      buttonLabel: 'Book',
      buttonLink: '/contact/',
    },
    {
      title: 'The Spa',
      description:
        'This package includes spa manicure and spa pedicure, spa back treatment, and blowdry styling.',
      price: `$199 (Allow 3 hrs)`,
      icon: GiftIcon,
      iconForeground: 'text-indigo-700',
      iconBackground: 'bg-indigo-50',
      buttonLabel: 'Book',
      buttonLink: '/contact/',
    },
    {
      title: 'The Massage Delight',
      description:
        'This package includes Stress Buster, paraffin manicure, scalp massage, blow-dry styling and makeup application.',
      price: `$169 (Allow 2 hrs)`,
      icon: GiftIcon,
      iconForeground: 'text-indigo-700',
      iconBackground: 'bg-indigo-50',
      buttonLabel: 'Book',
      buttonLink: '/contact/',
    },
  ];

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
  }

  return (
    <Layout>
      <SEO
        title="Full-Service Beauty Salon & Day Spa in Plymouth, MA | Aristocracy Salon & Day Spa"
        description="Full-Service Beauty Salon & Day Spa in Plymouth, MA | Aristocracy Salon & Day Spa"
      />
      <HeaderPage
        imgHeroBg={imgHeroBg}
        headerText="Our Salon & Day Spa Services"
        subheaderText="Check our full menu for service descriptions & pricing options"
        buttonLabel="Schedule Appointment"
      />
      {/* <MenuSidebar /> */}
      <div className="bg-indigo-200 bg-opacity-25">
        <div className="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="pb-16">
            <div className="text-center">
              <h2 className="font-medium text-3xl mb-5">Salon Services</h2>
              <p className="text-base italic text-gray-500 lg:max-w-2xl mb-10 mx-auto">
                Each of our specialties for Salon Services are provided in a
                professional, comfortable, and relaxing location at Aristocracy
                Salon & Day Spa. Our hair care stations are separate from both
                color service area and treatment rooms, allowing us to provide
                you the best experience possible.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-2 lg:grid-cols-4 lg:gap-4">
              <div className="max-w-xs rounded-lg shadow-lg overflow-hidden">
                <GatsbyImage
                  image={imgHairServicesOne}
                  imgClassName="object-cover object-center"
                  alt="Hair"
                />
              </div>
              <div className="max-w-xs rounded-lg shadow-lg overflow-hidden">
                <GatsbyImage
                  image={imgHairServicesTwo}
                  imgClassName="object-cover object-center"
                  alt="Hair"
                />
              </div>
              <div className="max-w-xs rounded-lg shadow-lg overflow-hidden">
                <GatsbyImage
                  image={imgHairServicesThree}
                  imgClassName="object-cover object-center"
                  alt="Hair"
                />
              </div>
              <div className="max-w-xs rounded-lg shadow-lg overflow-hidden">
                <GatsbyImage
                  image={imgHairServicesFour}
                  imgClassName="object-cover object-center"
                  alt="Hair"
                />
              </div>
            </div>
          </div>
          <MenuGrid
            actions={menuSalon}
            classNames={classNames}
            title={menuSalon.title}
            price={menuSalon.price}
            description={menuSalon.description}
            note={menuSalon.note}
            href={menuSalon.href}
            icon={menuSalon.icon}
            iconForeground={menuSalon.iconForeground}
            iconBackground={menuSalon.iconBackground}
            buttonLabel={menuSalon.buttonLabel}
            buttonLink={menuSalon.buttonLink}
          />
          <div className="pt-28 pb-16">
            <div className="text-center">
              <h2 className="font-medium text-3xl mb-5">Hair Color Services</h2>
              <p className="text-base italic text-gray-500 lg:max-w-2xl mb-10 mx-auto">
                Our Hair Coloring services are a perfect way to give your hair
                the fresh new look that you have been dreaming of. We offer a
                variety of services for people with all different levels of hair
                and types from color correction, semi-permanent color,
                conditioning treatments, and more.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-2 lg:grid-cols-4 lg:gap-4">
              <div className="max-w-xs rounded-lg shadow-lg overflow-hidden">
                <GatsbyImage
                  image={imgHairColoringOne}
                  imgClassName="object-cover object-center"
                  alt="Hair"
                />
              </div>
              <div className="max-w-xs rounded-lg shadow-lg overflow-hidden">
                <GatsbyImage
                  image={imgHairColoringTwo}
                  imgClassName="object-cover object-center"
                  alt="Hair"
                />
              </div>
              <div className="max-w-xs rounded-lg shadow-lg overflow-hidden">
                <GatsbyImage
                  image={imgHairColoringThree}
                  imgClassName="object-cover object-center"
                  alt="Hair"
                />
              </div>
              <div className="max-w-xs rounded-lg shadow-lg overflow-hidden">
                <GatsbyImage
                  image={imgHairColoringFour}
                  imgClassName="object-cover object-center"
                  alt="Hair"
                />
              </div>
            </div>
          </div>
          <MenuGrid
            actions={menuColor}
            classNames={classNames}
            title={menuColor.title}
            price={menuColor.price}
            description={menuColor.description}
            note={menuColor.note}
            href={menuColor.href}
            icon={menuColor.icon}
            iconForeground={menuColor.iconForeground}
            iconBackground={menuColor.iconBackground}
            buttonLabel={menuColor.buttonLabel}
            buttonLink={menuColor.buttonLink}
          />
          <div className="pt-28 pb-16">
            <div className="text-center">
              <h2 className="font-medium text-3xl mb-5">
                Hair Texturing Services
              </h2>
              <p className="text-base italic text-gray-500 lg:max-w-2xl mb-10 mx-auto">
                Our Hair Texturing services with Keratin are a fantastic way to
                get rid of frizz for good. Our texturizing treatments are
                customized with the perfect amounts of heat and treatment so
                that you can experience lasting results. Say goodbye to frizz,
                humidity, and curl overload!
              </p>
            </div>
            <div className="grid grid-cols-2 gap-2 lg:grid-cols-4 lg:gap-4">
              <div className="max-w-xs rounded-lg shadow-lg overflow-hidden">
                <GatsbyImage
                  image={imgHairTexturingOne}
                  imgClassName="object-cover object-center"
                  alt="Hair"
                />
              </div>
              <div className="max-w-xs rounded-lg shadow-lg overflow-hidden">
                <GatsbyImage
                  image={imgHairTexturingTwo}
                  imgClassName="object-cover object-center"
                  alt="Hair"
                />
              </div>
              <div className="max-w-xs rounded-lg shadow-lg overflow-hidden">
                <GatsbyImage
                  image={imgHairTexturingThree}
                  imgClassName="object-cover object-center"
                  alt="Hair"
                />
              </div>
              <div className="max-w-xs rounded-lg shadow-lg overflow-hidden">
                <GatsbyImage
                  image={imgHairTexturingFour}
                  imgClassName="object-cover object-center"
                  alt="Hair"
                />
              </div>
            </div>
          </div>
          <MenuGrid
            actions={menuTexturing}
            classNames={classNames}
            title={menuTexturing.title}
            price={menuTexturing.price}
            description={menuTexturing.description}
            note={menuTexturing.note}
            href={menuTexturing.href}
            icon={menuTexturing.icon}
            iconForeground={menuTexturing.iconForeground}
            iconBackground={menuTexturing.iconBackground}
            buttonLabel={menuTexturing.buttonLabel}
            buttonLink={menuTexturing.buttonLink}
          />
          <div className="pt-28 pb-16">
            <div className="text-center">
              <h2 className="font-medium text-3xl mb-5">Bridal Services</h2>
              <p className="text-base italic text-gray-500 lg:max-w-2xl mb-10 mx-auto">
                Our Bridal service packages are the perfect way to pamper
                yourself for your special day. We offer a variety of wedding
                party and bachelorette packages that include our signature
                services along with makeup application and style. Let's get
                started today with a trial run.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-2 lg:grid-cols-4 lg:gap-4">
              <div className="max-w-xs rounded-lg shadow-lg overflow-hidden">
                <GatsbyImage
                  image={imgBridalOne}
                  imgClassName="object-cover object-center"
                  alt="Hair"
                />
              </div>
              <div className="max-w-xs rounded-lg shadow-lg overflow-hidden">
                <GatsbyImage
                  image={imgBridalTwo}
                  imgClassName="object-cover object-center"
                  alt="Hair"
                />
              </div>
              <div className="max-w-xs rounded-lg shadow-lg overflow-hidden">
                <GatsbyImage
                  image={imgBridalThree}
                  imgClassName="object-cover object-center"
                  alt="Hair"
                />
              </div>
              <div className="max-w-xs rounded-lg shadow-lg overflow-hidden">
                <GatsbyImage
                  image={imgBridalFour}
                  imgClassName="object-cover object-center"
                  alt="Hair"
                />
              </div>
            </div>
          </div>
          <MenuGrid
            actions={menuBridal}
            classNames={classNames}
            title={menuBridal.title}
            price={menuBridal.price}
            description={menuBridal.description}
            note={menuBridal.note}
            href={menuBridal.href}
            icon={menuBridal.icon}
            iconForeground={menuBridal.iconForeground}
            iconBackground={menuBridal.iconBackground}
            buttonLabel={menuBridal.buttonLabel}
            buttonLink={menuBridal.buttonLink}
          />
          <div className="pt-28 pb-16">
            <div className="text-center">
              <h2 className="font-medium text-3xl mb-5">
                Day of Beauty Packages
              </h2>
              <p className="text-base italic text-gray-500 lg:max-w-2xl mb-10 mx-auto">
                Our Day of Beauty packages are a great way to treat yourself, or
                offer the gift of beauty for others. Our packages include our
                signature day spa experience plus make up application and style
                with your choice of natural-looking makeup colors that are
                perfect for any skin type.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-2 lg:grid-cols-4 lg:gap-4">
              <div className="max-w-xs rounded-lg shadow-lg overflow-hidden">
                <GatsbyImage
                  image={imgBeautyOne}
                  imgClassName="object-cover object-center"
                  alt="Hair"
                />
              </div>
              <div className="max-w-xs rounded-lg shadow-lg overflow-hidden">
                <GatsbyImage
                  image={imgBeautyTwo}
                  imgClassName="object-cover object-center"
                  alt="Hair"
                />
              </div>
              <div className="max-w-xs rounded-lg shadow-lg overflow-hidden">
                <GatsbyImage
                  image={imgBeautyThree}
                  imgClassName="object-cover object-center"
                  alt="Hair"
                />
              </div>
              <div className="max-w-xs rounded-lg shadow-lg overflow-hidden">
                <GatsbyImage
                  image={imgBeautyFour}
                  imgClassName="object-cover object-center"
                  alt="Hair"
                />
              </div>
            </div>
          </div>
          <MenuGrid
            actions={menuPackages}
            classNames={classNames}
            title={menuPackages.title}
            price={menuPackages.price}
            description={menuPackages.description}
            note={menuPackages.note}
            href={menuPackages.href}
            icon={menuPackages.icon}
            iconForeground={menuPackages.iconForeground}
            iconBackground={menuPackages.iconBackground}
            buttonLabel={menuPackages.buttonLabel}
            buttonLink={menuPackages.buttonLink}
          />
        </div>
      </div>
    </Layout>
  );
};

export default ServicesPage;
