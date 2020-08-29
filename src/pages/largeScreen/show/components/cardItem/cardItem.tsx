import React from 'react';
import styles from './cardItem.less';

export interface CardItemParams {
  name?: {
    type: string;
    content: string;
  };
  data?: string;
  iconType?: string;
}

export default ({ name, data, iconType }: CardItemParams) => {

  const iconClassName = iconType ? styles[iconType] : '';

  return (
    <div className={ styles.cardItem }>
      {
        iconType
          ? <span className={`${ styles.icon } ${ iconClassName }`} />
          : null
      }
      {
        name?.type === 'number'
          && <span className={ `${styles.itemName} ${styles.number}` }>
              <em>NO.</em>
              { name.content }
            </span>
      }
      {
        name?.type === 'string'
          && <span className={ styles.itemName }>{ name.content }</span>
      }
      <span className={ styles.itemData }>{ data }</span>
    </div>
  );
};
