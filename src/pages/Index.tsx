
import React from 'react';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import About from '../components/About';
import SkillsCarousel from '../components/SkillsCarousel';
import Projects from '../components/Projects';
import Services from '../components/Services';
import StatisticsSection from '../components/StatisticsSection';
import Resume from '../components/Resume';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import FloatingChatbot from '../components/FloatingChatbot';
import ScrollToTop from '../components/ScrollToTop';

const Index = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Navigation />
      <div id="home">
        <Hero />
      </div>
      <About />
      <SkillsCarousel />
      <Projects />
      <Services />
      <StatisticsSection />
      <Resume />
      <Contact />
      <Footer />
      <FloatingChatbot />
      <ScrollToTop />
    </div>
  );
};

export default Index;
