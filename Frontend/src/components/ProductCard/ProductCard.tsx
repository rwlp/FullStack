import React from 'react';
import StyledProductCard from './StyledProductCard.ts';
import { BASE_URL_CDN } from '../../utils/constants.ts';
import Button from '../Button/Button.tsx';
import ButtonFavorite from '../ButtonFavorite/ButtonFavorite.tsx';


interface ProductCardProps {
  name: string;
  img: string;
  fullPrice: number;
  discountPrice?: number;
  info: {[key: string]: string};

}

function ProductCard({img, name, fullPrice, discountPrice, info}: ProductCardProps): React.ReactNode {

  return (
    <StyledProductCard className='product'>
      <a href="#" className='product__link'>
        <img className='product__img' src={`${BASE_URL_CDN}/${img}`} />
      </a>

      <span className='product__name'>{name}</span>

      <div className='product__price-container'>
        <h3 className='product__full-price'>${fullPrice}</h3>
        <span className='product__discount-price'>${discountPrice}</span>
      </div>

      <span className='product__separator-line' />

      <div className='product__info-container info-container'>
        {Object.entries(info).map(([title, description]) => {
          return (
            <div className='info'>
              <span className='info__title'>{title}</span>
              <span className='info__description'>{description}</span>
            </div>
          );
        })}
      </div>

      <div className='product__butonns-container'>
        <Button text='Add to Cart' isSelected={false}/>
        <ButtonFavorite />
      </div>
    </StyledProductCard>
  );
}

export default ProductCard;
