import React, { useEffect, useRef, useState } from 'react';
import StyledSelectorBox from './StyledSelectorBox.ts';
import IconArrowDonw from '../../assets/icons/Arrow-down.svg'
import { useLocation, useNavigate } from 'react-router-dom';
import { pascalCase } from '../../common/methods.ts';


interface SelectorBoxProps {
  type: 'sort-by' | 'items-qtd';
}

function SelectorBox({ type}: SelectorBoxProps): React.ReactNode {
  const navigate = useNavigate();
  const location = useLocation();
  const selectorRef = useRef<HTMLDivElement>(null);
  const width = type === 'sort-by' ? '100%' : '136px';
  const options = type === 'sort-by' 
  ? [
    'Newest',
    'Cheapest',
    'Discount',
  ]
  : [
    '4',
    '8',
  ];

  const searchParams = new URLSearchParams(location.search);
  const [isDown, setIsDown] = useState(false);

  const handleDownClick = () => {
    setIsDown(!isDown);
  }

  const changeOption = (option: string) => {
    return () => 
      {
        setIsDown(false);
        type === 'sort-by' ? searchParams.set('sort', option.toLowerCase()) : searchParams.set('itemsPerPage', option);
        searchParams.set('page', '1');
        navigate(`${location.pathname}?${searchParams}`);
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
          {type === 'sort-by' ? pascalCase(searchParams.get('sort')!) : searchParams.get('itemsPerPage') }
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
