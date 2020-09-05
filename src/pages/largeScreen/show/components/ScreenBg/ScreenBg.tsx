import React from 'react';
import styles from './ScreenBg.less';
import classNames from 'classnames';

export interface SCreenBgParams {
  name?: string;
  iconType?: string;
  children?: any;
}

export default ({ children, name, iconType }: any) => {
  return (
    <div className={styles.bg}>
      <div className={styles.fixedContainer}>
        <h2 className={styles.screenTitle}>
          <span className={classNames(styles.icon, styles[iconType])} />
          <span className={styles.titleContent}>{name}</span>
        </h2>
        {children}
      </div>
    </div>
  );
};
