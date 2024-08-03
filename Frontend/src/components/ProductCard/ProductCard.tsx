import React from 'react';
import StyledProductCard from './StyledProductCard.ts';
import { BASE_URL_CDN } from '../../common/constants.ts';
import Button from '../Button/Button.tsx';
import ButtonFavorite from '../ButtonFavorite/ButtonFavorite.tsx';
import { Product } from '../../types/types.ts';


interface ProductCardProps {
  product?: Product;
}

function ProductCard({product}: ProductCardProps): React.ReactNode {

  const info = !product ? {} : {
    "Screen": product.screen,
    "RAM": product.ram,
    "Capacity": product.capacity,
  };


  return (
    <StyledProductCard className='product'>
      <a href="#" className={`product__link ${!product ? 'skeleton' : ''}`}>
        <img
          className={`product__img ${!product ? '--hidden' : ''}`}
          src={`${BASE_URL_CDN}/${product?.image}`}
          alt={product?.name}
        />
      </a>

      <span className={`product__name ${!product ? 'skeleton' : ''}`}>
        {product?.name}
      </span>

      <div className={`product__price-container ${!product ? 'skeleton' : ''}`}>
        <h3 className={`product__full-price ${!product ? '--hidden' : ''}`}>
          ${product?.priceDiscount}
        </h3>
        <span className={`product__discount-price ${!product ? '--hidden' : ''}`}>
          ${product?.priceRegular}
        </span>
      </div>

      <span className='product__separator-line' />

      <div className={`product__info-container info-container ${!product ? 'skeleton' : ''}`}>
        {Object.entries(info).map(([title, description], index) => (
          <div key={index} className={`info ${!product ? '--hidden' : ''}`}>
            <span className={`info__title ${!product ? '--hidden' : ''}`}>{title}</span>
            <span className={`info__description ${!product ? '--hidden' : ''}`}>{description}</span>
          </div>
        ))}
      </div>

      <div className={`product__buttons-container ${!product ? 'skeleton' : ''}`}>
        <div className={`buttons-wrapper ${!product ? '--hidden' : ''}`}>
          <Button text='Add to Cart' isSelected={false} />
          <ButtonFavorite />
        </div>

      </div>
    </StyledProductCard>
  );
}

export default ProductCard;
