import { useState, useRef, useEffect } from "react";
import appLogoGoat from "./assets/images/header/app-logo-goat.svg";
import appLogoTitle from "./assets/images/header/app-logo-title.svg";
import phoneLogo from "./assets/images/header/phone-logo.svg";

// section 2
import autoV2 from "./assets/images/second-section/auto-v2.svg";
import electricVehicleOrange from "./assets/images/second-section/electric-vehicle-orange.svg";
import healthOrange from "./assets/images/second-section/healthOrange.svg";
import trafficOrange from "./assets/images/second-section/traffic-orange.svg";
import travel from "./assets/images/second-section/travel.svg";
import imm from "./assets/images/second-section/imm.svg";
import daskV2 from "./assets/images/second-section/dask-v2.svg";
import complementhealthV2 from "./assets/images/second-section/complementhealth-v2.svg";

// fixed
import gift from "./assets/images/fixed/gift.svg";
import rightArrow from "./assets/images/fixed/right-arrow.svg";

// section 3
import policyTrustworthy from "./assets/images/third-section/policy-trustworthy.svg";
import policyPrice from "./assets/images/third-section/policy-price.svg";
import policyWithYou from "./assets/images/third-section/policy-with-you.svg";

// section 4

import phoneContent1 from './assets/images/fourth-section/phone-content1.svg';
import phoneContent2 from './assets/images/fourth-section/phone-content2.svg';
import phoneWebp from './assets/images/fourth-section/phone.webp';
import FourthSection from './components/FourthSection';

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="vw-100 vh-100 d-flex flex-column justify-content-start">
        {/* HEADER */}
        <div
          id="header"
          className="header d-flex w-100 justify-content-between align-items-center"
        >
          {/* START */}
          <div className="d-flex align-items-center">
            <img src={appLogoGoat} className="logo__goat" alt="" />
            <img src={appLogoTitle} className="logo__title" alt="" />
          </div>

          {/* CENTER */}
          <div className="d-flex gap-5 fs-6" style={{ fontWeight: 500 }}>
            <span>Ürünlerimiz</span>
            <a
              className="darker-gray-color"
              target="_blank"
              href="http://localhost:5173/"
            >
              Kampanyalar
            </a>
            <a
              className="darker-gray-color"
              target="_blank"
              href="http://localhost:5173/"
            >
              Poliçe İptal İşlemleri
            </a>
            <span>Bilgi Merkezi</span>
          </div>

          {/* END */}
          <div className="d-flex align-items-center gap-4">
            <div className="d-flex flex-column w-auto align-items-end">
              <span className="fs-12 gray-color">Yardımcı Olmaya Hazırız</span>
              <div className="d-flex gap-1">
                <img src={phoneLogo} alt="" style={{ width: 24, height: 24 }} />
                <span className="fw-semibold fs-6">444 24 00</span>
              </div>
            </div>
            <button className="login__button">Giriş Yap / Üye Ol</button>
          </div>
        </div>

        {/* SECOND SECTION */}
        <div className="second_section d-flex justify-content-center align-items-center">
          <div
            className="d-flex flex-column justify-content-center align-items-center"
            style={{ width: 890 }}
          >
            <span className="second_section__title">
              Sigortada Güvenin Adresi
            </span>
            <span className="second_section__subtitle darker-gray-color">
              Doğru Ürün. İyi Fiyat. 7/24 Hizmet.
            </span>
            <div className="second_section__boxes">
              <div className="second_section__box__base second_section__box__large">
                <img src={autoV2} alt="" />
                <span>Kasko</span>
              </div>
              <div className="second_section__box__base second_section__box__large">
                <img src={electricVehicleOrange} alt="" />
                <span>Elektrikli Araç Kaskosu</span>
              </div>
              <div className="second_section__box__base second_section__box__large">
                <img src={complementhealthV2} alt="" />
                <span>Tamamlayıcı Sağlık</span>
              </div>
              <div className="second_section__box__base second_section__box__small">
                <img src={trafficOrange} alt="" />
                <span>Trafik Sigortası</span>
              </div>
              <div className="second_section__box__base second_section__box__small">
                <img src={imm} alt="" />
                <span>İMM</span>
              </div>
              <div className="second_section__box__base second_section__box__small">
                <img src={healthOrange} alt="" />
                <span>Özel Sağlık</span>
              </div>
              <div className="second_section__box__base second_section__box__small">
                <img src={travel} alt="" />
                <span>Seyahat Sağlık</span>
              </div>
              <div className="second_section__box__base second_section__box__small">
                <img src={daskV2} alt="" />
                <span>DASK</span>
              </div>
            </div>
            <span className="second_section__see__more">Tüm Ürünleri Gör</span>
          </div>
        </div>
      </div>

      {/* FIXED */}
      <div className="fixed__invite_friends">
        <img src={gift} alt="" />
        <span>
          Arkadaşlarını Davet Et, 20.000 TL’ye varan hediye çeki kazan!
        </span>
        <img src={rightArrow} alt="" width={22} />
      </div>

      {/* THIRD SECTION */}
      <div className="third_section">
        <h2 className="third_section__title">
          Poliçemi neden Sigortam.net'ten almalıyım?
        </h2>
        <div className="third_section__content">
          <div className="third_section__card">
            <img src={policyTrustworthy} alt="Güvenilir" />
            <h3 className="third_section__card__title">Doğru Ürün</h3>
            <span className="third_section__card__text">
              Yenilenen yapay zekâmızla, onlarca sigorta teklifi arasından
              ucuzunu, sana uygununu ve kapsamlısını buluyoruz. Net teminatlar ve
              net fiyatlarla kararın hep net olsun.
            </span>
          </div>
          <div className="third_section__card">
            <img src={policyPrice} alt="Uygun Fiyat" />
            <h3 className="third_section__card__title">İyi Fiyat</h3>
            <span className="third_section__card__text">
              Önceliğimiz her zaman sensin. Çalıştığımız tüm şirketlerde bütçeni
              düşünerek “en iyi fiyat garantisi” sunuyoruz.
            </span>
          </div>
          <div className="third_section__card">
            <img src={policyWithYou} alt="Yanınızda" />
            <h3 className="third_section__card__title">7/24 Hizmet</h3>
            <span className="third_section__card__text">
              24 yıllık tecrübemiz ve uzman sigorta danışmanlarımızla 7/24 her
              ihtiyacında yanındayız. Üstelik hasar anında saniyeler içinde bize
              ulaşabilirsin.
            </span>
          </div>
        </div>
      </div>

      {/* FOURTH SECTION */}
      <FourthSection 
        phoneContent1={phoneContent1}
        phoneContent2={phoneContent2}
        phoneWebp={phoneWebp}
      />
    </>
  );
}

export default App;