import styled from "styled-components";
import { letterStyleButtonsDesktoAndTable } from "../../styles/typography/typography.ts";

const StyledButton = styled.button`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.accent};
  color: ${({ theme }) => theme.white};
  ${letterStyleButtonsDesktoAndTable};

  &:hover {
    background-color: ${({ theme }) => theme.hoverButton};
  }

  &.button--isSelected {
    background-color: ${({ theme }) => theme.hoverAndBG};
  }
`;

export default StyledButton;
