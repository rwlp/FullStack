import styled from 'styled-components';
import { letterStyleSmallTextDesktoAndTable, letterStyleUpperCase } from '../../styles/typography/typography';

const StyledFooter = styled.footer`
  width: 100%;
  max-width: 1136px;
  min-width: 592px;
  height: 96px;
  padding-inline: 24px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  bottom: 0;

  .footer__home-link {
    width: 89px;
    height: 32px;
  }

  .nav {
    width: 33%;
  }

  .nav__list {
    width: 100%;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: space-between;
    list-style: none;
  }

  .nav__link {
    text-decoration: none;
    text-transform: uppercase;
    ${letterStyleUpperCase};
    color: ${({theme}) => theme.gray}
  }

  .buttons__go-top {
    display: flex;
    gap: 0 16px;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    ${letterStyleSmallTextDesktoAndTable};
    color: ${({theme}) => theme.graySecondary}
  }


`;

export default StyledFooter;
