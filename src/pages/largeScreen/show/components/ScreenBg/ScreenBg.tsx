import React from 'react';
import styles from './ScreenBg.less';

export interface SCreenBgParams {
  name?: string;
  iconType?: string;
  children?: any;
}

export default ({ children, name, iconType }: any) => {
  console.log(children);
  return (
    <div className={ styles.bg }>
      <h2 className={ styles.screenTitle }>
        <span className={ styles.icon } />
        <span className={ styles.titleContent }>{name}</span>
      </h2>
      { children }
    </div>
  );
};
