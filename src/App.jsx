import { useState } from "react";
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

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="vw-100 vh-100 d-flex flex-column justify-content-start">
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

      <div className="third_section">
        <h2 id="third_section__title">Poliçemi neden Sigortam.net'ten almalıyım ?</h2>
      </div>
    </>
  );
}

export default App;
