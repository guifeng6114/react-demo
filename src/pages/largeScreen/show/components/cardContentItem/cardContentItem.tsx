import React from 'react';
import styles from './cardContentItem.less';

export interface CardItemParams {
  name?: string;
  data?: string;
  iconType?: string;
}

export default ({ name, data, iconType }: CardItemParams) => {

  return(
    <div className={styles.contentItem}>
      <span className={styles.contentIcon} />
      <span className={styles.contentTitle}>{name}</span>
      <span className={styles.contentData}>{data}</span>
    </div>
  );
};
