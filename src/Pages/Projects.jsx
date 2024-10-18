/* eslint-disable react/react-in-jsx-scope */
/*
   Copyright (C), 2023-2024, Mohit Kumar (Mohit)
   Author: Mohit Kumar
   FileName: Projects.jsx
   Version: I
   Creation: 18/10/2024
   Last modification: 20/04/2024
*/

import Works from '../Components/ProjectCards';
import SectionTitle from '../Components/SectionTitle';

function Projects() {
  return (
    <div className="w-full flex justify-center" id="projects">
      <div className="w-full xl:w-[70%] flex flex-col pb-16">
        <div className="w-full ">
          <SectionTitle title="PROJECTS" subtitle="What I have done so far" />
        </div>
        <Works />
      </div>
    </div>
  );
}

export default Projects;
