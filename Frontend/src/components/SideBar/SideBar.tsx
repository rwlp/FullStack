import React, { useContext, useEffect, useRef } from 'react';
import StyledSideBar from './StyledSideBar.ts';
import { useAppDispatch, useAppSelector } from '../../context/hooks.ts';
import { toggleSideMenu } from '../../context/pageSettingsSlice/pageSettingsSlicer.ts';
import CloseIcon from '../../assets/icons/Close.svg';
import { BASE_URL_CDN } from '../../common/constants.ts';
import NavItem from './NavItem.tsx';
import LoginIcon from '../../assets/icons/LoginDoor.svg';
import HomeIcon from '../../assets/icons/Home.svg';
import Login from './Login.tsx';
import { ThemeContext } from 'styled-components';
import { logoutUser } from '../../context/userSlice/userSlice.ts';

function SideBar(): React.ReactNode {
  const dispatchRedux = useAppDispatch();
  const sideBarState = useAppSelector(state => state.pageSettings.sideMenu);
  const isLoginActive = useAppSelector(state => state.user.loadingStatus === "success-login");
  const theme = useContext(ThemeContext)!;
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
        <CloseIcon width={20} height={20} fill={theme.gray} />
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
              <NavItem className='nav__item-details' Icon={HomeIcon} title={`Go to Home`} gotToPath="/"/>
            </li>

            <li className="nav__item">
              <NavItem className='nav__item-details' Icon={HomeIcon} title={`Go to Phones`} gotToPath="/catalog/phones?sort=newest&itemsPerPage=4&page=1"/>
            </li>

            <li className="nav__item">
              <NavItem className='nav__item-details' Icon={HomeIcon} title={`Go to Tablets`} gotToPath="/catalog/tablets?sort=newest&itemsPerPage=4&page=1"/>
            </li>

            <li className="nav__item">
              <NavItem className='nav__item-details' Icon={HomeIcon} title={`Go to Accessories`} gotToPath="/catalog/accessories?sort=newest&itemsPerPage=4&page=1"/>
            </li>
          </ul>
          </nav>

          <button className='side-bar__logout' onClick={() => dispatchRedux(logoutUser())}>
            <LoginIcon />
          </button>
        </>)
        : (<Login className='login'/>) }
      
    </StyledSideBar>
  );
}

export default SideBar;
