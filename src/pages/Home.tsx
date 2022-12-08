import React from 'react';
import {
  Hero,
  Features,
  Products,
  MainBanner,
  BannerAdvert,
  TextBanner,
  SubscribeForm,
} from '../components/Home/';

import { products } from '../assets/db/products';
import { newProducts } from '../assets/db/new-products';
import { productsSectionInfo } from '../assets/db/products-section';

const Home = () => {
  return (
    <>
      <Hero />
      <Features />
      <Products products={products} {...productsSectionInfo[0]} />
      <MainBanner />
      <Products products={newProducts} {...productsSectionInfo[1]} />
      <BannerAdvert />
      <TextBanner />
      <SubscribeForm />
    </>
  );
};

export default Home;
