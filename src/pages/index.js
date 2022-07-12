import * as React from 'react';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import About from '../components/About';
import FeaturedWork from '../components/FeaturedWork';

const IndexPage = () => {
  return (
    <Layout>
      <Hero />
      <About />
      <FeaturedWork />
    </Layout>
  );
}

export default IndexPage;