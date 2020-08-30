import React, { useRef, useState, useMemo, ReactNode, useEffect } from 'react';
import ResizeObserver from 'rc-resize-observer';
import classNames from 'classnames';
import styles from './index.less';


interface defaultCorner {
  type: 'default';
}

interface arcCorner {
  type: 'arc';
  radius: number;
}

interface cutCorner {
  type: 'cut';
  width: number;
}


interface polygonCorner {
  type: 'polygon';
  width: number;
  height: number;
}

export interface ScreenCardProps {
  className?: string;
  extra?: string | ReactNode;
  title?: string | ReactNode;
  titleBorderHighLight?: boolean;
  children?: ReactNode;
  borderWidth?: number;
  borderColor?: string;
  highLightBorderWidth?: number;
  rightTopCorner?: defaultCorner | arcCorner | cutCorner | polygonCorner;
  rightBottomCorner?: defaultCorner | arcCorner | cutCorner | polygonCorner;
  leftBottomCorner?: defaultCorner | arcCorner | cutCorner | polygonCorner;
  leftTopCorner?: defaultCorner | arcCorner | cutCorner | polygonCorner;

}

interface Size {
  width: number;
  height: number;
}

const defaultProps: ScreenCardProps = {
  titleBorderHighLight: true,
  borderWidth: 1,
  borderColor: '#fff',
  highLightBorderColor: '#000',
  highLightBorderWidth: 3,
  rightTopCorner: { type: 'default' },
  rightBottomCorner: { type: 'default' },
  leftBottomCorner: { type: 'default' },
  leftTopCorner: { type: 'default' },
}


