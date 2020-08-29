import React, { Fragment } from 'react';
import LoadingAnime from './components/load-anime/loading-anime';
import BorderContainer from './components/border-contaier/border-container';
import CardTitle from './components/card-title/card-title';

import styles from './index.less';

export default () => (
  <Fragment>
    <h2 className={ styles.h2 }>test</h2>
    <LoadingAnime />
    <BorderContainer borderStyle='test' />
    <div style={{ width: '30%' }}>
      <CardTitle />
    </div>
  </Fragment>


)
