import styled from 'styled-components';
import { letterStyleBodyTextDesktoAndTable, letterStyleH3DesktoAndTable, letterStyleSmallTextDesktoAndTable } from '../../styles/typography/typography';

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
  }

  .product__img {
    height: 196px;
  }

  .product__name {
    width: 100%;
    height: 58px;
    ${letterStyleBodyTextDesktoAndTable};
    color: ${({theme}) => theme.gray}
  }

  .product__price-container {
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
      bottom: 50%;
      background-color: ${({theme}) => theme.secondary};
      mix-blend-mode: difference;
    }
  }

  .product__separator-line {
    border: 1px solid ${({theme}) => theme.elements};
  }

  .info-container {
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

  .product__butonns-container {
    display: flex;
    gap: 0 8px;
  }
`;

export default StyledProductCard;
