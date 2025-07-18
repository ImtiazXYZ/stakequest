import React from 'react';
import HeroSection from '../components/hero/HeroSection';
import Marquee from '../components/common/Marquee';
import AboutSection from '../components/about/AboutSection';
import GameSection from '../components/game/GameSection';
import GameSectionTwo from '../components/game/GameSectionTwo';
import CoreGameSection from '../components/coregamesection/CoreGameSection';
import Roadmap from '../components/roadmap/RoadMap';
import FAQ from '../components/faq/FaqSection';
import Gallery from '../components/gallery/Gallery';
import Team from '../components/team/Team';
import CTA from '../components/cta/Cta';
import Blog from '../components/blog/Blog';
import AboutUsPage from '../components/aboutuspage/AboutUsPage';
import StatsAndTournaments from '../components/stateandtournament/StatsAndTournaments';
import WhyChooseUs from '../components/whychooseus/WhyChooseUs';
import ClientArea from '../components/clientarea/ClientSlider';

const About = () => {
  return (
    <>
      
      <AboutUsPage/>
      <AboutSection />
      <StatsAndTournaments/>
      <WhyChooseUs/>
     
    </>
  );
};

export default About;
