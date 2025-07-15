import React from 'react';

const teams = [
  {
    id: 1,
    img: 'assets/img/tournament/1-1.png',
    name: 'PRO Player',
    matches: 4,
    otherMatches: 0,
    placePts: 21,
    finishes: 25,
    totalPts: 47,
  },
  {
    id: 2,
    img: 'assets/img/tournament/1-2.png',
    name: 'The Lion King',
    matches: 4,
    otherMatches: 1,
    placePts: 29,
    finishes: 16,
    totalPts: 45,
  },
  {
    id: 3,
    img: 'assets/img/tournament/1-3.png',
    name: 'The Assassin King',
    matches: 4,
    otherMatches: 1,
    placePts: 25,
    finishes: 20,
    totalPts: 45,
  },
  {
    id: 4,
    img: 'assets/img/tournament/1-4.png',
    name: 'Cyberpunk',
    matches: 4,
    otherMatches: 0,
    placePts: 32,
    finishes: 12,
    totalPts: 44,
  },
  {
    id: 5,
    img: 'assets/img/tournament/1-5.png',
    name: 'Team Gorilla',
    matches: 4,
    otherMatches: 1,
    placePts: 24,
    finishes: 19,
    totalPts: 43,
  },
  {
    id: 6,
    img: 'assets/img/tournament/1-6.png',
    name: 'King Of Badgamer',
    matches: 4,
    otherMatches: 0,
    placePts: 17,
    finishes: 21,
    totalPts: 38,
  },
  {
    id: 7,
    img: 'assets/img/tournament/1-7.png',
    name: 'Team Ninja',
    matches: 4,
    otherMatches: 0,
    placePts: 18,
    finishes: 18,
    totalPts: 36,
  },
];

const PointTable = () => {
  return (
    <div>
      <div
        className="breadcumb-wrapper"
        style={{ backgroundImage: `url('assets/img/bg/breadcumb-bg.jpg')` }}
      >
        <div className="container">
          <div className="breadcumb-content">
            <h1 className="breadcumb-title">POINT TABLE</h1>
            <ul className="breadcumb-menu">
              <li>
                <a href="index.html">Home</a>
              </li>
              <li>POINT TABLE</li>
            </ul>
          </div>
        </div>
      </div>

      <div
        className="point-table-area-1 space overflow-hidden"
        style={{
          backgroundImage: `url('assets/img/bg/tournament-table-sec1-bg.png')`,
        }}
      >
        <div className="container">
          <div className="title-area text-center custom-anim-top">
            <span className="sub-title style2"># Point Table</span>
            <h2 className="sec-title">
              Game On, Power Up, Win Big <span className="text-theme">!</span>
            </h2>
          </div>

          <div className="table-responsive">
            <table className="table tournament-table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Team Squad</th>
                  <th scope="col">Matches</th>
                  <th scope="col">Matches</th>
                  <th scope="col">Place PTS.</th>
                  <th scope="col">Finishes</th>
                  <th scope="col">Total PTS.</th>
                </tr>
              </thead>
              <tbody>
                {teams.map((team) => (
                  <tr key={team.id}>
                    <th scope="row">{team.id}</th>
                    <td>
                      <a href="tournament.html">
                        <img src={team.img} alt="team logo" /> {team.name}
                      </a>
                    </td>
                    <td>{team.matches}</td>
                    <td>{team.otherMatches}</td>
                    <td>{team.placePts}</td>
                    <td>{team.finishes}</td>
                    <td>{team.totalPts}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PointTable;
