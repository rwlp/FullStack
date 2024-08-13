import React, { useContext } from "react";
import { NavLink } from 'react-router-dom';
import { ThemeContext } from "styled-components";
import StyledHeader from "./StyledHeader.ts";
import { BASE_URL_CDN } from "../../common/constants.ts";
import HeartIcon from "../../assets/icons/HeartLike-empty.svg";
import BagIcon from "../../assets/icons/Empty-cart.svg";
import { useAppDispatch, useAppSelector } from "../../context/hooks.ts";
import { toggleSideMenu } from "../../context/pageSettingsSlice/pageSettingsSlicer.ts";

function Header(): React.ReactNode {
  const colorIcons = useContext(ThemeContext)!.gray;
  const dispatchRedux = useAppDispatch();
  const sideBarIsOpen = useAppSelector(state => state.pageSettings.sideMenu);
  const isLoginActive = useAppSelector(state => state.user.loadingStatus === 'success-login');
  const userMessage = useAppSelector(state => state.user.message);

  return (
    <StyledHeader className="header">
      
      <NavLink className="header_home-link" to="/" aria-label="Go to Home Page">
        <img
          className="header__logo"
          src={`${BASE_URL_CDN}/img/logo.png`}
          alt="Logo"
        />
      </NavLink>

      <nav className="header__center-nav nav-center">
        <ul className="nav-center__list">
          <li className="nav-center__item">
            <NavLink to="/" className={({isActive}) => isActive ? "nav-center__link--isActive nav-center__link": "nav-center__link"} >
              Home
            </NavLink>
          </li>

          <li className="nav-center__item">
            <NavLink to="catalog/phones?sort=newest&itemsPerPage=4&page=1" className={({isActive}) => isActive ? "nav-center__link--isActive nav-center__link": "nav-center__link"} >
              Phones
            </NavLink>
          </li>

          <li className="nav-center__item">
            <NavLink to="catalog/tablets?sort=newest&itemsPerPage=4&page=1" className={({isActive}) => isActive ? "nav-center__link--isActive nav-center__link": "nav-center__link"}>
              Tablets
            </NavLink>
          </li>

          <li className="nav-center__item">
            <NavLink to="catalog/accessories?sort=newest&itemsPerPage=4&page=1" className={({isActive}) => isActive ? "nav-center__link--isActive nav-center__link": "nav-center__link"}>
              Accessories
            </NavLink>
          </li>
        </ul>
      </nav>

      <div className="header__right-nav nav-right">
        {isLoginActive && <h4 className="nav-right__user-name">{userMessage}</h4>}
        <ul className="nav-right__list">
          <li className="nav-right__item nav-right__item--favorites">
            <NavLink
              className="nav-right__link"
              to="/favorites"
              aria-label="Got to Your Favorites"
            >
              {// @ts-ignore
              <HeartIcon fill={colorIcons} /> }
            </NavLink>
          </li>

          <li className="nav-right__item nav-right__item--cart">
            <NavLink
              className="nav-right__link"
              to="/cart"
              aria-label="Got to Cart Items"
            >
              {// @ts-ignore
              <BagIcon fill={colorIcons} /> }
            </NavLink>
          </li>

          <li className="nav-right__item nav-right__item--login">
            <button
              className={`nav-right__link`}
              aria-label="Got to Your Profile Settings or Loggin Page"
              onClick={() => dispatchRedux(toggleSideMenu())}
              disabled={sideBarIsOpen}
            >
              <img className={`nav-right__avatar-img ${sideBarIsOpen && '--sideBarIsOpen-background'}`} src={isLoginActive ? `${BASE_URL_CDN}/img/avatar.png` : `${BASE_URL_CDN}/img/avatar.png`} />
            </button>
          </li>
        </ul>
      </div>
    </StyledHeader>
  );
}

export default Header;
