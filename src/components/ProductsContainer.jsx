import React, { Fragment, useState } from 'react'
import ProductsGrid from './ProductsGrid'
import ProductsList from './ProductsList'
import { BsFillGridFill, BsList } from "react-icons/bs";

import { useLoaderData } from 'react-router-dom';

const ProductsContainer = () => {
  const { drugs } = useLoaderData();
  const wasfatyItems = drugs.filter((drug) => drug.wasfaty === true);

  const totalProducts = wasfatyItems.length
  console.log(totalProducts)
  const [layout, setLayout] = useState("grid");

  const setActiveStyles = (pattern) => {
    return `text-xl btn btn-circle btn-sm ${
     pattern === layout
       ? 'btn-primary text-primary-content'
       : 'btn-ghost text-based-content'
   }`;
 };

  return (
   <Fragment>
      {/* HEADER */}
      <div className="flex justify-between items-center mt-8 border-b border-base-300 pb-5">
        <h4 className="font-medium text-md">
          {totalProducts} product{totalProducts > 1 && "s"}
        </h4>
        <div className='flex gap-x-2'>
         <button
            type='button'
            onClick={() => setLayout('grid')}
            className={setActiveStyles('grid')}
          >
            <BsFillGridFill />
          </button>
          <button
            type='button'
            onClick={() => setLayout('list')}
            className={setActiveStyles('list')}
          >
            <BsList />
          </button>
        </div>
      </div>
       {/* PRODUCTS */}
        <div>
        {totalProducts === 0 ? (
          <h5 className='text-2xl mt-16'>
            Sorry, no products matched your search...
          </h5>
        ) : layout === 'grid' ? (
          <ProductsGrid Items={wasfatyItems}/> 
          // "Grid"
        ) : (
          <ProductsList Items={wasfatyItems}/>
          // "List"
        )}
        </div>
    </Fragment>
  )
}

export default ProductsContainer