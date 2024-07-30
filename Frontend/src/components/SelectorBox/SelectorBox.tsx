import React, { useEffect, useRef, useState } from 'react';
import StyledSelectorBox from './StyledSelectorBox.ts';
import IconArrowDonw from '../../assets/icons/Arrow-down.svg'


interface SelectorBoxProps {
  type: 'sort-by' | 'items-qtd';
}

function SelectorBox({ type }: SelectorBoxProps): React.ReactNode {
  const selectorRef = useRef<HTMLDivElement>(null);
  const width = type === 'sort-by' ? '100%' : '136px';
  const options = type === 'sort-by' 
  ? [
    'Newest',
    'Cheapest',
    'Discount',
  ]
  : [
    '5',
    '10',
    '20',
  ]

  const [currentOption, setCurrentOption] = useState(options[0]);


  const [isDown, setIsDown] = useState(false);

  const handleDownClick = () => {
    setIsDown(!isDown);
  }

  const changeOption = (option: string) => {
    return () => 
      {
        setCurrentOption(option);
        setIsDown(false);
      }
  }

  const handleClickOutside = (event: MouseEvent) => {
    if (selectorRef.current && !selectorRef.current.contains(event.target as Node)) {
      setIsDown(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <StyledSelectorBox className='selector' ref={selectorRef}$size={width}>
      <div className='selector__container'>
        <button className='selector__button' type='button' onClick={handleDownClick}>
          {currentOption}
          <IconArrowDonw  />
        </button>
      </div>

      {isDown && 
      <div className='selector__options-container'>
        {options.map(option => {

          return (<button onClick={changeOption(option)}className='selector__option'>{option}</button>);
        })};
      </div>}
    </StyledSelectorBox>
  );
}

export default SelectorBox;
