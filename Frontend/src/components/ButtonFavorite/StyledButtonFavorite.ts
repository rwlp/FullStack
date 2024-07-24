import styled from "styled-components";

const StyledButtonFavorite = styled.button`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.hoverAndBG};

  &:hover {
    background-color: ${({ theme }) => theme.icons};
  }

  &.button-favorite--selected {
    background-color: ${({ theme }) => theme.primary};
    border: 1px solid ${({ theme }) => theme.elements};

    &:hover {
      background-color: ${({ theme }) => theme.icons};
    }
  }
`;

export default StyledButtonFavorite;
