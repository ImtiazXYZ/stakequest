import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules'; // Import Autoplay module
import 'swiper/css';

const Marquee = () => {
  const items = [
    "GAMING SPANING",
    "ACTION - PACKED",
    "MIND - BENDING",
    "COLLECTION OF GAMES",
    "GAMING SPANING",
    "ACTION - PACKED",
    "MIND - BENDING",
    "COLLECTION OF GAMES",
  ];

  return (
    <div 
      className="marquee-area-1 bg-repeat overflow-hidden"
      style={{ backgroundImage: "url('/assets/img/bg/jiji-bg.png')" }}
    >
      <div className="container-fluid">
        <Swiper
          className="th-slider"
          modules={[Autoplay]} // Add Autoplay module
          slidesPerView="auto"
          spaceBetween={50}
          autoplay={{ 
            delay: 0, // Set to 0 for continuous movement
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
            reverseDirection: false
          }}
          speed={5000} // Adjust speed as needed
          loop={true}
          freeMode={true}
          allowTouchMove={false}
        >
          {items.map((title, index) => (
            <SwiperSlide key={index} className="marquee-item" style={{ width: 'auto' }}>
              <div className="marquee_icon">
                <img src="/assets/img/normal/star.png" alt="Icon" />
              </div>
              <h3 className="marquee-title">
                <a href="/service-details">{title}</a>
              </h3>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Marquee;