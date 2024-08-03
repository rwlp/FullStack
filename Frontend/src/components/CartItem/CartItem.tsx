import React, { useContext } from 'react';
import StyledCartItem from './StyledCartItem.ts';
import DeleteIcon from '../../assets/icons/Close.svg';
import { BASE_URL_CDN } from '../../common/constants.ts';
import IconDesc from '../../assets/icons/Minus.svg';
import IconAsc from '../../assets/icons/Plus.svg';
import { ThemeContext } from 'styled-components';



interface CartItemProps {
  itemName?: string;
  itemQtd?: number;
  itemValue?: number;
  img?: string;
}

function CartItem({itemName = "Apple iPhone 14 Pro 128GB Silver (MQ023)", itemQtd = 3, itemValue = 2311.21, img = 'img/tablets/apple-ipad-mini-5th-gen/gold/00.webp'}: CartItemProps): React.ReactNode {
  const colorActive = useContext(ThemeContext)!.white;
  const colorDisable =  useContext(ThemeContext)!.gray;

  return (
    <StyledCartItem className='cart-item' >
      <div className='cart-item__mobile-container--1' >
        <button className='cart-item__delete-Button'>
          <DeleteIcon fill={colorDisable}/>
        </button>

        <a href='#' className='cart-item__image-link'>
          <img className='cart-item__image' src={`${BASE_URL_CDN}/${img}`} />
        </a>

        <span className='cart-item__name'>{itemName}</span>
      </div>
      
      <div className='cart-item__mobile-container--2' >
        <div className='cart-item__qtd-buttons qtd-buttons'>
          <button className='qtd-buttons__change-qtd'>
            <IconDesc fill={colorActive} />
          </button>

          <span className='qtd-buttons__indicator'>{itemQtd}</span>

          <button className='qtd-buttons__change-qtd'>
            <IconAsc fill={colorActive}/>
          </button>
        </div>

        <h3 className='cart-item__item-value'>${itemValue}</h3>
      </div>
      
    </StyledCartItem>
  );
}

export default CartItem;
