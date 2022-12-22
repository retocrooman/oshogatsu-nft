import React from 'react'
import Head from 'next/head'

import NavBar from '../components/nav-bar'
import Campaign from '../components/campaign'
import NFTCard from '../components/n-f-t-card'

const Home = (props) => {
  return (
    <>
      <div className="home-container">
        <Head>
          <title>Copy of nft-store-test</title>
          <meta property="og:title" content="Copy of nft-store-test" />
        </Head>
        <NavBar image_src="/playground_assets/logoinc-holizon-1500h.png"></NavBar>
        <main className="home-main">
          <img
            alt="image"
            src="/playground_assets/%E5%BA%83%E5%B3%B6dao%202023-1400w.png"
            className="home-image"
          />
          <section className="home-hero section-container">
            {/* <div className="home-container1 max-content-container">
              <h2 className="home-text Heading2">キャンペーンやるなら</h2>
              <Campaign></Campaign>
            </div> */}
          </section>
          <section className="home-services section-container">
            <div className="home-max-width max-content-container">
              <h2 className="home-text01">何かしらのメッセージ</h2>
              <p className="home-text02">
                <span className="Content">
                  何かしらのメッセージ何かしらのメッセージ何かしらのメッセージ何かしらのメッセージ何かしらのメッセージ何かしらのメッセージ何かしらのメッセージ何かしらのメッセージ何かしらのメッセージ何かしらのメッセージ何かしらのメッセージ何かしらのメッセージ何かしらのメッセージ何かしらのメッセージ何かしらのメッセージ何かしらのメッセージ何かしらのメッセージ何かしらのメッセージ何かしらのメッセージ何かしらのメッセージ何かしらのメッセージ何かしらのメッセージ何かしらのメッセージ何かしらのメッセージ何かしらのメッセージ何かしらのメッセージ何かしらのメッセージ何かしらのメッセージ何かしらのメッセージ何かしらのメッセージ何かしらのメッセージ何かしらのメッセージ何かしらのメッセージ何かしらのメッセージ何かしらのメッセージ何かしらのメッセージ何かしらのメッセージ何かしらのメッセージ何かしらのメッセージ何かしらのメッセージ何かしらのメッセージ
                </span>
                <br></br>
                <br></br>
                <span>
                  何かしらのメッセージ何かしらのメッセージ何かしらのメッセージ何かしらのメッセージ何かしらのメッセージ何かしらのメッセージ
                </span>
                <br></br>
                <span>
                  何かしらのメッセージ何かしらのメッセージ何かしらのメッセージ何かしらのメッセージ何かしらのメッセージ
                </span>
                <br></br>
              </p>
            </div>
          </section>
          <div className="section-container">
            <div className="home-max-width1 max-content-container">
              <h2 className="home-text10">年賀状NFT一覧</h2>
              <div className="home-max-width2">
                <NFTCard
                  corp_name="株式会社CodeFox"
                  image_alt="CodeFox2023"
                  image_src="/playground_assets/img_0675-500h.png"
                  item_name="うさぎたうくん年賀状 2023"
                  rootClassName="n-f-t-card-root-class-name6"
                ></NFTCard>
                <NFTCard
                  item_name="ITEM NAME A"
                  price="999,999 JPYC"
                  image_src="/playground_assets/unsplash_wwqrpsnbpq4-400h.png"
                  rootClassName="n-f-t-card-root-class-name7"
                ></NFTCard>
                <NFTCard
                  item_name="ITEM NAME B"
                  price="999,999 JPYC"
                  image_src="https://images.unsplash.com/photo-1622483767028-3f66f32aef97?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDEzfHxjb2NhJTIwY29sYXxlbnwwfHx8fDE2NDY5MjYyNTM&amp;ixlib=rb-1.2.1&amp;h=400"
                  rootClassName="n-f-t-card-root-class-name8"
                ></NFTCard>
                <NFTCard
                  item_name="ITEM NAME C"
                  price="999,999 JPYC"
                  image_src="https://images.unsplash.com/photo-1519420573924-65fcd45245f8?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDJ8fG51dGVsbGF8ZW58MHx8fHwxNjQ2OTI2MTky&amp;ixlib=rb-1.2.1&amp;h=400"
                  rootClassName="n-f-t-card-root-class-name9"
                ></NFTCard>
                <NFTCard
                  item_name="ITEM NAME C"
                  price="999,999 JPYC"
                  image_src="https://images.unsplash.com/photo-1567103472667-6898f3a79cf2?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fGNvY2ElMjBjb2xhfGVufDB8fHx8MTY0NjkyNjI1Mw&amp;ixlib=rb-1.2.1&amp;h=400"
                  rootClassName="n-f-t-card-root-class-name10"
                ></NFTCard>
                <NFTCard
                  item_name="ITEM NAME C"
                  price="999,999 JPYC"
                  image_src="https://images.unsplash.com/photo-1545231027-637d2f6210f8?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fHN0YXJidWNrc3xlbnwwfHx8fDE2NDY5MjYyMzc&amp;ixlib=rb-1.2.1&amp;h=400"
                  rootClassName="n-f-t-card-root-class-name11"
                ></NFTCard>
              </div>
            </div>
          </div>
          <div className="home-about section-container">
            <div className="home-max-width3">
              <div className="home-container2">
                <div className="home-container3">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="home-icon"
                  >
                    <path d="M502.857 685.714v91.429c0 10.286-8 18.286-18.286 18.286h-91.429c-10.286 0-18.286-8-18.286-18.286v-91.429c0-10.286 8-18.286 18.286-18.286h91.429c10.286 0 18.286 8 18.286 18.286zM649.143 402.286c0 81.143-56.571 113.143-98.286 136.571-29.714 17.143-48 28-48 46.286v18.286c0 10.286-8 18.286-18.286 18.286h-91.429c-10.286 0-18.286-8-18.286-18.286v-38.857c0-70.286 50.286-92.571 90.857-110.857 34.286-16 55.429-26.857 55.429-52.571 0-33.143-41.714-57.714-79.429-57.714-20 0-41.143 6.286-54.286 15.429-12.571 8.571-24.571 21.143-45.714 47.429-3.429 4.571-8.571 6.857-14.286 6.857-4 0-8-1.143-10.857-3.429l-61.714-46.857c-7.429-5.714-9.143-16.571-4-24.571 46.857-73.714 112.571-109.714 199.429-109.714v0c93.714 0 198.857 74.286 198.857 173.714zM438.857 146.286c-201.714 0-365.714 164-365.714 365.714s164 365.714 365.714 365.714 365.714-164 365.714-365.714-164-365.714-365.714-365.714zM877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857v0c242.286 0 438.857 196.571 438.857 438.857z"></path>
                  </svg>
                </div>
                <span className="home-text11 Heading2">ヘルプ</span>
                <span className="home-text12">
                  <span className="Content">へ</span>
                  <span>よくある質問やお問い合わせはこちらから</span>
                </span>
              </div>
              <div className="home-container4">
                <div className="home-container5">
                  <svg
                    viewBox="0 0 952.5394285714285 1024"
                    className="home-icon2"
                  >
                    <path d="M936.571 273.143c14.286 20.571 18.286 47.429 10.286 73.714l-157.143 517.714c-14.286 48.571-64.571 86.286-113.714 86.286h-527.429c-58.286 0-120.571-46.286-141.714-105.714-9.143-25.714-9.143-50.857-1.143-72.571 1.143-11.429 3.429-22.857 4-36.571 0.571-9.143-4.571-16.571-3.429-23.429 2.286-13.714 14.286-23.429 23.429-38.857 17.143-28.571 36.571-74.857 42.857-104.571 2.857-10.857-2.857-23.429 0-33.143 2.857-10.857 13.714-18.857 19.429-29.143 15.429-26.286 35.429-77.143 38.286-104 1.143-12-4.571-25.143-1.143-34.286 4-13.143 16.571-18.857 25.143-30.286 13.714-18.857 36.571-73.143 40-103.429 1.143-9.714-4.571-19.429-2.857-29.714 2.286-10.857 16-22.286 25.143-35.429 24-35.429 28.571-113.714 101.143-93.143l-0.571 1.714c9.714-2.286 19.429-5.143 29.143-5.143h434.857c26.857 0 50.857 12 65.143 32 14.857 20.571 18.286 47.429 10.286 74.286l-156.571 517.714c-26.857 88-41.714 107.429-114.286 107.429h-496.571c-7.429 0-16.571 1.714-21.714 8.571-4.571 6.857-5.143 12-0.571 24.571 11.429 33.143 50.857 40 82.286 40h527.429c21.143 0 45.714-12 52-32.571l171.429-564c3.429-10.857 3.429-22.286 2.857-32.571 13.143 5.143 25.143 13.143 33.714 24.571zM328.571 274.286c-3.429 10.286 2.286 18.286 12.571 18.286h347.429c9.714 0 20.571-8 24-18.286l12-36.571c3.429-10.286-2.286-18.286-12.571-18.286h-347.429c-9.714 0-20.571 8-24 18.286zM281.143 420.571c-3.429 10.286 2.286 18.286 12.571 18.286h347.429c9.714 0 20.571-8 24-18.286l12-36.571c3.429-10.286-2.286-18.286-12.571-18.286h-347.429c-9.714 0-20.571 8-24 18.286z"></path>
                  </svg>
                </div>
                <span className="home-text15 Heading2">ヘルプ</span>
                <span className="home-text16">
                  <span className="Content">へ</span>
                  <span>よくある質問やお問い合わせはこちらから</span>
                </span>
              </div>
            </div>
          </div>
        </main>
        <div className="section-container">
          <div className="max-content-container">
            <div className="home-top-part">
              <div className="home-links-container">
                <div className="home-product-container">
                  <h3 className="home-text19">協賛企業一覧</h3>
                  <div className="home-product-container1">
                    <a
                      href="https://jpyc.co.jp/"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="home-link"
                    >
                      JPYC株式会社
                    </a>
                    <a
                      href="https://jpyc.co.jp/"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="home-link1"
                    >
                      JPYC株式会社
                    </a>
                    <a
                      href="https://jpyc.co.jp/"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="home-link2"
                    >
                      JPYC株式会社
                    </a>
                    <a
                      href="https://otagroup.co.jp/"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="home-link3"
                    >
                      OTAGROUP株式会社
                    </a>
                    <a
                      href="https://otagroup.co.jp/"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="home-link4"
                    >
                      OTAGROUP株式会社
                    </a>
                    <a
                      href="https://otagroup.co.jp/"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="home-link5"
                    >
                      OTAGROUP株式会社
                    </a>
                    <a
                      href="https://codefox.co.jp/"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="home-link6"
                    >
                      CodeFox Inc.
                    </a>
                    <a
                      href="https://codefox.co.jp/"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="home-link7"
                    >
                      CodeFox Inc.
                    </a>
                    <a
                      href="https://codefox.co.jp/"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="home-link8"
                    >
                      CodeFox Inc.
                    </a>
                  </div>
                </div>
                <div className="home-hiroshima-camps-d-a-o">
                  <h3 className="home-text20">Hiroshima Camps DAO</h3>
                  <img
                    alt="Discord"
                    src="/playground_assets/discord-svgrepo-com.svg"
                    className="home-image1"
                  />
                </div>
              </div>
              <div className="home-subscribe-container">
                <span>Powerd by</span>
                <img
                  alt="image"
                  src="/playground_assets/logoinc-holizon-1500h.png"
                  className="home-image2"
                />
              </div>
            </div>
          </div>
          <div className="home-separator"></div>
          <footer className="home-max-width5 max-content-container">
            <span className="home-text22">
              © Hiroshima DAO, CodeFox Inc. and all collaborating companies.
            </span>
          </footer>
        </div>
      </div>
      <style jsx>
        {`
          .home-container {
            width: 100%;
            display: flex;
            position: relative;
            min-height: 100vh;
            overflow-x: hidden;
            align-items: center;
            flex-direction: column;
          }
          .home-main {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-image {
            width: 100%;
            height: auto;
            max-width: var(--dl-size-size-maxwidth);
            align-self: center;
            object-fit: cover;
          }
          .home-hero {
            gap: var(--dl-space-space-oneandhalfunits);
            position: relative;
          }
          .home-container1 {
            gap: var(--dl-space-space-oneandhalfunits);
          }
          .home-text {
            width: auto;
            text-align: center;
          }
          .home-services {
            display: flex;
            flex-direction: column;
            background-color: var(--dl-color-scheme-lightbrown);
          }
          .home-max-width {
            gap: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
          }
          .home-text01 {
            width: auto;
            text-align: center;
          }
          .home-text02 {
            width: 70%;
            min-width: 400px;
            text-align: center;
          }
          .home-max-width1 {
            gap: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
          }
          .home-text10 {
            text-align: center;
          }
          .home-max-width2 {
            display: grid;
            grid-gap: var(--dl-space-space-oneandhalfunits);
            max-width: 100%;
            grid-template-columns: repeat(auto-fit, 320px);
          }
          .home-about {
            background-color: var(--dl-color-scheme-lightbrown);
          }
          .home-max-width3 {
            width: 65%;
            display: flex;
            min-width: 450px;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-container2 {
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-container3 {
            width: var(--dl-size-size-xxlarge);
            height: var(--dl-size-size-xxlarge);
            display: flex;
            align-items: center;
            border-radius: var(--dl-radius-radius-round);
            justify-content: center;
            background-color: var(--dl-color-scheme-darkgray50);
          }
          .home-icon {
            fill: var(--dl-color-scheme-black80);
            width: var(--dl-size-size-large);
            height: var(--dl-size-size-large);
          }
          .home-text11 {
            font-style: normal;
            margin-top: var(--dl-space-space-unit);
          }
          .home-text12 {
            font-style: normal;
            margin-top: var(--dl-space-space-unit);
            letter-spacing: em;
          }
          .home-container4 {
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-container5 {
            width: var(--dl-size-size-xxlarge);
            height: var(--dl-size-size-xxlarge);
            display: flex;
            align-items: center;
            border-radius: var(--dl-radius-radius-round);
            justify-content: center;
            background-color: var(--dl-color-scheme-darkgray50);
          }
          .home-icon2 {
            width: var(--dl-size-size-large);
            height: var(--dl-size-size-large);
          }
          .home-text15 {
            font-style: normal;
            margin-top: var(--dl-space-space-unit);
          }
          .home-text16 {
            font-style: normal;
            margin-top: var(--dl-space-space-unit);
            letter-spacing: em;
          }
          .home-top-part {
            width: 100%;
            display: flex;
            align-items: stretch;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-links-container {
            width: 75%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-product-container {
            gap: var(--dl-space-space-oneandhalfunits);
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-text19 {
            color: var(--dl-color-scheme-brown);
            font-weight: 700;
          }
          .home-product-container1 {
            gap: var(--dl-space-space-unit);
            flex: 0 0 auto;
            height: var(--dl-size-size-large);
            display: flex;
            flex-wrap: wrap;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-link {
            text-decoration: none;
          }
          .home-link1 {
            text-decoration: none;
          }
          .home-link2 {
            text-decoration: none;
          }
          .home-link3 {
            text-decoration: none;
          }
          .home-link4 {
            text-decoration: none;
          }
          .home-link5 {
            text-decoration: none;
          }
          .home-link6 {
            text-decoration: none;
          }
          .home-link7 {
            text-decoration: none;
          }
          .home-link8 {
            text-decoration: none;
          }
          .home-hiroshima-camps-d-a-o {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-text20 {
            color: var(--dl-color-scheme-brown);
            font-weight: 700;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .home-image1 {
            width: 32px;
            height: 32px;
            object-fit: cover;
          }
          .home-subscribe-container {
            flex: 0 0 auto;
            width: 35%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-image2 {
            width: auto;
            object-fit: cover;
          }
          .home-separator {
            width: 100%;
            height: 1px;
            margin-top: var(--dl-space-space-twounits);
            margin-bottom: var(--dl-space-space-twounits);
            background-color: #d9d9d9;
          }
          .home-max-width5 {
            flex-direction: row;
            justify-content: flex-end;
          }
          .home-text22 {
            align-self: center;
            font-style: normal;
            font-weight: 400;
          }
          @media (max-width: 1200px) {
            .home-max-width1 {
              position: relative;
            }
            .home-max-width2 {
              position: relative;
            }
          }
          @media (max-width: 991px) {
            .home-max-width3 {
              flex-direction: column;
            }
          }
          @media (max-width: 767px) {
            .home-hero {
              gap: var(--dl-space-space-unit);
            }
            .home-top-part {
              align-items: center;
              flex-direction: column;
              justify-content: space-between;
            }
            .home-links-container {
              width: 100%;
              align-items: flex-start;
              margin-bottom: var(--dl-space-space-oneandhalfunits);
              flex-direction: row;
            }
            .home-subscribe-container {
              width: 100%;
            }
          }
          @media (max-width: 479px) {
            .home-top-part {
              align-items: center;
              flex-direction: column;
            }
            .home-hiroshima-camps-d-a-o {
              align-items: flex-start;
              margin-bottom: 0px;
            }
            .home-max-width5 {
              flex-direction: column;
            }
            .home-text22 {
              text-align: center;
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
