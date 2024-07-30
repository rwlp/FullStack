import React from 'react';
import StyledCatalog from './StyledCatalog.ts';


interface CatalogProps {
  // Define here props of this Component
}

function Catalog(props: CatalogProps): React.ReactNode {
  const {
    // someProps
  } = props;

  return (
    <StyledCatalog className='catalog'>
      
    </StyledCatalog>
  );
}

export default Catalog;
