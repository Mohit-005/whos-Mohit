/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/react-in-jsx-scope */
/*
   Copyright (C), 2023-2024, Mohit Kumar (Mohit)
   Author: Mohit Kumar
   FileName: ToggleButton.jsx
   Version: I
   Creation: 02/08/2024
   Last modification: 10/10/2024
*/

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icons } from '../../Constants/constants';

function ToggleButton({ isActive, handleClick }) {
  return (
    <div id="togglebutton" onClick={handleClick} className="bg-grayscale-900 rounded-xl w-[50px] h-[50px] absolute top-4 right-4 flex items-center justify-center cursor-pointer">
      <FontAwesomeIcon className="text-4xl text-grayscale-50" icon={isActive ? icons.faX : icons.faBars} />
    </div>
  );
}

export default ToggleButton;
