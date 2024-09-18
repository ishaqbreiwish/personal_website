import React from 'react';

import Header from '../partials/Header';
import HeroHome from '../partials/HeroHome';
import FeaturesHome from '../partials/FeaturesHome';
import FeaturesBlocks from '../partials/FeaturesBlocks';
import Projects from '../partials/Projects'; 
import FeaturesWorld from '../partials/FeaturesWorld';
import News from '../partials/News';
import Cta from '../partials/Cta';
import Footer from '../partials/Footer';
import ProjectsSection from '../partials/ProjectsSection';
import Education from '../partials/EducationSection';
import WorkExperience from '../partials/WorkExperience';
import GetInTouch from '../partials/GetInTouch';

function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="grow">

        {/*  Page sections */}
        <HeroHome />
        <Education />
        <WorkExperience />
        <ProjectsSection />
        <GetInTouch />

        {/* <FeaturesWorld />
        <News />
        <Cta /> */}

      </main>

      {/*  Site footer */}
      {/* <Footer /> */}

    </div>
  );
}

export default Home;