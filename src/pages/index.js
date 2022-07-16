import * as React from 'react';
import "@fontsource/sintony";
import "@fontsource/source-sans-pro/900.css";
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import About from '../components/About';
import FeaturedWork from '../components/FeaturedWork';
import Contact from '../components/Contact';

const IndexPage = () => {
  return (
    <Layout>
      <Hero />
      <About />
      <FeaturedWork />
      <Contact />
    </Layout>
  );
}

export default IndexPage;