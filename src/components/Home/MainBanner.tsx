import React from 'react';
import { CommonButton, Box, BannerBase } from '../Common';
import {
  BannerAccentText,
  BannerText,
  BannerTitle,
} from './UI/MainBanner.styled';
import BgImage from '../../assets/images/banner/b2.jpg';

const MainBanner = () => {
  return (
    <Box as='section'>
      <BannerBase
        gap={2}
        height={{ xs: '30vh', md: '40vh' }}
        image={BgImage}
        align='center'
      >
        <BannerTitle>Repair Service</BannerTitle>
        <BannerText>
          Up to <BannerAccentText>70% Off</BannerAccentText> - All t-Shirts &
          Accessories
        </BannerText>
        <CommonButton>Explore more</CommonButton>
      </BannerBase>
    </Box>
  );
};

export default MainBanner;
