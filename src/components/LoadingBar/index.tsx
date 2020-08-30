import React, { useRef, ReactNode } from 'react';
import ResizeObserver from 'rc-resize-observer';
import classNames from 'classnames';
import styles from './index.less';

const rectCount = 18;

export interface LoadingBarProps {
  className: string;
}

const LoadingBar: React.FC<LoadingBarProps> = (props) => {
  const {
    className
  } = props;
  return (
    <div className={classNames(styles.loadingBar, className)}>
      <div className={styles.rectList}>
        {
          Array.from({ length: rectCount * 2 }).map((t, i) => (
            <div key={i} className={ classNames(styles.rectItem, {[styles.rectItemLight]: i< rectCount})}></div>
          ))
        }
      </div>
    </div>
  )
}

export default LoadingBar;