import React, { useEffect, useRef } from 'react';

const StatsAndTournaments = () => {
  const counterRefs = useRef([]);
  const tournamentCardsRef = useRef([]);

  // Counter animation
  useEffect(() => {
    const animateCounters = () => {
      counterRefs.current.forEach((counter) => {
        if (counter && !counter.dataset.animated) {
          const target = +counter.innerText;
          const increment = target / 100;
          let current = 0;

          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              clearInterval(timer);
              current = target;
              counter.dataset.animated = true;
            }
            counter.innerText = Math.floor(current).toLocaleString();
          }, 10);
        }
      });
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCounters();
          }
        });
      },
      { threshold: 0.5 }
    );

    counterRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Tournament card animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
          }
        });
      },
      { threshold: 0.1 }
    );

    tournamentCardsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const tournaments = [
    {
      year: '2015-2016',
      champion: 'The Lion King',
      runnerUp: 'Pro Player',
      championImg: 'assets/img/tournament/1-2.png',
      runnerUpImg: 'assets/img/tournament/1-1.png',
    },
    {
      year: '2017-2018',
      champion: 'Assassin Team',
      runnerUp: 'Cyberpunk King',
      championImg: 'assets/img/tournament/1-3.png',
      runnerUpImg: 'assets/img/tournament/1-4.png',
    },
    {
      year: '2019-2020',
      champion: 'X-XBO Ninja',
      runnerUp: 'Cools Gamer',
      championImg: 'assets/img/tournament/1-7.png',
      runnerUpImg: 'assets/img/tournament/1-12.png',
    },
  ];

  return (
    <>
      <style>
        {`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          @keyframes scaleIn {
            from {
              transform: scale(0.8);
              opacity: 0;
            }
            to {
              transform: scale(1);
              opacity: 1;
            }
          }
          
          .counter-card {
            transition: all 0.3s ease;
          }
          
          .counter-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 10px 20px rgba(255, 0, 150, 0.3);
          }
          
          .tournament-card {
            opacity: 0;
            transform: translateY(50px);
            transition: all 0.8s ease;
          }
          
          .tournament-card:hover {
            transform: translateY(-5px);
          }
          
          .counter-card-wrap {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
            gap: 20px;
            margin-bottom: 60px;
          }
          
          .counter-card {
            background: #222;
            border-radius: 12px;
            padding: 30px;
            text-align: center;
            flex: 1;
            min-width: 200px;
            animation: fadeInUp 0.8s forwards;
          }
          
          .box-number {
            color: #fff;
            font-size: 2.5rem;
            margin-bottom: 10px;
          }
          
          .box-text {
            color: #bbb;
            font-size: 1rem;
            margin: 0;
          }
          
          .text-theme {
            color: #ff0080;
          }
          
          .tournament-sec-v3 {
            padding: 80px 0;
            position: relative;
            background: #111;
          }
          
          .title-area {
            margin-bottom: 50px;
          }
          
          .sub-title {
            color: #ff0080;
            font-weight: bold;
            letter-spacing: 2px;
            display: block;
            margin-bottom: 15px;
          }
          
          .sec-title {
            color: #fff;
            font-size: 2.5rem;
            margin-bottom: 0;
          }
          
          .tournament-card {
            background: #222;
            border-radius: 12px;
            overflow: hidden;
            margin-bottom: 30px;
            position: relative;
          }
          
          .tournament-card-content {
            padding: 20px;
            text-align: center;
            background: rgba(255, 0, 150, 0.1);
          }
          
          .tournament-year {
            color: #fff;
            font-size: 1.2rem;
            margin: 0;
          }
          
          .tournament-tag {
            color: #ff0080;
            font-weight: bold;
            margin: 10px 0 0;
          }
          
          .tournament-card-inner {
            display: flex;
            flex-wrap: wrap;
            padding: 30px;
          }
          
          .tournament-card-img {
            flex: 1;
            min-width: 300px;
            display: flex;
            align-items: center;
            padding: 20px;
          }
          
          .tournament-card-img img {
            max-height: 150px;
            object-fit: contain;
          }
          
          .card-title-wrap {
            flex: 1;
            padding: 0 20px;
          }
          
          .tournament-card-title {
            color: #fff;
            font-size: 1.5rem;
            margin-bottom: 5px;
          }
          
          .tournament-card-title a {
            color: inherit;
            text-decoration: none;
            transition: color 0.3s;
          }
          
          .tournament-card-title a:hover {
            color: #ff0080;
          }
          
          .tournament-card-subtitle {
            color: #bbb;
            font-size: 1rem;
            margin: 0;
          }
        `}
      </style>

     
      {/* Tournament Section */}
      <section className="tournament-sec-v3 space bg-black3">
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div className="row justify-content-between">
            <div className="col-lg-12">
              <div className="title-area text-center" style={{ opacity: 0, animation: 'fadeInUp 1s 0.2s forwards' }}>
                <span className="sub-title style2"># History of Game Trophy</span>
                <h2 className="sec-title">Our All Tournaments History <span className="text-theme">!</span></h2>
              </div>
            </div>
          </div>
          <div className="row gy-30">
            {tournaments.map((tournament, index) => (
              <div className="col-12" key={index}>
                <div 
                  className="tournament-card style3" 
                  ref={el => tournamentCardsRef.current[index] = el}
                  style={{ transitionDelay: `${index * 0.2}s` }}
                >
                  <div className="tournament-card-content">
                    <div className="tournament-card-details">
                      <p className="tournament-year">{tournament.year}</p>
                      <img src="assets/img/tournament/cup.png" alt="img" style={{ height: '60px', margin: '10px 0' }} />
                      <p className="tournament-tag">CHAMPION CUP</p>
                    </div>
                  </div>
                  <div className="tournament-card-inner">
                    <div className="tournament-card-img">
                      <img src={tournament.runnerUpImg} alt="tournament image" />
                      <div className="card-title-wrap">
                        <h3 className="tournament-card-title"><a href="tournament-details.html">{tournament.runnerUp}</a></h3>
                        <h6 className="tournament-card-subtitle">Runner Up Team</h6>
                      </div>
                    </div>
                    <div className="tournament-card-img">
                      <div className="card-title-wrap text-md-end">
                        <h3 className="tournament-card-title"><a href="tournament-details.html">{tournament.champion}</a></h3>
                        <h6 className="tournament-card-subtitle">Champion Team</h6>
                      </div>
                      <img src={tournament.championImg} alt="tournament image" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default StatsAndTournaments;