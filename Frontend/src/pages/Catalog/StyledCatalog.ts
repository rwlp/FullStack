import styled from 'styled-components';
import { letterStyleH1DesktoAndTable } from '../../styles/typography/typography';

const StyledCatalog = styled.div`
  width: 100%;
  display: flex;width: 100%;
  max-width: 1136px;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 80px 0;

  .catalog__title {
    width: 100%;
    ${letterStyleH1DesktoAndTable};
    margin-bottom: 0;
    color: ${({ theme }) => theme.gray};
  }

  .catalog__filters {
    width: 100%;
    display: flex;
    align-items: start;
    gap: 0 16px;
  }

  .catalog__container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 10px;
  }
`;

export default StyledCatalog;
