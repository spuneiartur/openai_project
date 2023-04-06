import './Response.css';
import aiIcon from './img/ai_icon.png';
import React, { useState, useEffect } from 'react';

function LoadingAnimation() {
  const [loadingText, setLoadingText] = useState('');

  useEffect(() => {
    const intervalId = setInterval(() => {
      setLoadingText(loadingText => {
        switch (loadingText) {
          case '':
            return '.';
          case '.':
            return '..';
          case '..':
            return '...';
          default:
            return '';
        }
      });
    }, 500);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="response__container response__container--ai">
      <div className="response__icon">
        <img src={aiIcon}></img>
      </div>
      <div className="response__content">
        <p>{loadingText}</p>
      </div>
    </div>
  );
}

export default LoadingAnimation;
