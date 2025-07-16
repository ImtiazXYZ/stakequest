import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const Marquee = () => {
  const items = [
    "GAMING SPANNING",
    "ACTION - PACKED",
    "MIND - BENDING",
    "COLLECTION OF GAMES",
    "GAMING SPANNING",
    "ACTION - PACKED",
    "MIND - BENDING",
    "COLLECTION OF GAMES",
  ];

  return (
    <div 
      className="marquee-area"
      style={{ 
        backgroundImage: "url('/assets/img/bg/jiji-bg.png')",
        padding: "20px 0",
        overflow: "hidden"
      }}
    >
      <style jsx>{`
        .marquee-area {
          background-color: #0a0e17;
          position: relative;
          z-index: 1;
        }
        
        .marquee-item {
          display: flex;
          align-items: center;
          gap: 15px;
          white-space: nowrap;
        }
        
        .marquee_icon img {
          width: 24px;
          height: 24px;
          object-fit: contain;
          animation: spin 4s linear infinite;
        }
        
        .marquee-title {
          margin: 0;
          font-size: 24px;
          font-weight: 700;
          color: #fff;
          text-transform: uppercase;
          letter-spacing: 1px;
          position: relative;
          display: inline-block;
        }
        
        .marquee-title a {
          color: inherit;
          text-decoration: none;
          transition: all 0.3s ease;
        }
        
        .marquee-title a:hover {
          color: #00f5a0;
        }
        
        .marquee-title:after {
          content: '';
          position: absolute;
          left: 0;
          bottom: -5px;
          width: 100%;
          height: 2px;
          background: linear-gradient(90deg, #00f5a0, transparent);
          opacity: 0.5;
        }
        
        .th-slider {
          padding: 10px 0;
        }
        
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        @media (max-width: 768px) {
          .marquee-title {
            font-size: 18px;
          }
          
          .marquee_icon img {
            width: 18px;
            height: 18px;
          }
        }
      `}</style>
      
      <div className="container-fluid">
        <Swiper
          modules={[Autoplay]}
          slidesPerView="auto"
          spaceBetween={40}
          autoplay={{ 
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
            reverseDirection: false
          }}
          speed={5000}
          loop={true}
          freeMode={true}
          allowTouchMove={false}
          className="th-slider"
        >
          {items.map((title, index) => (
            <SwiperSlide key={index} className="marquee-item" style={{ width: 'auto' }}>
              <div className="marquee_icon">
                <img src="/assets/img/normal/star.png" alt="Icon" />
              </div>
              <h3 className="marquee-title">
                <a href="#">{title}</a>
              </h3>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Marquee;