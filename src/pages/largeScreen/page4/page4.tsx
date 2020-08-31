import React from 'react';
import ResizeObserver from 'rc-resize-observer';
import ScreenBg from '../show/components/ScreenBg/ScreenBg';
import styles from '../page1/page1.less';
import LoadingAnime from '../show/components/load-anime/loading-anime';
import page4Styles from './page4.less';
import CardItem from '../show/components/cardItem/cardItem';
import CommentsPool from '../show/components/commentsPool/commentsPool';
import BorderWithCorner from '../show/components/borderWithCorner';
import { Row, Col } from 'antd';

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
      <ScreenBg name="热点会议">
        <div className={styles.container}>
          <Row gutter={16}>
            <Col className="gutter-row" span={5}>
              <div className={page4Styles.blockArea}>
                <div className={page4Styles.title}>
                  <div className={page4Styles.titleLoading}>
                    <LoadingAnime />
                  </div>
                  <div className={page4Styles.titleArea}>
                    <span className={page4Styles.titleIcon} />
                    <span>用户行为</span>
                  </div>
                </div>
                <BorderWithCorner topLeft={true} topRight={true}>
                  <div className={page4Styles.meetingContent}>
                    <div className={page4Styles.meetingItem}>
                      <span className={page4Styles.meetingIcon} />
                      <span className={page4Styles.meetingName}>会议ID：</span>
                      <span className={page4Styles.meetingAuthor}>964615</span>
                    </div>
                    <div className={page4Styles.meetingItem}>
                      <span className={page4Styles.meetingIcon} />
                      <span className={page4Styles.meetingName}>会议主题：</span>
                      <span className={page4Styles.meetingAuthor}>心脑血管</span>
                    </div>
                    <div className={page4Styles.meetingItem}>
                      <span className={page4Styles.meetingIcon} />
                      <span className={page4Styles.meetingName}>会议讲者：</span>
                      <span className={page4Styles.meetingAuthor}>张三、李四</span>
                    </div>
                  </div>
                </BorderWithCorner>
              </div>

              <div className={page4Styles.blockArea} style={{ marginTop: '30px' }}>
                <div className={page4Styles.title}>
                  <div className={page4Styles.titleLoading}>
                    <LoadingAnime />
                  </div>
                  <div className={page4Styles.titleArea}>
                    <span className={page4Styles.titleIcon} />
                    <span>用户行为</span>
                  </div>
                </div>
                <BorderWithCorner topLeft={true} topRight={true}>
                  <div className={page4Styles.action}>
                    <span className={page4Styles.actionIcon} />
                    <span className={page4Styles.actionTitle}>实时在线听众</span>
                    <span className={page4Styles.actionData}>467</span>
                  </div>
                </BorderWithCorner>
                <BorderWithCorner topLeft={true} topRight={true} style={{ borderTop: '0' }}>
                  <div className={page4Styles.action}>
                    <span className={page4Styles.actionIcon} />
                    <span className={page4Styles.actionTitle}>实时在线听众</span>
                    <span className={page4Styles.actionData}>467</span>
                  </div>
                </BorderWithCorner>
              </div>

              <div className={page4Styles.blockArea} style={{ marginTop: '30px' }}>
                <div className={page4Styles.title}>
                  <div className={page4Styles.titleLoading}>
                    <LoadingAnime />
                  </div>
                  <div className={page4Styles.titleArea}>
                    <span className={page4Styles.titleIcon} />
                    <span>用户医院汇总</span>
                  </div>
                </div>
                <div className={page4Styles.hospitalList}>
                  <CardItem name={{ type: 'number', content: '1' }} data="大连医科大学附属第一医院" />
                  <CardItem name={{ type: 'number', content: '1' }} data="大连医科大学附属第一医院" />
                  <CardItem name={{ type: 'number', content: '1' }} data="大连医科大学附属第一医院" />
                  <CardItem name={{ type: 'number', content: '1' }} data="大连医科大学附属第一医院" />
                  <CardItem name={{ type: 'number', content: '1' }} data="大连医科大学附属第一医院" />
                  <CardItem name={{ type: 'number', content: '1' }} data="大连医科大学附属第一医院" />
                  <CardItem name={{ type: 'number', content: '1' }} data="大连医科大学附属第一医院" />
                  <CardItem name={{ type: 'number', content: '1' }} data="大连医科大学附属第一医院" />
                  <CardItem name={{ type: 'number', content: '1' }} data="大连医科大学附属第一医院" />
                  <CardItem name={{ type: 'number', content: '1' }} data="大连医科大学附属第一医院" />
                </div>
              </div>
            </Col>
            <Col className="gutter-row" span={19}>
              <div className={page4Styles.map} />

              <div className={`${page4Styles.blockArea} ${page4Styles.comments}`}>
                <div className={page4Styles.title}>
                  <div className={page4Styles.titleLoading}>
                    <LoadingAnime />
                  </div>
                  <div className={page4Styles.titleArea}>
                    <span className={page4Styles.titleIcon} />
                    <span>实施留言信息</span>
                  </div>
                </div>
                <BorderWithCorner topLeft={true} topRight={true}>
                <div className={page4Styles.commentsContainer}>
                  <CommentsPool
                    comments={
                      [
                        { user: '张三', comment: '11111111111111111111111111111111111111111111111111111111111111' },
                        { user: '张三', comment: '11111111111111111111111111111111111111111111111111111111111111' },
                        { user: '张三', comment: '11111111111111111111111111111111111111111111111111111111111111' }
                      ]
                    }
                  />
                </div>
                </BorderWithCorner>
              </div>
            </Col>
          </Row>
        </div>
      </ScreenBg>
    </ResizeObserver>
  );
};