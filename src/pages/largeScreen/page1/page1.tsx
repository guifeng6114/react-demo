import React, { Fragment } from 'react';
import { Row, Col } from 'antd';
import ScreenBg from '../show/components/ScreenBg/ScreenBg';
import CardItem from '../show/components/cardItem/cardItem';
import ShowContentItem from '../show/components/showContentItem/showContentItem';
import CardContentItem from '../show/components/cardContentItem/cardContentItem';
import CardTitle from '../show/components/card-title/card-title';
import styles from './page1.less';
import ResizeObserver from 'rc-resize-observer';
import ScreenCard from '@/components/ScreenCard';
import LoadingBar from '@/components/LoadingBar';

export default () => {
  const style = { background: '#0092ff', padding: '8px 0' };

  return (
    <Fragment>
      <ResizeObserver
        onResize={({ width }) => {
          const rootElement = document.getElementsByTagName('html')[0];
          // const fontSizeRoot = getComputedStyle(rootElement).fontSize.slice(0, -2);
          if (width <= 1760) {
            rootElement.style.fontSize = width / 1760 * 16 + 'px';
            return;
          }
          rootElement.style.fontSize = '16px';
        }}
      >
        <ScreenBg name="营销大屏">
          <div className={styles.container}>
            <Row gutter={16}>
              <Col className="gutter-row" span={7}>
                <ScreenCard
                    title="客户数据"
                    extra={<LoadingBar />}
                    rightTopCorner={{
                      type: 'arc',
                      radius: 12,
                    }}
                    rightBottomCorner={{
                      type: 'polygon',
                      width: 60,
                      height: 8
                    }}
                    leftBottomCorner={{
                      type: 'cut',
                      width: 12,
                    }}
                    leftTopCorner={{
                      type: 'polygon',
                      width: 60,
                      height: 22
                    }}
                  >
                    <div className={styles.cardContent}>
                      <CardContentItem name="用户关注总数" data="467" />
                      <CardContentItem name="活跃关注用户总数" data="467" />
                      <CardContentItem name="注册用户总数" data="467" />
                      <CardContentItem name="活跃注册用户总数" data="467" />
                    </div>

                  </ScreenCard>
                {/* <div>

                  <CardTitle iconType="user" name="客户数据" />
                  <div className={`${styles.cardRadius}`}>
                    <div className={styles.cardContent}>
                      <CardContentItem name="用户关注总数" data="467" />
                      <CardContentItem name="活跃关注用户总数" data="467" />
                      <CardContentItem name="注册用户总数" data="467" />
                      <CardContentItem name="活跃注册用户总数" data="467" />
                    </div>
                  </div>
                </div> */}

                <div style={{ marginTop: '60px' }}>
                  <CardTitle iconType="user" name="客户数据" />
                  <div className={styles.showContent}>
                    <ShowContentItem name="内容总数" data="467" />
                    <ShowContentItem name="内容总数" data="467" />
                    <ShowContentItem name="内容总数" data="467" />
                  </div>
                  <div className={`${styles.normalCard}`}>
                    <div className={styles.cardContent}>
                      <CardContentItem iconType="test" name="平均浏览量" data="467" />
                      <CardContentItem iconType="test" name="平均浏览量" data="467" />
                    </div>
                  </div>
                </div>

                <div style={{ marginTop: '30px' }}>
                  <div className={`${styles.normalCard}`}>
                    <h4 className={styles.cardSubTitle}>
                      <span className={styles.cardSubIcon} />
                      <span className={styles.subTitleCotent}>医疗领域汇总数</span>
                    </h4>
                    <div className={styles['grid-3']}>
                      <CardItem
                        name={{ type: 'string', content: '肿瘤科' }}
                        data="467"
                        iconType="hospDisc"
                      />
                      <CardItem
                        name={{ type: 'string', content: '肿瘤科' }}
                        data="467"
                        iconType="hospDisc"
                      />
                      <CardItem
                        name={{ type: 'string', content: '肿瘤科' }}
                        data="467"
                        iconType="hospDisc"
                      />
                      <CardItem
                        name={{ type: 'string', content: '肿瘤科' }}
                        data="467"
                        iconType="hospDisc"
                      />
                      <CardItem
                        name={{ type: 'string', content: '肿瘤科' }}
                        data="467"
                        iconType="hospDisc"
                      />
                      <CardItem
                        name={{ type: 'string', content: '肿瘤科' }}
                        data="467"
                        iconType="hospDisc"
                      />
                      <CardItem
                        name={{ type: 'string', content: '肿瘤科' }}
                        data="467"
                        iconType="hospDisc"
                      />
                      <CardItem
                        name={{ type: 'string', content: '肿瘤科' }}
                        data="467"
                        iconType="hospDisc"
                      />
                      <CardItem
                        name={{ type: 'string', content: '肿瘤科' }}
                        data="467"
                        iconType="hospDisc"
                      />
                      <CardItem
                        name={{ type: 'string', content: '肿瘤科' }}
                        data="467"
                        iconType="hospDisc"
                      />
                    </div>
                  </div>
                </div>

                <div style={{ marginTop: '30px' }}>
                  <div className={`${styles.card} ${styles.normalCard}`}>
                    <h4 className={styles.cardSubTitle}>
                      <span className={styles.cardSubIcon} />
                      <span className={styles.subTitleCotent}>TOP10活跃内容排名</span>
                    </h4>
                    <div className={styles['grid-2']}>
                      <CardItem name={{ type: 'number', content: '1' }} data="内容名称内容名称" />
                      <CardItem name={{ type: 'number', content: '1' }} data="内容名称内容名称" />
                      <CardItem name={{ type: 'number', content: '1' }} data="内容名称内容名称" />
                      <CardItem name={{ type: 'number', content: '1' }} data="内容名称内容名称" />
                      <CardItem name={{ type: 'number', content: '1' }} data="内容名称内容名称" />
                      <CardItem name={{ type: 'number', content: '1' }} data="内容名称内容名称" />
                      <CardItem name={{ type: 'number', content: '1' }} data="内容名称内容名称" />
                      <CardItem name={{ type: 'number', content: '1' }} data="内容名称内容名称" />
                      <CardItem name={{ type: 'number', content: '1' }} data="内容名称内容名称" />
                      <CardItem name={{ type: 'number', content: '1' }} data="内容名称内容名称" />
                    </div>
                  </div>
                </div>
              </Col>
              <Col className="gutter-row" span={17}>
                <Row gutter={16}>
                  <Col className="gutter-row" span={14}>
                    <div style={style}>col-7</div>
                  </Col>
                  <Col className="gutter-row" span={10}>
                    <div>
                      <div className={`${styles.card} ${styles.normalCard}`}>
                        <h4 className={styles.cardSubTitle}>
                          <span className={styles.cardSubIcon} />
                          <span className={styles.subTitleCotent}>医疗领域汇总数</span>
                        </h4>
                        <div className={styles['grid-3']}>
                          <CardItem
                            name={{ type: 'string', content: '肿瘤科' }}
                            data="467"
                            iconType="hospDisc"
                          />
                          <CardItem
                            name={{ type: 'string', content: '肿瘤科' }}
                            data="467"
                            iconType="hospDisc"
                          />
                          <CardItem
                            name={{ type: 'string', content: '肿瘤科' }}
                            data="467"
                            iconType="hospDisc"
                          />
                          <CardItem
                            name={{ type: 'string', content: '肿瘤科' }}
                            data="467"
                            iconType="hospDisc"
                          />
                          <CardItem
                            name={{ type: 'string', content: '肿瘤科' }}
                            data="467"
                            iconType="hospDisc"
                          />
                          <CardItem
                            name={{ type: 'string', content: '肿瘤科' }}
                            data="467"
                            iconType="hospDisc"
                          />
                          <CardItem
                            name={{ type: 'string', content: '肿瘤科' }}
                            data="467"
                            iconType="hospDisc"
                          />
                          <CardItem
                            name={{ type: 'string', content: '肿瘤科' }}
                            data="467"
                            iconType="hospDisc"
                          />
                          <CardItem
                            name={{ type: 'string', content: '肿瘤科' }}
                            data="467"
                            iconType="hospDisc"
                          />
                          <CardItem
                            name={{ type: 'string', content: '肿瘤科' }}
                            data="467"
                            iconType="hospDisc"
                          />
                        </div>
                      </div>
                    </div>

                    <div style={{ marginTop: '30px' }}>
                      <div className={`${styles.card} ${styles.normalCard}`}>
                        <h4 className={styles.cardSubTitle}>
                          <span className={styles.cardSubIcon} />
                          <span className={styles.subTitleCotent}>TOP10活跃内容排名</span>
                        </h4>
                        <div className={styles['grid-2']}>
                          <CardItem name={{ type: 'number', content: '1' }} data="内容名称内容名称" />
                          <CardItem name={{ type: 'number', content: '1' }} data="内容名称内容名称" />
                          <CardItem name={{ type: 'number', content: '1' }} data="内容名称内容名称" />
                          <CardItem name={{ type: 'number', content: '1' }} data="内容名称内容名称" />
                          <CardItem name={{ type: 'number', content: '1' }} data="内容名称内容名称" />
                          <CardItem name={{ type: 'number', content: '1' }} data="内容名称内容名称" />
                          <CardItem name={{ type: 'number', content: '1' }} data="内容名称内容名称" />
                          <CardItem name={{ type: 'number', content: '1' }} data="内容名称内容名称" />
                          <CardItem name={{ type: 'number', content: '1' }} data="内容名称内容名称" />
                          <CardItem name={{ type: 'number', content: '1' }} data="内容名称内容名称" />
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
        </ScreenBg>
      </ResizeObserver>
    </Fragment>
  );
};
