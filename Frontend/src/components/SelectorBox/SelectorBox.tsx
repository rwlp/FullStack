import React from 'react';
import StyledSelectorBox from './StyledSelectorBox.ts';


interface SelectorBoxProps {
  // Define here props of this Component
}

function SelectorBox(props: SelectorBoxProps): React.ReactNode {
  const {
    // someProps
  } = props;

  return (
    <StyledSelectorBox className='selector' >
      <input className='selector__value' readOnly={true} type='text'></input>
      <div className='selector__container-options'>
        <button className='selector__option'>Option 1</button>
        <button className='selector__option'>Option 2</button>
        <button className='selector__option'>Option 3</button>
        <button className='selector__option'>Option 4</button>
      </div>
    </StyledSelectorBox>
  );
}

export default SelectorBox;
