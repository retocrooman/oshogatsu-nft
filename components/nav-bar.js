import React from 'react'

import PropTypes from 'prop-types'

import {
  MyConnectButton,
} from "./my-connect-button";

const NavBar = (props) => {
  return (
    <>
      <header data-role="Header" className="nav-bar-header">
        <div className="nav-bar-max-width">
          <img
            alt={props.image_alt}
            src={props.image_src}
            className="nav-bar-image"
          />
          <MyConnectButton
          />
        </div>
      </header>
      <style jsx>
        {`
          .nav-bar-header {
            top: 0;
            width: 100%;
            display: flex;
            z-index: 100;
            position: fixed;
            align-items: center;
            justify-content: center;
            background-color: var(--dl-color-scheme-white);
          }
          .nav-bar-max-width {
            width: 100%;
            height: auto;
            display: flex;
            position: relative;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            padding-bottom: var(--dl-space-space-unit);
            justify-content: space-between;
          }
          .nav-bar-image {
            width: auto;
            max-width: var(--dl-size-size-large);
            max-height: auto;
          }
          .nav-bar-nav {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .nav-bar-register {
            margin-left: var(--dl-space-space-twounits);
          }
          .nav-bar-burger-menu {
            display: none;
          }
          .nav-bar-icon {
            fill: var(--dl-color-scheme-darkblue);
            width: 24px;
            height: 24px;
            display: flex;
          }
          .nav-bar-mobile-menu {
            display: none;
          }
          .nav-bar-nav1 {
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
          }
          .nav-bar-container {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
          }
          .nav-bar-close-mobile-menu {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .nav-bar-icon2 {
            width: 24px;
            height: 24px;
          }
          @media (max-width: 991px) {
            .nav-bar-nav {
              display: none;
            }
            .nav-bar-burger-menu {
              display: flex;
            }
          }
          @media (max-width: 767px) {
            .nav-bar-max-width {
              padding: var(--dl-space-space-unit);
            }
          }
        `}
      </style>
    </>
  )
}

NavBar.defaultProps = {
  image_src: '/playground_assets/jp-post-new-logo-img.svg',
  button: 'Wallet Connect',
  button2: 'Get in touch',
  image_alt: 'logo',
}

NavBar.propTypes = {
  image_src: PropTypes.string,
  button: PropTypes.string,
  button2: PropTypes.string,
  image_alt: PropTypes.string,
}

export default NavBar
