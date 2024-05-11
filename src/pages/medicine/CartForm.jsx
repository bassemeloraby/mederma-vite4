import { CartItemsList, SectionTitle } from '../../components';
import { Fragment } from 'react';

const CartForm = () => {
  return (
    <Fragment>
      <SectionTitle text='Shopping Cart' />
      <div className='mt-8 grid gap-8 lg:grid-cols-12'>
        <div className='lg:col-span-8'>
          <CartItemsList />
        </div>
        <div className='lg:col-span-4 lg:pl-4'>
         
        </div>
      </div>
    </Fragment>
  )
}

export default CartForm