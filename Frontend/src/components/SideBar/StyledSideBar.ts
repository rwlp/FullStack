import styled from 'styled-components';

const StyledSideBar = styled.aside`
  width: 320px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 16px;
  background-color: ${({theme}) => theme.elements};
  margin-top: 64px;

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
    height: 32px;
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
      height: 96px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .nav__item-details {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }


`;

export default StyledSideBar;
