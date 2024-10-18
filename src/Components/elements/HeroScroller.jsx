/* eslint-disable react/react-in-jsx-scope */
/*
   Copyright (C), 2023-2024, Mohit Kumar (Mohit)
   Author: Mohit Kumar
   FileName: HeroScroller.jsx
   Version: I
   Creation: 18/10/2024
   Last modification: 10/10/2024
*/

import { m } from 'framer-motion';

function HeroScroller() {
  return (
    <div
      id="scroller"
      className="absolute xs:bottom-10 bottom-12 flex justify-center items-center"
    >
      <a href="#about">
        <div className="w-[35-px] h-[64px] rounded-3xl border-4 border-primary-400 flex justify-center items-start p-2">
          <m.div
            animate={{
              y: [0, 24, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: 'loop',
            }}
            className="w-3 h-3 rounded-full bg-primary-400 mb-1"
          />
        </div>
      </a>
    </div>
  );
}

export default HeroScroller;
