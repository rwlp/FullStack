import styled from 'styled-components';

const StyledCatalog = styled.div`

  .catalog__filters {
    display: flex;
    gap: 0 16px;
  }
  .page-indicator {
    display: flex;
    gap: 0 8px;
    
    & button:nth-child(2) {
      margin-left: 8px;
    }

    & button:nth-child(6) {
      margin-left: 8px;
    }
  }
`;

export default StyledCatalog;
