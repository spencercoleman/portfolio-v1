import * as React from 'react';
import "@fontsource/sintony";
import "@fontsource/source-sans-pro/900.css";
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import FeaturedWork from '../components/FeaturedWork';

const IndexPage = () => {
  return (
    <Layout>
      <Hero />
      <FeaturedWork />
    </Layout>
  );
}

export default IndexPage;