import styled from 'styled-components';
import { letterStyleH2DesktoAndTable } from '../../styles/typography/typography';

const StyledProductsList = styled.div`
  .list {
    display: flex;
    align-items: center;
  }

  .list__container {
    display: flex;
    overflow-x: auto;
    scrollbar-width: none; /* Firefox */
  }

  .list__container::-webkit-scrollbar {
    display: none; /* Chrome, Safari and other based on WebKit */
  }

  .list__title {
    ${letterStyleH2DesktoAndTable};
    color: ${({theme}) => theme.gray}
  }

  .list__title-and-buttons {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .buttons {
    display: flex;
    gap: 0 16px;
  }
`;

export default StyledProductsList;
