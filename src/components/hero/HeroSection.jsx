import HeroSlider from './HeroSlider';

const HeroSection = () => {
  return (
    <div className="th-hero-wrapper hero-1" id="hero" style={{ 
      backgroundImage: "url('/assets/img/hero/hero-bg1-1.png')"
    }}>
      <div className="container">
        <div className="hero-style1 text-center">
          <span className="sub-title">
            StakeQuest Legends: Where Gaming Meets Blockchain Innovation
          </span>
          <h1 className="hero-title">
            <span className="title1">Quest Hard, Stake Smart</span>
            <span className="title2">Your Epic Blockchain Adventure</span>
          </h1>
          <div className="btn-group">
            <button className="th-btn">
              EXPLORE MORE <i className="fa-solid fa-arrow-right ms-2"></i>
            </button>
            <button className="th-btn style2">
              BROWSE GAMES <i className="fa-solid fa-arrow-right ms-2"></i>
            </button>
          </div>
        </div>
      </div>
      <HeroSlider />
    </div>
  );
};

export default HeroSection;