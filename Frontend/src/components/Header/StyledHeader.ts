import styled from "styled-components";
import { letterStyleUpperCase } from "../../styles/typography/typography.ts";

const StyledHeader = styled.header`
  --height: 64px;
  --logo-width: 80px;
  --logo-height: 28px;

  width: 100%;
  height: var(--height);
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  gap: 0 24px;
  box-shadow: 0px 1px 0px 0px ${({ theme }) => theme.hoverAndBG};
  background-color: ${({ theme }) => theme.primary};
  z-index: 99;


  @media (max-width: 640px) {
    --height: 48px;
    --logo-width: 64px;
    --logo-height: 22px;
  }

  .header_home-link {
    width: var(--logo-width);
    height: var(--logo-height);
    margin: 0;
    padding: 18px 24px;

    @media (max-width: 640px) {
      padding: 13px 16px;
    }
  }

  .header__logo {
    width: var(--logo-width);
    height: var(--logo-height);
    margin: 0;
    padding: 0;
  }

  .nav-center {
    margin: 0;
    padding: 0;

    @media (max-width: 640px) {
      display: none;
    }

    &__list {
      padding: 0;
      margin: 0;
      display: flex;
      gap: 0 var(--height);
      list-style: none;

      @media (max-width: 1200px) {
        gap: 0 32px;
      }
    }

    &__link {
      display: inline-block;
      ${letterStyleUpperCase};
      line-height: var(--height);
      height: var(--height);
      color: ${({ theme }) => theme.graySecondary};
      text-transform: uppercase;
      text-decoration: none;
      position: relative;

      &--isActive::after {
        content: "";
        width: 100%;
        height: 3px;
        position: absolute;
        bottom: 0;
        left: 0;
        background-color: ${({ theme }) => theme.gray};
      }

      &:hover::after {
        content: "";
        width: 100%;
        height: 3px;
        position: absolute;
        bottom: 0;
        left: 0;
        background-color: ${({ theme }) => theme.gray};
      }

      &--isActive {
        color: ${({ theme }) => theme.gray};
      }

      &:hover {
        color: ${({ theme }) => theme.gray};
      }
    }
  }

  .nav-right {
    margin: 0;
    padding: 0;
    width: 100%;
    display: flex;
    gap: 0;
    justify-content: end;

    &__list {
      padding: 0;
      margin: 0;
      display: flex;
      gap: 0;
      list-style: none;
    }

    &__item {
      width: var(--height);
      height: var(--height);
      box-shadow: -1px 0px 0px 0px ${({ theme }) => theme.hoverAndBG};

      &--menu {
        display: none;

        @media (max-width: 640px) {
          display: block;
        }
      }

      &--favorites {
        @media (max-width: 640px) {
          display: none;
        }
      }

      &--cart {
        @media (max-width: 640px) {
          display: none;
        }
      }

      &--login {
        @media (max-width: 640px) {
          display: none;
        }
      }
    }

    &__link {
      display: flex;
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
      width: var(--height);
      height: var(--height);
      padding: 5px;
    }

    &__avatar-img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
      }
  }
`;

export default StyledHeader;
