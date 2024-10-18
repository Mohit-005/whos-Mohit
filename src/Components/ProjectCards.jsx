/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable camelcase */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
/* eslint-disable no-nested-ternary */
/*
   Copyright (C), 2023-2024, Mohit Kumar (Mohit)
   Author: Mohit Kumar
   FileName: ProjectCards.jsx
   Version: I
   Creation: 02/08/2024
   Last modification: 19/04/2024
*/

import { motion } from 'framer-motion';
import { Tilt } from 'react-tilt';
import { projects } from '../Constants/constants';
import { githubIcon } from '../assets';

export const staggerContainer = (staggerChildren, delayChildren) => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren,
      delayChildren: delayChildren || 0,
    },
  },
});

export const textVariant = (delay) => ({
  hidden: {
    y: -50,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      duration: 1.25,
      delay,
    },
  },
});

export const fadeIn = (direction, type, delay, duration) => ({
  hidden: {
    x: direction === 'left' ? 100 : direction === 'right' ? -100 : 0,
    y: direction === 'up' ? 100 : direction === 'down' ? -100 : 0,
    opacity: 0,
  },
  show: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      type,
      delay,
      duration,
      ease: 'easeOut',
    },
  },
});

export const zoomIn = (delay, duration) => ({
  hidden: {
    scale: 0,
    opacity: 0,
  },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      type: 'tween',
      delay,
      duration,
      ease: 'easeOut',
    },
  },
});

export const slideIn = (direction, type, delay, duration) => ({
  hidden: {
    x: direction === 'left' ? '-100%' : direction === 'right' ? '100%' : 0,
    y: direction === 'up' ? '100%' : direction === 'down' ? '100%' : 0,
  },
  show: {
    x: 0,
    y: 0,
    transition: {
      type,
      delay,
      duration,
      ease: 'easeOut',
    },
  },
});

function ProjectCard({
  index,
  name,
  description,
  image,
  source_code_link,
  demo_link,
}) {
  return (
    <Tilt
      options={{
        max: 40,
        scale: 1,
        speed: 450,
      }}
      className="shadow-2xl p-5 rounded-lg sm:w-[300px] w-[100%]"
    >
      <motion.div
        variants={fadeIn('up', 'spring', index * 0.5, 0.75)}
      >
        <div className="relative">
          <img
            src={image}
            alt={name}
            className="w-full h-full md:h-[200px] object-cover rounded-lg relative"
          />
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, '_blank')}
              className="w-8 h-8 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={githubIcon}
                alt="github"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>

        <div className="mt-3">
          <h3 className="text-white font-bold text-2xl">{name}</h3>
          <p className="mt-2 text-secondary text-[14px] leading-snug">
            {description}
          </p>
        </div>
        <div className="mt-2 flex flex-wrap gap-1" />
        <div className="mt-3 flex justify-center items-center">
          <a
            className="shadow-md shadow-primary p-2 bg-tertiary rounded-lg flex justify-center"
            href={demo_link}
            target="_blank"
            rel="noreferrer"
          >
            See the Demo
          </a>
        </div>
      </motion.div>
    </Tilt>
  );
}

function Works() {
  return (
    <div className="mt-5 flex flex-wrap justify-center gap-4 text-grayscale-50 w-full">
      {projects.map((project, index) => (
        <ProjectCard key={`project-${index}`} index={index} {...project} />
      ))}
    </div>
  );
}

export default Works;
