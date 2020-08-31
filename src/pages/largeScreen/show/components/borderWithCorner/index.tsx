import React, { ReactNode } from 'react';
import styles from './index.less';
import classNames from 'classnames';

export interface CornerParams {
	topLeft?: boolean;
	topRight?: boolean;
	bottomRight?: boolean;
	bottomLeft?: boolean;
	style?: { [key: string]: string }
	children: ReactNode
}

export default ({
	topLeft,
	topRight,
	bottomRight,
	bottomLeft,
	style,
	children
}: CornerParams) => {

	return (
		<div className={styles.borderContainer} style={style}>
			{children}
			{ topLeft && <div className={classNames(styles.corner, styles.topLeft)} /> }
			{ topRight && <div className={classNames(styles.corner, styles.topRight)} /> }
			{ bottomRight && <div className={classNames(styles.corner, styles.bottomRight)} /> }
			{ bottomLeft && <div className={classNames(styles.corner, styles.bottomLeft)} /> }
		</div>
	);
};