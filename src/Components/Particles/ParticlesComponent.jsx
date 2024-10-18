/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
/*
   Copyright (C), 2023-2024, Mohit Kumar (Mohit)
   Author: Mohit Kumar
   FileName: ParticlesComponent.jsx
   Version: I
   Creation: 18/10/2024
   Last modification: 10/10/2024
*/

import { useCallback } from 'react';
import Particles from 'react-particles';
import { loadFull } from 'tsparticles';

function ParticlesComponent(props) {
  const { particlesOptions, className, id } = props;

  let isInitialized = false;

  const particlesInit = useCallback(async (engine) => {
    if (!isInitialized) {
      await loadFull(engine);
      isInitialized = true;
    }
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await container
  }, []);

  return (
    <Particles
      id={id}
      className={className}
      init={particlesInit}
      loaded={particlesLoaded}
      options={particlesOptions}
    />
  );
}

export default ParticlesComponent;
