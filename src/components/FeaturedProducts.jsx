import React from 'react'

import ProductsGrid from './ProductsGrid';
import SectionTitle from './SectionTitle';
import { useLoaderData } from 'react-router-dom';

const FeaturedProducts = () => {
  const { drugs } = useLoaderData();
  const wasfatyItems = drugs.filter((drug) => drug.wasfaty === true);

  return (
    <div className='pt-24'>
      <SectionTitle text='featured products' />
      <ProductsGrid Items={wasfatyItems}/>
    </div>
  );
};
export default FeaturedProducts;