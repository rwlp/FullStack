import styled, { css } from 'styled-components';
import { letterStyleH1DesktoAndTable, letterStyleH3DesktoAndTable, letterStyleSmallTextDesktoAndTable } from '../../styles/typography/typography';

const cssForLogin = css`
  .login {
    display: flex;
    flex-direction: column;
    gap: 8px;

    &__title {
      ${letterStyleH1DesktoAndTable};
      padding: 0;
      margin: 0;
    }

    &__favIcon {
      width: 48px;
      height: 48px;
    }

    &__create-user {
      text-decoration: underline;
      color: #3390ff;
      cursor: pointer;
    }

    &__form {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }

    &__input {
      width: 100%;
      height: 48px;
      border-radius: 20px;
      border: none;
      box-sizing: border-box;
      padding: 12px;
      ${letterStyleSmallTextDesktoAndTable};
      font-size: 18px;
      color: ${({theme}) => theme.gray};
      background-color: ${({theme}) => theme.hoverAndBG};
    }

    &__submit-login {
      width: 100%;
      height: 48px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: ${({theme}) => theme.accent};
      ${letterStyleH3DesktoAndTable};
      color: ${({theme}) => theme.gray};
    }



  }
`;

const StyledSideBar = styled.aside`
  width: 320px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  border-radius: 10px;
  padding: 16px;
  background-color: ${({theme}) => theme.elements};
  margin-top: 68px;

  position: fixed;
  top: 0;
  right: 0;
  z-index: 2;
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.5);
  transform: translateX(100%);
  transition: transform 0.3s ease-in-out;
  color: ${({theme}) => theme.gray};

  @media (max-width: 640px) {
    margin-top: 48px;
  }

  &.open {
    transform: translateX(0);
  }

  .side-bar__close-button {
    width: 100%;
    height: 48px;

    &:hover {
      background-color: ${({theme}) => theme.hoverAndBG};
    }
  }

  .info {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;

  }

  .info__user-photo {
    width: 64px;
    height: 64px;
    position: relative;

    & img {
      width: 64px;
      height: 64px;
      object-fit: cover;
    }
  }

  .info__user-photo::after {
    content: '';
    position: absolute;
    width: 64px;
    height: 64px;
    box-sizing: border-box;
    border: 5px solid black;
    border-radius: 100%;
    top: 0;
    left: 0;
    clip-path: polygon(50% 50%, 100% 0, 100% 50%);
  }

  .info__text {
    display: flex;
    flex-direction: column;
  }

  .nav {
    margin: 0;
    padding: 0;
    width: 100%;
    display: flex;
    justify-content: center;

    &__list {
      width: 100%;
      padding: 0;
      margin: 0;
      display: flex;
      flex-direction: column;
      gap: 0;
      list-style: none;
    }

    &__item {
      width: 100%;
      height: 48px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-radius: 5px;
      padding: 5px;

      &:hover {
        background-color: ${({theme}) => theme.hoverAndBG};
        border: 1px solid wheat;

      }
    }

    .nav__item-details {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }

  ${cssForLogin};

`;

export default StyledSideBar;
