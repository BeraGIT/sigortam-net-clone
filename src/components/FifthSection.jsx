import { useState } from 'react';
import campaign1 from '../assets/images/fifth-section/besiktas.webp';
import campaign2 from '../assets/images/fifth-section/n11-kampanya.webp';
import campaign3 from '../assets/images/fifth-section/besiktas.webp';

const FifthSection = () => {
  const [activeTab, setActiveTab] = useState('ads');
  const [currentIndex, setCurrentIndex] = useState(0);

  const videos = ['OMyxYmyyJRg', 'fkTBn_w8Jzw', '-ZpvfneEadA'];
  const images = [campaign1, campaign2, campaign3];

  const content = {
    ads: videos,
    discounts: images,
  };

  const handleNavigation = (direction) => {
    setCurrentIndex((prev) =>
      direction === 'next'
        ? (prev + 1) % content[activeTab].length
        : (prev - 1 + content[activeTab].length) % content[activeTab].length
    );
  };

  return (
    <section className="fifth_section">
      <h2 className="carousel_title">Sigortam.net'te sana özel neler var?</h2>
      <br /><br /><br />
      <div className="tabs_container">
        <button
          className={`tab ${activeTab === 'discounts' ? 'active' : ''}`}
          onClick={() => setActiveTab('discounts')}
        >
          İndirimler & Kampanyalar
        </button>
        <button
          className={`tab ${activeTab === 'ads' ? 'active' : ''}`}
          onClick={() => setActiveTab('ads')}
        >
          Reklam Filmleri
        </button>
        <button className="tab disabled">Öne Çıkanlar</button>
      </div>

      {activeTab !== 'featured' && (
        <div className="carousel">
          <button className="nav_arrow left" onClick={() => handleNavigation('prev')}>
            &lt;
          </button>

          <div className="content">
            {activeTab === 'ads' ? (
              <iframe
                className="media"
                src={`https://www.youtube.com/embed/${videos[currentIndex]}`}
                title="YouTube video player"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
              ></iframe>
            ) : (
              <img src={images[currentIndex]} alt="Kampanya" className="media" />
            )}
          </div>

          <button className="nav_arrow right" onClick={() => handleNavigation('next')}>
            &gt;
          </button>

          <div className="dots_container">
            {content[activeTab].map((_, index) => (
              <button key={index} className={`dot ${index === currentIndex ? 'active' : ''}`} />
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default FifthSection;





