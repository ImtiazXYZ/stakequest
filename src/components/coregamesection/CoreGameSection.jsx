import React from "react";

const GameSectionTwo = () => {
  return (
    <section class="space">
        <style>{`
        .feature-sec-wrap1 {
          position: relative;
          background: url('/assets/img/bg/game-sec1-bg.png') no-repeat center/cover;
          padding: 80px 0;
        }`}</style>


        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-8">
                    <div class="title-area text-center custom-anim-top wow animated" data-wow-duration="1.5s" data-wow-delay="0.2s">
                        <span class="sub-title"># Core Game Features</span>
                        <h2 class="sec-title">StakeQuest Legends Offers Unique Gaming Experience <span class="text-theme">!</span></h2>
                    </div>
                </div>
            </div>
            <div class="feature-sec-wrap1" data-bg-src="assets/img/bg/feature-sec1-bg.png">
                <div class="feature-card-wrap">
                    <div class="feature-card-border">
                        <div class="feature-card">
                            <div class="feature-card-icon custom-anim-top wow animated" data-wow-duration="1.5s" data-wow-delay="0.2s">
                                <span class="feature-card-icon-mask" data-mask-src="assets/img/icon/feature_1.svg"></span>
                                <img src="assets/img/icon/feature_1.svg" alt="img"/>
                            </div>
                            <div class="feature-card-details custom-anim-top wow animated" data-wow-duration="1.5s" data-wow-delay="0.2s">
                                <h3 class="feature-card-title">Cross-Chain Bridge</h3>
                                <p class="feature-card-text">Seamlessly transfer your SQL tokens and NFT assets across multiple blockchain networks with our secure cross-chain bridge technology.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="feature-card-wrap">
                    <div class="feature-card-border">
                        <div class="feature-card">
                            <div class="feature-card-icon custom-anim-top wow animated" data-wow-duration="1.5s" data-wow-delay="0.2s">
                                <span class="feature-card-icon-mask" data-mask-src="assets/img/icon/feature_2.svg"></span>
                                <img src="assets/img/icon/feature_2.svg" alt="img"/>
                            </div>
                            <div class="feature-card-details custom-anim-top wow animated" data-wow-duration="1.5s" data-wow-delay="0.2s">
                                <h3 class="feature-card-title">Player vs Player</h3>
                                <p class="feature-card-text">Engage in competitive PvP battles with other players, earn exclusive rewards, and climb the leaderboards in epic real-time combat.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="feature-card-wrap">
                    <div class="feature-card-border">
                        <div class="feature-card">
                            <div class="feature-card-icon custom-anim-top wow animated" data-wow-duration="1.5s" data-wow-delay="0.2s">
                                <span class="feature-card-icon-mask" data-mask-src="assets/img/icon/feature_3.svg"></span>
                                <img src="assets/img/icon/feature_3.svg" alt="img"/>
                            </div>
                            <div class="feature-card-details custom-anim-top wow animated" data-wow-duration="1.5s" data-wow-delay="0.2s">
                                <h3 class="feature-card-title">Marketplace Trading</h3>
                                <p class="feature-card-text">Buy, sell, and trade your NFT characters, items, and equipment in our secure marketplace with transparent pricing and instant transactions.</p>
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
