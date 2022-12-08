import React from 'react';
import { SectionP1, BannerBase, FlexBox } from '../Common';
import {
  BannerButton,
  BannerSubTitle,
  BannerText,
  BannerTitle,
} from './UI/BannerAdvert.styled';
import { advertBanners } from '../../assets/db/bannersInfo';

export interface AdvertBannerProps {
  title: string;
  subtitle: string;
  text: string;
  image: string;
  btnTitle: string;
}

const SmallBanner = ({
  title,
  subtitle,
  text,
  image,
  btnTitle,
}: AdvertBannerProps) => {
  return (
    <BannerBase
      gap={2}
      image={image}
      padding={4}
      height={{ s: '30vh', md: '100%' }}
    >
      <BannerSubTitle>{subtitle}</BannerSubTitle>
      <BannerTitle>{title}</BannerTitle>
      <BannerText>{text}</BannerText>
      <BannerButton>{btnTitle}</BannerButton>
    </BannerBase>
  );
};

const BannerAdvert = () => {
  return (
    <SectionP1>
      <FlexBox
        gap={3}
        height={{ md: '50vh' }}
        flexDirection={{ s: 'column', md: 'row' }}
      >
        {advertBanners.map((banner) => (
          <SmallBanner {...banner} key={banner.title} />
        ))}
      </FlexBox>
    </SectionP1>
  );
};

export default BannerAdvert;
