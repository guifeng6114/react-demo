import React, { Fragment } from 'react';
import ScreenBg from '../show/components/ScreenBg/ScreenBg';
import SvgCardTitle from '../show/components/svgCardTitle/svgCardTitle';
import BorderWithCorner from '../show/components/borderWithCorner';
import LoadingBar from '../../../components/LoadingBar';
import LabelCard from '../show/components/labelCard/labelCard';
import ContentLabel from '../show/components/contentLabelItem/contentLabelItem';
import styles from './page2.less';
import { Row, Col } from 'antd';
import ScreenCard from '@/components/ScreenCard';
import classNames from 'classnames';

export default () => {

  return (
    <Fragment>
      {/* <ResizeObserver
      onResize={({ width }) => {
        const rootElement = document.getElementsByTagName('html')[0];
        // const fontSizeRoot = getComputedStyle(rootElement).fontSize.slice(0, -2);
        if (width <= 1760) {
          rootElement.style.fontSize = width / 1760 * 16 + 'px';
          return;
        }
        rootElement.style.fontSize = '16px';
      }}
    > */}
      <ScreenBg name="医生画像" iconType="pen">
        <div className={styles.container}>
          <Row gutter={[16, 32]}>
            <Col className="gutter-row" offset={1} span={6}>
              <div>
                <SvgCardTitle style={{ marginBottom: '-1px', marginLeft: '1px' }}>
                  <div className={styles.title}>
                    <div>
                      <LoadingBar className="" />
                    </div>
                    <div className={classNames(styles.titleContainer)}>
                      <span className={classNames(styles.titleIcon, styles.mark)} />
                      <span className={styles.titleName}>用户标签</span>
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
                  <div className={styles.doctorInfo}>
                    <div className={styles.doctorName}>刘大明</div>
                    <div className={styles.infoItem}>
                      <span className={styles.infoIcon} />
                      <span className={styles.infoText}>消化科  主治医师</span>
                    </div>
                    <div className={styles.infoItem}>
                      <span className={styles.infoIcon} />
                      <span className={styles.infoText}>大连医科大学附属第一医院</span>
                    </div>

                    <div className={styles.labelTitle}>注册标签</div>
                    <div className={styles.labelItem}>
                      <span className={styles.labelIcon} />
                      <span className={styles.labelText}>主治-脾胃领域</span>
                    </div>
                    <div className={styles.labelItem}>
                      <span className={styles.labelIcon} />
                      <span className={styles.labelText}>关注-心脑血管领域</span>
                    </div>
                    <div className={styles.labelItem}>
                      <span className={styles.labelIcon} />
                      <span className={styles.labelText}>
                        补充标签（运行）<br />
                        {`<聪慧>、<聪慧>、<聪慧>、`}<br />
                        {`<聪慧>、<聪慧>、<聪慧>、`}<br />
                        {`<聪慧>`}
                      </span>
                    </div>
                  </div>
                </ScreenCard>
                {/* <BorderWithCorner topRight={true} bottomLeft={true}>
                  <div className={styles.doctorInfo}>
                    <div className={styles.doctorName}>刘大明</div>
                    <div className={styles.infoItem}>
                      <span className={styles.infoIcon} />
                      <span className={styles.infoText}>消化科  主治医师</span>
                    </div>
                    <div className={styles.infoItem}>
                      <span className={styles.infoIcon} />
                      <span className={styles.infoText}>大连医科大学附属第一医院</span>
                    </div>

                    <div className={styles.labelTitle}>注册标签</div>
                    <div className={styles.labelItem}>
                      <span className={styles.labelIcon} />
                      <span className={styles.labelText}>主治-脾胃领域</span>
                    </div>
                    <div className={styles.labelItem}>
                      <span className={styles.labelIcon} />
                      <span className={styles.labelText}>关注-心脑血管领域</span>
                    </div>
                    <div className={styles.labelItem}>
                      <span className={styles.labelIcon} />
                      <span className={styles.labelText}>
                        补充标签（运行）<br />
                        {`<聪慧>、<聪慧>、<聪慧>、`}<br />
                        {`<聪慧>、<聪慧>、<聪慧>、`}<br />
                        {`<聪慧>`}
                      </span>
                    </div>
                  </div>
                </BorderWithCorner> */}
              </div>
            </Col>
            <Col className="gutter-row" offset={1} span={5}>
              <div className={classNames(styles.centerTitleTop, styles.reverse)}>
                <span className={styles.centerTitleText} >会议标签</span>
                <span className={classNames(styles.centerTitleIcon, styles.chat)} />
              </div>
              <BorderWithCorner bottomRight={true}>
                <div className={styles.contentCenterBlock}>
                  <LabelCard text="用户粘性" />
                  <div className={styles.centerItem}>
                    <span className={styles.centerIcon} />
                    <span className={styles.centerTitle}>阅读量</span>
                    <span className={styles.centerData}>80%</span>
                  </div>
                  <div className={styles.centerItem}>
                    <span className={styles.centerIcon} />
                    <span className={styles.centerTitle}>参会量</span>
                    <span className={styles.centerData}>80%</span>
                  </div>
                </div>
              </BorderWithCorner>
              <BorderWithCorner bottomRight={true} style={{ marginTop: '2.75rem' }}>
                <div className={styles.contentCenterBlock}>
                  <LabelCard text="用户忠诚度" />
                  <div className={styles.centerItem}>
                    <span className={styles.centerIcon} />
                    <span className={styles.centerTitle}>内容完成阅读比例</span>
                    <span className={styles.centerData}>80%</span>
                  </div>
                  <div className={styles.centerItem}>
                    <span className={styles.centerIcon} />
                    <span className={styles.centerTitle}>内容分享比例</span>
                    <span className={styles.centerData}>80%</span>
                  </div>
                  <div className={styles.centerItem}>
                    <span className={styles.centerIcon} />
                    <span className={styles.centerTitle}>会议专注度</span>
                    <span className={styles.centerData}>80%</span>
                  </div>
                  <div className={styles.centerItem}>
                    <span className={styles.centerIcon} />
                    <span className={styles.centerTitle}>会议活跃度</span>
                    <span className={styles.centerData}>80%</span>
                  </div>
                </div>
              </BorderWithCorner>
            </Col>

            <Col span={5}>
              <div className={styles.bodyBg}>
                <div className={styles.line1}></div>
                <div className={styles.line2}></div>
              </div>
            </Col>

            <Col className="gutter-row" span={5}>
              <div className={classNames(styles.centerTitleTop)}>
                <span className={classNames(styles.centerTitleIcon, styles.star)} />
                <span className={styles.centerTitleText} >评价标签</span>
              </div>
              <BorderWithCorner bottomRight={true}>
                <div className={styles.contentCenterBlock}>
                  <LabelCard text="讲者标签" />
                  <div className={styles.centerItem}>
                    <span className={styles.centerIcon} />
                    <span className={styles.centerTitle}>主讲领域：罕见病/心血管/重症监护</span>
                  </div>
                  <div className={styles.centerItem}>
                    <span className={styles.centerIcon} />
                    <span className={styles.centerTitle}>讲者水平</span>
                  </div>
                </div>
              </BorderWithCorner>
              <BorderWithCorner bottomRight={true} style={{ marginTop: '2.75rem' }}>
                <div className={styles.contentCenterBlock}>
                  <LabelCard text="参会者标签" />
                  <div className={styles.centerItem}>
                    <span className={styles.centerIcon} />
                    <span className={styles.centerTitle}>关注领域：罕见病/心血管/重症监护</span>
                  </div>
                  <div className={styles.centerItem}>
                    <span className={styles.centerIcon} />
                    <span className={styles.centerTitle}>关注主题关键字：治疗/冠心病/肺结核</span>
                  </div>
                  <div className={styles.centerItem}>
                    <span className={styles.centerIcon} />
                    <span className={styles.centerTitle}>关注讲者：张三/王五/赵四</span>
                  </div>
                  <div className={styles.centerItem}>
                    <span className={styles.centerIcon} />
                    <span className={styles.centerTitle}>专注度：好</span>
                    <span className={styles.centerIcon} />
                    <span className={styles.centerTitle}>活跃度：好</span>
                  </div>
                </div>
              </BorderWithCorner>
            </Col>
          </Row>

          <div className={styles.map}>
            <Row gutter={16}>
              <Col className="gutter-row" span={12}>
                <div style={{ border: 'solid 1px #0ff', height: '17.5rem' }}></div>
              </Col>
              <Col className="gutter-row" span={12}>
                <div style={{ height: '17.5rem' }}>
                  <SvgCardTitle>
                    <div className={styles.title}>
                      <div>
                        <LoadingBar className="" />
                      </div>
                      <div className={styles.titleContainer}>
                        <span className={classNames(styles.titleIcon, styles.catelog)} />
                        <span className={styles.titleName}>内容标签</span>
                      </div>
                    </div>
                  </SvgCardTitle>
                  <BorderWithCorner topRight={true} bottomLeft={true}>
                    <div className={styles.contentLabel}>
                      {
                        [
                          {
                            content1: '关注主题聚词:甲状腺的预防/外科跌打损伤/骨科理疗',
                            content2: '平均浏览时长',
                            content3: '20min'
                          },
                          {
                            content1: '关注主题聚词:甲状腺的预防/外科跌打损伤/骨科理疗',
                            content2: '完整浏览习惯',
                            content3: '98%'
                          },
                          {
                            content1: '关注作者:张三李四王五赵六',
                            content2: '反复浏览习惯',
                            content3: '30%'
                          },
                          {
                            content1: '关注领城:甲状腺/外科/骨科',
                            content2: '分享习惯',
                            content3: '2.5%'
                          },
                        ].map((item: any) => {
                          return <ContentLabel contents={item} />
                        })
                      }
                    </div>
                  </BorderWithCorner>
                </div>
              </Col>
            </Row>
          </div>

        </div>
      </ScreenBg>
      {/* </ResizeObserver> */}
    </Fragment>
  );
}