/* eslint-disable react/react-in-jsx-scope */
import { useState } from 'react';
import { m, LazyMotion, domAnimation } from 'framer-motion';
import SectionTitle from '../Components/SectionTitle';
import { memoji, introduction } from '../Constants/constants';
import ImageSlider from '../Components/elements/ImageSlider';

function About() {
  // Hover state for the GIF
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div id="about" className="w-full flex justify-center overflow-hidden-web">
      <div className="w-full xl:w-[70%] flex flex-col pb-16">
        <div className="w-full">
          <SectionTitle title="ABOUT ME" subtitle="Introduction" />
        </div>
        <div className="w-full flex flex-col-reverse sm:flex-row">
          <div className="w-full md:w-[50%] md:h-full flex items-center mt-100">
            <LazyMotion features={domAnimation} strict>
              <m.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{
                  duration: 0.5,
                  type: 'spring',
                  stiffness: 100,
                  damping: 20,
                }}
                style={{ fontFamily: 'Poppins, sans-serif' }}
                className="text-grayscale-50 p-6 text-center flex flex-col gap-5"
              >
                <span className="text-primary-400" style={{ fontSize: '1.2em', fontWeight: '900' }}>{introduction.text[0]}</span>
                <span className="text-primary-500" style={{ fontSize: '0.95em', fontWeight: '500' }}>{introduction.text[1]}</span>
                <span className="text-primary-500" style={{ fontSize: '0.95em', fontWeight: '500' }}>{introduction.text[2]}</span>
                <span className="text-primary-500" style={{ fontSize: '0.95em', fontWeight: '500' }}>{introduction.text[3]}</span>
                <a href="cv/resume.pdf" download>
                  <span
                    style={{
                      fontSize: '0.95em', fontWeight: '700', position: 'relative', display: 'inline-block',
                    }}
                  >
                    {introduction.text[4].split('here')[0]}
                    <span
                      style={{ textDecoration: 'underline', cursor: 'pointer', position: 'relative' }}
                      onMouseEnter={() => setIsHovered(true)}
                      onMouseLeave={() => setIsHovered(false)}
                    >
                      here
                      {/* GIF that appears on hover */}
                      {isHovered && (
                        <img
                          src="dancing.gif"
                          alt="Cat talking"
                          style={{
                            position: 'absolute',
                            bottom: '100%',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            height: '70px',
                            width: 'auto',
                            borderRadius: '1px',
                            zIndex: 9999,
                            pointerEvents: 'none',
                            marginBottom: '1px',
                          }}
                        />
                      )}
                    </span>
                    {introduction.text[4].split('here')[1]}
                  </span>
                </a>
              </m.p>
            </LazyMotion>
          </div>

          <div className="w-full md:w-[50%] flex h-full items-center justify-center">
            <div className="w-[80%] lg:w-[50%] h-[300px] sm:h-[350px] flex justify-center items-center">
              <ImageSlider images={memoji.image} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
