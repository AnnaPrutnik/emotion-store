import React from 'react';
import { Image } from '../Common';
import { Card, Title } from './UI/FeatureItem.styled';

interface IFeaturesItemProps {
  img: string;
  title: string;
}

const FeaturesItem = ({ img, title }: IFeaturesItemProps) => {
  return (
    <Card as='li'>
      <Image src={img} alt={title} mb={2} />
      <Title>{title}</Title>
    </Card>
  );
};

export default FeaturesItem;
