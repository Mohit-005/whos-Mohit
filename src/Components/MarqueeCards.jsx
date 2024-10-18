/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
/*
   Copyright (C), 2023-2024, Mohit Kumar (Mohit)
   Author: Mohit Kumar
   FileName: MarqueeCards.jsx
   Version: I
   Creation: 18/10/2024
   Last modification: 18/10/2024
*/

import Marquee from 'react-fast-marquee';

function MarqueeCards({ children, direction }) {
  return (
    <Marquee
      direction={direction}
      gradient={false}
      speed={100}
      pauseOnHover
    >
      {children}
    </Marquee>
  );
}

export default MarqueeCards;
