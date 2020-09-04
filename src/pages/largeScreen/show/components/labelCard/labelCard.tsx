import React from 'react';
import styles from './labelCard.less';

export default ({ text }: { text: string }) => {

  return (
    <div className={styles.labelCard}>
      { text }
    </div>
  );
};