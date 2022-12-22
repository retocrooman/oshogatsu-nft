import React from 'react'

import PropTypes from 'prop-types'
import { MintButton } from './mint-button'
import { contractAddressMap } from '../constant/contractAddressMap'
import { GasFreeMintButton } from './gas-free-mint-button'

const NFTCard = (props) => {
  return (
    <>
      <>
        <article className={`n-f-t-card-speaker-card ${props.rootClassName} `}>
          <div className="n-f-t-card-container">
            <div className="n-f-t-card-image-container">
              <img
                alt={props.image_alt}
                src={props.image_src}
                className="n-f-t-card-image"
              />
            </div>
          </div>
          <span className="n-f-t-card-first-name Content">
            {props.corp_name}
          </span>
          <h3 className="n-f-t-card-first-name1 Heading3">{props.item_name}</h3>
          <div className="n-f-t-card-container1">
            <GasFreeMintButton contractAddress={contractAddressMap[props.item_name]}/>
          </div>
        </article>
      </>
      <style jsx>
        {`
          .n-f-t-card-speaker-card {
            display: flex;
            padding: var(--dl-space-space-unit);
            position: relative;
            max-width: 320px;
            min-width: 320px;
            transition: 0.3s;
            align-items: flex-start;
            border-color: var(--dl-color-scheme-darkgray50);
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius8);
            flex-direction: column;
            background-color: var(--dl-color-scheme-white);
          }

          .n-f-t-card-container {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .n-f-t-card-image-container {
            width: 100%;
            height: 100%;
            display: flex;
            overflow: hidden;
            position: relative;
            max-height: 500px;
            min-height: 500px;
            object-fit: cover;
            border-radius: var(--dl-radius-radius-radius8);
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: column;
            justify-content: flex-start;
            background-color: var(--dl-color-scheme-white);
          }
          .n-f-t-card-image {
            left: 0px;
            width: 100%;
            bottom: 0px;
            height: 100%;
            margin: auto;
            position: absolute;
            margin-top: 0px;
            object-fit: cover;
            border-radius: var(--dl-radius-radius-radius8);
          }
          .n-f-t-card-first-name {
            font-style: normal;
          }
          .n-f-t-card-first-name1 {
            margin-top: var(--dl-space-space-halfunit);
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .n-f-t-card-container1 {
            height: 100%;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .n-f-t-card-button {
            color: var(--dl-color-scheme-white);
            background-color: var(--dl-color-scheme-lightblue);
          }

          @media (max-width: 1200px) {
            .n-f-t-card-root-class-name9 {
              left: 0px;
              bottom: 0px;
              position: static;
            }
          }
        `}
      </style>
    </>
  )
}

NFTCard.defaultProps = {
  rootClassName: '',
  item_name: 'ITEM NAME AAAAAAAAAA',
  link: '',
  corp_name: 'CORP NAME',
  image_alt: 'image',
  image_src: '/playground_assets/img_0675-400h.png',
  button: 'Mint',
}

NFTCard.propTypes = {
  rootClassName: PropTypes.string,
  item_name: PropTypes.string,
  link: PropTypes.string,
  corp_name: PropTypes.string,
  image_alt: PropTypes.string,
  image_src: PropTypes.string,
  button: PropTypes.string,
}

export default NFTCard
