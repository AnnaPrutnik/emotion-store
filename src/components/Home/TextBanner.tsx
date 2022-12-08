import React from 'react';
import { SectionP2, FlexBox, BannerBase } from '../Common';
import { BannerSubtitle, BannerTitle } from './UI/TextBanner.styled';
import { textBanners } from '../../assets/db/bannersInfo';

export interface TextBannerProps {
  image: string;
  title: string;
  subtitle: string;
}

const Banner = ({ image, title, subtitle }: TextBannerProps) => {
  return (
    <BannerBase
      gap={2}
      image={image}
      padding={4}
      height={{ xs: '30vh', md: '100%' }}
    >
      <BannerTitle>{title}</BannerTitle>
      <BannerSubtitle>{subtitle}</BannerSubtitle>
    </BannerBase>
  );
};

const TextBanner = () => {
  return (
    <SectionP2>
      <FlexBox
        gap={2}
        height={{ md: '30vh' }}
        minWidth={{ xs: '25%', md: '30%' }}
        flexDirection={{ xs: 'column', md: 'row' }}
      >
        <Banner {...textBanners[0]} />
        <Banner {...textBanners[1]} />
        <Banner {...textBanners[2]} />
      </FlexBox>
    </SectionP2>
  );
};

export default TextBanner;
