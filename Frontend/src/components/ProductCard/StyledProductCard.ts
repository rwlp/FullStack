import styled from 'styled-components';

const StyledProductCard = styled.div`
  width: 100%;
  width:272px;
  height: 506px;
  padding: 32px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 8px 0;

  background-color: ${({theme}) => theme.sencondaryAccent};

  .product__link {
    width: 100%;
    height: 1;
  }
`;

export default StyledProductCard;
