import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/common/Seo';
import HeroHome from '../components/views/home/HeroHome';
import TrustProductsHome from '../components/views/home/TrustProductsHome';
import CompanyHome from '../components/views/home/CompanyHome';
import NavHome from '../components/views/home/NavHome';
import ReviewSalonHome from '../components/views/home/ReviewSalonHome';
import ReviewHairHome from '../components/views/home/ReviewHairHome';
import ReviewSpaHome from '../components/views/home/ReviewSpaHome';
import ReviewEyelashesHome from '../components/views/home/ReviewEyelashesHome';
import ReviewBridalHome from '../components/views/home/ReviewBridalHome';
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
    {/* <ReviewSalonHome /> */}
    <NavHome />
    <CtaHome />
    <ServicesHairHome />
    <ReviewHairHome />
    <ServicesSpaHome />
    <ReviewSpaHome />
    <ServicesEyelashesHome />
    <ReviewEyelashesHome />
    <TrustProductsHome />
    <ReviewBridalHome />
  </Layout>
);

export default IndexPage;
