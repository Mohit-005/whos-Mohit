/* eslint-disable react/react-in-jsx-scope */
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icons } from '../Constants/constants';

function SocialLinks() {
  // State to track the hovered icon
  const [hoveredIcon, setHoveredIcon] = useState(null);

  return (
    <div className="w-full h-[100px] bg-grayscale-950 flex justify-center items-center gap-3 p-6">
      {/* GitHub Icon */}
      <a
        href="https://github.com/Mohit-005"
        target="_blank"
        rel="noreferrer"
        onMouseEnter={() => setHoveredIcon('github')}
        onMouseLeave={() => setHoveredIcon(null)}
        style={{ position: 'relative' }}
      >
        <FontAwesomeIcon
          className="text-3xl text-grayscale-25 hover:text-primary-200 hover:scale-[1.1] transition-all duration-75"
          icon={icons.faGithub}
        />
        {hoveredIcon === 'github' && (
          <img
            src="https://github.com/Mohit-005/whos-Mohit/blob/main/cat-walid.gif"
            alt="Cat talking"
            style={{
              position: 'absolute',
              bottom: '100%', // Position the GIF above the icon
              left: '50%',
              transform: 'translateX(-50%)',
              height: '70px',
              width: '9999',
              borderRadius: '1px',
              zIndex: 9999,
              pointerEvents: 'none',
              marginBottom: '10px', // Space between icon and GIF
            }}
          />
        )}
      </a>

      {/* Envelope Icon */}
      <a
        href="mailto:gauravmohit1324@gmail.com"
        target="_blank"
        rel="noreferrer"
        onMouseEnter={() => setHoveredIcon('envelope')}
        onMouseLeave={() => setHoveredIcon(null)}
        style={{ position: 'relative' }}
      >
        <FontAwesomeIcon
          className="text-3xl text-grayscale-25 hover:text-primary-200 hover:scale-[1.1] transition-all duration-75"
          icon={icons.faEnvelope}
        />
        {hoveredIcon === 'envelope' && (
          <img
            src="https://github.com/Mohit-005/whos-Mohit/blob/main/cat-pop.gif"
            alt="Cat talking"
            style={{
              position: 'absolute',
              bottom: '100%',
              left: '50%',
              transform: 'translateX(-50%)',
              height: '70px',
              width: 'auto',
              borderRadius: '1x',
              zIndex: 9999,
              pointerEvents: 'none',
              marginBottom: '10px',
            }}
          />
        )}
      </a>

      {/* LinkedIn Icon */}
      <a
        href="https://www.linkedin.com/in/"
        target="_blank"
        rel="noreferrer"
        onMouseEnter={() => setHoveredIcon('linkedin')}
        onMouseLeave={() => setHoveredIcon(null)}
        style={{ position: 'relative' }}
      >
        <FontAwesomeIcon
          className="text-3xl text-grayscale-25 hover:text-primary-200 hover:scale-[1.1] transition-all duration-75"
          icon={icons.faLinkedin}
        />
        {hoveredIcon === 'linkedin' && (
          <img
            src="https://github.com/Mohit-005/whos-Mohit/blob/main/kpn-kpn-cat.gif"
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
              marginBottom: '10px',
            }}
          />
        )}
      </a>
    </div>
  );
}

export default SocialLinks;
