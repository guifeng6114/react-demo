import React from 'react';
import styles from './card-title.less';

export default () => {
  return (
    <div className={styles['title-container']}>
      <div className={styles.radius}>container</div>
      <div className={styles.conner} />
    </div>
  );
};
