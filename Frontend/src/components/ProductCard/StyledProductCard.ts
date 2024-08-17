import styled from 'styled-components';
import { letterStyleBodyTextDesktoAndTable, letterStyleH3DesktoAndTable, letterStyleSmallTextDesktoAndTable } from '../../styles/typography/typography';
import { skeleton } from '../../styles/templates-css/skeleton';

const StyledProductCard = styled.div`
  width: 272px;
  height: 506px;
  padding: 32px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 8px 0;

  background-color: ${({theme}) => theme.sencondaryAccent};


  .product__link {
    padding: 0;
    margin: 0;
    min-height: 196px;
    min-width: 208px;
    text-align: center;
  }

  .product__img {
    height: 196px;

    transition: display 2s ease-in;
  }

  .product__name {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    height: 58px;
    ${letterStyleBodyTextDesktoAndTable};
    color: ${({theme}) => theme.gray};
  }

  .product__price-container {
    height: 51px;
    display: flex;
    gap: 0 8px;
  }

  .product__full-price {
    padding: 0;
    margin: 0;
    ${letterStyleH3DesktoAndTable};
    color: ${({theme}) => theme.gray}
  }

  .product__discount-price {
    padding: 0;
    margin: 0;
    font-size: 22px;
    font-weight: 600;
    line-height: 28.12px;
    text-align: left;
    color: ${({theme}) => theme.secondary};
    position: relative;
    background-color: ${({theme}) => theme.sencondaryAccent};

    &::after {
      content: '';
      position: absolute;
      width: 100%;
      height: 1px;
      left: 0;
      top: 35%;
      background-color: ${({theme}) => theme.secondary};
      mix-blend-mode: difference;
    }
  }

  .product__separator-line {
    border: 1px solid ${({theme}) => theme.elements};
  }

  .info-container {
    width: 100%;
    height: 77px;
    padding-block: 8px;
    display: flex;
    flex-direction: column;
    gap: 8px 0;
  }

  .info {
    display: flex;
    justify-content: space-between;
  }

  .info__title {
    ${letterStyleSmallTextDesktoAndTable};
    color: ${({theme}) => theme.secondary};
  }

  .info__description {
    font-size: 12px;
    font-weight: 700;
    line-height: 15.34px;
    text-align: right;
    color:  ${({theme}) => theme.gray};
  }

  .buttons-wrapper {
    display: flex;
    gap: 0 8px;
  }

  .product__buttons-container {
    height: 40px;
    width: 100%;
  }

  ${skeleton};
`;

export default StyledProductCard;
