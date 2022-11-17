import React from 'react';

// css
import style from './Loading.module.css';

const Loading = () => {
  return (
    <div className={style.loadingWrapper}>
      <div className={style.circleBorder}>
        <div className={style.circle}></div>
      </div>
    </div>
  );
};

export default Loading;
