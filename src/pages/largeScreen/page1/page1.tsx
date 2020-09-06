import React, { Fragment } from 'react';
import { Row, Col } from 'antd';
import ResizeObserver from 'rc-resize-observer';
import ScreenCard from '@/components/ScreenCard';
import LoadingBar from '@/components/LoadingBar';
import ScreenBg from '../show/components/ScreenBg/ScreenBg';
import CardItem from '../show/components/cardItem/cardItem';
import ShowContent from '../show/components/showContent/showContent';
import CardContentItem from '../show/components/cardContentItem/cardContentItem';
import styles from './page1.less';
import ScreenCardTitle from '../show/components/screenCardTitle/screenCardTitle';
import classNames from 'classnames';

export default () => {
  const style = { background: '#0092ff', padding: '.5rem 0' };

  return (
    <Fragment>
      <ResizeObserver
        onResize={({ width }) => {
          const rootElement = document.getElementsByTagName('html')[0];
          // const fontSizeRoot = getComputedStyle(rootElement).fontSize.slice(0, -2);
          if (width <= 1760) {
            rootElement.style.fontSize = `${width / 1760 * 16}px`;
            return;
          }
          rootElement.style.fontSize = '16px';
        }}
      >
        <ScreenBg name="营销大屏" iconType="screen">
          <div className={styles.container}>
            <Row gutter={16}>
              <Col className="gutter-row" span={7}>
                <ScreenCard
                  title={
                    <ScreenCardTitle title="客户数据" iconType="user" />
                  }
                  extra={
                    <div className={styles.loadingContainer}>
                      <LoadingBar className="" />
                    </div>
                  }
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
                    width: 20,
                    height: 88
                  }}
                  borderColor="#0ff"
                  highLightBorderColor="#0ff"
                >
                  <div className={classNames(styles.cardContent, styles.noBorder, styles['grid-2'])}>
                    <CardContentItem name="用户关注总数" data="467" iconType="like" />
                    <CardContentItem name="活跃关注用户总数" data="467" iconType="active" />
                    <CardContentItem name="注册用户总数" data="467" iconType="register" />
                    <CardContentItem name="活跃注册用户总数" data="467" iconType="active_user" />
                  </div>
                </ScreenCard>

                <div style={{ marginTop: '.625rem' }}>
                  <ScreenCard
                    leftBottomCorner={{
                      type: 'arc',
                      radius: 12,
                    }}
                    rightBottomCorner={{
                      type: 'cut',
                      width: 12,
                    }}
                    borderColor="#0ff"
                    highLightBorderColor="#0ff"
                  >
                    <div className={styles.userTimeTitle}>
                      <div className={styles.timeTitle}>
                        <em className={styles.clockIcon} />
                        <span>用户时间轴</span>
                      </div>
                      <div className={styles.timePeriod}>2020.5-2020.7</div>
                    </div>
                    <div className={styles.timeChart}></div>
                  </ScreenCard>
                </div>

                  <div style={{ marginTop: '.625rem' }}>
                    <ScreenCard
                      title={
                        <ScreenCardTitle title="内容数据" iconType="data" />
                      }
                      extra={
                        <div className={styles.loadingContainer}>
                          <LoadingBar className="" />
                        </div>
                      }
                      rightTopCorner={{
                        type: 'arc',
                        radius: 12,
                      }}
                      leftTopCorner={{
                        type: 'polygon',
                        width: 20,
                        height: 88
                      }}
                      borderColor="#0ff"
                      highLightBorderColor="#0ff"
                    >
                      <ShowContent
                        dataList={
                          [
                            { name: '内容总数', data: '467', iconType: 'meet_total' },
                            { name: '内容总数', data: '467', iconType: 'explore' },
                            { name: '内容总数', data: '467', iconType: 'share' }
                          ]
                        }
                      />
                      <div className={classNames(styles['grid-2'], styles.cardContent)}>
                        <CardContentItem iconType="meet_average" name="平均浏览量" data="467" />
                        <CardContentItem iconType="av_stay" name="平均浏览量" data="467" />
                      </div>
                    </ScreenCard>
                  </div>

                  <div style={{ marginTop: '.75rem' }}>
                    <div className={`${styles.normalCard}`}>
                      <h4 className={styles.cardSubTitle}>
                        <span className={classNames(styles.cardSubIcon, styles.hospIcon)} />
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

                  <div style={{ marginTop: '.75rem' }}>
                    <ScreenCard
                      rightBottomCorner={{
                        type: 'cut',
                        width: 12
                      }}
                      leftBottomCorner={{
                        type: 'cut',
                        width: 12,
                      }}
                      borderColor="#0ff"
                      highLightBorderColor="#0ff"
                    >
                      <div className={styles.paddingContent}>
                        <h4 className={styles.cardSubTitle}>
                          <span className={classNames(styles.cardSubIcon, styles.cupIcon)} />
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
                    </ScreenCard>

                  </div>
              </Col>
                <Col className="gutter-row" span={17}>
                  <Row gutter={16}>

                    <Col className="gutter-row" span={14}>
                      <div className={styles.map}></div>
                    </Col>

                    <Col className="gutter-row" span={10}>
                      <ScreenCard
                        title={
                          <ScreenCardTitle title="会议数据" iconType="meeting" />
                        }
                        extra={
                          <div className={styles.loadingContainer}>
                            <LoadingBar className="" />
                          </div>
                        }
                        rightTopCorner={{
                          type: 'arc',
                          radius: 12,
                        }}
                        leftTopCorner={{
                          type: 'polygon',
                          width: 20,
                          height: 88
                        }}
                        rightBottomCorner={{
                          type: 'polygon',
                          width: 60,
                          height: 8
                        }}
                        borderColor="#0ff"
                        highLightBorderColor="#0ff"
                      >
                        <ShowContent
                          dataList={
                            [
                              { name: '会议总数', data: '467', iconType: 'meet_total' },
                              { name: '会议时常总数', data: '467', iconType: 'meet_total' },
                              { name: '会议观众人次总数', data: '467', iconType: 'meet_total' }
                            ]
                          }
                        />
                        <div className={classNames(styles['grid-2'], styles.cardContent)}>
                          <CardContentItem iconType="meet_average" name="会议平均时长" data="467" />
                          <CardContentItem iconType="meet_people" name="会议平均观众数" data="467" />
                          <CardContentItem iconType="meet_comment" name="会议平均留言数" data="467" />
                          <CardContentItem iconType="meet_like" name="会议平均点赞数" data="467" />
                        </div>
                      </ScreenCard>

                      <div style={{ marginTop: '.75rem' }}>
                        <ScreenCard
                          title="12345"
                          titleColor="transparent"
                          rightBottomCorner={{
                            type: 'polygon',
                            width: 60,
                            height: 8
                          }}
                          leftTopCorner={{
                            type: 'polygon',
                            width: 60,
                            height: 8
                          }}
                          borderColor="#0ff"
                          titleBorderHighLight={false}
                        >
                          <div className={styles.paddingContent}>
                            <h4 className={styles.cardSubTitle}>
                              <span className={classNames(styles.cardSubIcon, styles.hospIcon)} />
                              <span className={styles.subTitleCotent}>医疗领域汇总数</span>
                            </h4>
                            <div className={styles['grid-3']}>
                              {
                                Array.from({ length: 10 }).map((item, i) =>
                                  <CardItem
                                    name={{ type: 'string', content: '肿瘤科' }}
                                    data="467"
                                    iconType="hospDisc"
                                    key={i.toString()}
                                  />
                                )
                              }
                            </div>
                          </div>
                        </ScreenCard>
                      </div>

                      <div style={{ marginTop: '.75rem' }}>
                        <ScreenCard
                          title="12345"
                          titleColor="transparent"
                          rightBottomCorner={{
                            type: 'polygon',
                            width: 60,
                            height: 8
                          }}
                          leftTopCorner={{
                            type: 'polygon',
                            width: 60,
                            height: 8
                          }}
                          borderColor="#0ff"
                          titleBorderHighLight={false}
                        >
                          <div className={styles.paddingContent}>
                            <h4 className={styles.cardSubTitle}>
                              <span className={classNames(styles.cardSubIcon, styles.cupIcon)} />
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
                        </ScreenCard>
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
