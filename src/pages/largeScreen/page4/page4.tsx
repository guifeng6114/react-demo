import React, { Fragment } from 'react';
import { Row, Col } from 'antd';
import ScreenCard from '@/components/ScreenCard';
import LoadingBar from '@/components/LoadingBar';
import classNames from 'classnames';
import ScreenBg from '../show/components/ScreenBg/ScreenBg';
import styles from '../page1/page1.less';
import page4Styles from './page4.less';
import CardItem from '../show/components/cardItem/cardItem';
import CommentsPool from '../show/components/commentsPool/commentsPool';
import SvgCardTitle from '../show/components/svgCardTitle/svgCardTitle';
import BorderWithCorner from '../show/components/borderWithCorner';
import ShineBlur from '../show/components/shineBlur/shineBlur';

export default () => {

  return (
    <Fragment>
      <ScreenBg name="热点会议" iconType="page4">
        <div className={styles.container}>
          <Row gutter={16}>
            <Col className="gutter-row" span={5}>
              <div className={page4Styles.blockArea}>
                <SvgCardTitle>
                  <div className={page4Styles.title}>
                    <div className={page4Styles.titleLoading}>
                      <LoadingBar className="" />
                    </div>
                    <div className={page4Styles.titleArea}>
                      <span className={classNames(page4Styles.titleIcon, page4Styles.user_ac)} />
                      <span>用户行为</span>
                    </div>
                  </div>
                </SvgCardTitle>
                <BorderWithCorner topLeft topRight>
                  <ShineBlur top />
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

              <div className={page4Styles.blockArea} style={{ marginTop: '1.875rem' }}>
                <SvgCardTitle>
                  <div className={page4Styles.title}>
                    <div className={page4Styles.titleLoading}>
                      <LoadingBar className="" />
                    </div>
                    <div className={page4Styles.titleArea}>
                      <span className={classNames(page4Styles.titleIcon, page4Styles.user_ac)} />
                      <span>用户行为</span>
                    </div>
                  </div>
                </SvgCardTitle>
                <BorderWithCorner topLeft topRight>
                  <ShineBlur top />
                  <div className={page4Styles.action}>
                    <span className={classNames(page4Styles.actionIcon, page4Styles.listeners)} />
                    <span className={page4Styles.actionTitle}>实时在线听众</span>
                    <span className={page4Styles.actionData}>467</span>
                  </div>
                </BorderWithCorner>
                <BorderWithCorner topLeft topRight style={{ borderTop: '0' }}>
                  <div className={page4Styles.action}>
                    <span className={classNames(page4Styles.actionIcon, page4Styles.meet_like)} />
                    <span className={page4Styles.actionTitle}>实时在线听众</span>
                    <span className={page4Styles.actionData}>467</span>
                  </div>
                </BorderWithCorner>
              </div>

              <div className={page4Styles.blockArea} style={{ marginTop: '1.875rem' }}>
                <SvgCardTitle style={{ marginBottom: '-1px', marginLeft: '1px' }}>
                  <div className={page4Styles.title}>
                    <div className={page4Styles.titleLoading}>
                      <LoadingBar className="" />
                    </div>
                    <div className={page4Styles.titleArea}>
                      <span className={classNames(page4Styles.titleIcon, page4Styles.hosp_bl)} />
                      <span>用户医院汇总</span>
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
                </ScreenCard>
              </div>
            </Col>
            <Col className="gutter-row" offset={1} span={18}>
              <div className={page4Styles.map}>
                <ShineBlur left style={{ left: '1rem', height: '97%', top: '.4375rem' }} />
                <ShineBlur bottom delay={2} style={{ bottom: '.5rem', width: '98%', left: '0', right: '0' }} />
                <ShineBlur right delay={4} reverse style={{ right: '.875rem', height: '97%', top: '.4375rem' }} />
              </div>

              <div className={`${page4Styles.blockArea} ${page4Styles.comments}`}>
                <SvgCardTitle>
                  <div className={page4Styles.title}>
                    <div className={page4Styles.titleLoading}>
                      <LoadingBar className="" />
                    </div>
                    <div className={page4Styles.titleArea}>
                      <span className={classNames(page4Styles.titleIcon, page4Styles.comments_icon)} />
                      <span>实施留言信息</span>
                    </div>
                  </div>
                </SvgCardTitle>
                <BorderWithCorner topLeft topRight>
                  <ShineBlur top />
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
    </Fragment>
  );
};
