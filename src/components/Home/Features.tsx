import React from 'react';
import { FlexBox } from '../Common';
import { SectionP1 } from '../Common';
import FeaturesItem from './FeaturesItem';
import { features } from '../../assets/db/features';

const Features = () => {
  return (
    <SectionP1>
      <FlexBox
        as='ul'
        gap={2}
        flexWrap='wrap'
        justifyContent={{ xs: 'center', md: 'space-between' }}
      >
        {features.map((feature) => (
          <FeaturesItem
            img={feature.image}
            title={feature.title}
            key={feature.image}
          />
        ))}
      </FlexBox>
    </SectionP1>
  );
};

export default Features;
