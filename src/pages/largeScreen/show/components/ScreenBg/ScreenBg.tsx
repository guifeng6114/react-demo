import React from 'react';
import styles from './ScreenBg.less';

export default ({ children }: any) => {
  console.log(children);
  return (
    <div className={ styles.bg }>
      <h2 className={ styles.screenTitle }>
        <span className={ styles.icon } />
        <span className={ styles.titleContent }>营销大屏</span>
      </h2>
      { children }
    </div>
  );
};
