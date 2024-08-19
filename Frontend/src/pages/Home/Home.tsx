import React, { useEffect, useState } from 'react';
import StyledHome from './StyledHome.ts';
import IconLeft  from '../../assets/icons/Arrow-left.svg'
import IconRight  from '../../assets/icons/Arrow-right.svg'
import ProductsList from '../../components/ProductsList/ProductsList.tsx';
import { BASE_URL_CDN } from '../../common/constants.ts';
import { getTotalProductService } from '../../services/product/catalogServices.ts';
import { Link } from 'react-router-dom';


function Home(): React.ReactNode {

  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);
  const [phonesQtd, setPhonesQtd] = useState<number>(0);
  const [tabletsQtd, setTabletsQtd] = useState<number>(0);
  const [accessoriesQtd, setAccessoriesQtd] = useState<number>(0);


  useEffect(() => {
    getTotalProductService('accessories')
      .then(response => {
        setAccessoriesQtd(response.data);
      });

      getTotalProductService('phones')
      .then(response => {
        setPhonesQtd(response.data);
      })

      getTotalProductService('tablets')
      .then(response => {
        setTabletsQtd(response.data);
      })
  }, []);

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
        <ProductsList title='Brand New Models' routeToFetch='hotPrices' />
      </div>

      <div className='home__categories'>
        <h2 className='home__sub-title'>Shop by category</h2>
        <div className='categories'>
          <div className='card'>
            <Link to='catalog/phones?sort=newest&itemsPerPage=4&page=1'>
              <img className='card__img' src={`${BASE_URL_CDN}/img/category_phones.png`}/>
            </Link>
            
            <div className='card__info'>
              <h4 className="card__title">Mobile phones</h4>
              <span className='card__description'>{phonesQtd} models</span>
            </div>
          </div>

          <div className='card'>
          <Link to='catalog/accessories?sort=newest&itemsPerPage=4&page=1'>
            <img className='card__img' src={`${BASE_URL_CDN}/img/category_accessories.png`}/>
          </Link>
            <div className='card__info'>
              <h4 className="card__title">Accessories</h4>
              <span className='card__description'>{accessoriesQtd} models</span>
            </div>
          </div>

          <div className='card'>
            <Link to='catalog/accessories?sort=newest&itemsPerPage=4&page=1'>
              <img className='card__img' src={`${BASE_URL_CDN}/img/category_tablets.png`}/>
            </Link>
            <div className='card__info'>
              <h4 className="card__title">Tablets</h4>
              {!!tabletsQtd ? <span className='card__description'>{tabletsQtd} models</span> : <div className='card__loading-info' />}
            </div>
          </div>
        </div>
      </div>

      <div className='home__hot-prices'>
        <ProductsList title='Hot prices' routeToFetch='getNewsProducts'  />
      </div>
    </StyledHome>
  );
}

export default Home;
