import React from 'react';
import styles from './shineBlur.less';

export default ({ style }: { style?: { [key:string]: any } }) => {

  return (
    <div className={styles.shineContainer} style={style}>
      <div className={styles.shineDiv} />
    </div>
  );
};
