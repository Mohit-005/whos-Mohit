/*
   Copyright (C), 2023-2024, Mohit Kumar (Mohit)
   Author: Mohit Kumar
   FileName: Loader.jsx
   Version: I
   Creation: 18/10/2024
   Last modification: 18/10/2024
*/

import React from 'react';

function Loader() {
  return (
    <div className="w-screen h-screen overflow-hidden bg-grayscale-950 flex items-center justify-center relative">
      <span
        style={{ fontFamily: 'SuperMario' }}
        className="absolute text-primary-400 text-xl"
      >
        mk
      </span>
      <div className="loader" />
    </div>
  );
}

export default Loader;
