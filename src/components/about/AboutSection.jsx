const AboutSection = () => {
    return (
      <div className="overflow-hidden space" id="about-sec">
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
                  className="img1 custom-anim-left wow animated"
                  data-wow-duration="1.5s"
                  data-wow-delay="0.2s"
                >
                  <img src="/assets/img/normal/about1-1.png" alt="About" />
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="about-wrap1">
                <div className="about-title-wrap mb-n1">
                  <div 
                    className="about-title-thumb custom-anim-top wow animated"
                    data-wow-duration="1.5s"
                    data-wow-delay="0.1s"
                  >
                    <img src="/assets/img/normal/about1-2.png" alt="About" />
                  </div>
                  <div 
                    className="title-area custom-anim-left wow animated"
                    data-wow-duration="1.5s"
                    data-wow-delay="0.1s"
                  >
                    <span className="sub-title"># About StakeQuest Legends</span>
                    <h2 className="sec-title mb-0">
                      Building the Ultimate Web3 Gaming Experience
                    </h2>
                  </div>
                </div>
  
                <div className="about-grid">
                  <div 
                    className="icon custom-anim-top wow animated"
                    data-wow-duration="1.5s"
                    data-wow-delay="0.2s"
                  >
                    <img src="/assets/img/icon/about_feature_1.svg" alt="Feature" />
                  </div>
                  <div 
                    className="about-grid-details custom-anim-left wow animated"
                    data-wow-duration="1.5s"
                    data-wow-delay="0.2s"
                  >
                    <h3 className="about-grid_title h5">
                      Play-to-Earn <span className="text-theme">Ecosystem</span>
                    </h3>
                    <p className="about-grid_text">
                      Dynamic battle-linked rewards system where every quest, battle, and achievement translates to real SQL token earnings.
                    </p>
                  </div>
                </div>
  
                <div className="about-grid">
                  <div 
                    className="icon custom-anim-top wow animated"
                    data-wow-duration="1.5s"
                    data-wow-delay="0.2s"
                  >
                    <img src="/assets/img/icon/about_feature_2.svg" alt="Feature" />
                  </div>
                  <div 
                    className="about-grid-details custom-anim-left wow animated"
                    data-wow-duration="1.5s"
                    data-wow-delay="0.2s"
                  >
                    <h3 className="about-grid_title h5">Staking Rewards System</h3>
                    <p className="about-grid_text">
                      Real-time harvestable rewards for SQL token holders with sustainable staking mechanics and cross-chain bridge support.
                    </p>
                  </div>
                </div>
  
                <div className="about-grid">
                  <div 
                    className="icon custom-anim-top wow animated"
                    data-wow-duration="1.5s"
                    data-wow-delay="0.2s"
                  >
                    <img src="/assets/img/icon/about_feature_3.svg" alt="Feature" />
                  </div>
                  <div 
                    className="about-grid-details custom-anim-left wow animated"
                    data-wow-duration="1.5s"
                    data-wow-delay="0.2s"
                  >
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
  