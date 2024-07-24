import styled from "styled-components";
import { letterStyleBodyTextDesktoAndTable } from "../../styles/typography/typography.ts";

interface Prop {
  $isSelected: boolean;
}
const StyledButtonNumber = styled.button<Prop>`
  width: 32px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.white};
  ${letterStyleBodyTextDesktoAndTable};

  background-color: ${({ theme, $isSelected }) =>
    $isSelected ? theme.accent : theme.secondaryAccent};

  &:hover {
    background-color: ${({ theme }) => theme.elements};
  }
`;

export default StyledButtonNumber;
