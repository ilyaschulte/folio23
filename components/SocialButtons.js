// components/SocialButtons.js
import React from 'react';

const SocialButtons = () => {
  const handleClick = (url) => {
    window.open(url, '_blank');
  };

  const socialButtons = {
    position: 'fixed',
    bottom: '10px',
    display: 'flex',
    alignItems: 'center',
    listStyle: 'none',
    margin: 0,
    padding: 0,
  };

  const socialButton = {
    textDecoration: 'none',
    color: 'black',
    fontSize: '11px',
    fontFamily: 'SuisseIntl-Book',
    marginRight: '10px',
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
          onClick={() => handleClick('https://www.instagram.com')}
        >
          INSTAGRAM
        </a>
      </li>
      <li>
        <a
          style={socialButton}
          onClick={() => handleClick('https://www.linkedin.com')}
        >
          LINKEDIN
        </a>
      </li>
      <li>
        <a
          style={socialButton}
          onClick={() => handleClick('https://www.are.na')}
        >
          ARE.NA
        </a>
      </li>
    </ul>
  );
};

export default SocialButtons;
