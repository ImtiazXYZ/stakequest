import React, { useEffect } from "react";

const GameSectionTwo = () => {
  useEffect(() => {
    const animateOnScroll = () => {
      const elements = document.querySelectorAll('.feature-animate');
      elements.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;
        const isVisible = elementTop < window.innerHeight * 0.8;
        
        if (isVisible) {
          el.classList.add('animated');
        }
      });
    };

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', animateOnScroll);
  }, []);

  return (
    <section className="space game-features-section">
      <style jsx>{`
        /* Base styles */
        .game-features-section {
          position: relative;
          overflow: hidden;
        }
        
        .feature-sec-wrap1 {
          position: relative;
          background: url('/assets/img/bg/game-sec1-bg.png') no-repeat center/cover;
          padding: 60px 0;
          isolation: isolate;
        }
        
        .feature-sec-wrap1::before {
          content: '';
          position: absolute;
          inset: 0;
          background: rgba(10, 10, 10, 0.85);
          z-index: -1;
        }
        
        .container {
          position: relative;
          z-index: 1;
        }
        
        /* Title area */
        .title-area {
          margin-bottom: 50px;
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
          font-size: 36px;
          font-weight: 700;
          line-height: 1.2;
          margin-bottom: 0;
          color: #fff;
        }
        
        .sec-title span {
          color: #6cff6c;
        }
        
        /* Feature cards */
        .feature-card-wrap {
          margin-bottom: 30px;
          perspective: 1000px;
        }
        
        .feature-card-border {
          border: 2px solid rgba(108, 255, 108, 0.2);
          border-radius: 15px;
          padding: 2px;
          transition: all 0.3s ease;
        }
        
        .feature-card {
          background: rgba(20, 20, 20, 0.7);
          backdrop-filter: blur(10px);
          border-radius: 12px;
          padding: 30px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          height: 100%;
          transition: all 0.3s ease;
          transform-style: preserve-3d;
        }
        
        .feature-card:hover {
          transform: translateY(-10px) rotateX(5deg);
          background: rgba(30, 30, 30, 0.8);
        }
        
        .feature-card:hover .feature-card-border {
          border-color: rgba(108, 255, 108, 0.5);
        }
        
        .feature-card-icon {
          width: 80px;
          height: 80px;
          background: rgba(108, 255, 108, 0.1);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
          position: relative;
          overflow: hidden;
        }
        
        .feature-card-icon img {
          width: 40px;
          height: 40px;
          z-index: 2;
        }
        
        .feature-card-icon-mask {
          position: absolute;
          width: 100%;
          height: 100%;
          background: url('/assets/img/icon/feature-mask-bg.svg') no-repeat center;
          background-size: contain;
          opacity: 0.3;
          animation: rotate 15s linear infinite;
        }
        
        .feature-card-title {
          font-size: 22px;
          font-weight: 600;
          margin-bottom: 15px;
          color: #fff;
        }
        
        .feature-card-text {
          color: rgba(255, 255, 255, 0.7);
          line-height: 1.6;
          margin-bottom: 0;
        }
        
        /* Animations */
        @keyframes rotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        .feature-animate {
          opacity: 0;
          transition: all 0.8s ease;
        }
        
        .animate-top {
          transform: translateY(30px);
        }
        
        .animate-bottom {
          transform: translateY(-30px);
        }
        
        .animate-left {
          transform: translateX(-30px);
        }
        
        .animate-right {
          transform: translateX(30px);
        }
        
        .feature-animate.animated {
          opacity: 1;
          transform: translate(0, 0) !important;
        }
        
        /* Mobile specific animations */
        @media (max-width: 767px) {
          .feature-card {
            padding: 25px 20px;
          }
          
          .feature-card-icon {
            width: 70px;
            height: 70px;
          }
          
          .feature-card-icon img {
            width: 35px;
            height: 35px;
          }
          
          /* Bounce animation for mobile */
          @keyframes bounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
          }
          
          .feature-card:hover {
            animation: bounce 0.5s ease;
            transform: none;
          }
        }
        
        /* Responsive adjustments */
        @media (max-width: 991px) {
          .sec-title {
            font-size: 30px;
          }
          
          .feature-sec-wrap1 {
            padding: 50px 0;
          }
        }
        
        @media (max-width: 767px) {
          .sec-title {
            font-size: 26px;
          }
          
          .sub-title {
            font-size: 16px;
          }
          
          .feature-card-title {
            font-size: 20px;
          }
          
          .feature-card-text {
            font-size: 15px;
          }
        }
        
        @media (max-width: 575px) {
          .sec-title {
            font-size: 24px;
          }
          
          .title-area {
            margin-bottom: 30px;
          }
        }
      `}</style>

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="title-area text-center feature-animate animate-top">
              <span className="sub-title"># Core Game Features</span>
              <h2 className="sec-title">
                StakeQuest Legends Offers Unique Gaming Experience{' '}
                <span className="text-theme">!</span>
              </h2>
            </div>
          </div>
        </div>
        
        <div className="feature-sec-wrap1">
          <div className="row">
            <div className="col-md-4">
              <div className="feature-card-wrap">
                <div className="feature-card-border">
                  <div className="feature-card feature-animate animate-left">
                    <div className="feature-card-icon">
                      <span className="feature-card-icon-mask"></span>
                      <img src="/assets/img/icon/feature_1.svg" alt="Cross-Chain Bridge" />
                    </div>
                    <div className="feature-card-details">
                      <h3 className="feature-card-title">Cross-Chain Bridge</h3>
                      <p className="feature-card-text">
                        Seamlessly transfer your SQL tokens and NFT assets across multiple blockchain networks with our secure cross-chain bridge technology.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col-md-4">
              <div className="feature-card-wrap">
                <div className="feature-card-border">
                  <div className="feature-card feature-animate animate-top">
                    <div className="feature-card-icon">
                      <span className="feature-card-icon-mask"></span>
                      <img src="/assets/img/icon/feature_2.svg" alt="Player vs Player" />
                    </div>
                    <div className="feature-card-details">
                      <h3 className="feature-card-title">Player vs Player</h3>
                      <p className="feature-card-text">
                        Engage in competitive PvP battles with other players, earn exclusive rewards, and climb the leaderboards in epic real-time combat.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col-md-4">
              <div className="feature-card-wrap">
                <div className="feature-card-border">
                  <div className="feature-card feature-animate animate-right">
                    <div className="feature-card-icon">
                      <span className="feature-card-icon-mask"></span>
                      <img src="/assets/img/icon/feature_3.svg" alt="Marketplace Trading" />
                    </div>
                    <div className="feature-card-details">
                      <h3 className="feature-card-title">Marketplace Trading</h3>
                      <p className="feature-card-text">
                        Buy, sell, and trade your NFT characters, items, and equipment in our secure marketplace with transparent pricing and instant transactions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GameSectionTwo;