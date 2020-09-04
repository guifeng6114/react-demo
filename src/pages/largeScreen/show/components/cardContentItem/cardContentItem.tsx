import React from 'react';
import styles from './cardContentItem.less';
import classNames from 'classnames';

export interface CardItemParams {
  name?: string;
  data?: string;
  iconType?: string;
  needCenter?: boolean;
  needBorder?: boolean;
  style?: { [key: string]: string };
}

export default ({ 
  name,
  data,
  needBorder = false,
  needCenter = false,
  iconType,
  style 
}: CardItemParams) => {

  return(
    <div 
      className={classNames(
        styles.contentItem,
        needBorder && styles.withBorder,
        needCenter && styles.center
      )}
      style={ style }
    >
      <span className={styles.contentIcon} />
      <span className={styles.contentTitle}>{name}</span>
      <span className={styles.contentData}>{data}</span>
    </div>
  );
};
