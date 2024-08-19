import styled from 'styled-components';
import { letterStyleBodyTextDesktoAndTable, letterStyleH1DesktoAndTable, letterStyleH2DesktoAndTable, letterStyleH4DesktoAndTable } from '../../styles/typography/typography';
import { skeleton } from '../../styles/templates-css/skeleton';

const StyledHome = styled.section`
  width: 100%;
  max-width: 1136px;
  display: flex;
  flex-direction: column;
  gap: 80px 0;

  .home__title {
    width: 100%;
    ${letterStyleH1DesktoAndTable};
    margin-bottom: 0;
    color: ${({ theme }) => theme.gray};
  }

  .home__sub-title {
    width: 100%;
    margin-top: 0;
    ${letterStyleH2DesktoAndTable};
    color: ${({ theme }) => theme.gray};
  }

  .banner {
    width: 100%;
    display: flex;
    gap: 0 16px;
  }

  .banner-button {
    min-width: 32px;
    padding: 0;
    margin: 0;
    border: none;
    background-color: ${({ theme }) => theme.hoverAndBG};
    

    @media (max-width: 640px) {
      display: none;
    }
  }

  .banner__image {
    width: 100%;

    @media (max-width: 640px) {
    position: relative;
    left: 0;
    right: 0;
    }
  }

  .categories {
    width: 100%;
    display: flex;
    gap: 0 16px;

    @media (max-width: 640px) {
      flex-direction: column;
      gap: 32px 0;
    }
  }

  .card {
    width: 33%;
    display: flex;
    flex-direction: column;
    gap: 24px 0;

    @media (max-width: 640px) {
      width: 100%;
    }
  }

  .card__img {
    width: 100%;
    transition: transform 500ms ease-in, border-radius 500ms ease-in;


    &:hover {
      transform: scale(1.1);
      border-radius: 5%;
    }
  }

  .card__info {
    width: 100%;
  }

  .card__loading-info {
    width: 100%;
    height: 100%;
    background-image: url("loading_img.png");
    background-size: contain;
    background-repeat: no-repeat;
  }

  .card__title {
    ${letterStyleH4DesktoAndTable};
    margin: 0;
    color: ${({theme}) => theme.gray};
  }

  .card__description {
    ${letterStyleBodyTextDesktoAndTable};
    color: ${({theme}) => theme.secondary};
  }

  ${skeleton};

`;

export default StyledHome;
