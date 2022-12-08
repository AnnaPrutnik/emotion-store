import React from 'react';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPinterestP,
  FaYoutube,
} from 'react-icons/fa';

import { Box, Image, FlexBox } from '../';
import {
  IconLink,
  ListItem,
  ListNavLink,
  Text,
  Title,
  FooterItem,
} from './Footer.styled';
import logo from '../../../assets/images/logo.png';
import appStore from '../../../assets/images/pay/app.jpg';
import googlePlay from '../../../assets/images/pay/play.jpg';
import payWays from '../../../assets/images/pay/pay.png';

export const Footer = () => {
  return (
    <Box as='footer' py={{ xs: 3, sm: 5 }} px={{ xs: 2, sm: 4, md: 6 }}>
      <FlexBox
        as='ul'
        justifyContent={{ xs: 'space-around', sm: 'space-between' }}
        alignItems='flex-start'
        flexWrap='wrap'
        gap={1}
      >
        <FooterItem>
          <Box width='120px' mb={4}>
            <Image src={logo} alt='logo' />
          </Box>
          <Title>Contact</Title>
          <Box as='ul' mb={3}>
            <Text as='li'>
              <span>address:</span> 562 wellington road, street 32, San
              Francisco
            </Text>
            <Text as='li'>
              <span>phone:</span> +01 2222 365 / (+91) 01 2345 6789
            </Text>
            <Text as='li'>
              <span>hours:</span> 10:00 - 18:00 Mon - Sat
            </Text>
          </Box>
          <Title>Follow us</Title>
          <Box as='ul' display='flex'>
            <Box as='li' p={1}>
              <IconLink
                href='https://www.facebook.com/'
                target='_blank'
                rel='noreferrer noopener'
              >
                <FaFacebookF size={16} />
              </IconLink>
            </Box>
            <Box as='li' p={1}>
              <IconLink
                href='https://www.facebook.com/'
                target='_blank'
                rel='noreferrer noopener'
              >
                <FaTwitter size={16} />
              </IconLink>
            </Box>
            <Box as='li' p={1}>
              <IconLink
                href='https://www.facebook.com/'
                target='_blank'
                rel='noreferrer noopener'
              >
                <FaInstagram size={16} />
              </IconLink>
            </Box>
            <Box as='li' p={1}>
              <IconLink
                href='https://www.facebook.com/'
                target='_blank'
                rel='noreferrer noopener'
              >
                <FaPinterestP size={16} />
              </IconLink>
            </Box>
            <Box as='li' p={1}>
              <IconLink
                href='https://www.facebook.com/'
                target='_blank'
                rel='noreferrer noopener'
              >
                <FaYoutube size={16} />
              </IconLink>
            </Box>
          </Box>
        </FooterItem>
        <FooterItem>
          <Title>about</Title>
          <Box as='ul'>
            <ListItem>
              <ListNavLink to='#'>about us</ListNavLink>
            </ListItem>
            <ListItem>
              <ListNavLink to='#'>delivery information</ListNavLink>
            </ListItem>
            <ListItem>
              <ListNavLink to='#'>privacy policy </ListNavLink>
            </ListItem>
            <ListItem>
              <ListNavLink to='#'>contact us</ListNavLink>
            </ListItem>
          </Box>
        </FooterItem>

        <FooterItem>
          <Title>my account</Title>
          <Box as='ul'>
            <ListItem>
              <ListNavLink to='#'>sign in</ListNavLink>
            </ListItem>
            <ListItem>
              <ListNavLink to='#'>view cart</ListNavLink>
            </ListItem>
            <ListItem>
              <ListNavLink to='#'>my wishlist</ListNavLink>
            </ListItem>
            <ListItem>
              <ListNavLink to='#'>track my order</ListNavLink>
            </ListItem>
            <ListItem>
              <ListNavLink to='#'>help</ListNavLink>
            </ListItem>
          </Box>
        </FooterItem>
        <FooterItem>
          <Title>install app</Title>
          <Text>from app store or google play</Text>
          <FlexBox gap={2} my={2}>
            <IconLink>
              <Image
                src={appStore}
                alt='AppStore'
                border='normal'
                borderColor='primary'
                borderRadius='small'
              />
            </IconLink>
            <IconLink>
              <Image
                src={googlePlay}
                alt='GooglePlay'
                border='normal'
                borderColor='primary'
                borderRadius='small'
              />
            </IconLink>
          </FlexBox>
          <Text>Secured payment gateways</Text>

          <Image
            src={payWays}
            alt='passible payment: Visa, MasterCard, Maestro'
            my={2}
          />
        </FooterItem>
      </FlexBox>
    </Box>
  );
};
