import React, {useState} from 'react';
import styles from './ScreenBg.less';
import classNames from 'classnames';
import ResizeObserver from 'rc-resize-observer';

export interface SCreenBgParams {
  name?: string;
  iconType?: string;
  children?: any;
}
const radio = 9/16;
export default ({ children, name, iconType }: any) => {
  const [maxSize, setMaxSize] = useState({})
  const handleResize = ({width, height}: any) => {
    let maxWidth, maxHeight;
    if ( height / width > radio ) {
      maxHeight =  width * radio;
      maxWidth =  width;
      setMaxSize({maxHeight: maxHeight})
    } else {
      maxWidth = height / radio;
      maxHeight =  height;
      setMaxSize({maxWidth: maxWidth})
    }

    const rootElement = document.getElementsByTagName('html')[0];
    // const fontSizeRoot = getComputedStyle(rootElement).fontSize.slice(0, -2);
    rootElement.style.fontSize = `${maxWidth / 1760 * 16}px`;

  }
  return (
    <ResizeObserver onResize={ handleResize }>
    
      <div className={styles.wrapper}>
        <div className={styles.bg}>
          <div className={styles.fixedContainer} style={maxSize}>
            <h2 className={styles.screenTitle}>
              <span className={classNames(styles.icon, styles[iconType])} />
              <span className={styles.titleContent}>{name}</span>
            </h2>
            {children}
          </div>
        </div>
      </div>
    </ResizeObserver>
  );
};
