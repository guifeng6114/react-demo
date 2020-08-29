import React from 'react';
import styles from './loading-anime.less';

export default () => {
  const spans = Array.from({ length: 18 }).map(
    (item: any, i: number) => {
      const animationIndex = Math.ceil((i + 1) / 3);
      return (
        <span
          key={i.toString()}
          className={`${styles.rect} ${styles[`animation${ animationIndex }`]}`}
        />
      );
    }

  );
  return (
    <div className={styles['load-container']}>
      {spans}
    </div>
  )
}
