import styled from 'styled-components';
import { letterStyleBodyTextDesktoAndTable, letterStyleButtonsDesktoAndTable } from '../../styles/typography/typography';

interface Prop {
  $size: string
}

const StyledSelectorBox = styled.div<Prop>`
  width: ${({$size}) => $size};
  max-width: 176px;
  min-width: 136px;
  height: 40px;

  .selector__container {
    width: 100%;
    height: 100%;
    position: relative;
  }

  .selector__button {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-inline: 12px;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: ${({theme}) => theme.hoverAndBG};
    color: ${({theme}) => theme.gray};

    ${letterStyleButtonsDesktoAndTable};
  }

  .selector__options-container {
    margin-top: 4px;
    padding-top: 8px;
    height: 100px;
    display: flex;
    flex-direction: column;
    border: 1px solid #3B3E4A;
  }

  .selector__option {
    width: 100%;
    height: 32px;
    padding-inline: 12px;
    background-color: ${({theme}) => theme.primary};
    color: ${({theme}) => theme.secondary};
    ${letterStyleBodyTextDesktoAndTable};

    &:hover {
      color: ${({theme}) => theme.gray};
      background-color: ${({theme}) => theme.hoverAndBG};
    }
  }


`;

export default StyledSelectorBox;
