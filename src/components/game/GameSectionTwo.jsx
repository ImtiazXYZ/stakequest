import React from "react";

const GameSectionTwo = () => {
  return (
    <section className="overflow-hidden">
      <style>{`
        .game-sec-wrap {
          position: relative;
          background: url('/assets/img/bg/game-sec1-bg.png') no-repeat center/cover;
          padding: 80px 0;
        }

        .title-area {
          margin-bottom: 40px;
        }

        .slider-area {
          overflow: hidden;
          position: relative;
        }

        .slider-track {
          display: flex;
          width: calc(300px * 16); /* Adjust if you add/remove slides */
          animation: scroll 30s linear infinite;
        }

        .game-slide {
          flex: 0 0 auto;
          width: 300px;
          margin-right: 30px;
          background: #111;
          border-radius: 10px;
          overflow: hidden;
          position: relative;
        }

        .game-card-img img {
          width: 100%;
          height: auto;
          display: block;
          border-bottom: 1px solid #333;
        }

        .game-logo {
          position: absolute;
          top: 10px;
          left: 10px;
          width: 50px;
          height: 50px;
        }

        .game-logo img {
          width: 100%;
          height: auto;
        }

        .game-card-details {
          padding: 15px;
          color: #fff;
        }

        .box-title {
          font-size: 18px;
          margin: 0 0 10px;
        }

        .text-theme {
          color: #ffb400;
        }

        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>

      <div className="container th-container2">
        <div className="game-sec-wrap space">
          <div
            className="title-area text-center custom-anim-top wow animated"
            data-wow-duration="1.5s"
            data-wow-delay="0.1s"
          >
            <span className="sub-title"># Game Universe & Mechanics</span>
            <h2 className="sec-title">
              Epic Adventures, Real Rewards <span className="text-theme">!</span>
            </h2>
          </div>

          <div className="slider-area">
            <div className="slider-track">
              {[1, 2, 3, 4, 1, 2, 3, 4].map((num, i) => (
                <div className="game-slide" key={i}>
                  <div className="game-card">
                    <div className="game-card-img">
                      <a href="tournament-details.html">
                        <img
                          src={`/assets/img/game/1-${num}.png`}
                          alt={`game ${num}`}
                        />
                      </a>
                      <div className="game-logo">
                        <img
                          src={`/assets/img/game/logo1-${num}.png`}
                          alt={`logo ${num}`}
                        />
                      </div>
                    </div>
                    <div className="game-card-details">
                      <h3 className="box-title">
                        <a href="tournament-details.html">
                          {num === 1 && "PvE Adventures"}
                          {num === 2 && "Staking Rewards"}
                          {num === 3 && "NFT Marketplace"}
                          {num === 4 && "Guild Wars"}
                          {num === 5 && "PvE Adventures"}


                        </a>
                      </h3>
                      <p className="game-content">
                        {num === 1 && <>Reward Type: <span className="text-theme">SQL Tokens</span></>}
                        {num === 2 && <>APY Rate: <span className="text-theme">12-18%</span></>}
                        {num === 3 && <>Status: <span className="text-theme">Active</span></>}
                        {num === 4 && <>Entry Fee: <span className="text-theme">Free</span></>}
                        {num === 5 && <>Entry Fee: <span className="text-theme">Free</span></>}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GameSectionTwo;
