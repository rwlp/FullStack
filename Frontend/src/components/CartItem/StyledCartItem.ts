import styled from 'styled-components';
import { letterStyleBodyTextDesktoAndTable, letterStyleH3DesktoAndTable } from '../../styles/typography/typography';

const StyledCartItem = styled.div`
  width: 100%;
  padding: 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0 24px;
  box-sizing: border-box;
  background-color: ${({theme}) => theme.secondaryAccent};

  @media (max-width: 640px) {
    flex-direction: column;
    gap: 16px 0;
  }

  .cart-item__image-link {
    width: 80px;
    height: 80px;
  }

  .cart-item__image {
    width: 80px;
    height: 80px;
  }

  .cart-item__mobile-container--1 {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 0 24px;
  }

  .cart-item__mobile-container--2 {
    display: flex;
    gap: 24px;
    width: 200px;

    @media (max-width: 640px) {
      width: 100%;
      justify-content: space-between;
    }
  }

  .cart-item__name {
    height: auto;
    ${letterStyleBodyTextDesktoAndTable};
    color: ${({theme }) => theme.gray};
  }

  .cart-item__item-value {
    width: 80px;
    ${letterStyleH3DesktoAndTable};
    color: ${({theme }) => theme.gray};
    margin: 0;
    padding: 0;
  }

  .qtd-buttons {
    display: flex;
    justify-content: space-between;
  }

  .qtd-buttons__change-qtd {
    width: 32px;
    height: 32px;
    border: 1px solid ${({theme }) => theme.elements };
  }

  .qtd-buttons__indicator {
    width: 32px;
    height: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    ${letterStyleBodyTextDesktoAndTable};
    color: ${({theme }) => theme.gray};
  }
`;

export default StyledCartItem;
