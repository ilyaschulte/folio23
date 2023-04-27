// components/SocialButtons.js
import React from 'react';

const SocialButtons = () => {
  const handleClick = (url) => {
    window.open(url, '_blank');
  };

  const socialButtons = {
    position: 'fixed',
    bottom: '5px',
    width: 'calc(100% - 10px)', // Subtract the body's left and right padding (20px each)
    display: 'flex',
    justifyContent: 'space-between',
    listStyle: 'none',
    left: '5px', // Align with the body's left padding
  };

  const socialButton = {
    textDecoration: 'none',
    color: 'black',
    fontSize: '11px',
    fontFamily: 'SuisseIntl-Book',
    cursor: 'pointer',
  };

  return (
    <ul style={socialButtons}>
      <li>
        <a
          style={socialButton}
          onClick={() => handleClick('mailto:mail@ilyaschulte.com')}
        >
          INQUIRIES
        </a>
      </li>
      <li>
        <a
          style={socialButton}
          onClick={() => handleClick('https://www.instagram.com/ilyaschulte')}
        >
          INSTAGRAM
        </a>
      </li>
      <li>
        <a
          style={socialButton}
          onClick={() => handleClick('https://www.linkedin.com/in/ilya-schulte')}
        >
          LINKEDIN
        </a>
      </li>
      <li>
        <a
          style={socialButton}
          onClick={() => handleClick('https://www.are.na/ilya-schulte')}
        >
          ARE.NA
        </a>
      </li>
    </ul>
  );
};

export default SocialButtons;
