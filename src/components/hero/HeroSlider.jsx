import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

const HeroSlider = () => {
  const slides = [
    {
      title1: "StakeQuest Legends Overview",
      description: "StakeQuest Legends is an innovative Web3 gaming platform...",
      img1: "/assets/img/hero/hero-1-1.png",
      img2: "/assets/img/hero/hero-1-2.png"
    },
    {
      title1: "Join The Big Tournaments",
      description: "Beyond esports tournaments...",
      img1: "/assets/img/hero/hero-1-3.png",
      img2: "/assets/img/hero/hero-1-4.png"
    },
    // Add more slides as needed
  ];

  return (
    <Swiper
      className="th-slider hero-cta-slider1"
      modules={[EffectFade, Pagination]}
      effect="fade"
      pagination={{ clickable: true }}
      id="heroSlider1"
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className="hero-cta-inner">
            <div className="container th-container2">
              <div className="hero-shape-area">
                <div className="hero-bg-shape">
                  <div 
                    className="hero-bg-border-anime" 
                    data-mask-src="/assets/img/hero/hero-bg-shape.png"
                  ></div>
                  
                  {/* SVG Content - can be moved to a separate component */}
                  <svg viewBox="0 0 1600 520" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* SVG paths from your HTML */}
                    <path d="M1599 30V490C1599 506.016..." fill="black" stroke="url(#paint0_linear1_47_22)" strokeWidth="2" />
                    {/* Include other SVG elements */}
                  </svg>

                  <div className="verses-thumb d-xl-none d-block">
                    <img src="/assets/img/tournament/game-vs1.svg" alt="tournament" />
                  </div>
                  
                  <div className="hero-img1 z-index-common" data-ani="slideinleft" data-ani-delay="0.4s">
                    <img src={slide.img1} alt="Hero" />
                  </div>
                  
                  <div className="hero-img2 z-index-common" data-ani="slideinright" data-ani-delay="0.4s">
                    <img src={slide.img2} alt="Hero" />
                  </div>
                </div>
                
                <div className="title-area mb-0">
                  <h2 className="sec-title text-white">{slide.title1}</h2>
                  <p className="mt-30 mb-30">
                    {slide.description}
                    <ul>
                      <li>Adventurers seeking epic quests...</li>
                      <li>Strategic investors looking for...</li>
                    </ul>
                  </p>
                  <div className="btn-group">
                    <a href="/about" className="th-btn style-border">
                      <span className="btn-border">
                        JOIN NOW <i className="fa-solid fa-arrow-right ms-2"></i>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>

    
  );
};

export default HeroSlider;