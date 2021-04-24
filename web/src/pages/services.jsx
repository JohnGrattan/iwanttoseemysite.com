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
import NailIcon from '../assets/graphics/nail-polish.svg';
import SkinIcon from '../assets/graphics/face-mask.svg';

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
      imgNailOne: file(
        relativePath: {
          eq: "assets/images/services/manicure-nail-services-aristocracy-salon-day-spa-plymouth-ma.jpg"
        }
      ) {
        childImageSharp {
          gatsbyImageData(quality: 90, layout: FULL_WIDTH, placeholder: BLURRED)
        }
      }
      imgNailTwo: file(
        relativePath: {
          eq: "assets/images/services/spa-pedicure-nail-services-aristocracy-salon-day-spa-plymouth-ma.jpg"
        }
      ) {
        childImageSharp {
          gatsbyImageData(quality: 90, layout: FULL_WIDTH, placeholder: BLURRED)
        }
      }
      imgNailThree: file(
        relativePath: {
          eq: "assets/images/services/manicure-nail-filing-services-aristocracy-salon-day-spa-plymouth-ma.jpg"
        }
      ) {
        childImageSharp {
          gatsbyImageData(quality: 90, layout: FULL_WIDTH, placeholder: BLURRED)
        }
      }
      imgNailFour: file(
        relativePath: {
          eq: "assets/images/services/pedicure-nail-services-aristocracy-salon-day-spa-plymouth-ma.jpg"
        }
      ) {
        childImageSharp {
          gatsbyImageData(quality: 90, layout: FULL_WIDTH, placeholder: BLURRED)
        }
      }
      imgSkinOne: file(
        relativePath: {
          eq: "assets/images/services/spa-skin-care-facials-services-aristocracy-salon-day-spa-plymouth-ma.jpg"
        }
      ) {
        childImageSharp {
          gatsbyImageData(quality: 90, layout: FULL_WIDTH, placeholder: BLURRED)
        }
      }
      imgSkinTwo: file(
        relativePath: {
          eq: "assets/images/services/spa-skin-care-mask-services-aristocracy-salon-day-spa-plymouth-ma.jpg"
        }
      ) {
        childImageSharp {
          gatsbyImageData(quality: 90, layout: FULL_WIDTH, placeholder: BLURRED)
        }
      }
      imgSkinThree: file(
        relativePath: {
          eq: "assets/images/services/spa-skin-care-facial-massage-services-aristocracy-salon-day-spa-plymouth-ma.jpg"
        }
      ) {
        childImageSharp {
          gatsbyImageData(quality: 90, layout: FULL_WIDTH, placeholder: BLURRED)
        }
      }
      imgSkinFour: file(
        relativePath: {
          eq: "assets/images/services/skin-care-facial-massage-services-aristocracy-salon-day-spa-plymouth-ma.jpg"
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
  const imgNailOne = data.imgNailOne.childImageSharp.gatsbyImageData;
  const imgNailTwo = data.imgNailTwo.childImageSharp.gatsbyImageData;
  const imgNailThree = data.imgNailThree.childImageSharp.gatsbyImageData;
  const imgNailFour = data.imgNailFour.childImageSharp.gatsbyImageData;
  const imgSkinOne = data.imgSkinOne.childImageSharp.gatsbyImageData;
  const imgSkinTwo = data.imgSkinTwo.childImageSharp.gatsbyImageData;
  const imgSkinThree = data.imgSkinThree.childImageSharp.gatsbyImageData;
  const imgSkinFour = data.imgSkinFour.childImageSharp.gatsbyImageData;
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
      price: `$45+ (Flat iron with hair design $10 - $15)`,
      note: 'Flat iron - Blow-dry - Roller set',
      noteTwo: '(Long and/or thick hair may be additional)',
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
        "Choose any shade to add brightness and vibrancy to your hair, giving you a whole new look you'll love.",
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
        'Add dimension, shine, or a total transformation to your hair with our foil highlights.',
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
        'Highlight your natural hair color with precision using dramatic, dimensional foil highlights. This is a great way to add depth and dimension without having to dye your hair a darker color.',
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
        'Our glossing spray comes in a variety of different colors and will make your hair shine and shimmer in any light.',
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
        'Highlighting hair is all about being fun, creative, and not afraid to make a statement. Try our highlighting techniques to stand out from the crowd.',
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
        'Made with gentle, high quality ingredients that are safe for your hair and scalp. No ammonia, no peroxide, and no harsh chemicals.',
      price: `$65+ (Demi-Permanent Coloring)`,
      note:
        '*Long and/or thick hair or pulled through ends may be additional. More than 1" of regrowth or to refresh ends will be $5 - $20 additional.',
      noteTwo:
        'Chemical services will not be guaranteed without the purchase of stylist recommended products. Robes available at your request.',
      icon: ColorIcon,
      iconForeground: 'text-indigo-700',
      iconBackground: 'bg-indigo-50',
      buttonLabel: 'Book',
      buttonLink: '/contact/',
    },
    {
      title: 'Corrective Hair Coloring',
      description:
        'We offer a full line of corrective dyes to help you achieve your desired color. Whether you are looking to cover gray, change from balayage or ombre, or simply enhance your natural color we have what it takes to produce the look you desire.',
      price: `Price Varies (Consult Required)`,
      note: 'Complimentary consultation always available',
      noteTwo: 'Olaplex Stacting: $30',
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
        "Karetin smoothing treatments deliver smoother, straighter hair that's up to 90% frizz-free and more manageable - without damaging your hair. A safe way to reduce the appearance of frizz for beautiful results you can count on.",
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
        'Our Bridal Trial Run is the perfect opportunity to try out our salon before your big day! With our hair trial, you’ll find out if you and your stylist are a good fit before you book for the wedding.',
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
        'Unforgettable, elegant and classy. We offer the most luxurious bridal design for all types of weddings. Our talented hairdresser will create a romantic hairstyle that best suits you and your groom.',
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
        'You deserve to have your makeup look flawless on your wedding day. The best way to guarantee this is a makeup trial run. A professional makeup artist will meet with you in person at our salon and help you find your perfect look before your special day.',
      price: `$50+`,
      icon: WeddingIcon,
      iconForeground: 'text-indigo-700',
      iconBackground: 'bg-indigo-50',
      buttonLabel: 'Book',
      buttonLink: '/contact/',
    },
    {
      title: 'Bridal Makeup',
      description:
        'Our artists are capable of working with all skin types and tones, and have the experience to make anyone look and feel their most beautiful on their wedding day.',
      price: `$65+`,
      icon: WeddingIcon,
      iconForeground: 'text-indigo-700',
      iconBackground: 'bg-indigo-50',
      buttonLabel: 'Book',
      buttonLink: '/contact/',
    },
    {
      title: 'Wedding Party - Hair Design',
      description:
        'Our expertly trained stylists are prepared to make any wedding party member look their best. We use products that will make your hair designs last all night long.',
      price: `$75+`,
      note: `(Including mothers)`,
      icon: WeddingIcon,
      iconForeground: 'text-indigo-700',
      iconBackground: 'bg-indigo-50',
      buttonLabel: 'Book',
      buttonLink: '/contact/',
    },
    {
      title: 'Wedding Party - Makeup',
      description:
        'Brides, bridesmaids, and mother deserve a fresh layer of glamour for the big day. Each member of your wedding party will get their own makeover with our skilled team of makeup artists.',
      price: `$50+`,
      note: `(Including mothers)`,
      icon: WeddingIcon,
      iconForeground: 'text-indigo-700',
      iconBackground: 'bg-indigo-50',
      buttonLabel: 'Book',
      buttonLink: '/contact/',
    },
    {
      title: 'Bachelorette Package #1',
      description:
        'Includes: Aromatherapy Manicure and Pedicure, Stress Buster',
      price: `$100`,
      icon: WeddingIcon,
      iconForeground: 'text-indigo-700',
      iconBackground: 'bg-indigo-50',
      buttonLabel: 'Book',
      buttonLink: '/contact/',
    },
    {
      title: 'Bachelorette Package #2',
      description:
        'Includes: Aromatherapy Manicure and Pedicure, 1 Hour Full Body Massage or Aromatherapy Facial',
      price: `$135`,
      icon: WeddingIcon,
      iconForeground: 'text-indigo-700',
      iconBackground: 'bg-indigo-50',
      buttonLabel: 'Book',
      buttonLink: '/contact/',
    },
  ];

  const menuNail = [
    {
      title: 'Aromatherapy Manicure',
      description:
        'Choose your oils to be applied to your nail beds, cuticles, and hands, then massaged in by your manicurist.',
      price: `$20 / French $25`,
      icon: NailIcon,
      iconForeground: 'text-indigo-700',
      iconBackground: 'bg-indigo-50',
      buttonLabel: 'Book',
      buttonLink: '/contact/',
    },
    {
      title: 'Aromatherapy Pedicure',
      description:
        'Choose your oils to be applied to your nail beds, cuticles, and feet, then massaged in by your pedicurist.',
      price: `$45+ / French $50`,
      icon: NailIcon,
      iconForeground: 'text-indigo-700',
      iconBackground: 'bg-indigo-50',
      buttonLabel: 'Book',
      buttonLink: '/contact/',
    },
    {
      title: 'Polish Change',
      description:
        "Time for a complete change! Find your favorite color and we'll apply the new polish to your fingers and toes, reapplying the base coat.",
      price: `$12 (Nails) / $15 (Toes)`,
      icon: NailIcon,
      iconForeground: 'text-indigo-700',
      iconBackground: 'bg-indigo-50',
      buttonLabel: 'Book',
      buttonLink: '/contact/',
    },
    {
      title: 'Polish Change with Vinylux',
      description:
        "Vinylux polish is a true hybrid of nail polish and gel. It's a revolutionary hybrid varnish that offers all the benefits of gel nail polish, but without the LED/UV light. Vinylux offers a flawless finish every time, with complete coverage in just one coat.",
      price: `$17 (Nails) / $20 (Toes)`,

      icon: NailIcon,
      iconForeground: 'text-indigo-700',
      iconBackground: 'bg-indigo-50',
      buttonLabel: 'Book',
      buttonLink: '/contact/',
    },
    {
      title: 'Spa Manicure',
      description:
        'Relax, as hands are bathed, exfoliated, moisturized, and massaged with Alpha Hydroxy Acid complexes and the natural goodness of Vitamin E, Aloe Vera, and skin-softening Ceramides.',
      price: `$30`,
      note: `(Including mothers)`,
      icon: NailIcon,
      iconForeground: 'text-indigo-700',
      iconBackground: 'bg-indigo-50',
      buttonLabel: 'Book',
      buttonLink: '/contact/',
    },
    {
      title: 'Spa Pedicure',
      description:
        'Relax, as feet are bathed, exfoliated, moisturized, and massaged with Alpha Hydroxy Acid complexes and the natural goodness of Vitamin E, Aloe Vera, and skin-softening Ceramides.',
      price: `$55`,
      note: `(Including mothers)`,
      icon: NailIcon,
      iconForeground: 'text-indigo-700',
      iconBackground: 'bg-indigo-50',
      buttonLabel: 'Book',
      buttonLink: '/contact/',
    },
    {
      title: 'Vinylux Manicure',
      description:
        'Get everything you love about the shine and durability of gel polish, with the ease of application of traditional nail polish.',
      price: `$25`,
      icon: NailIcon,
      iconForeground: 'text-indigo-700',
      iconBackground: 'bg-indigo-50',
      buttonLabel: 'Book',
      buttonLink: '/contact/',
    },
    {
      title: 'Vinylux Pedicure',
      description:
        'Get everything you love about the shine and durability of gel polish, with the ease of application of traditional nail polish.',
      price: `$50`,
      icon: NailIcon,
      iconForeground: 'text-indigo-700',
      iconBackground: 'bg-indigo-50',
      buttonLabel: 'Book',
      buttonLink: '/contact/',
    },
    {
      title: 'Shellac / Gel Manicure',
      description:
        'Shellac is a long-lasting, chip-resistant nail lacquer that eliminates the need for frequent touch-ups. It’s a hybrid between polish and gel, formulated to last 14+ days without chipping or smudging.',
      price: `$35 / French $40`,
      icon: NailIcon,
      iconForeground: 'text-indigo-700',
      iconBackground: 'bg-indigo-50',
      buttonLabel: 'Book',
      buttonLink: '/contact/',
    },
    {
      title: 'Express Pedicure',
      description:
        'Come in for an express pedicure and let our certified technicians spoil you with everything you need to feel pampered.',
      price: `$40`,
      icon: NailIcon,
      iconForeground: 'text-indigo-700',
      iconBackground: 'bg-indigo-50',
      buttonLabel: 'Book',
      buttonLink: '/contact/',
    },
    {
      title: 'Paraffin Medicure',
      description:
        'Immerse the hands in a soothing container of heated, melted wax to moisturize and relieve muscle aches. Excellent for dry skin.',
      price: `$30`,
      icon: NailIcon,
      iconForeground: 'text-indigo-700',
      iconBackground: 'bg-indigo-50',
      buttonLabel: 'Book',
      buttonLink: '/contact/',
    },
    {
      title: 'Paraffin Pedicure',
      description:
        'Immerse the feet in a soothing container of heated, melted wax to moisturize and relieve muscle aches. Excellent for dry skin.',
      price: `$50`,
      icon: NailIcon,
      iconForeground: 'text-indigo-700',
      iconBackground: 'bg-indigo-50',
      buttonLabel: 'Book',
      buttonLink: '/contact/',
    },
    {
      title: 'Acrylic Removal Gel',
      description:
        'Let us remove your acrylic nails without wrecking your natural nails or making a mess.',
      price: `$35`,
      icon: NailIcon,
      iconForeground: 'text-indigo-700',
      iconBackground: 'bg-indigo-50',
      buttonLabel: 'Book',
      buttonLink: '/contact/',
    },
  ];

  const menuSkin = [
    {
      title: 'Signature Facial',
      description:
        'Choose your oils to be applied to your nail beds, cuticles, and hands, then massaged in by your manicurist.',
      price: `$80`,
      icon: SkinIcon,
      iconForeground: 'text-indigo-700',
      iconBackground: 'bg-indigo-50',
      buttonLabel: 'Book',
      buttonLink: '/contact/',
    },
    {
      title: 'Spa Facial',
      description:
        'Choose your oils to be applied to your nail beds, cuticles, and feet, then massaged in by your pedicurist.',
      price: `$100`,
      icon: SkinIcon,
      iconForeground: 'text-indigo-700',
      iconBackground: 'bg-indigo-50',
      buttonLabel: 'Book',
      buttonLink: '/contact/',
    },
    {
      title: 'Multi-Vitamin Facial',
      description:
        "Time for a complete change! Find your favorite color and we'll apply the new polish to your fingers and toes, reapplying the base coat.",
      price: `$95`,
      icon: SkinIcon,
      iconForeground: 'text-indigo-700',
      iconBackground: 'bg-indigo-50',
      buttonLabel: 'Book',
      buttonLink: '/contact/',
    },
    {
      title: 'Acne Clearing Facial',
      description:
        "Vinylux polish is a true hybrid of nail polish and gel. It's a revolutionary hybrid varnish that offers all the benefits of gel nail polish, but without the LED/UV light. Vinylux offers a flawless finish every time, with complete coverage in just one coat.",
      price: `$80`,

      icon: SkinIcon,
      iconForeground: 'text-indigo-700',
      iconBackground: 'bg-indigo-50',
      buttonLabel: 'Book',
      buttonLink: '/contact/',
    },
    {
      title: 'Illumi-Layer Facial',
      description:
        'Relax, as hands are bathed, exfoliated, moisturized, and massaged with Alpha Hydroxy Acid complexes and the natural goodness of Vitamin E, Aloe Vera, and skin-softening Ceramides.',
      price: `$95`,
      note: `(Including mothers)`,
      icon: SkinIcon,
      iconForeground: 'text-indigo-700',
      iconBackground: 'bg-indigo-50',
      buttonLabel: 'Book',
      buttonLink: '/contact/',
    },
    {
      title: 'Retexturizing Facial',
      description:
        'Relax, as feet are bathed, exfoliated, moisturized, and massaged with Alpha Hydroxy Acid complexes and the natural goodness of Vitamin E, Aloe Vera, and skin-softening Ceramides.',
      price: `$95`,
      note: `(Including mothers)`,
      icon: SkinIcon,
      iconForeground: 'text-indigo-700',
      iconBackground: 'bg-indigo-50',
      buttonLabel: 'Book',
      buttonLink: '/contact/',
    },
    {
      title: 'Chemical Peels',
      description:
        'Get everything you love about the shine and durability of gel polish, with the ease of application of traditional nail polish.',
      price: `Consultation Required`,
      icon: SkinIcon,
      iconForeground: 'text-indigo-700',
      iconBackground: 'bg-indigo-50',
      buttonLabel: 'Book',
      buttonLink: '/contact/',
    },
    {
      title: 'Medical Injectables',
      description:
        'Get everything you love about the shine and durability of gel polish, with the ease of application of traditional nail polish.',
      price: `Consultation Required`,
      icon: SkinIcon,
      iconForeground: 'text-indigo-700',
      iconBackground: 'bg-indigo-50',
      buttonLabel: 'Book',
      buttonLink: '/contact/',
    },
    {
      title: 'Eye Area Rescue Treatment',
      description:
        'Shellac is a long-lasting, chip-resistant nail lacquer that eliminates the need for frequent touch-ups. It’s a hybrid between polish and gel, formulated to last 14+ days without chipping or smudging.',
      price: `$35 / With Facial Only $30`,
      icon: SkinIcon,
      iconForeground: 'text-indigo-700',
      iconBackground: 'bg-indigo-50',
      buttonLabel: 'Book',
      buttonLink: '/contact/',
    },
    {
      title: 'Lip Area Rescue Treatment',
      description:
        'Come in for an express pedicure and let our certified technicians spoil you with everything you need to feel pampered.',
      price: `$35 / With Facial Only $30`,
      icon: SkinIcon,
      iconForeground: 'text-indigo-700',
      iconBackground: 'bg-indigo-50',
      buttonLabel: 'Book',
      buttonLink: '/contact/',
    },
    {
      title: 'Makeup Application',
      description:
        'Immerse the hands in a soothing container of heated, melted wax to moisturize and relieve muscle aches. Excellent for dry skin.',
      price: `$50+`,
      icon: SkinIcon,
      iconForeground: 'text-indigo-700',
      iconBackground: 'bg-indigo-50',
      buttonLabel: 'Book',
      buttonLink: '/contact/',
    },
    {
      title: 'Makeup Lesson',
      description:
        'Immerse the feet in a soothing container of heated, melted wax to moisturize and relieve muscle aches. Excellent for dry skin.',
      price: `$65`,
      icon: SkinIcon,
      iconForeground: 'text-indigo-700',
      iconBackground: 'bg-indigo-50',
      buttonLabel: 'Book',
      buttonLink: '/contact/',
    },
    {
      title: 'Novalash Eyelash Extensions',
      description:
        'Let us remove your acrylic nails without wrecking your natural nails or making a mess.',
      price: `$250 / Refills $50+`,
      icon: SkinIcon,
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
      price: `$369`,
      note: '(Allow 5 1/2 hrs)',
      noteTwo: '*Depends on availability of massage therapist',
      icon: GiftIcon,
      iconForeground: 'text-indigo-700',
      iconBackground: 'bg-indigo-50',
      buttonLabel: 'Book',
      buttonLink: '/contact/',
    },
    {
      title: 'The Supreme',
      description:
        'This package includes a retexturizing facial, salt glow manicure, salt glow pedicure, Stress Buster, scalp massage, blow-dry styling, makeup application.',
      price: `$319`,
      note: '(Allow 4 1/2 hrs)',
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
      price: `$275`,
      note: '(Allow 4 hrs)',
      noteTwo: '*Depends on availability of massage therapist',
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
      price: `$239`,
      note: '(Allow 3 1/2 hrs)',
      noteTwo: '*Depends on availability of massage therapist',
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
      price: `$199`,
      note: '(Allow 3 hrs)',
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
      price: `$169`,
      note: '(Allow 2 hrs)',
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
          {/* Salon Services - Start */}
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
              <p className="text-base italic text-gray-500 lg:max-w-2xl mb-10 mx-auto">
                * Our prices are based on the designers' educational experience.
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
            noteTwo={menuSalon.noteTwo}
            href={menuSalon.href}
            icon={menuSalon.icon}
            iconForeground={menuSalon.iconForeground}
            iconBackground={menuSalon.iconBackground}
            buttonLabel={menuSalon.buttonLabel}
            buttonLink={menuSalon.buttonLink}
          />
          {/* Salon Services - End */}

          {/* Hair Color Services - Start */}
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
              <p className="text-base italic text-gray-500 lg:max-w-2xl mb-10 mx-auto">
                * Our prices vary depending on individual needs.
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
          {/* Hair Color Services - End */}

          {/* Hair Texturing Services - Start */}
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
          {/* Hair Texturing Services - End */}

          {/* Bridal Services - Start */}
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
            note={menuBridal.noteTwo}
            href={menuBridal.href}
            icon={menuBridal.icon}
            iconForeground={menuBridal.iconForeground}
            iconBackground={menuBridal.iconBackground}
            buttonLabel={menuBridal.buttonLabel}
            buttonLink={menuBridal.buttonLink}
          />
          {/* Bridal Services - End */}

          {/* Nail Services - Start */}
          <div className="pt-28 pb-16">
            <div className="text-center">
              <h2 className="font-medium text-3xl mb-5">Nail Services</h2>
              <p className="text-base italic text-gray-500 lg:max-w-2xl mb-10 mx-auto">
                We offer a full array of nail services, including manicures and
                pedicures for any special occasion, or just to keep your nails
                looking their best. Whatever your style — simple and
                sophisticated, trendy or bohemian — our nail technicians can
                make it happen. With so many options at your fingertips, there’s
                no doubt you’ll find something that fits your fancy.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-2 lg:grid-cols-4 lg:gap-4">
              <div className="max-w-xs rounded-lg shadow-lg overflow-hidden">
                <GatsbyImage
                  image={imgNailOne}
                  imgClassName="object-cover object-center"
                  alt="Hair"
                />
              </div>
              <div className="max-w-xs rounded-lg shadow-lg overflow-hidden">
                <GatsbyImage
                  image={imgNailTwo}
                  imgClassName="object-cover object-center"
                  alt="Hair"
                />
              </div>
              <div className="max-w-xs rounded-lg shadow-lg overflow-hidden">
                <GatsbyImage
                  image={imgNailThree}
                  imgClassName="object-cover object-center"
                  alt="Hair"
                />
              </div>
              <div className="max-w-xs rounded-lg shadow-lg overflow-hidden">
                <GatsbyImage
                  image={imgNailFour}
                  imgClassName="object-cover object-center"
                  alt="Hair"
                />
              </div>
            </div>
          </div>
          <MenuGrid
            actions={menuNail}
            classNames={classNames}
            title={menuNail.title}
            price={menuNail.price}
            description={menuNail.description}
            note={menuNail.note}
            note={menuNail.noteTwo}
            href={menuNail.href}
            icon={menuNail.icon}
            iconForeground={menuNail.iconForeground}
            iconBackground={menuNail.iconBackground}
            buttonLabel={menuNail.buttonLabel}
            buttonLink={menuNail.buttonLink}
          />
          {/* Nail Services - Start */}

          {/* Skin Care Services - Start */}
          <div className="pt-28 pb-16">
            <div className="text-center">
              <h2 className="font-medium text-3xl mb-5">Skin Care Services</h2>
              <p className="text-base italic text-gray-500 lg:max-w-2xl mb-10 mx-auto">
                We offer a full array of nail services, including manicures and
                pedicures for any special occasion, or just to keep your nails
                looking their best. Whatever your style — simple and
                sophisticated, trendy or bohemian — our nail technicians can
                make it happen. With so many options at your fingertips, there’s
                no doubt you’ll find something that fits your fancy.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-2 lg:grid-cols-4 lg:gap-4">
              <div className="max-w-xs rounded-lg shadow-lg overflow-hidden">
                <GatsbyImage
                  image={imgSkinOne}
                  imgClassName="object-cover object-center"
                  alt="Hair"
                />
              </div>
              <div className="max-w-xs rounded-lg shadow-lg overflow-hidden">
                <GatsbyImage
                  image={imgSkinTwo}
                  imgClassName="object-cover object-center"
                  alt="Hair"
                />
              </div>
              <div className="max-w-xs rounded-lg shadow-lg overflow-hidden">
                <GatsbyImage
                  image={imgSkinThree}
                  imgClassName="object-cover object-center"
                  alt="Hair"
                />
              </div>
              <div className="max-w-xs rounded-lg shadow-lg overflow-hidden">
                <GatsbyImage
                  image={imgSkinFour}
                  imgClassName="object-cover object-center"
                  alt="Hair"
                />
              </div>
            </div>
          </div>
          <MenuGrid
            actions={menuSkin}
            classNames={classNames}
            title={menuSkin.title}
            price={menuSkin.price}
            description={menuSkin.description}
            note={menuSkin.note}
            note={menuSkin.noteTwo}
            href={menuSkin.href}
            icon={menuSkin.icon}
            iconForeground={menuSkin.iconForeground}
            iconBackground={menuSkin.iconBackground}
            buttonLabel={menuSkin.buttonLabel}
            buttonLink={menuSkin.buttonLink}
          />
          {/* Skin Care Services - End */}

          {/* Day of Beauty Packages - Start */}
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
          <div className="lg:max-w-3xl mx-auto my-10 p-5 bg-gray-100 border rounded-lg shadow-lg">
            <p className="text-sm italic text-gray-500 lg:max-w-2xl mb-2 mx-auto">
              <span className="text-red-500">*</span> Bridal hair design not
              included in Day of Beauty Packages.
            </p>
            <p className="text-sm italic text-gray-500 lg:max-w-2xl mb-2 mx-auto">
              <span className="text-red-500">*</span> Credit card deposit
              required on multi-service appointments and Day of Beauty Packages.
            </p>
            <p className="text-sm italic text-gray-500 lg:max-w-2xl mb-2 mx-auto">
              <span className="text-red-500">*</span> Day of Beauty Packages
              require advance scheduling and 24 hour cancellation or 50% of the
              service will be assessed.
            </p>
            <p className="text-sm italic text-gray-500 lg:max-w-2xl mb-2 mx-auto">
              <span className="text-red-500">*</span> Day of Beauty Packages
              cannot be broken up. Will turn over the dollar amount.
            </p>
            <p className="text-sm italic text-gray-500 lg:max-w-2xl mb-2 mx-auto">
              <span className="text-red-500">*</span> Prices subject to change
              without notice. Not responsible for typographical errors.
            </p>
          </div>
          {/* Day of Beauty Packages - End */}
        </div>
      </div>
    </Layout>
  );
};

export default ServicesPage;
