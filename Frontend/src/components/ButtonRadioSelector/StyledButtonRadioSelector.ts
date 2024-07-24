import styled from "styled-components";

interface Props {
  $mainColor: string;
}

const StyledButtonRadioSelector = styled.button<Props>`
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 36px;
  border: 1px solid ${({ theme }) => theme.elements};

  &:hover {
    border-color: ${({ theme }) => theme.secondary};
  }

  &::after {
    content: "";
    width: 28px;
    height: 26px;
    border-radius: 36px;
    border: 2px solid ${({ theme }) => theme.primary};
    background-color: ${({ $mainColor }) => $mainColor};
  }

  &.radio-button--isSelected {
    border-color: ${({ theme }) => theme.gray};
  }
`;

export default StyledButtonRadioSelector;
