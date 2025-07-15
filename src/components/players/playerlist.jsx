import React from 'react';

const PlayerList = () => {
  const players = [
    { name: 'Max Alexis', img: 'assets/img/team/1-1.png', logo: 'assets/img/team/game-logo1-1.png' },
    { name: 'Wilium Lili', img: 'assets/img/team/1-2.png', logo: 'assets/img/team/game-logo1-2.png' },
    { name: 'Mac Marsh', img: 'assets/img/team/1-3.png', logo: 'assets/img/team/game-logo1-3.png' },
    { name: 'Eva Raina', img: 'assets/img/team/1-4.png', logo: 'assets/img/team/game-logo1-4.png' },
    { name: 'Robin Cloth', img: 'assets/img/team/1-5.png', logo: 'assets/img/team/game-logo1-5.png' },
    { name: 'Eliyas Bel', img: 'assets/img/team/1-6.png', logo: 'assets/img/team/game-logo1-6.png' },
    { name: 'Eshika Laz', img: 'assets/img/team/1-7.png', logo: 'assets/img/team/game-logo1-1.png' },
    { name: 'Henry Josep', img: 'assets/img/team/1-8.png', logo: 'assets/img/team/game-logo1-2.png' },
  ];

  return (
    <>
      {/* <div
        className="breadcumb-wrapper"
        data-bg-src="assets/img/bg/breadcumb-bg.jpg"
      >
        <div className="container">
          <div className="breadcumb-content">
            <h1 className="breadcumb-title">PLAYERS</h1>
            <ul className="breadcumb-menu">
              <li><a href="index.html">Home</a></li>
              <li>PLAYERS</li>
            </ul>
          </div>
        </div>
      </div> */}

      <section className="space-top space-extra2-bottom">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-12">
              <div className="title-area text-center">
                <span className="sub-title style2"># OUR TOP STREAMERS</span>
                <h2 className="sec-title">
                  Let’s See Our Top Rated Streamers <span className="text-theme">!</span>
                </h2>
              </div>
            </div>
          </div>

          <div className="row gy-4">
            {players.map((player, index) => (
              <div className="col-lg-3 col-sm-6" key={index}>
                <div className="th-team team-card">
                  <div className="team-card-corner team-card-corner1"></div>
                  <div className="team-card-corner team-card-corner2"></div>
                  <div className="team-card-corner team-card-corner3"></div>
                  <div className="team-card-corner team-card-corner4"></div>
                  <div className="img-wrap">
                    <div className="team-img">
                      <img src={player.img} alt="Team" />
                    </div>
                    <img className="game-logo" src={player.logo} alt="Team" />
                  </div>
                  <div className="team-card-content">
                    <h3 className="box-title">
                      <a href="team-details.html">{player.name}</a>
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-60 text-center">
            <div className="th-pagination">
              <ul>
                <li><a href="blog.html"><span className="btn-border"></span> 1</a></li>
                <li><a href="blog.html"><span className="btn-border"></span> 2</a></li>
                <li><a href="blog.html"><span className="btn-border"></span> 3</a></li>
                <li><a href="blog.html"><span className="btn-border"></span><i className="far fa-arrow-right"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PlayerList;
