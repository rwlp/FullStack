import styled from 'styled-components';

const StyledPaginator = styled.div`
   display: flex;
    gap: 0 8px;
    
    & button:nth-child(2) {
      margin-left: 8px;
    }

    & button:nth-child(6) {
      margin-left: 8px;
    }
`;

export default StyledPaginator;
