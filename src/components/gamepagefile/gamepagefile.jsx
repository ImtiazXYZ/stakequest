import React from 'react';
import { motion } from 'framer-motion';

const games = [
  {
    id: 1,
    image: 'assets/img/game/2-1.png',
    logo: 'assets/img/game/logo2-1.png',
    title: 'The Hunter Killer',
    entryFee: '$10.00',
    rating: '4.8',
    reviewCount: '2.6k Review',
  },
  {
    id: 2,
    image: 'assets/img/game/2-2.png',
    logo: 'assets/img/game/logo2-2.png',
    title: 'Lion The King',
    entryFee: 'Free',
    rating: '4.8',
    reviewCount: '2.6k Review',
  },
  {
    id: 3,
    image: 'assets/img/game/2-3.png',
    logo: 'assets/img/game/logo2-3.png',
    title: 'Duty Black Ops',
    entryFee: '$10.00',
    rating: '4.8',
    reviewCount: '2.6k Review',
  },
  {
    id: 4,
    image: 'assets/img/game/2-4.png',
    logo: 'assets/img/game/logo2-4.png',
    title: 'Crazy Wild',
    entryFee: '$10.00',
    rating: '4.8',
    reviewCount: '2.6k Review',
  },
  {
    id: 5,
    image: 'assets/img/game/2-5.png',
    logo: 'assets/img/game/logo2-5.png',
    title: 'Plants War',
    entryFee: '$10.00',
    rating: '4.8',
    reviewCount: '2.6k Review',
  },
  {
    id: 6,
    image: 'assets/img/game/2-6.png',
    logo: 'assets/img/game/logo2-6.png',
    title: 'Royal Treasures',
    entryFee: 'Free',
    rating: '4.8',
    reviewCount: '2.6k Review',
  },
];

const GamePage = () => {
  return (
    <div>
      <div
        className="breadcumb-wrapper"
        style={{ backgroundImage: `url('assets/img/bg/breadcumb-bg.jpg')` }}
      >
        <div className="container">
          <div className="breadcumb-content">
            <h1 className="breadcumb-title">GAME PAGE</h1>
            <ul className="breadcumb-menu">
              <li>
                <a href="index.html">Home</a>
              </li>
              <li>GAME</li>
            </ul>
          </div>
        </div>
      </div>

      <section className="overflow-hidden space-top space-extra2-bottom">
        <div className="container">
          <div className="row gy-4">
            {games.map((game, index) => (
              <motion.div
                key={game.id}
                className="col-lg-4 col-md-6"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="game-card style2">
                  <div className="game-card-img">
                    <a href="tournament-details.html">
                      <img src={game.image} alt="game" />
                    </a>
                    <div className="game-logo">
                      <img src={game.logo} alt="game logo" />
                    </div>
                  </div>
                  <div className="game-card-details">
                    <div className="media-left">
                      <h3 className="box-title">
                        <a href="tournament-details.html">{game.title}</a>
                      </h3>
                      <p className="game-content">
                        Entry Fee: <span className="text-theme">{game.entryFee}</span>
                      </p>
                    </div>
                    <div className="media-body">
                      <span className="game-rating">
                        <i className="fas fa-star"></i> {game.rating}
                      </span>
                      <span className="review-count">({game.reviewCount})</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="pt-60 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="th-pagination">
              <ul>
                <li>
                  <a href="blog.html">
                    <span className="btn-border"></span> 1
                  </a>
                </li>
                <li>
                  <a href="blog.html">
                    <span className="btn-border"></span> 2
                  </a>
                </li>
                <li>
                  <a href="blog.html">
                    <span className="btn-border"></span> 3
                  </a>
                </li>
                <li>
                  <a href="blog.html">
                    <span className="btn-border"></span>
                    <i className="far fa-arrow-right"></i>
                  </a>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default GamePage;
