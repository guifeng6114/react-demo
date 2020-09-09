import React, { Fragment, useState } from 'react';
import { Row, Col } from 'antd';
import ScreenCard from '@/components/ScreenCard';
import LoadingBar from '@/components/LoadingBar';
import classNames from 'classnames';
import ScreenBg from '../show/components/ScreenBg/ScreenBg';
import CardItem from '../show/components/cardItem/cardItem';
import ShowContent from '../show/components/showContent/showContent';
import CardContentItem from '../show/components/cardContentItem/cardContentItem';
import styles from './page1.less';
import ScreenCardTitle from '../show/components/screenCardTitle/screenCardTitle';
import ShineBlur from '../show/components/shineBlur/shineBlur';

export default () => {

  const [tabIndex, toggleTabIndex] = useState(1);

  return (
    <Fragment>
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
                <ShineBlur top style={{ top: '1.8375rem', width: '64%', right: '.875rem' }} />
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
                  <ShineBlur bottom style={{
                    bottom: '.125rem',
                    width: '95%',
                    left: '.625rem'
                  }} />
                  <div className={styles.userTimeTitle}>
                    <div className={styles.timeTitle}>
                      <em className={styles.clockIcon} />
                      <span>用户时间轴</span>
                    </div>
                    <div className={styles.timePeriod}>2020.5-2020.7</div>
                  </div>
                  <div className={styles.timeChart} />
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
                  <ShineBlur top style={{ top: '1.8375rem', width: '64%', right: '.875rem' }} />
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
                  <ShineBlur bottom style={{
                    bottom: '.1875rem',
                    width: '95%',
                    left: '.75rem'
                  }} />
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
                  <ul className={styles.mapTabs}>
                    <li className={ tabIndex === 0 && styles.active } onClick={() => toggleTabIndex(0)}>用户地图</li>
                    <li className={ tabIndex === 1 && styles.active } onClick={() => toggleTabIndex(1)}>内容地图</li>
                    <li className={ tabIndex === 2 && styles.active } onClick={() => toggleTabIndex(2)}>会议地图</li>
                  </ul>
                  <div className={styles.map}>
                    <ShineBlur left style={{ left: '1.875rem' }} />
                    <ShineBlur bottom delay={2} style={{ width: '92%', bottom: '.125rem', left: '0', right: '0' }} />
                    <ShineBlur right delay={4} reverse style={{ right: '1.875rem' }} />
                  </div>
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
                    <ShineBlur top style={{ top: '1.8375rem', width: '64%', right: '.875rem' }} />
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
                      <ShineBlur bottom style={{
                        bottom: '.125rem',
                        width: '88%'
                      }} />
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
    </Fragment>
  );
};
