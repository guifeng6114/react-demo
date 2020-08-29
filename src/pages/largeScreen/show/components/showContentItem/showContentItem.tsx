import React from 'react';
import styles from './showContentItem.less';

export interface ShowContentItem {
  name?: string;
  data?: string;
  iconType?: string;
}

export default ({ name, data, iconType }: ShowContentItem) => {

  return (
    <div className={styles.showItem}>
      <div className={styles.showSub}>
        <span className={styles.showIcon}>{iconType}</span>
        <span className={styles.showName}>{name}</span>
      </div>
      <div className={styles.showData}>{data}</div>
    </div>
  );
};
