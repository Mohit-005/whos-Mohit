/* eslint-disable react/react-in-jsx-scope */
/*
   Copyright (C), 2023-2024, Mohit Kumar (Mohit)
   Author: Mohit Kumar
   FileName: HeroParticles.jsx
   Version: I
   Creation: 18/10/2024
   Last modification: 18/10/2024
*/

import ParticlesComponent from './ParticlesComponent';
import { heroOptions } from './particlesOptions';

function HeroParticles() {
  return (
    <div className="w-full h-screen min-h-[800px]">
      <ParticlesComponent
        id="hero-particles"
        className="w-full h-screen z-0 min-h-[800px]"
        particlesOptions={heroOptions}
      />
    </div>
  );
}

export default HeroParticles;
