/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/*
   Copyright (C), 2023-2024, Mohit Kumar (Mohit)
   Author: Mohit Kumar
   FileName: PreloadMedia.jsx
   Version: I
   Creation: 18/10/2024
   Last modification: 18/10/2024
*/

import { useState } from 'react'
import Loader from './Loader';

function PreloadMedia({ images, children }) {
  const [loaded, setLoaded] = useState(false);

  const onLoad = () => {
    setLoaded(true);
  }

  const imageElements = images.map((imageSrc) => {
    const img = new Image();
    img.src = imageSrc;
    img.onload = onLoad;
    return img;
  });

  return loaded ? children : <Loader />
}

export default PreloadMedia;
