import styled from 'styled-components';
import { letterStyleH1DesktoAndTable } from '../../styles/typography/typography';
import { skeleton } from '../../styles/templates-css/skeleton';

const StyledItem = styled.section`
  width: 100%;
  max-width: 1136px;
  display: flex;
  flex-direction: column;
  gap: 80px 0;
  color: ${({ theme }) => theme.gray};

  .item__name {
    width: 100%;
    ${letterStyleH1DesktoAndTable};
    margin-bottom: 0;
    color: ${({ theme }) => theme.gray};
  }

  .item__container-1 {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(24, 1fr);
    gap: 0 16px;

    @media (max-width: 1199px) {
      grid-template-columns: repeat(12, 1fr);
    }

    @media (max-width: 640px) {
      grid-template-columns: repeat(4, 1fr);
    }

  }

  .images__list {
    grid-column: 1 / 13;

    @media (max-width: 1199px) {
      grid-column: 1 / 7;
    }

    @media (max-width: 640px) {
      grid-column: 1 / 4;
    }
  }

  .item__actions-selector {
    grid-column: 14 / 21;

    @media (max-width: 1199px) {
      grid-column: 8 / 12;
    }

    @media (max-width: 640px) {
      grid-column: 1 / 4;
    }
  }

  .items__text-info {

  }

  .list {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    gap: 0 16px;
  }
  
  .list__options {
    grid-column: 1 / 3;
    display: flex;
    flex-direction: column;
    gap: 16px 0;
  }

  .list__item {
    width: 100%;
  }

  .list__selected {
    width: 100%;
    grid-column: 4 / 12;
  }


  .selectors {
    height: 435px;
    display: flex;
    flex-direction: column;
  }

  .selectors__colors {
    display: flex;
  }

  .colors__available {
    display: flex;
  }

  .price {
    display: flex;
    flex-direction: column;
  }

  .price__text-prices {
    display: flex;
  }

  .price__buttons {
    display: flex;
    gap: 8px;
  }

  .tech-specs {
    width: 100%;
    min-height: 10px;
  }

  ${skeleton};
`;

export default StyledItem;
