import React from 'react';
import StyledItem from './StyledItem.ts';
import { Product } from '../../types/types.ts';


interface ItemProps {
  product: Product;
}

function Item({product}: ItemProps): React.ReactNode {
  
  return (
    <StyledItem className='item'>
      <h1 className='item__name'>{product.name}</h1>
    </StyledItem>
  );
}

export default Item;
