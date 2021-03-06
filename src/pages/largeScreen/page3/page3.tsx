import React, { Fragment } from 'react';
import ScreenCard from '@/components/ScreenCard';
import { Row, Col } from 'antd';
import classNames from 'classnames';
import ScreenBg from '../show/components/ScreenBg/ScreenBg';
import SvgCardTitle from '../show/components/svgCardTitle/svgCardTitle';
import LoadingBar from '../../../components/LoadingBar';
import BorderWithCorner from '../show/components/borderWithCorner';
import CardContentItem from '../show/components/cardContentItem/cardContentItem';
import CardItem from '../show/components/cardItem/cardItem';
import styles from './page3.less';
import ShineBlur from '../show/components/shineBlur/shineBlur';

export default () => {

  return (
    <Fragment>
      <ScreenBg name="热点内容" iconType="page3">
        <div className={styles.container}>
          <Row gutter={16}>
            <Col className="gutter-row" span={8}>
              <SvgCardTitle>
                <div className={styles.title}>
                  <div>
                    <LoadingBar className="" />
                  </div>
                  <div className={styles.titleContainer}>
                    <span className={classNames(styles.titleIcon, styles.user_ac)} />
                    <span className={styles.titleName}>用户行为</span>
                  </div>
                </div>
              </SvgCardTitle>
              <BorderWithCorner topLeft topRight>
                <ShineBlur top />
                <div className={styles.shareContainer}>
                  <div className={styles.shareItem}>
                    <span className={classNames(styles.shareIcon, styles.icon)} />
                    <span className={styles.shareName}>内容ID：</span>
                    <span className={styles.shareContent}>964615</span>
                  </div>
                  <div className={styles.shareItem}>
                    <span className={classNames(styles.shareIcon, styles.icon)} />
                    <span className={styles.shareName}>内容主题：</span>
                    <span className={styles.shareContent}>感冒的预防</span>
                  </div>
                  <div className={styles.shareItem}>
                    <span className={classNames(styles.shareIcon, styles.icon)} />
                    <span className={styles.shareName}>内容聚词：</span>
                    <span className={styles.shareContent}>
                      {`<内容聚词1>、<内容聚词2>、`}<br />
                      {`<内容聚词3>、<内容聚词4>、`}<br />
                      {`<内容聚词5>、<内容聚词6>、`}
                    </span>
                  </div>
                </div>
              </BorderWithCorner>

              <div style={{ marginTop: '1.875rem' }}>
                <SvgCardTitle>
                  <div className={styles.title}>
                    <div>
                      <LoadingBar className="" />
                    </div>
                    <div className={styles.titleContainer}>
                      <span className={classNames(styles.titleIcon, styles.user_ac)} />
                      <span className={styles.titleName}>用户行为</span>
                    </div>
                  </div>
                </SvgCardTitle>
                <BorderWithCorner topLeft topRight>
                  <ShineBlur top />
                  <div className={classNames(styles['grid-2'])}>
                    <CardContentItem iconType="active_explore" name="实时用户访问量" data="467" style={{ padding: '1.25rem' }} needBorder needCenter />
                    <CardContentItem iconType="active_share" name="实时用户转发量" data="467" style={{ padding: '1.25rem' }} needBorder needCenter />
                  </div>
                </BorderWithCorner>
                <BorderWithCorner topLeft topRight style={{ borderTop: '0' }}>
                  <div className={classNames(styles['grid-2'])}>
                    <CardContentItem iconType="high_point" name="浏览高峰时间段" data="467" style={{ padding: '1.25rem' }} needBorder needCenter />
                    <CardContentItem iconType="av_stay_time" name="平均停留时长" data="467" style={{ padding: '1.25rem' }} needBorder needCenter />
                  </div>
                </BorderWithCorner>
              </div>

              <div style={{ marginTop: '1.875rem' }}>
                <SvgCardTitle style={{ marginBottom: '-1px', marginLeft: '1px' }}>
                  <div className={styles.title}>
                    <div>
                      <LoadingBar className="" />
                    </div>
                    <div className={styles.titleContainer}>
                      <span className={classNames(styles.titleIcon, styles.hosp_bl)} />
                      <span className={styles.titleName}>用户医院汇总</span>
                    </div>
                  </div>
                </SvgCardTitle>
                <ScreenCard
                  leftBottomCorner={{
                    type: 'cut',
                    width: 30,
                  }}
                  borderColor="#0ff"
                  highLightBorderColor="#0ff"
                >
                  <ShineBlur top style={{ top: '.125rem' }} />
                  <div className={classNames(styles['grid-2'], styles.largeGap)} style={{ padding: '1.875rem' }}>
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
                </ScreenCard>
              </div>
            </Col>
            <Col className="gutter-row" offset={1} span={15}>
              <div className={styles.map}>
                <ShineBlur left style={{ left: '3.5rem' }}/>
                <ShineBlur bottom
                  style={{
                    width: '90%',
                    left: '0',
                    right: '0',
                    bottom: '.125rem'
                  }}
                  delay={2}
                />
                <ShineBlur right delay={4} reverse style={{ right: '3.5rem' }}/>
              </div>
            </Col>
          </Row>
        </div>
      </ScreenBg>
    </Fragment>
  );
};
