import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const teamMembers = [
  {
    img: "/assets/img/team/1-1.png",
    logo: "/assets/img/team/game-logo1-1.png",
    name: "Max Alexis",
    link: "team-details.html",
  },
  {
    img: "/assets/img/team/1-2.png",
    logo: "/assets/img/team/game-logo1-2.png",
    name: "Wilium Lili",
    link: "team-details.html",
  },
  {
    img: "/assets/img/team/1-3.png",
    logo: "/assets/img/team/game-logo1-3.png",
    name: "Mac Marsh",
    link: "team-details.html",
  },
  {
    img: "/assets/img/team/1-4.png",
    logo: "/assets/img/team/game-logo1-4.png",
    name: "Eva Raina",
    link: "team-details.html",
  },
  {
    img: "/assets/img/team/1-5.png",
    logo: "/assets/img/team/game-logo1-5.png",
    name: "Robin Cloth",
    link: "team-details.html",
  },
  // Duplicate to match your slides
  {
    img: "/assets/img/team/1-1.png",
    logo: "/assets/img/team/game-logo1-1.png",
    name: "Max Alexis",
    link: "team-details.html",
  },
  {
    img: "/assets/img/team/1-2.png",
    logo: "/assets/img/team/game-logo1-2.png",
    name: "Wilium Lili",
    link: "team-details.html",
  },
  {
    img: "/assets/img/team/1-3.png",
    logo: "/assets/img/team/game-logo1-3.png",
    name: "Mac Marsh",
    link: "team-details.html",
  },
  {
    img: "/assets/img/team/1-4.png",
    logo: "/assets/img/team/game-logo1-4.png",
    name: "Eva Raina",
    link: "team-details.html",
  },
  {
    img: "/assets/img/team/1-5.png",
    logo: "/assets/img/team/game-logo1-5.png",
    name: "Robin Cloth",
    link: "team-details.html",
  },
];

const Team = () => {
  return (
    <section className="team-sec-1 space">
      <div
        className="team-shape1-1 shape-mockup"
        data-top="0"
        data-right="0"
      >
        <img src="/assets/img/bg/team-sec1-bg.png" alt="Background" />
      </div>
      <div className="container th-container3">
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-7 col-md-8">
            <div
              className="title-area text-center custom-anim-top wow animated"
              data-wow-duration="1.5s"
              data-wow-delay="0.2s"
            >
              <span className="sub-title"># Core Team & Advisors</span>
              <h2 className="sec-title">
                Meet Our StakeQuest Legends Team
              </h2>
            </div>
          </div>
        </div>

        <div className="slider-area team-slider1">
          <Swiper
            modules={[Navigation]}
            slidesPerView={5}
            spaceBetween={30}
            navigation={{
              nextEl: ".slider-next",
              prevEl: ".slider-prev",
            }}
            breakpoints={{
              0: { slidesPerView: 1 },
              576: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              992: { slidesPerView: 4 },
              1200: { slidesPerView: 5 },
            }}
            className="th-slider has-shadow"
          >
            {teamMembers.map((member, index) => (
              <SwiperSlide key={index}>
                <div className="th-team team-card">
                  <div className="team-card-corner team-card-corner1"></div>
                  <div className="team-card-corner team-card-corner2"></div>
                  <div className="team-card-corner team-card-corner3"></div>
                  <div className="team-card-corner team-card-corner4"></div>
                  <div className="img-wrap">
                    <div className="team-img">
                      <img src={member.img} alt={member.name} />
                    </div>
                    <img
                      className="game-logo"
                      src={member.logo}
                      alt={member.name}
                    />
                  </div>
                  <div className="team-card-content">
                    <h3 className="box-title">
                      <a href={member.link}>{member.name}</a>
                    </h3>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <button
            data-slider-prev="#teamSlider1"
            className="slider-arrow slider-prev"
          >
            <i className="far fa-arrow-left"></i>
          </button>
          <button
            data-slider-next="#teamSlider1"
            className="slider-arrow slider-next"
          >
            <i className="far fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Team;
