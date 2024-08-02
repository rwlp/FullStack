import React, { useContext } from "react";
import { NavLink, useNavigate } from 'react-router-dom';
import { ThemeContext } from "styled-components";
import StyledHeader from "./StyledHeader.ts";
import { BASE_URL_CDN } from "../../utils/constants.ts";
import HeartIcon from "../../assets/icons/HeartLike-empty.svg";
import BagIcon from "../../assets/icons/Empty-cart.svg";
import MenuIcon from "../../assets/icons/Menu.svg";

function Header(): React.ReactNode {
  const colorIcons = useContext(ThemeContext)!.gray;

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
            <NavLink to="catalog/tablets" className={({isActive}) => isActive ? "nav-center__link--isActive nav-center__link": "nav-center__link"}>
              Tablets
            </NavLink>
          </li>

          <li className="nav-center__item">
            <NavLink to="catalog/accessories" className={({isActive}) => isActive ? "nav-center__link--isActive nav-center__link": "nav-center__link"}>
              Accessories
            </NavLink>
          </li>
        </ul>
      </nav>

      <div className="header__right-nav nav-right">
        <ul className="nav-right__list">
          <li className="nav-right__item nav-right__item--favorites">
            <a
              className="nav-right__link"
              href="/"
              aria-label="Got to Your Favorites"
            >
              <HeartIcon fill={colorIcons} />
            </a>
          </li>

          <li className="nav-right__item nav-right__item--cart">
            <a
              className="nav-right__link"
              href="/"
              aria-label="Got to Cart Items"
            >
              <BagIcon fill={colorIcons} />
            </a>
          </li>

          <li className="nav-right__item nav-right__item--menu">
            <a
              className="nav-right__link"
              href="/"
              aria-label="Open Mobile Menu Navigation"
            >
              <MenuIcon fill={colorIcons} />
            </a>
          </li>

          {/* <li className="nav-right__item nav-right__item--login">
            {change this to avatar photo }
            <a
              className="nav-right__link"
              href="/"
              aria-label="Open UserAccount Options"
            >
              <LogoutIcon fill={colorIcons} /> 
            </a>
          </li>*/}
        </ul>
      </div>
    </StyledHeader>
  );
}

export default Header;
