import styled from "styled-components";
import { letterStyleBodyTextDesktoAndTable } from "../../styles/typography/typography.ts";

const StyledButtonNumber = styled.button`
  width: 32px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.white};
  ${letterStyleBodyTextDesktoAndTable};
  background-color: ${({ theme }) => theme.secondaryAccent};

  &:hover {
    background-color: ${({ theme }) => theme.elements};
  }

  &.--isSelected {
    background-color: ${({ theme }) => theme.accent};
    &:hover {
      background-color: ${({ theme }) => theme.accent};
    }
  }
`;

export default StyledButtonNumber;
