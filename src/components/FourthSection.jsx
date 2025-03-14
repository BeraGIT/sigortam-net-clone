import { useState, useRef, useEffect } from 'react';

const FourthSection = ({ phoneContent1, phoneContent2, phoneWebp }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef(null);
  const timeoutRef = useRef(null); 

  const CONTENTS = [
    {
      text: "Hangi ürün bana en uygun diye düşünme, biz senin için en net teklifleri sıraladık bile!",
      subtext: "Tüm teminatları tek tek inceledik, ihtiyaçlarına en uygun olan teminatları belirledik. Sana özel kapsamlı ve fiyatı uygun ürün önerileri hazırladık."
    },
    {
      text: "Sadece 2 dakikada tüm teklifleri kolayca karşılaştır.",
      subtext: "20+ sigorta şirketinden teklifleri tek platformda karşılaştır, internete özel indirimlerle uygun fiyata sigortan anında başlasın."
    }
  ];

  const handleWheel = (e) => {
    if (!isHovered) return;

    const deltaY = e.deltaY;
    let newIndex = activeIndex;

    // Aşağı scroll
    if (deltaY > 0) {
      newIndex = Math.min(activeIndex + 1, CONTENTS.length - 1);
    } 
    // Yukarı scroll
    else {
      newIndex = Math.max(activeIndex - 1, 0);
    }

    if (newIndex !== activeIndex) {
      e.preventDefault();
      
      // Önceki timeoutu temizle
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      
      // Yeni indexi hemen güncelle
      setActiveIndex(newIndex);
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    container.addEventListener('wheel', handleWheel, { passive: false });
    return () => {
      container.removeEventListener('wheel', handleWheel);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [isHovered, activeIndex]);

  return (
    <section
      ref={containerRef}
      className="fourth_section"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Sol Taraf - Scroll Content */}
      <div className="scroll_content">
        {CONTENTS.map((content, index) => (
          <div
            key={index}
            className={`content_item ${index === activeIndex ? 'active' : ''}`}
          >
            <div className="content_title">{content.text}</div>
            <p className="content_subtext">{content.subtext}</p>
            <button className="offer_button">Hemen Teklif Al</button>
          </div>
        ))}
      </div>

      {/* Sağ Taraf - Phone Image */}
      <div className="phone_container">
        <img src={phoneWebp} alt="Phone" className="phone_image" />
        <div className="svg_overlay">
          <img
            src={phoneContent1}
            className={`svg_item ${activeIndex === 0 ? 'active' : 'leaving'}`}
            alt="Content 1"
          />
          <img
            src={phoneContent2}
            className={`svg_item ${activeIndex === 1 ? 'active' : 'leaving'}`}
            alt="Content 2"
          />
        </div>
      </div>
    </section>
  );
};

export default FourthSection;
