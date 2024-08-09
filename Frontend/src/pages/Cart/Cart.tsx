import React from 'react';
import StyledCart from './StyledCart.ts';
import Button from '../../components/Button/Button.tsx';
import CartItem from '../../components/CartItem/CartItem.tsx';

function Cart(): React.ReactNode {
  

  return (
    <StyledCart className='cart'>
      <h1 className='cart__title'>Cart</h1>
      <div className='cart__container'>
        <div className='cart__items-container'>
         <CartItem />
         <CartItem />
         <CartItem />
         <CartItem />
         <CartItem />
        </div>
        <div className='cart__price-info'>
          <h2 className='cart__total-price'>$3.238,00</h2>
          <span className='cart__text-qtd'>Total for 3 items</span>
          <Button text='Checkout' isSelected={false} />
        </div>

      </div>
    </StyledCart>
  );
}

export default Cart;
