import React from 'react';
import ResizeObserver from 'rc-resize-observer';
import ScreenBg from '../show/components/ScreenBg/ScreenBg';
import SvgCardTitle from '../show/components/svgCardTitle/svgCardTitle';
import LoadingBar from '../../../components/LoadingBar';
import BorderWithCorner from '../show/components/borderWithCorner';
import CardContentItem from '../show/components/cardContentItem/cardContentItem';
import CardItem from '../show/components/cardItem/cardItem';
import styles from './page3.less';
import { Row, Col } from 'antd';
import classNames from 'classnames';

export default () => {

  return (
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
      <ScreenBg name="热点内容">
        <div className={styles.container}>
          <Row gutter={16}>
            <Col className="gutter-row" span={8}>
              <SvgCardTitle>
                <div className={styles.title}>
                  <div>
                    <LoadingBar className="" />
                  </div>
                  <div className={styles.titleContainer}>
                    <span className={styles.titleIcon} />
                    <span className={styles.titleName}>用户行为</span>
                  </div>
                </div>
              </SvgCardTitle>
              <BorderWithCorner topLeft={true} topRight={true}>
                <div className={styles.shareContainer}>
                  <div className={styles.shareItem}>
                    <span className={styles.shareIcon} />
                    <span className={styles.shareName}>内容ID：</span>
                    <span className={styles.shareContent}>964615</span>
                  </div>
                  <div className={styles.shareItem}>
                    <span className={styles.shareIcon} />
                    <span className={styles.shareName}>内容主题：</span>
                    <span className={styles.shareContent}>感冒的预防</span>
                  </div>
                  <div className={styles.shareItem}>
                    <span className={styles.shareIcon} />
                    <span className={styles.shareName}>内容聚词：</span>
                    <span className={styles.shareContent}>
                      {`<内容聚词1>、<内容聚词2>、`}<br />
                      {`<内容聚词3>、<内容聚词4>、`}<br />
                      {`<内容聚词5>、<内容聚词6>、`}
                    </span>
                  </div>
                </div>
              </BorderWithCorner>

              <SvgCardTitle>
                <div className={styles.title}>
                  <div>
                    <LoadingBar className="" />
                  </div>
                  <div className={styles.titleContainer}>
                    <span className={styles.titleIcon} />
                    <span className={styles.titleName}>用户行为</span>
                  </div>
                </div>
              </SvgCardTitle>
              <BorderWithCorner topLeft={true} topRight={true}>
                <div className={classNames(styles['grid-2'])}>
                  <CardContentItem iconType="test" name="平均浏览量" data="467" style={{ padding: '20px' }} needBorder={true} needCenter={true} />
                  <CardContentItem iconType="test" name="平均浏览量" data="467" style={{ padding: '20px' }} needBorder={true} needCenter={true} />
                </div>
              </BorderWithCorner>
              <BorderWithCorner topLeft={true} topRight={true} style={{ borderTop: '0' }}>
                <div className={classNames(styles['grid-2'])}>
                  <CardContentItem iconType="test" name="平均浏览量" data="467" style={{ padding: '20px' }} needBorder={true} needCenter={true} />
                  <CardContentItem iconType="test" name="平均浏览量" data="467" style={{ padding: '20px' }} needBorder={true} needCenter={true} />
                </div>
              </BorderWithCorner>

              <SvgCardTitle>
                <div className={styles.title}>
                  <div>
                    <LoadingBar className="" />
                  </div>
                  <div className={styles.titleContainer}>
                    <span className={styles.titleIcon} />
                    <span className={styles.titleName}>用户医院汇总</span>
                  </div>
                </div>
              </SvgCardTitle>
              <BorderWithCorner>
                <div className={classNames(styles['grid-2'], styles.largeGap)} style={{ padding: '30px' }}>
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
              </BorderWithCorner>
            </Col>
            <Col className="gutter-row" offset={1} span={15}>
              <div style={{ border: 'solid 1px #0ff' }}></div>
            </Col>
          </Row>
        </div>
      </ScreenBg>
    </ResizeObserver>
  );
};