import styled from "styled-components";

const StyledButtonArrowPointer = styled.button`
  width: 32px;
  height: 32px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.hoverAndBG};

  &:hover {
    background-color: ${({ theme }) => theme.icons};
  }

  &.button-arrow--disable {
    width: 32px;
    height: 32px;
    background-color: ${({ theme }) => theme.primary};
    border: 1px solid ${({ theme }) => theme.elements};

  }
`;

export default StyledButtonArrowPointer;
