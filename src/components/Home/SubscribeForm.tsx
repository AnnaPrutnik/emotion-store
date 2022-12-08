import React from 'react';

import { FlexBox, Box, CommonButton } from '../Common';
import { Input, Text, Title } from './UI/SubscribeForm.styled';
import bgImage from '../../assets/images/banner/b14.png';

const SubscribeForm = () => {
  return (
    <Box
      as='section'
      py={5}
      px={{ xs: 2, sm: 4, md: 6 }}
      mt={5}
      backgroundImage={`url(${bgImage})`}
      backgroundPosition='20% 30%'
      backgroundRepeat='no-repeat'
      backgroundColor='#041e42'
      display='flex'
      justifyContent='space-between'
      alignItems='center'
      flexWrap='wrap'
    >
      <Box>
        <Title>sign up for newsletters</Title>
        <Text>
          get e-mail updates about latest shop and <span>special offers</span>
        </Text>
      </Box>
      <FlexBox gap={1} as='form' width={{ xs: '100%', sm: '70%', md: '40%' }}>
        <Input type='text' placeholder='Your email address' />
        <CommonButton isLight={false}>Sign up</CommonButton>
      </FlexBox>
    </Box>
  );
};

export default SubscribeForm;
