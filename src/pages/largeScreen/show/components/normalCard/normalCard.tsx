import React from 'react';
import styles from './normalCard.less';

export default ({ children }: any) => {

  return (
    <div className={ styles.normalCard }>
      { children }
    </div>
  );
};
