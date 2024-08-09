import styled from 'styled-components';
import { letterStyleH1DesktoAndTable } from '../../styles/typography/typography';

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
`;

export default StyledItem;
