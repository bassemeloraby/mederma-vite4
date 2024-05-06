import React from 'react'

import ProductsGrid from './ProductsGrid';
import SectionTitle from './SectionTitle';
import { useLoaderData } from 'react-router-dom';

const FeaturedProducts = () => {
  const { wasfaty } = useLoaderData();

  return (
    <div className='pt-24'>
      <SectionTitle text='featured products' />
      <ProductsGrid contents={wasfaty}/>
    </div>
  );
};
export default FeaturedProducts;