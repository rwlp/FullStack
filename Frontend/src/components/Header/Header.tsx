import React, { useContext } from "react";
import { ThemeContext } from "styled-components";
import StyledHeader from "./StyledHeader.ts";
import { BASE_URL_CDN } from "../../utils/constants.ts";
import HeartIcon from "../../assets/icons/HeartLike-empty.svg";
import BagIcon from "../../assets/icons/Empty-cart.svg";
import LogoutIcon from "../../assets/icons/LoginDoor.svg";
import MenuIcon from "../../assets/icons/Menu.svg";

function Header(): React.ReactNode {
  const colorIcons = useContext(ThemeContext)!.gray;

  return (
    <StyledHeader className="header">
      <a className="header_home-link" href="/" aria-label="Go to Home Page">
        <img
          className="header__logo"
          src={`${BASE_URL_CDN}/images/logo.png`}
          alt="Logo"
        />
      </a>

      <nav className="header__center-nav nav-center">
        <ul className="nav-center__list">
          <li className="nav-center__item">
            <a href="/" className="nav-center__link">
              Home
            </a>
          </li>

          <li className="nav-center__item">
            <a href="/" className="nav-center__link">
              Phones
            </a>
          </li>

          <li className="nav-center__item">
            <a href="/" className="nav-center__link nav-center__link--isActive">
              Tablets
            </a>
          </li>

          <li className="nav-center__item">
            <a href="/" className="nav-center__link">
              Accessories
            </a>
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
