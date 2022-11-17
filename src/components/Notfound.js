import React, { useEffect } from 'react';

// image
import notFoundImage from '../images/not_found.svg';

// css
import style from './Notfound.module.css';

const Notfound = () => {
  useEffect(() => {
    document.title = 'This Page NotFound!';
  }, []);

  return (
    <div className={style.nfContainer}>
      <img src={notFoundImage} alt="Not Found" />
      <p style={{ color: '#898989' }}>The page you searched is not found</p>
    </div>
  );
};

export default Notfound;
