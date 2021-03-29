import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Image from '../components/common/Image';
import SEO from '../components/common/Seo';
import HeroHome from '../components/views/home/HeroHome';
import TrustProductsHome from '../components/views/home/TrustProductsHome';
import CompanyHome from '../components/views/home/CompanyHome';
import NavHome from '../components/views/home/NavHome';
import ReviewHairHome from '../components/views/home/ReviewHairHome';
import TrustAwardsHome from '../components/views/home/TrustAwardsHome';
import ServicesHairHome from '../components/views/home/ServicesHairHome';
import ServicesSpaHome from '../components/views/home/ServicesSpaHome';
import ServicesEyelashesHome from '../components/views/home/ServicesEyelashesHome';
import CtaHome from '../components/views/home/CtaHome';

const IndexPage = () => (
  <Layout>
    <SEO
      title="Full-Service Beauty Salon & Day Spa in Plymouth, MA | Aristocracy Salon & Day Spa"
      description="Full-Service Beauty Salon & Day Spa in Plymouth, MA | Aristocracy Salon & Day Spa"
    />
    <HeroHome />
    <TrustAwardsHome />
    <CompanyHome />
    <NavHome />
    <CtaHome />
    <ServicesHairHome />
    <ReviewHairHome />
    <ServicesSpaHome />
    <ReviewHairHome />
    <ServicesEyelashesHome />
    <ReviewHairHome />
    <TrustProductsHome />
  </Layout>
);

export default IndexPage;
