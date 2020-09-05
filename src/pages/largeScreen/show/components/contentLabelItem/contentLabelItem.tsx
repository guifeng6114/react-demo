import React from 'react';
import styles from './contentLabelItem.less';

export interface ContentLabelParams {
  content1: string;
  content2: string;
  content3: string;
}

export default ({ contents }: { contents: ContentLabelParams }) => {

  return (
    <div className={styles.contentLabelContainer}>
      <ContentLabelItem text={contents.content1} />
      <ContentLabelItem text={contents.content2} />
      <div className={styles.data}>{ contents.content3 }</div>
    </div>
  );
};

export const ContentLabelItem = ({ text }: { text: string }) => {
  return (
    <div className={styles.contentLabelItem}>
      <span className={styles.itemIcon} />
      <span className={styles.itemText}>{text}</span>
    </div>
  );
}