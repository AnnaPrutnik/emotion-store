import React from 'react';
import { Box, OrangeButton } from '../Common';
import BgImage from '../../assets/images/hero4.png';
import {
  HeroTitle,
  HeroSubtitle,
  HeroHeading,
  HeroText,
} from './UI/Hero.styled';

const Hero = () => {
  return (
    <Box
      as='section'
      width='100%'
      height={{ xs: '60vh', md: 'calc(100vh - 80px)' }}
      backgroundImage={`url(${BgImage})`}
      backgroundRepeat='no-repeat'
      backgroundPosition={{ xs: 'top 30% right 50%', md: 'top 25% right 0' }}
      backgroundSize='cover'
      px={{ xs: 4, md: 6 }}
      display='flex'
      flexDirection='column'
      justifyContent='center'
    >
      <HeroHeading>Trade-in-offer</HeroHeading>
      <HeroSubtitle>Super value deals</HeroSubtitle>
      <HeroTitle>On all products</HeroTitle>
      <HeroText>Save more with coupons & up to 70% off!</HeroText>
      <OrangeButton>Show now</OrangeButton>
    </Box>
  );
};

export default Hero;
