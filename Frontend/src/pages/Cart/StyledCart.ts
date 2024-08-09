import styled from 'styled-components';
import { letterStyleBodyTextDesktoAndTable, letterStyleH1DesktoAndTable, letterStyleH2DesktoAndTable } from '../../styles/typography/typography';

const StyledCart = styled.section`
  width: 100%;
  max-width: 1136px;
  display: flex;
  flex-direction: column;
  gap: 80px 0;
  color: ${({ theme }) => theme.gray};


  .cart__title {
    width: 100%;
    ${letterStyleH1DesktoAndTable};
    margin-bottom: 0;
    color: ${({ theme }) => theme.gray};
  }
  .cart__container {
    display: flex;
    gap: 16px;

    @media (max-width: 1200px) {
      flex-direction: column;
    }
  }

  .cart__items-container {
    width: 100%;
    height: 60vh;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    gap: 16px 0;

    scrollbar-width: thin;
    scrollbar-color: ${({theme}) => theme.gray} transparent;
  }

  .cart__price-info {
    width: 368px;
    height: fit-content;
    padding: 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    box-sizing: border-box;
    border: 1px solid ${({theme}) => theme.elements};

    @media (max-width: 1200px) {
      width: 100%;
    }
  }

  .cart__total-price {
    ${letterStyleH2DesktoAndTable};
    padding: 0;
    margin: 0;
  }

  .cart__text-qtd {
    width: 100%;
    ${letterStyleBodyTextDesktoAndTable};
    text-align: center;
    padding-bottom: 10px;
    border-bottom: 1px solid ${({theme}) => theme.secondary };
    color: ${({theme}) => theme.secondary };

  }
`;

export default StyledCart;
