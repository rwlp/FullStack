import React from 'react';
import StyledFavorites from './StyledFavorites.ts';
import ProductCard from '../../components/ProductCard/ProductCard.tsx';

function Favorites(): React.ReactNode {
  
  return (
    <StyledFavorites className='favorites-section'>
      <h1 className='favorites__title'>Favorites</h1>
      <div className='favorites__container'>
        {new Array(20).fill(undefined).map((product, index) => {
          return  (<ProductCard key={index} product={product} />);
        })}
      </div>
    </StyledFavorites>
  );
}

export default Favorites;
