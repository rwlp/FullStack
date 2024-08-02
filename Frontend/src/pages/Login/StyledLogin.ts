import styled from 'styled-components';
import { letterStyleH1DesktoAndTable } from '../../styles/typography/typography';

const StyledLogin = styled.div`
  height: 100vh;

  .login__title {
    width: 100%;
    ${letterStyleH1DesktoAndTable};
    margin-bottom: 0;
    color: ${({ theme }) => theme.gray};
  }
`;

export default StyledLogin;
