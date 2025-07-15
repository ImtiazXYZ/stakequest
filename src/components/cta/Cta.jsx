import React from 'react';

const CtaArea = () => {
  return (
    <div className="container th-container4">
      <div className="cta-area-1">
        <div className="cta-bg-shape-border">
          <svg
            width="1464"
            height="564"
            viewBox="0 0 1464 564"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1463.5 30V534C1463.5 550.292 1450.29 563.5 1434 563.5H1098H927.426C919.603 563.5 912.099 560.392 906.567 554.86L884.14 532.433C878.42 526.713 870.663 523.5 862.574 523.5H601.426C593.337 523.5 585.58 526.713 579.86 532.433L557.433 554.86C551.901 560.392 544.397 563.5 536.574 563.5H366H30C13.7076 563.5 0.5 550.292 0.5 534V30C0.5 13.7076 13.7076 0.5 30 0.5H366H536.574C544.397 0.5 551.901 3.60802 557.433 9.14034L579.86 31.5668C585.58 37.2866 593.337 40.5 601.426 40.5H862.574C870.663 40.5 878.42 37.2866 884.14 31.5668L906.567 9.14035C912.099 3.60803 919.603 0.5 927.426 0.5H1098H1434C1450.29 0.5 1463.5 13.7076 1463.5 30Z"
              stroke="url(#paint0_linear_202_547)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_202_547"
                x1="0"
                y1="0"
                x2="1505.47"
                y2="412.762"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stopColor="var(--theme-color)" />
                <stop offset="1" stopColor="var(--theme-color2)" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div
          className="cta-wrap-bg bg-repeat"
          data-bg-src="assets/img/bg/jiji-bg.png"
          data-mask-src="assets/img/shape/cta-bg-shape1.svg"
        >
          <div className="cta-bg-img">
            <img src="assets/img/bg/cta-sec1-bg.png" alt="cta background" />
          </div>
          <div className="cta-thumb">
            <img src="assets/img/normal/cta1-1.png" alt="cta thumb" />
          </div>
        </div>

        <div className="cta-wrap">
          <div className="row">
            <div className="col-xl-5">
              <div
                className="title-area mb-0 custom-anim-left wow animated"
                data-wow-duration="1.5s"
                data-wow-delay="0.2s"
              >
                <span className="sub-title"># The Future of Gaming</span>
                <h2 className="sec-title">
                  Join StakeQuest Legends and Start Your{' '}
                  <span className="text-theme fw-medium">Epic Adventure Today !</span>
                </h2>
                <p className="mt-30 mb-30">
                  Experience the perfect blend of immersive gameplay and blockchain technology.
                  Earn SQL tokens, own unique NFT characters, participate in epic battles,
                  and build your legend in our ever-evolving universe.
                </p>
                <a href="contact.html" className="th-btn">
                  START PLAYING <i className="fa-solid fa-arrow-right ms-2"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CtaArea;
