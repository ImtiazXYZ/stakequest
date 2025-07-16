import { useEffect } from "react";

const AboutSection = () => {
  // Initialize animations on component mount
  useEffect(() => {
    const animateElements = () => {
      const elements = document.querySelectorAll('.custom-animate');
      elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        const isVisible = (rect.top <= window.innerHeight * 0.75);
        
        if (isVisible) {
          el.classList.add('animated');
        }
      });
    };

    window.addEventListener('scroll', animateElements);
    animateElements(); // Run once on load
    
    return () => window.removeEventListener('scroll', animateElements);
  }, []);

  return (
    <div className="overflow-hidden space" id="about-sec">
      <style jsx>{`
        /* Base styles */
        #about-sec {
          position: relative;
          padding: 80px 0;
          background: #0a0a0a;
          color: #fff;
          overflow: hidden;
        }
        
        /* Background image */
        .about-bg-img {
          position: absolute;
          z-index: 0;
          opacity: 0.15;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
        }
        
        .about-bg-img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        
        /* Content container */
        .container {
          position: relative;
          z-index: 1;
        }
        
        /* Image box */
        .img-box1 {
          position: relative;
          padding: 20px;
          perspective: 1000px;
        }
        
        .img1 {
          border-radius: 15px;
          overflow: hidden;
          box-shadow: 0 25px 50px rgba(0,0,0,0.3);
          transform-style: preserve-3d;
          transition: all 0.5s ease;
        }
        
        .img1:hover {
          transform: translateY(-10px) rotateX(5deg);
          box-shadow: 0 35px 60px rgba(0,0,0,0.4);
        }
        
        .img1 img {
          width: 100%;
          height: auto;
          display: block;
        }
        
        /* About content */
        .about-wrap1 {
          padding: 20px;
        }
        
        /* Title section */
        .about-title-wrap {
          margin-bottom: 40px;
          position: relative;
        }
        
        .about-title-thumb {
          position: absolute;
          top: -30px;
          right: -30px;
          width: 120px;
          height: 120px;
          z-index: -1;
          opacity: 0.7;
        }
        
        .about-title-thumb img {
          width: 100%;
          height: auto;
          animation: float 6s ease-in-out infinite;
        }
        
        .title-area {
          margin-bottom: 30px;
        }
        
        .sub-title {
          display: inline-block;
          color: #6cff6c;
          font-size: 18px;
          font-weight: 600;
          margin-bottom: 15px;
          text-transform: uppercase;
          letter-spacing: 2px;
        }
        
        .sec-title {
          font-size: 42px;
          font-weight: 700;
          line-height: 1.2;
          margin-bottom: 20px;
          background: linear-gradient(90deg, #fff, #6cff6c);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        
        /* Feature grids */
        .about-grid {
          display: flex;
          gap: 20px;
          margin-bottom: 30px;
          padding: 20px;
          background: rgba(255,255,255,0.05);
          border-radius: 12px;
          border-left: 3px solid #6cff6c;
          transition: all 0.3s ease;
        }
        
        .about-grid:hover {
          background: rgba(255,255,255,0.1);
          transform: translateX(10px);
        }
        
        .icon {
          flex-shrink: 0;
          width: 60px;
          height: 60px;
          background: rgba(108, 255, 108, 0.1);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .icon img {
          width: 30px;
          height: 30px;
        }
        
        .about-grid_title {
          font-size: 20px;
          font-weight: 600;
          margin-bottom: 10px;
        }
        
        .about-grid_title span {
          color: #6cff6c;
        }
        
        .about-grid_text {
          color: rgba(255,255,255,0.7);
          line-height: 1.6;
          margin: 0;
        }
        
        /* Animations */
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        
        .custom-animate {
          opacity: 0;
          transition: all 0.8s ease;
        }
        
        .custom-animate-left {
          transform: translateX(-50px);
        }
        
        .custom-animate-right {
          transform: translateX(50px);
        }
        
        .custom-animate-top {
          transform: translateY(-50px);
        }
        
        .custom-animate-bottom {
          transform: translateY(50px);
        }
        
        .custom-animate.animated {
          opacity: 1;
          transform: translate(0, 0) !important;
        }
        
        /* Responsive styles */
        @media (max-width: 1199px) {
          .sec-title {
            font-size: 36px;
          }
        }
        
        @media (max-width: 991px) {
          #about-sec {
            padding: 60px 0;
          }
          
          .img-box1 {
            margin-bottom: 40px;
          }
          
          .about-title-thumb {
            width: 100px;
            height: 100px;
            top: -20px;
            right: -20px;
          }
          
          .sec-title {
            font-size: 32px;
          }
        }
        
        @media (max-width: 767px) {
          .sec-title {
            font-size: 28px;
          }
          
          .about-grid {
            flex-direction: column;
            gap: 15px;
          }
          
          .icon {
            width: 50px;
            height: 50px;
          }
          
          .icon img {
            width: 25px;
            height: 25px;
          }
        }
        
        @media (max-width: 575px) {
          #about-sec {
            padding: 40px 0;
          }
          
          .sub-title {
            font-size: 16px;
          }
          
          .sec-title {
            font-size: 24px;
          }
          
          .about-grid_title {
            font-size: 18px;
          }
        }
      `}</style>

      <div 
        className="about-bg-img shape-mockup"
        style={{ top: 0, left: 0 }}
      >
        <img src="/assets/img/bg/about-bg1.png" alt="Background" />
      </div>
      
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-6 mb-50 mb-xl-0">
            <div className="img-box1">
              <div 
                className="img1 custom-animate custom-animate-left"
                data-delay="0.2s"
              >
                <img src="/assets/img/normal/about1-1.png" alt="About" />
              </div>
            </div>
          </div>
          
          <div className="col-xl-6">
            <div className="about-wrap1">
              <div className="about-title-wrap mb-n1">
                <div 
                  className="about-title-thumb custom-animate custom-animate-top"
                  data-delay="0.1s"
                >
                  <img src="/assets/img/normal/about1-2.png" alt="About" />
                </div>
                
                <div 
                  className="title-area custom-animate custom-animate-left"
                  data-delay="0.1s"
                >
                  <span className="sub-title"># About StakeQuest Legends</span>
                  <h2 className="sec-title mb-0">
                    Building the Ultimate Web3 Gaming Experience
                  </h2>
                </div>
              </div>

              <div 
                className="about-grid custom-animate custom-animate-top"
                data-delay="0.2s"
              >
                <div className="icon">
                  <img src="/assets/img/icon/about_feature_1.svg" alt="Feature" />
                </div>
                <div className="about-grid-details">
                  <h3 className="about-grid_title h5">
                    Play-to-Earn <span className="text-theme">Ecosystem</span>
                  </h3>
                  <p className="about-grid_text">
                    Dynamic battle-linked rewards system where every quest, battle, and achievement translates to real SQL token earnings.
                  </p>
                </div>
              </div>

              <div 
                className="about-grid custom-animate custom-animate-top"
                data-delay="0.3s"
              >
                <div className="icon">
                  <img src="/assets/img/icon/about_feature_2.svg" alt="Feature" />
                </div>
                <div className="about-grid-details">
                  <h3 className="about-grid_title h5">Staking Rewards System</h3>
                  <p className="about-grid_text">
                    Real-time harvestable rewards for SQL token holders with sustainable staking mechanics and cross-chain bridge support.
                  </p>
                </div>
              </div>

              <div 
                className="about-grid custom-animate custom-animate-top"
                data-delay="0.4s"
              >
                <div className="icon">
                  <img src="/assets/img/icon/about_feature_3.svg" alt="Feature" />
                </div>
                <div className="about-grid-details">
                  <h3 className="about-grid_title h5">NFT Character System</h3>
                  <p className="about-grid_text">
                    Own unique characters, items, and equipment as NFTs with different rarity levels and special abilities in our immersive game universe.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;