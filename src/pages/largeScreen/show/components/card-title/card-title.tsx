import React from 'react';
import LoadingAnime from '../load-anime/loading-anime';
import styles from './card-title.less';

export interface CardTitleParams {
  name?: string;
  iconType?: string;
}

export default ({ iconType, name }: CardTitleParams) => {
  return (
    <div className={styles['title-container']}>
      <div className={styles.title}>
        { iconType && <span className={ `${styles.titleIcon} ${styles[iconType]}` } /> }
        <span className={styles.titleContent}>{ name }</span>
      </div>
      <div className={ styles.loading }>
        <LoadingAnime />
      </div>
    </div>
  );
};
