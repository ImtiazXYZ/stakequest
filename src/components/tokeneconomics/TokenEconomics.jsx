import React from "react";

const TokenEconomics = () => {
  return (
    <section className="tf-section tf-token" id="tokenomics-sec">
      <div className="">
        {/* <img
          src="https://risebot.vercel.app/static/media/bg_project2.5c9d23bc6bd385b83ac9.png"
          alt=""
        /> */}
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div
              className="tf-title aos-init aos-animate"
              data-aos="fade-up"
              data-aos-duration="800"
            >
              <h2 className="title">SQL Token Statistics</h2>
            </div>
          </div>
          <div className="col-md-12">
            <div className="row">
              <div className="tokenomics-wrapper">
                <div className="row align-items-center">
                  {/* Pie Chart Section */}
                  <div className="col-xl-6 col-lg-6 mb-50 mb-xl-0">
                    <div
                      className="tokenomics-chart-wrap custom-anim-left wow animated"
                      data-wow-duration="1.5s"
                      data-wow-delay="0.3s"
                    >
                      <div className="chart-container">
                        <div className="pie-chart" id="tokenomicsPieChart">
                          <div className="chart-center">
                            <div className="center-content">
                              <h3 className="chart-title">SQL</h3>
                              <p className="chart-subtitle">Token</p>
                              <div className="total-supply">
                                <span className="supply-label">Total Supply</span>
                                <span className="supply-amount">2B SQL</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Chart Legend */}
                        <div className="chart-legend">
                          <div className="legend-item" data-category="play-to-earn">
                            <div
                              className="legend-color"
                              style={{ background: "#6366f1" }}
                            ></div>
                            <span className="legend-label">Play-to-Earn</span>
                            <span className="legend-percentage">35%</span>
                          </div>
                          <div className="legend-item" data-category="staking">
                            <div
                              className="legend-color"
                              style={{ background: "#8b5cf6" }}
                            ></div>
                            <span className="legend-label">Staking Rewards</span>
                            <span className="legend-percentage">20%</span>
                          </div>
                          <div className="legend-item" data-category="team">
                            <div
                              className="legend-color"
                              style={{ background: "#06b6d4" }}
                            ></div>
                            <span className="legend-label">Team & Advisors</span>
                            <span className="legend-percentage">15%</span>
                          </div>
                          <div className="legend-item" data-category="liquidity">
                            <div
                              className="legend-color"
                              style={{ background: "#10b981" }}
                            ></div>
                            <span className="legend-label">Liquidity</span>
                            <span className="legend-percentage">10%</span>
                          </div>
                          <div className="legend-item" data-category="treasury">
                            <div
                              className="legend-color"
                              style={{ background: "#f59e0b" }}
                            ></div>
                            <span className="legend-label">Treasury</span>
                            <span className="legend-percentage">8%</span>
                          </div>
                          <div className="legend-item" data-category="ecosystem">
                            <div
                              className="legend-color"
                              style={{ background: "#ef4444" }}
                            ></div>
                            <span className="legend-label">Ecosystem/Partners</span>
                            <span className="legend-percentage">7%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Token Details Section */}
                  <div className="col-xl-6 col-lg-6">
                    <div
                      className="tokenomics-details custom-anim-right wow animated"
                      data-wow-duration="1.5s"
                      data-wow-delay="0.4s"
                    >
                      <div className="token-items-grid">
                        <div className="token-item gradient-border">
                          <div className="token-header">
                            <div className="token-icon play-to-earn"></div>
                            <div className="token-info">
                              <h4 className="token-title">Play-to-Earn</h4>
                              <span className="token-percentage">35%</span>
                            </div>
                          </div>
                          <p className="token-description">
                            Dynamic, battle-linked rewards system for active players
                          </p>
                        </div>

                        <div className="token-item gradient-border">
                          <div className="token-header">
                            <div className="token-icon staking"></div>
                            <div className="token-info">
                              <h4 className="token-title">Staking Rewards</h4>
                              <span className="token-percentage">20%</span>
                            </div>
                          </div>
                          <p className="token-description">
                            Real-time harvestable rewards for token holders
                          </p>
                        </div>

                        <div className="token-item gradient-border">
                          <div className="token-header">
                            <div className="token-icon team"></div>
                            <div className="token-info">
                              <h4 className="token-title">Team & Advisors</h4>
                              <span className="token-percentage">15%</span>
                            </div>
                          </div>
                          <p className="token-description">
                            1-year cliff with linear vesting schedule
                          </p>
                        </div>

                        <div className="token-item gradient-border">
                          <div className="token-header">
                            <div className="token-icon liquidity"></div>
                            <div className="token-info">
                              <h4 className="token-title">Liquidity</h4>
                              <span className="token-percentage">10%</span>
                            </div>
                          </div>
                          <p className="token-description">
                            Locked at launch for price stability
                          </p>
                        </div>

                        <div className="token-item gradient-border">
                          <div className="token-header">
                            <div className="token-icon treasury"></div>
                            <div className="token-info">
                              <h4 className="token-title">Treasury</h4>
                              <span className="token-percentage">8%</span>
                            </div>
                          </div>
                          <p className="token-description">
                            DAO-controlled funds for ecosystem development
                          </p>
                        </div>

                        <div className="token-item gradient-border">
                          <div className="token-header">
                            <div className="token-icon ecosystem"></div>
                            <div className="token-info">
                              <h4 className="token-title">Ecosystem/Partners</h4>
                              <span className="token-percentage">7%</span>
                            </div>
                          </div>
                          <p className="token-description">
                            Gradual unlock for strategic partnerships
                          </p>
                        </div>

                        <div className="token-item gradient-border">
                          <div className="token-header">
                            <div className="token-icon private-sale"></div>
                            <div className="token-info">
                              <h4 className="token-title">Private Sale (IDO)</h4>
                              <span className="token-percentage">5%</span>
                            </div>
                          </div>
                          <p className="token-description">
                            Cliff period with linear vesting mechanism
                          </p>
                        </div>

                        <div className="token-item gradient-border">
                          <div className="token-header">
                            <div className="token-icon community"></div>
                            <div className="token-info">
                              <h4 className="token-title">Community & Airdrops</h4>
                              <span className="token-percentage">5%</span>
                            </div>
                          </div>
                          <p className="token-description">
                            Event-driven distribution for community growth
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End Token Details */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TokenEconomics;
