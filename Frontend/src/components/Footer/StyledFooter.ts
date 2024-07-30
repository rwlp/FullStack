import styled from 'styled-components';
import { letterStyleSmallTextDesktoAndTable, letterStyleUpperCase } from '../../styles/typography/typography';

const StyledFooter = styled.footer`
  width: 100%;
  max-width: 1136px;
  height: 96px;
  padding-inline: 24px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between; 

  @media (max-width:640px) {
    height: 320px;
    padding: 32px ;
    flex-direction: column;
    align-items: start;
    gap: 32px 0;
  }

  .footer__home-link {
    width: 89px;
    height: 32px;
  }

  .nav {
    width: 33%;

    @media (max-width: 640px) {
      width: 100%;
    }
  }

  .nav__list {
    width: 100%;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: space-between;
    list-style: none;

    @media (max-width: 640px) {
      flex-direction: column;
      gap: 16px;
    }
  }

  .nav__link {
    text-decoration: none;
    text-transform: uppercase;
    ${letterStyleUpperCase};
    color: ${({theme}) => theme.gray}
  }

  .buttons {
    @media (max-width: 640px) {
      width: 100%;
    }
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
