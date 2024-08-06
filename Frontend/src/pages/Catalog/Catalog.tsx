import React, { useEffect, useState } from 'react';
import StyledCatalog from './StyledCatalog.ts';
import SelectorBox from '../../components/SelectorBox/SelectorBox.tsx';
import { Product } from '../../types/types.ts';
import ProductCard from '../../components/ProductCard/ProductCard.tsx';
import Paginator from '../../components/Paginator/Paginator.tsx';
import { useLocation, useParams } from 'react-router-dom';
import { getProductsByCategoryService } from '../../services/product/catalogServices.ts';
import { Category } from '../../common/types.ts';

function Catalog(): React.ReactNode {
  const { category }  = useParams();
  const location = useLocation();
  const searchParams =  new URLSearchParams(location.search);
  const [products, setProducts] = useState<Product[]>(() => {
    return new Array(parseInt(searchParams.get('itemsPerpage') ?? '4')).fill(undefined);
  });
  
  useEffect(() => {
    const search = new URLSearchParams(location.search);
    setProducts(new Array(parseInt(search.get('itemsPerPage')!)).fill(undefined));
    setTimeout(() => getProductsByCategoryService(category as Category, searchParams)
      .then(data => {
        setProducts(data.data as Product[]);
      }), 200);
  }, [location])

  return (
    <StyledCatalog className='catalog'>
      <h1 className='catalog__title'>Mobile phones</h1>

      <div className='catalog__filters'>
        <SelectorBox type="sort-by" />
        <SelectorBox type="items-qtd" />
      </div>

      <div className='catalog__container'>
        {products.map((product, index) => {
          return  (<ProductCard key={index} product={product} />);
        })}
      </div>
      
      <Paginator />

    </StyledCatalog>
  );
}

export default Catalog;
