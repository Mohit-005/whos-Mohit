/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
/*
   Copyright (C), 2023-2024, Mohit Kumar (Mohit)
   Author: Mohit Kumar
   FileName: ImageSlider.jsx
   Version: I
   Creation: 02/08/2024
   Last modification: 10/10/2024
*/

import { useEffect, useState, useRef } from 'react';
import { m, LazyMotion, domAnimation } from 'framer-motion';

function ImageSlider({ images }) {
  const [index, setIndex] = useState(0);
  const [isInViewport, setIsInViewport] = useState(false);
  const imageRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (isInViewport) {
        setIndex((i) => (i + 1) % images.length);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [images, isInViewport]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsInViewport(entry.isIntersecting),
      { threshold: 0 },
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <LazyMotion features={domAnimation} strict>
      <m.div
        ref={imageRef}
        initial={{ x: 200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{
          duration: 0.5,
          type: 'spring',
          stiffness: 100,
          damping: 20,
        }}
        className="w-full h-full blob drop-shadow-div"
        style={{ backgroundImage: `url(${images[index]})` }}
      />
    </LazyMotion>
  );
}

export default ImageSlider;
