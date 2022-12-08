import React from 'react';
import { Box, Image, RatingStars, IconButton } from '../Common';
import {
  ProductBrand,
  ProductCard,
  ProductName,
  ProductPrice,
} from './UI/Product.styled';
import { AiOutlineShoppingCart } from 'react-icons/ai';

interface IProductItem {
  image: string;
  brand: string;
  name: string;
  price: number;
  rating: number;
}

const ProductItem = ({ image, brand, name, price, rating }: IProductItem) => {
  return (
    <ProductCard as='li'>
      <Image src={image} alt={name} borderRadius='normal' />
      <Box pb={2} display='grid' gridGap={1} position='relative'>
        <ProductBrand>{brand}</ProductBrand>
        <ProductName>{name}</ProductName>
        <RatingStars rating={rating} />
        <ProductPrice>${price}</ProductPrice>
        <Box position='absolute' bottom={0} right={1}>
          <IconButton icon={AiOutlineShoppingCart} size={18} />
        </Box>
      </Box>
    </ProductCard>
  );
};

export default ProductItem;
