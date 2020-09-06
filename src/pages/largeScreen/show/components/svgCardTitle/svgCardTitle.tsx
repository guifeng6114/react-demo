import React, { ReactNode, useState } from 'react';
import styles from './svgCardTitle.less';
import ResizeObserver from 'rc-resize-observer';

export interface SvgCardTitleParams {
	children: ReactNode;
	widthPercent?: number;
	style?: { [key: string]: string }
}

export default ({ children, widthPercent, style }: SvgCardTitleParams) => {

	const [titleSize, setTitleSize] = useState({ width: 0, height: 0 });
	const lineLength = titleSize.width - 30;
	const lineHeight = titleSize.height;

	return (
		<div className={styles.titleContainer} style={style}>
			<div className={styles.svgContainer}>
				<svg>
					<path
						d={`M .5 ${lineHeight + 0.5} .5 10.5 A 10 10 0 0 1 10.5 .5 L ${lineLength + 0.5} .5 L ${lineLength + 26.5} ${lineHeight + 0.5}`}
						style={{ fill: 'none', strokeWidth: '1', stroke: '#0ff' }}
					/>
				</svg>
			</div>
			<ResizeObserver
				onResize={(size: any) => {
					setTitleSize(size);
				}}
			>
				<div className={styles.title}>
					{children}
				</div>
			</ResizeObserver>
			
		</div>
	);
}