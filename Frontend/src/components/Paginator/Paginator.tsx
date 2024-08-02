import React, { useEffect, useState } from 'react';
import StyledPaginator from './StyledPaginator.ts';
import ButtonArrowPointer from '../ButtonArrowPointer/ButtonArrowPointer.tsx';
import ButtonNumber from '../ButtonNumber/ButtonNumber.tsx';
import { useLocation, useNavigate } from 'react-router-dom';


interface PaginatorProps {
  limit: number
}

function Paginator({limit}: PaginatorProps): React.ReactNode {
  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(useLocation().search);
  const pageNumber = parseInt(searchParams.get('page')!);

  const [indexes, setIndexes] = useState(() => {
    let initIndexes = [1, 2, 3, 4];
    if (pageNumber >= 5) {
      initIndexes = initIndexes.map(e => e + pageNumber - 4);
    }
    return initIndexes;
  });

  const [activeIndex, setActiveIndex] = useState(() => indexes.findIndex(e => e === pageNumber));

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    setIndexes(() => {
      let initIndexes = [1, 2, 3, 4];
      if (parseInt(searchParams.get('page')!) >= 5) {
        initIndexes = initIndexes.map(e => e + pageNumber - 4);
      }
      return initIndexes;
    });
  }, [location]);

  useEffect(() => {
    setActiveIndex(() => indexes.findIndex(e => e === parseInt(searchParams.get('page')!)));
  }, [indexes]);
  
  return (
    <StyledPaginator className='page-indicator' >
        <ButtonArrowPointer direction='left' isDisabled={activeIndex === 0 && indexes[0] === 1} onClick={() => {
          searchParams.set('page', String(pageNumber - 1));
          navigate(`${location.pathname}?${searchParams.toString()}`);
            
        }
        } />
        {indexes.map((page, index) => {
          return (
            <ButtonNumber value={page} isSelected={index === (activeIndex)} onClick={() => {
              searchParams.set('page', String(indexes[index]));
              navigate(`${location.pathname}?${searchParams.toString()}`);
            }}/>
          );
        })}
        <ButtonArrowPointer direction='right' isDisabled={indexes[activeIndex] === limit} onClick={() => {
          searchParams.set('page', String(pageNumber + 1));
          navigate(`${location.pathname}?${searchParams.toString()}`);
        }} />
      </StyledPaginator>
  );
}

export default Paginator;
