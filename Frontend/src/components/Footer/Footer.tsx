import React from 'react';
import StyledFooter from './StyledFooter.ts';
import { BASE_URL_CDN } from '../../common/constants.ts';
import ButtonArrowPointer from '../ButtonArrowPointer/ButtonArrowPointer.tsx';


interface FooterProps {
  // Define here props of this Component
}

function Footer(props: FooterProps): React.ReactNode {
  const {
    // someProps
  } = props;

  return (
    <StyledFooter className='footer'>
      <a className="footer__home-link" href="/" aria-label="Go to Home Page">
        <img
          className="footer__logo"
          src={`${BASE_URL_CDN}/img/logo.png`}
          alt="Logo"
        />
      </a>

      <nav className='footer__nav nav'>
        <ul className='nav__list'>
          <li className='nav__item'>
            <a href="https://github.com/rwlp/FullStack" target="blank" className="nav__link">
              Git Hub
            </a>
          </li>

          <li className="nav__item">
            <a href="#" className="nav__link">
              Contacts
              </a>
          </li>

          <li className="nav__item">
            <a href="#" className="nav__link">
              Rights
              </a>
          </li>
        </ul>
      </nav>

      <div className='footer__buttons buttons'>
        <a href='#' className='buttons__go-top'>
          <span>Back to top</span>
          <ButtonArrowPointer direction='up' />
        </a>
      </div>
    </StyledFooter>
  );
}

export default Footer;
