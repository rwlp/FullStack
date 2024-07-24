import styled from "styled-components";

const StyledButtonArrowPointer = styled.button`
  width: 32px;
  height: 32px;
  background-color: ${({ theme }) => theme.hoverAndBG};

  .button-arrow__icon {
    width: 16px;
    height: 16px;
  }

  &:hover {
    background-color: ${({ theme }) => theme.icons};
  }

  &.button-arrow--disable {
    background-color: ${({ theme }) => theme.primary};
    border: 1px solid ${({ theme }) => theme.elements};

    &:hover {
      background-color: ${({ theme }) => theme.icons};
    }
  }
`;

export default StyledButtonArrowPointer;
