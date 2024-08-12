import React, { useEffect, useState } from 'react';
import StyledItem from './StyledItem.ts';
import { Product } from '../../types/types.ts';
import { BASE_URL_CDN, PRODUCTS_COLOR_DICT } from '../../common/constants.ts';
import ButtonRadioSelector from '../../components/ButtonRadioSelector/ButtonRadioSelector.tsx';
import Button from '../../components/Button/Button.tsx';
import ButtonFavorite from '../../components/ButtonFavorite/ButtonFavorite.tsx';
// import { useParams } from 'react-router-dom';

const some: Product = {"id":160,"codeName":"apple-ipad-pro-11-2021-256gb-spacegray","category":"tablets","name":"Apple iPad Pro 11 (2021) 256GB Space Gray","capacityAvailable":["128GB","256GB","512GB","1TB","2TB"],"capacity":"256GB","priceRegular":829,"priceDiscount":799,"colorsAvailable":["spacegray","silver"],"color":"spacegray","images":["img/tablets/apple-ipad-pro-11-2021/spacegray/00.webp","img/tablets/apple-ipad-pro-11-2021/spacegray/01.webp","img/tablets/apple-ipad-pro-11-2021/spacegray/02.webp"],"image":"img/tablets/apple-ipad-pro-11-2021/spacegray/00.webp","screen":"11' Liquid Retina","resolution":"2388x1668","processor":"Apple M1","ram":"8GB","camera":"12MP + 12MP","zoom":"Digital zoom up to 5x","cell":["Not applicable"],"year":2021,"description":[{"id":487,"productId":160,"language":"english","title":"Powerful Performance","text":["Experience incredible power and performance with the Apple iPad Pro 11. With the M1 chip, it delivers a new level of performance, making it faster and more efficient than ever before.","Whether you're editing photos, designing artwork, or multitasking with demanding apps, the iPad Pro 11 handles it all with ease."]},{"id":488,"productId":160,"language":"english","title":"Stunning Liquid Retina Display","text":["Enjoy a vibrant and immersive visual experience on the iPad Pro 11's Liquid Retina display. With ProMotion technology and True Tone, the display adapts to your environment, providing smooth scrolling, precise color accuracy, and incredible detail.","From watching movies to editing videos, the iPad Pro 11's display brings your content to life with stunning clarity."]},{"id":489,"productId":160,"language":"english","title":"Versatile Camera System","text":["Capture stunning photos and videos with the iPad Pro 11's advanced camera system. Featuring a 12MP Ultra Wide front camera and a 12MP Wide rear camera with LiDAR scanner, you can take high-quality shots and enjoy augmented reality experiences.","Whether you're video calling, scanning documents, or recording 4K videos, the iPad Pro 11's camera system delivers exceptional performance."]}]};

function Item(): React.ReactNode {
  // const { idItem } = useParams();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    setTimeout(() => {
      setProduct(some);
    }, 1000)
  }, [])

  const smallSpecs = {
    "Screen": product?.screen,
    "Resolution": product?.resolution,
    "Processor": product?.processor,
    "RAM": product?.ram,
  };

  const fullSpecs = {
    "Screen": product?.screen,
    "Resolution": product?.resolution,
    "Processor": product?.processor,
    "RAM": product?.ram,
    "Built in Memory": product?.capacity,
    "Camera": product?.camera,
    "Zoom": product?.zoom,
    "Cell": product?.cell,
  };

  
  return (
    <StyledItem className='item'>
      <h1 className='item__name'>{product?.name}</h1>

      <div className={`item__container-1`}>
        <div className={`images__list list ${product ? '' : 'skeleton'}`}>
          <div className={`list__options ${product ? '' : 'hide-for-skeleton'}`}>
            {product?.images.map(imgStr => {

              return (<img className='list__item' src={`${BASE_URL_CDN}/${imgStr}` } />);
            })}
          </div>

          <img className={`list__selected ${product ? '' : 'hide-for-skeleton'}`} src={`${BASE_URL_CDN}/${product?.images[0]}` } />
        </div>

        <div className={`item__actions-selector selectors ${product ? '' : 'skeleton'}`}>
          <div className={`selectors__color color ${product ? '' : 'hide-for-skeleton'}`}>
            <span className='color__title'>Available colors</span>
            <div className='colors__available' >
              {product?.colorsAvailable.map(color => {
                console.log(color);
                return (<ButtonRadioSelector color={PRODUCTS_COLOR_DICT[color]} />)
              })}
            </div>
          </div>

          <div className={`selctors__capacity capacity ${product ? '' : 'hide-for-skeleton'}`}>
            <span className='capacity__title'>Select capacity</span>
            {product?.capacityAvailable.map(capacityStr => {

              return (<button className='capacity__button-selector' >{capacityStr}</button>)
            })}
          </div>

          <div className={`selectors__price price ${product ? '' : 'hide-for-skeleton'}`}>
            <div className='price__text-prices'>
              <h3 className='price__full-price'>
                ${product?.priceDiscount}
              </h3>
              <span className='price__discount-price'>
                ${product?.priceRegular}
              </span>
            </div>
            

            <div className='price__buttons'>
              <Button text='Add to Cart' isSelected={false} />
              <ButtonFavorite />
            </div>

            <div className='price__info-container info-container'>
              {Object.entries(smallSpecs).map(([title, description], index) => (
                <div key={index} className='info'>
                  <span className='info__title'>{title}</span>
                  <span className='info__description'>{description}</span>
                </div>
            ))}
            </div>
          </div>
        </div>
      </div>
      

      <div className='items__text-info'>
        <div className="items__about about">
          {product?.description.map( descriptions => {
            const {title, text} = descriptions;
            return (<>
              <h4 className='about__title'>{title}</h4>
              <p className='about__description-text'>{text}</p>
            </>)
          })}
        </div>

        <div className={`items__tech-specs tech-specs ${product ? '' : 'skeleton'}`}>
          {product ? (<>
            {Object.entries(fullSpecs).map(([title, description], index) => (
            <div key={index} className='tech-specs__info info'>
              <span className='info__title'>{title}</span>
              <span className='info__description'>{description}</span>
            </div>
          ))}</>) : ''}
        </div>
      </div>
    </StyledItem>
  );
}

export default Item;
