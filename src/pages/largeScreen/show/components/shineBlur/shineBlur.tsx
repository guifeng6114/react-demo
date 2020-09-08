import React from 'react';
import classNames from 'classnames';
import styles from './shineBlur.less';

export interface ShineParams {
  delay?: number;
  left?: boolean;
  right?: boolean;
  top?: boolean;
  bottom?: boolean;
  reverse?: boolean;
  style?: { [key:string]: any };
}

export default ({
  style,
  delay,
  left = false,
  right = false,
  top = false,
  bottom = false,
  reverse = false
}: ShineParams) => {

  return (
    <div className={
      classNames(
        styles.shineContainer,
        left || right ? styles.vertical : styles.horizental,
        left && styles.left,
        right && styles.right,
        top && styles.top,
        bottom && styles.bottom
      )}
      style={style}
    >
      <div className={
        classNames(
          styles.shineDiv,
          left || right ? styles.vertical : styles.horizental,
          reverse && styles.reverse
        )}
        style={{
          animationDelay: `${delay}s`
        }}
      />
    </div>
  );
};
