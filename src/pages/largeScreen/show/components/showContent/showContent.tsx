import React from 'react';
import styles from './showContent.less';

export interface ShowContentItemParams {
  name?: string;
  data?: string;
  iconType?: string;
}

export const ShowContentItem = ({ name, data, iconType }: ShowContentItemParams) => {

  return (
    <div className={styles.showItem}>
      <div className={styles.showSub}>
        <span className={styles.showIcon}>{iconType}</span>
        <span className={styles.showName}>{name}</span>
      </div>
      <div className={styles.showData}>{data}</div>
    </div>
  );
};

export default  ({ dataList }: { dataList: ShowContentItemParams[] }) => {
  
  return (
    <div className={styles.showContent}>
      {
        dataList && dataList.map((item, i) =>
          <ShowContentItem name={item.name} data={item.data} key={i.toString()}/>
        )
      }
    </div>
  );
}
