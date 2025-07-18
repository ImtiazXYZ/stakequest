// import React, { useState, useEffect } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay } from "swiper/modules";
// import "swiper/css";

// const teamMembers = [
//   {
//     img: "/assets/img/team/1-1.png",
//     logo: "/assets/img/team/game-logo1-1.png",
//     name: "Max Alexis",
//     link: "team-details.html",
//   },
//   {
//     img: "/assets/img/team/1-2.png",
//     logo: "/assets/img/team/game-logo1-2.png",
//     name: "Wilium Lili",
//     link: "team-details.html",
//   },
//   {
//     img: "/assets/img/team/1-3.png",
//     logo: "/assets/img/team/game-logo1-3.png",
//     name: "Mac Marsh",
//     link: "team-details.html",
//   },
//   {
//     img: "/assets/img/team/1-4.png",
//     logo: "/assets/img/team/game-logo1-4.png",
//     name: "Eva Raina",
//     link: "team-details.html",
//   },
//   {
//     img: "/assets/img/team/1-5.png",
//     logo: "/assets/img/team/game-logo1-5.png",
//     name: "Robin Cloth",
//     link: "team-details.html",
//   },
// ];

// const Team = () => {
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     const checkIsMobile = () => {
//       setIsMobile(window.innerWidth < 768);
//     };
//     checkIsMobile();
//     window.addEventListener("resize", checkIsMobile);
//     return () => window.removeEventListener("resize", checkIsMobile);
//   }, []);

//   return (
//     <div className="bg-gray-900 min-h-screen py-16">
//       <h1 className="text-4xl font-bold text-center text-white mb-12">
//         Team Members
//       </h1>

//       <div className="container mx-auto px-4">
//         <div className="text-center mb-12">
//           <span className="text-purple-500 text-lg font-medium mb-3 block">
//             # Core Team & Advisors
//           </span>
//           <h2 className="text-3xl md:text-4xl font-bold text-white">
//             Meet Our StakeQuest Legends Team
//           </h2>
//         </div>

//          {isMobile ? (
//   <div className="flex overflow-x-auto pb-6 space-x-4 pl-4 pr-4 snap-x snap-mandatory">
//     {teamMembers.map((member, index) => (
//       <div
//         key={index}
//         className="flex-shrink-0 w-64 bg-gray-800 rounded-xl overflow-hidden border border-gray-700 snap-center transform transition-transform duration-500 hover:scale-105"
//       >
//         <div className="relative group flex justify-center items-center overflow-hidden">
//           <img
//             src={member.img}
//             alt={member.name}
//             className="w-full h-auto mx-auto transition-transform duration-500 group-hover:scale-110"
//           />
//           <img
//             src={member.logo}
//             alt={`${member.name} Logo`}
//             className="absolute bottom-4 left-4 w-12 h-12"
//           />
//         </div>
//         <div className="p-4 text-center">
//           <h3 className="text-xl font-bold text-white">
//             <a
//               href={member.link}
//               className="hover:text-purple-500 transition-colors duration-300"
//             >
//               {member.name}
//             </a>
//           </h3>
//         </div>
//       </div>
//     ))}
//   </div>
// ) : (
//           <Swiper
//             modules={[Autoplay]}
//             slidesPerView={4}
//             spaceBetween={30}
//             autoplay={{
//               delay: 3000,
//               disableOnInteraction: false,
//             }}
//             loop={true}
//             breakpoints={{
//               640: { slidesPerView: 2 },
//               768: { slidesPerView: 3 },
//               1024: { slidesPerView: 4 },
//               1280: { slidesPerView: 5 },
//             }}
//           >
//             {teamMembers.map((member, index) => (
//               <SwiperSlide key={index}>
//                 <div className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 transform transition-transform duration-500 hover:scale-105">
//                   <div className="relative group overflow-hidden">
//                     <img
//                       src={member.img}
//                       alt={member.name}
//                       className="w-full h-auto transition-transform duration-700 group-hover:scale-110"
//                     />
//                     <img
//                       src={member.logo}
//                       alt={`${member.name} Logo`}
//                       className="absolute bottom-4 left-4 w-12 h-12"
//                     />
//                   </div>
//                   <div className="p-4 text-center">
//                     <h3 className="text-xl font-bold text-white">
//                       <a
//                         href={member.link}
//                         className="hover:text-purple-500 transition-colors duration-300"
//                       >
//                         {member.name}
//                       </a>
//                     </h3>
//                   </div>
//                 </div>
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Team;

import React, { useState } from 'react';

const Team = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const teamMembers = [
    {
      question: 'Founder & CEO — "M.R. Mahim"',
      answer: '🎮 8 years in gaming and startup'
    },
    {
      question: 'Co-Founder — "Monwar"',
      answer: '💰 Experience 5 years in crypto & Influencer'
    },
    {
      question: 'CTO — "Noah"',
      answer: 'Working with startup about 4 years'
    },
    {
      question: 'Project Lead / Game Director — "Sureerat"',
      answer: '🎮 7+ years in game development'
    },
    {
      question: 'Blockchain Lead — "Rohit"',
      answer: '⛓️ Solidity, Rust, Move | Built 10+ audited contracts across EVM + Layer 2s'
    },
    {
      question: 'Economy Designer — "Ariyan"',
      answer: '💰 GameFi + DeFi hybrid tokenomics specialist'
    },
    {
      question: 'Community Manager — "Wahid"',
      answer: '🌐 Tg/Dc community Builders | Drives tournaments, social, and DAO ops'
    },
  ];

  const toggleMember = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="faq-container">
      <style jsx>{`
        /* (Styles stay the same as your original) */
      `}</style>
      
      <div className="faq-content">
        <div className="faq-left">
          <h1 className="faq-title">Core Team</h1>
          <p className="faq-subtitle">
            Meet the people building the future.
          </p>
          <img src="assets/img/blog/teamimage.jpg" alt="" />
        </div>
        
        <div className="faq-right">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className={`faq-item ${activeIndex === index ? 'active' : ''}`}
              onClick={() => toggleMember(index)}
            >
              <div className="faq-header">
                <span className="faq-number">{index + 1}</span>
                <h3 className="faq-question">{member.question}</h3>
                <span className={`faq-toggle ${activeIndex === index ? 'active' : ''}`}>
                  +
                </span>
              </div>
              {activeIndex === index && (
                <p className="faq-answer">{member.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
