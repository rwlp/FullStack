import React from 'react';
import StyledItem from './StyledItem.ts';


interface ItemProps {
  // Define here props of this Component
}

function Item(props: ItemProps): React.ReactNode {
  const {
    // someProps
  } = props;

  return (
    <StyledItem >
      <h1>Item Page Created!</h1>
    </StyledItem>
  );
}

export default Item;
