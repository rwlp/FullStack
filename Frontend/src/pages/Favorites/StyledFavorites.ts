import styled from 'styled-components';
import { letterStyleH1DesktoAndTable } from '../../styles/typography/typography';

const StyledFavorites = styled.section`
  width: 100%;
  max-width: 1136px;
  display: flex;
  flex-direction: column;
  gap: 80px 0;

  .favorites__title {
    width: 100%;
    ${letterStyleH1DesktoAndTable};
    margin-bottom: 0;
    color: ${({ theme }) => theme.gray};
  }

  .favorites__container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 10px;
  }
`;

export default StyledFavorites;
