import React, { useEffect, useRef, useState } from 'react';
import StyledProductsList from './StyledProductsList.ts';
import { Product } from '../../types/types.ts';
import ProductCard from '../ProductCard/ProductCard.tsx';
import ButtonArrowPointer from '../ButtonArrowPointer/ButtonArrowPointer.tsx';


interface ProductsListProps {
  fetchEndPoint?: () => void;
  title: string;
}

function ProductsList({fetchEndPoint, title}: ProductsListProps): React.ReactNode {
  const [productsList, setProductsList] = useState<Product[] | undefined[]>(Array(20).fill(undefined));

  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const [startX, setStartX] = useState<number>(0);
  const [scrollLeft, setScrollLeft] = useState<number>(0);
  const [isAtStart, setIsAtStart] = useState<boolean>(true);
  const [isAtEnd, setIsAtEnd] = useState<boolean>(false);

  const checkScrollEdges = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const { scrollLeft, scrollWidth, clientWidth } = container;
      setIsAtStart(scrollLeft === 0);
      setIsAtEnd(scrollLeft + clientWidth >= scrollWidth);
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -300 : 300,
        behavior: 'smooth'
      });
    }

    setTimeout(checkScrollEdges, 300);
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    const touch = e.touches[0];
    setStartX(touch.clientX);
    if (scrollContainerRef.current) {
      setScrollLeft(scrollContainerRef.current.scrollLeft);
    }
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    const touch = e.touches[0];
    const diffX = startX - touch.clientX;
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft = scrollLeft + diffX;
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;

    const handleTouchStartEvent = (e: TouchEvent) => handleTouchStart(e as unknown as React.TouchEvent<HTMLDivElement>);
    const handleTouchMoveEvent = (e: TouchEvent) => handleTouchMove(e as unknown as React.TouchEvent<HTMLDivElement>);

    if (container) {
      container.addEventListener('touchstart', handleTouchStartEvent);
      container.addEventListener('touchmove', handleTouchMoveEvent);

      return () => {
        container.removeEventListener('touchstart', handleTouchStartEvent);
        container.removeEventListener('touchmove', handleTouchMoveEvent);
      };
    }
  }, [scrollLeft, startX]);

  return (
    <StyledProductsList className='list'>
      <div className='list__title-and-buttons'>
      <h2 className='list__title'>{title}</h2>
      <div className='buttons'>
        <ButtonArrowPointer direction="left" isDisabled={isAtStart} callback={() => scroll('left')}/>
        <ButtonArrowPointer direction="right" isDisabled={isAtEnd} callback={() => scroll('right')} />
      </div>
      </div>
      <div className='list__container' ref={scrollContainerRef}>
      {productsList.map(product => {
        return <ProductCard product={product}/>
      })}
      </div>
    </StyledProductsList>
  );
}

export default ProductsList;