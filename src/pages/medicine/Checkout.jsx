import React from 'react'

const url = "/specialArrays";


export const loader = async () => {
  const response = await customFetch(url);
  const lists = response.data;
  console.log(lists)
  return { lists };
};

const Checkout = () => {
  return (
    <div>Checkout</div>
  )
}

export default Checkout