const ScreenCard: React.FC<ScreenCardProps> = (props) => {
  const backRef = useRef<any>(null);

  const mergedProps = Object.assign({}, defaultProps, props)

  const {
    title,
    titleBorderHighLight,
    extra,
    className,
    children,
    borderWidth,
    borderColor,
    highLightBorderColor,
    highLightBorderWidth,
    rightTopCorner,
    rightBottomCorner,
    leftBottomCorner,
    leftTopCorner,
  } = mergedProps;




  const [titleSize, setTitleSize] = useState<Size>({ width: 0, height: 0 });
  const [cardSize, setCardSize] = useState<Size>({ width: 0, height: 0 });

  const d = useMemo(() => {

    let top = highLightBorderWidth / 2;

    if ( title ) {
      top = titleSize.height;
    } else {
      if ( rightTopCorner.type === 'polygon' || leftTopCorner.type === 'polygon' ) {
        const rightHeight = rightTopCorner.height || 0;
        const leftHeight = leftTopCorner.height || 0;
        top = highLightBorderWidth / 2 + Math.max(leftHeight, rightHeight)
      }
    }

    let bottom = cardSize.height - highLightBorderWidth / 2;

    if ( rightBottomCorner.type === 'polygon' || leftBottomCorner.type === 'polygon' ) {
      const rightHeight = rightBottomCorner.height || 0;
      const leftHeight = leftBottomCorner.height || 0;
      bottom = cardSize.height - highLightBorderWidth / 2 - Math.max(leftHeight, rightHeight)
    }

    const right = cardSize.width - highLightBorderWidth / 2;
    const left = highLightBorderWidth / 2;


    let rightLine, rightBottomLine, bottomLine, leftBottomLine, leftLine, leftTopLine, topLine, rightTopLine;
    let titleLine;
    // draw rightLine;
    let rightLineTop;
    if ( rightTopCorner.type === 'default' ) {
      rightLineTop = top;
    } else if ( rightTopCorner.type === 'arc' ) {
      rightLineTop = top + rightTopCorner.radius;
    } else if ( rightTopCorner.type === 'cut' ) {
      rightLineTop = top + rightTopCorner.width;
    } else if ( rightTopCorner.type === 'polygon' ) {
      rightLineTop = top + rightTopCorner.height / 2;
    }

    let from = ['M', right, rightLineTop];


    let rightLineBottom;
    if ( rightBottomCorner.type === 'default' ) {
      rightLineBottom = bottom;
    } else if ( rightBottomCorner.type === 'arc' ) {
      rightLineBottom = bottom - rightBottomCorner.radius;
    } else if ( rightBottomCorner.type === 'cut' ) {
      rightLineBottom = bottom - rightBottomCorner.width;
    } else if ( rightBottomCorner.type === 'polygon' ) {
      rightLineBottom = bottom - rightBottomCorner.height / 2;
    }

    rightLine = ['L', right, rightLineBottom];

    // draw rightBottomLine
    if ( rightBottomCorner.type === 'default' ) {
      rightBottomLine = []
    } else if ( rightBottomCorner.type === 'arc' ) {
      rightBottomLine = ['A', rightBottomCorner.radius, rightBottomCorner.radius, 0, 0, 1, right - rightBottomCorner.radius, bottom]
    } else if ( rightBottomCorner.type === 'cut' ) {
      rightBottomLine = ['L', right - rightBottomCorner.width, bottom]
    } else if ( rightBottomCorner.type === 'polygon' ) {
      rightBottomLine = [
        'L', right - rightBottomCorner.height * 1.5, bottom + rightBottomCorner.height,
        'L', right - rightBottomCorner.width + rightBottomCorner.height, bottom + rightBottomCorner.height,
        'L', right - rightBottomCorner.width, bottom,
      ]
    }

    // draw bottomLine
    let bottomLineLeft;
    let bottomLineBottom;
    if ( leftBottomCorner.type === 'default' ) {
      bottomLineLeft = left;
    } else if ( leftBottomCorner.type === 'arc' ) {
      bottomLineLeft = left + leftBottomCorner.radius;
    } else if ( leftBottomCorner.type === 'cut' ) {
      bottomLineLeft = left + leftBottomCorner.width;
    } else if ( leftBottomCorner.type === 'polygon' ) {
      bottomLineLeft = left + leftBottomCorner.width;
    }

    bottomLine = ['L', bottomLineLeft, bottom];

    // draw leftBottomLine
    if ( leftBottomCorner.type === 'default' ) {
      leftBottomLine = []
    } else if ( leftBottomCorner.type === 'arc' ) {
      leftBottomLine = ['A', leftBottomCorner.radius, leftBottomCorner.radius, 0, 0, 1, left, bottom - leftBottomCorner.radius]
    } else if ( leftBottomCorner.type === 'cut' ) {
      leftBottomLine = ['L', left, bottom - leftBottomCorner.width]
    } else if ( leftBottomCorner.type === 'polygon' ) {
      leftBottomLine = [
        'L', left + leftBottomCorner.width - leftBottomCorner.height, bottom + leftBottomCorner.height,
        'L', left + leftBottomCorner.height * 1.5 , bottom + leftBottomCorner.height,
        'L', left, bottom - leftBottomCorner.height / 2,
      ]
    }

    // draw leftLine
    let leftLineTop;
    if ( title ) {
      leftLineTop = top;
      const titleTop = highLightBorderWidth / 2;
      titleLine = [
        'L', left, titleTop + titleSize.height / 2,
        'L', titleSize.height / 2, titleTop,
        'L', titleSize.width - titleSize.height * Math.tan(33 * Math.PI/180), titleTop,
        'L', titleSize.width, top
      ];
    } else if ( leftTopCorner.type === 'default' ) {
      leftLineTop = top;
    } else if ( leftTopCorner.type === 'arc' ) {
      leftLineTop = top + leftTopCorner.radius;
    } else if ( leftTopCorner.type === 'cut' ) {
      leftLineTop = top + leftTopCorner.width;
    } else if ( leftBottomCorner.type === 'polygon' ) {
      leftLineTop = top + leftTopCorner.height / 2;
    } else {
      leftLineTop = []
    }
    

    leftLine = ['L', left, leftLineTop];

    // draw leftTopLine
    if ( title ) {
      leftTopLine = [];
    } else if ( leftTopCorner.type === 'default' ) {
      leftTopLine = []
    } else if ( leftTopCorner.type === 'arc' ) {
      leftTopLine = ['A', leftTopCorner.radius, leftTopCorner.radius, 0, 0, 1, left + leftTopCorner.radius, top]
    } else if ( leftTopCorner.type === 'cut' ) {
      leftTopLine = ['L', left + leftTopCorner.width, top]
    } else if ( leftTopCorner.type === 'polygon' ) {
      leftTopLine = [
        'L', left + leftTopCorner.height * 1.5, top - leftTopCorner.height,
        'L', left + leftTopCorner.width - leftTopCorner.height, top - leftTopCorner.height,
        'L', left + leftTopCorner.width, top,
      ]
    } else {
      leftTopLine = []
    }
    

    // draw topLine
    let topLineRight;
    if ( rightTopCorner.type === 'default' ) {
      topLineRight = right;
    } else if ( rightTopCorner.type === 'arc' ) {
      topLineRight = right - rightTopCorner.radius;
    } else if ( rightTopCorner.type === 'cut' ) {
      topLineRight = right - rightTopCorner.width;
    } else if ( rightTopCorner.type === 'polygon' ) {
      if ( title ) {
        topLineRight = [];
      } else {
        topLineRight = right - rightTopCorner.width;
      }
      
    }
    topLine = ['L', topLineRight, top];

    /// draw rightTopLine
    if ( rightTopCorner.type === 'default' ) {
      rightTopLine = []
    } else if ( rightTopCorner.type === 'arc' ) {
      rightTopLine = ['A', rightTopCorner.radius, rightTopCorner.radius, 0, 0, 1, right, top + rightTopCorner.radius]
    } else if ( rightTopCorner.type === 'cut' ) {
      rightTopLine = ['L', right, top + rightTopCorner.radius]
    } else if ( rightTopCorner.type === 'polygon' ) {
      if ( title ) {
        rightTopLine = []
      } else {
        rightTopLine = [
          'L', right - rightTopCorner.width + rightTopCorner.height, top - rightTopCorner.height,
          'L', right - rightTopCorner.height * 1.5 , top - rightTopCorner.height,
          'L', right, top + rightTopCorner.height / 2,
        ]
      }
      
    }

    const d = [
      from,
      rightLine,
      rightBottomLine,
      bottomLine,
      leftBottomLine,
      leftLine,
      leftTopLine,
      titleLine,
      topLine,
      rightTopLine
    ].filter(t => t).reduce((r, t, i) => r.concat(t), []).join(' ')

    console.log(d)
    return d;

  }, [ cardSize, titleSize ]);

  const titleBorderHighLightD = useMemo(() => {

    const top = titleSize.height;
    const right = cardSize.width - highLightBorderWidth / 2;
    const bottom = cardSize.height - highLightBorderWidth / 2;
    const left = highLightBorderWidth / 2;
    const titleTop = highLightBorderWidth / 2;
    
    const titleLine = [
      'M', left, top + highLightBorderWidth / 2,
      'L', left, titleTop + titleSize.height / 2,
      'L', titleSize.height / 2, titleTop,
      'L', titleSize.width - titleSize.height * Math.tan(33 * Math.PI/180), titleTop,
      'L', titleSize.width, top,
      'L', Math.min(right - left, titleSize.width + titleSize.height / 1.5), top
    ];
    

    const d = titleLine.join(' ')
    return d;
  }, [ cardSize, titleSize ])
 
  return (
    <ResizeObserver onResize={(size:Size):void => setCardSize(size)}>
      <div>
        <div
          className={classNames(styles.screenCard, styles.ploygon, className)}
          style={{
            paddingTop: !title && (leftTopCorner.type === 'polygon' || rightTopCorner.type === 'polygon') ? Math.max(leftTopCorner.height || 0, rightTopCorner.height || 0) : null,
            paddingBottom: leftBottomCorner.type === 'polygon' || rightBottomCorner.type === 'polygon' ? Math.max(leftBottomCorner.height || 0, rightBottomCorner.height || 0) : null
          }}
        >
          <div ref={backRef} className={styles.back} style={{...cardSize}}>
            <svg style={{...cardSize}}>
              <path style={{ fill: 'none', stroke: borderColor, strokeWidth: borderWidth }} d={d} />
              {
                title && titleBorderHighLight
                ? <path style={{ fill: 'none', stroke: highLightBorderColor, strokeWidth: highLightBorderWidth }} d={titleBorderHighLightD} />
                : null
              }
            </svg>
          </div>
          <div className={styles.front}>
            <div className={styles.header}>
              <ResizeObserver onResize={(size:Size):void => {setTitleSize(size)}}>
                <div>
                  <div className={styles.title} style={{paddingRight: titleSize.height * Math.tan(33 * Math.PI / 180), paddingLeft: titleSize.height / 2}}>
                    {title}
                  </div>
                </div>
              </ResizeObserver>
              <div className={styles.extra}>
                {extra}
              </div>
            </div>
            <div className={styles.body}>
              <div className={styles.content}>
                {children}
              </div>
            </div>
          </div>
        </div>
      </div>
    </ResizeObserver>
  )
}

export default ScreenCard;