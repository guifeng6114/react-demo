import React from 'react';
import styles from './screenCardTitle.less';
import classNames from 'classnames';

export interface CardTitleParams {
	title: string;
	iconType: string;
}

export default ({ title, iconType }: CardTitleParams) => {

	return (
		<div className={styles.cardTitle}>
			<span className={classNames(styles.icon, styles[iconType])} />
			<span className={styles.titleContent}>{title}</span>
		</div>
	);
};