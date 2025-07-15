import React, { useEffect, useRef } from 'react';

const WhyChooseUs = () => {
  const sectionRef = useRef(null);
  const checklistItemsRef = useRef([]);
  const experienceTagRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate checklist items
            checklistItemsRef.current.forEach((item, index) => {
              if (item) {
                setTimeout(() => {
                  item.style.opacity = 1;
                  item.style.transform = 'translateX(0)';
                }, index * 150);
              }
            });

            // Animate experience tag
            if (experienceTagRef.current) {
              experienceTagRef.current.style.transform = 'rotate(0deg)';
              experienceTagRef.current.style.opacity = 1;
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>
        {`
          @keyframes fadeInLeft {
            from {
              opacity: 0;
              transform: translateX(-50px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
          
          @keyframes fadeInRight {
            from {
              opacity: 0;
              transform: translateX(50px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
          
          @keyframes rotateCircle {
            from {
              transform: rotate(-180deg);
              opacity: 0;
            }
            to {
              transform: rotate(0deg);
              opacity: 1;
            }
          }
          
          .about-sec-3 {
            position: relative;
            padding: 100px 0;
            background-color: #111;
            overflow: hidden;
          }
          
          .gr-bg1.overlay {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(135deg, rgba(255,0,150,0.2) 0%, rgba(0,204,255,0.2) 100%);
            z-index: 0;
          }
          
          .container {
            position: relative;
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
            z-index: 1;
          }
          
          .row {
            display: flex;
            flex-wrap: wrap;
            margin: 0 -15px;
          }
          
          .col-xl-6 {
            flex: 0 0 50%;
            max-width: 50%;
            padding: 0 15px;
          }
          
          .title-area {
            margin-bottom: 40px;
            opacity: 0;
            animation: fadeInLeft 1s forwards;
            animation-delay: 0.3s;
          }
          
          .sub-title {
            color: #ff0080;
            font-weight: bold;
            letter-spacing: 2px;
            display: block;
            margin-bottom: 15px;
            font-size: 1.1rem;
          }
          
          .sec-title {
            color: #fff;
            font-size: 2.5rem;
            margin-bottom: 25px;
            line-height: 1.2;
          }
          
          .text-theme {
            color: #ff0080;
          }
          
          .checklist ul {
            list-style: none;
            padding: 0;
            margin: 0;
          }
          
          .checklist li {
            color: #eee;
            margin-bottom: 15px;
            font-size: 1rem;
            opacity: 0;
            transform: translateX(-20px);
            transition: all 0.5s ease;
            display: flex;
            align-items: center;
          }
          
          .checklist li i {
            color: #ff0080;
            margin-right: 10px;
            font-size: 1.2rem;
          }
          
          .img-box3 {
            position: relative;
            margin-bottom: 40px;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 10px 30px rgba(0,0,0,0.3);
            transition: all 0.5s ease;
          }
          
          .img-box3:hover {
            transform: translateY(-10px);
            box-shadow: 0 15px 40px rgba(255,0,150,0.2);
          }
          
          .img-box3 img {
            width: 100%;
            height: auto;
            display: block;
            transition: transform 0.5s ease;
          }
          
          .img-box3:hover img {
            transform: scale(1.05);
          }
          
          .about-content {
            background: rgba(30,30,30,0.7);
            padding: 30px;
            border-radius: 12px;
            border-left: 4px solid #ff0080;
            opacity: 0;
            animation: fadeInRight 1s forwards;
            animation-delay: 0.6s;
          }
          
          .about-content p {
            color: #ddd;
            line-height: 1.6;
            margin-bottom: 20px;
          }
          
          .about-tag {
            position: absolute;
            right: 50px;
            bottom: 50px;
            display: flex;
            align-items: center;
          }
          
          .about-experience-tag {
            background: rgba(255,0,150,0.2);
            padding: 15px 25px;
            border-radius: 30px;
            transform: rotate(-180deg);
            opacity: 0;
            transition: all 1s ease;
            transition-delay: 0.9s;
          }
          
          .circle-title-anime {
            color: #fff;
            font-weight: bold;
            letter-spacing: 1px;
          }
          
          .about-tag-icon {
            margin-left: 15px;
            animation: pulse 2s infinite;
          }
          
          @keyframes pulse {
            0% {
              transform: scale(1);
            }
            50% {
              transform: scale(1.1);
            }
            100% {
              transform: scale(1);
            }
          }
          
          @media (max-width: 1199px) {
            .col-xl-6 {
              flex: 0 0 100%;
              max-width: 100%;
            }
            
            .about-tag {
              position: relative;
              right: auto;
              bottom: auto;
              justify-content: center;
              margin-top: 40px;
            }
          }
        `}
      </style>

      <div 
        className="about-sec-3 overflow-hidden space-top position-relative z-index-common"
        ref={sectionRef}
      >
        <div className="gr-bg1 overlay"></div>
        <div className="container">
          <div className="about-wrap3">
            <div className="row gy-40">
              <div className="col-xl-6">
                <div className="title-area">
                  <span className="sub-title"># Why Choose Our Gaming Site</span>
                  <h2 className="sec-title">Our Values Inspire And Drive Our Every Move <span className="text-theme">!</span></h2>
                  <div className="checklist">
                    <ul>
                      <li ref={el => checklistItemsRef.current[0] = el}>
                        <i className="fas fa-circle-check"></i> Duis scelerisque nunc ac massa efficitur pulvinar.
                      </li>
                      <li ref={el => checklistItemsRef.current[1] = el}>
                        <i className="fas fa-circle-check"></i> Vivamus eget nisi scelerisque, iaculis risus vel, molestie risus.
                      </li>
                      <li ref={el => checklistItemsRef.current[2] = el}>
                        <i className="fas fa-circle-check"></i> Aliquam nec sapien vitae dui dapibus blandit.
                      </li>
                      <li ref={el => checklistItemsRef.current[3] = el}>
                        <i className="fas fa-circle-check"></i> Sed non ipsum ut mauris dictum ullamcorper ac at nibh.
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="img-box3">
                  <div className="img1">
                    <img src="assets/img/normal/about3-2.png" alt="About" />
                  </div>
                </div>
              </div>
              <div className="col-xl-6">
                <div className="img-box3">
                  <div className="img1">
                    <img src="assets/img/normal/about3-1.png" alt="About" />
                  </div>
                </div>
                <div className="about-content">
                  <p>Gamers can join local gaming meetups, participate in gaming events, or connect with like-minded individuals through online forums and social media groups. Engaging with the community helps build connections and creates opportunities for collaborative gaming experiences.</p>
                  <p className="mb-0">Storytelling is a crucial element in modern video game design, creating immersive and engaging experiences. Games with compelling narratives often resonate more with players, adding depth to the overall gaming experience.</p>
                </div>
              </div>
            </div>
            <div className="about-tag">
              {/* <div className="about-experience-tag" ref={experienceTagRef}>
                <span className="circle-title-anime">24 YEARS EXPERIENCE OF GAMING</span>
              </div> */}
              <div className="about-tag-icon">
                <img src="assets/img/logo-icon.svg" alt="img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyChooseUs;