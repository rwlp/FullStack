import React, { useEffect, useRef } from 'react';
import StyledSideBar from './StyledSideBar.ts';
import { useAppDispatch, useAppSelector } from '../../context/hooks.ts';
import { toggleSideMenu } from '../../context/pageSettingsSlice/pageSettingsSlicer.ts';
import CloseIcon from '../../assets/icons/Close.svg';
import { BASE_URL_CDN } from '../../common/constants.ts';
import NavItem from './NavItem.tsx';
import HeartLikeIcon from '../../assets/icons/HeartLike-empty.svg';
import LoginIcon from '../../assets/icons/LoginDoor.svg';
import BagIcon from '../../assets/icons/Empty-cart.svg';
import HomeIcon from '../../assets/icons/Home.svg';
import Login from './Login.tsx';

function SideBar(): React.ReactNode {
  const sideBarState = useAppSelector(state => state.pageSettings.sideMenu);
  const dispatchRedux = useAppDispatch();
  const isLoginActive = useAppSelector(state => !!state.user.token);
  const refToSideBar = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (refToSideBar.current && !refToSideBar.current.contains(event.target as Node)) {
      dispatchRedux(toggleSideMenu());
    }
  };

  useEffect(() => {
    if (sideBarState) {
      document.addEventListener('mouseup', handleClickOutside);
    } else {
      document.removeEventListener('mouseup', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mouseup', handleClickOutside);
    };
  }, [sideBarState]);

  return (
    <StyledSideBar ref={refToSideBar} className={`side-bar ${sideBarState ? 'open' : ''}`}>
      <button className='side-bar__close-button' onClick={() => dispatchRedux(toggleSideMenu())}>
        {// @ts-ignore
        <CloseIcon />
        }
      </button>
      {isLoginActive
        ? (
        <>
          <div className='side-bar__user-info info'>
            <div className='info__user-photo'>
              <img src={`${BASE_URL_CDN}/img/avatar.png`} alt="profile" />
            </div>

            <div className='info__text'>
              <span className='info__user-name'>Rafael Wesley</span>
              <span className='info__level'>Level: Arquimedes</span>
            </div>
          </div>

          <nav className='side-bar__nav nav'>
          <ul className="nav__list">
            <li className="nav__item">
              <NavItem className='nav__item-details' Icon={HeartLikeIcon} title={`Go to Favorites`}/>
            </li>

            <li className="nav__item">
              <NavItem className='nav__item-details' Icon={BagIcon} title={`Go to Cart`}/>
            </li>

            <li className="nav__item">
              <NavItem className='nav__item-details' Icon={HomeIcon} title={`Go to Home`}/>
            </li>

            <li className="nav__item">
              <NavItem className='nav__item-details' Icon={HeartLikeIcon} title={`Go to Github`}/>
            </li>
          </ul>
          </nav>

          <button className='side-bar__logout'>
            <LoginIcon />
          </button>
        </>)
        : (<Login className='side-bar__login'/>) }
      
    </StyledSideBar>
  );
}

export default SideBar;
