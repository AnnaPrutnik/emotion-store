import React from 'react';
import { SectionP1, Box, FlexBox } from '../Common';
import { ProductTitle, ProductText } from './UI/Product.styled';
import ProductItem from './ProductItem';
import { IProduct } from '../../types/IProduct';

interface ProductsProps {
  title: string;
  text: string;
  products: IProduct[];
}

const Products = ({ title, text, products }: ProductsProps) => {
  return (
    <SectionP1>
      <Box textAlign='center'>
        <ProductTitle>{title}</ProductTitle>
        <ProductText>{text}</ProductText>
      </Box>

      <FlexBox
        as='ul'
        gap={2}
        flexWrap='wrap'
        justifyContent={{ xs: 'center', md: 'space-between' }}
      >
        {products.map(({ id, brand, image, name, price, rating }) => (
          <ProductItem
            key={id}
            image={image}
            name={name}
            price={price}
            rating={rating}
            brand={brand}
          />
        ))}
      </FlexBox>
    </SectionP1>
  );
};

export default Products;
