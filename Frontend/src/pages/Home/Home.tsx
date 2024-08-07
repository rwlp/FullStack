import React, { useEffect, useState } from 'react';
import StyledHome from './StyledHome.ts';
import IconLeft  from '../../assets/icons/Arrow-left.svg'
import IconRight  from '../../assets/icons/Arrow-right.svg'
import ProductsList from '../../components/ProductsList/ProductsList.tsx';
import { BASE_URL_CDN } from '../../common/constants.ts';


function Home(): React.ReactNode {

  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <StyledHome className='home'>
      <h1 className='home__title'>Welcome to Nice Gadgets store!</h1>
      <div className='home__banner banner' >
        <button className='banner-button' >
          <IconLeft />
        </button>
        <img className='banner__image' src={isMobile ? `${BASE_URL_CDN}/img/banner_small.png` :  `${BASE_URL_CDN}/img/banner_large_1.png`} />
        <button className='banner-button' >
          <IconRight />
        </button>
      </div>

      <div className='home__brand-new'>
        <ProductsList title='Brand New Models'/>
      </div>

      <div className='home__categories'>
        <h2 className='home__sub-title'>Shop by category</h2>
        <div className='categories'>
          <div className='card'>
            <img className='card__img' src={`${BASE_URL_CDN}/img/category_phone.png`}/>
            <div className='card__info'>
              <h4 className="card__title">Mobile phones</h4>
              <span className='card__description'>95 models</span>
            </div>
          </div>

          <div className='card'>
            <img className='card__img' src={`${BASE_URL_CDN}/img/category_phone.png`}/>
            <div className='card__info'>
              <h4 className="card__title">Mobile phones</h4>
              <span className='card__description'>95 models</span>
            </div>
          </div>

          <div className='card'>
            <img className='card__img' src={`${BASE_URL_CDN}/img/category_phone.png`}/>
            <div className='card__info'>
              <h4 className="card__title">Mobile phones</h4>
              <span className='card__description'>95 models</span>
            </div>
          </div>
        </div>
      </div>

      <div className='home__hot-prices'>
        <ProductsList title='Hot prices' />
      </div>
    </StyledHome>
  );
}

export default Home;
