import React from 'react';

import Header from '../partials/Header';
import HeroHome from '../partials/HeroHome';
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
      </main>
    </div>
  );
}

export default Home;