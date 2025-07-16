import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

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
];

const Team = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check on mount
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkIsMobile();

    // Listen for resize
    window.addEventListener("resize", checkIsMobile);
    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  useEffect(() => {
    const teamCards = document.querySelectorAll(".th-team");

    teamCards.forEach((card) => {
      card.addEventListener("mouseenter", () => {
        gsap.to(card, {
          y: -10,
          duration: 0.3,
          ease: "power2.out",
        });
        gsap.to(card.querySelector(".team-img img"), {
          scale: 1.05,
          duration: 0.3,
          ease: "power2.out",
        });
      });

      card.addEventListener("mouseleave", () => {
        gsap.to(card, {
          y: 0,
          duration: 0.3,
          ease: "power2.out",
        });
        gsap.to(card.querySelector(".team-img img"), {
          scale: 1,
          duration: 0.3,
          ease: "power2.out",
        });
      });
    });

    gsap.from(".team-sec-1 .title-area", {
      scrollTrigger: {
        trigger: ".team-sec-1",
        start: "top 80%",
        toggleActions: "play none none none",
      },
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });

    gsap.from(".th-slider .swiper-slide, .horizontal-scroll .th-team", {
      scrollTrigger: {
        trigger: ".team-sec-1",
        start: "top 70%",
        toggleActions: "play none none none",
      },
      y: 80,
      opacity: 0,
      stagger: 0.1,
      duration: 0.8,
      ease: "power3.out",
      delay: 0.3,
    });
  }, [isMobile]);

  return (
    <section className="team-sec-1 space relative overflow-hidden">
      <div className="team-shape1-1 shape-mockup absolute top-0 right-0 w-full h-full -z-10">
        <img
          src="/assets/img/bg/team-sec1-bg.png"
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 relative">
        <div className="row justify-center">
          <div className="w-full lg:w-10/12 xl:w-8/12">
            <div className="title-area text-center mb-12 md:mb-16 lg:mb-20">
              <span className="sub-title inline-block text-primary text-lg font-medium mb-3 tracking-wider">
                # Core Team & Advisors
              </span>
              <h2 className="sec-title text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-0">
                Meet Our StakeQuest Legends Team
              </h2>
            </div>
          </div>
        </div>

        <div className="slider-area team-slider1 relative">
          {isMobile ? (
            <div className="horizontal-scroll flex overflow-x-auto space-x-4 pb-4">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="th-team team-card flex-shrink-0 w-64 relative bg-gradient-to-b from-transparent to-gray-900/50 rounded-lg overflow-hidden border border-gray-700/50 transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10"
                >
                  {/* Corner decorations */}
                  <div className="team-card-corner team-card-corner1 absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-primary"></div>
                  <div className="team-card-corner team-card-corner2 absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-primary"></div>
                  <div className="team-card-corner team-card-corner3 absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-primary"></div>
                  <div className="team-card-corner team-card-corner4 absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-primary"></div>

                  <div className="img-wrap relative group">
                    <div className="team-img overflow-hidden">
                      <img
                        src={member.img}
                        alt={member.name}
                        className="w-full h-auto transition-transform duration-500 ease-out"
                      />
                    </div>
                    <img
                      className="game-logo absolute bottom-4 left-4 w-12 h-12 object-contain z-10 transition-all duration-300 group-hover:scale-110"
                      src={member.logo}
                      alt={member.name}
                    />
                  </div>
                  <div className="team-card-content p-4 text-center">
                    <h3 className="box-title text-xl font-bold text-white mb-0">
                      <a
                        href={member.link}
                        className="hover:text-primary transition-colors duration-300"
                      >
                        {member.name}
                      </a>
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <>
              <Swiper
                modules={[Navigation, Autoplay]}
                slidesPerView={5}
                spaceBetween={30}
                navigation={{
                  nextEl: ".team-slider1 .slider-next",
                  prevEl: ".team-slider1 .slider-prev",
                }}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                loop={true}
                breakpoints={{
                  400: { slidesPerView: 1.5 },
                  576: { slidesPerView: 2 },
                  768: { slidesPerView: 3 },
                  992: { slidesPerView: 4 },
                  1200: { slidesPerView: 5 },
                }}
                className="th-slider has-shadow"
              >
                {[...teamMembers, ...teamMembers].map((member, index) => (
                  <SwiperSlide key={index}>
                    <div className="th-team team-card relative bg-gradient-to-b from-transparent to-gray-900/50 rounded-lg overflow-hidden border border-gray-700/50 transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10">
                      {/* Corners */}
                      <div className="team-card-corner team-card-corner1 absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-primary"></div>
                      <div className="team-card-corner team-card-corner2 absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-primary"></div>
                      <div className="team-card-corner team-card-corner3 absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-primary"></div>
                      <div className="team-card-corner team-card-corner4 absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-primary"></div>

                      <div className="img-wrap relative group">
                        <div className="team-img overflow-hidden">
                          <img
                            src={member.img}
                            alt={member.name}
                            className="w-full h-auto transition-transform duration-500 ease-out"
                          />
                        </div>
                        <img
                          className="game-logo absolute bottom-4 left-4 w-12 h-12 object-contain z-10 transition-all duration-300 group-hover:scale-110"
                          src={member.logo}
                          alt={member.name}
                        />
                      </div>
                      <div className="team-card-content p-4 text-center">
                        <h3 className="box-title text-xl font-bold text-white mb-0">
                          <a
                            href={member.link}
                            className="hover:text-primary transition-colors duration-300"
                          >
                            {member.name}
                          </a>
                        </h3>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              <button className="slider-arrow slider-prev absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-gray-800/80 hover:bg-primary transition-colors duration-300 flex items-center justify-center text-white text-xl shadow-lg -ml-4 md:-ml-6">
                <i className="far fa-arrow-left"></i>
              </button>
              <button className="slider-arrow slider-next absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-gray-800/80 hover:bg-primary transition-colors duration-300 flex items-center justify-center text-white text-xl shadow-lg -mr-4 md:-mr-6">
                <i className="far fa-arrow-right"></i>
              </button>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Team;
