import { css } from "styled-components";

export const skeleton = css`
.skeleton {
  position: relative;
  background-color: ${({theme}) => theme.primary};
  overflow: hidden;
  opacity: 1;
  visibility: visible;
  }

  .skeleton::before {
    content: '';
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      45deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.4) 50%,
      rgba(255, 255, 255, 0) 100%
    );
    background-size: 200% 200%;
    animation: skeleton-loading 1s infinite ease;
  }

  

  @keyframes skeleton-loading {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(100%);
    }
  }

  .hide-for-skeleton {
    opacity: 0;
    visibility: hidden;
  }
`;