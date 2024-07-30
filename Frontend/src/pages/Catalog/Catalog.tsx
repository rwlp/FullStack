import React from 'react';
import StyledCatalog from './StyledCatalog.ts';
import SelectorBox from '../../components/SelectorBox/SelectorBox.tsx';
import { Product } from '../../types/types.ts';
import ProductCard from '../../components/ProductCard/ProductCard.tsx';
import Paginator from '../../components/Paginator/Paginator.tsx';

function Catalog(): React.ReactNode {
  const products: Product[] | undefined[] = new Array(30).fill(undefined)

  return (
    <StyledCatalog className='catalog'>
      <h1 className='catalog__title'>Mobile phones</h1>

      <div className='catalog__filters'>
        <SelectorBox type="sort-by" />
        <SelectorBox type="items-qtd" />
      </div>

      <div className='catalog__container'>
        {products.map((product, idx) => {
          return idx < 5 ? (<ProductCard product={product} />) : ''
        })}
      </div>
      
      <Paginator />

    </StyledCatalog>
  );
}

export default Catalog;
