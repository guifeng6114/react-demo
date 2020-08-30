import React from 'react';
import ResizeObserver from 'rc-resize-observer';
import ScreenBg from '../show/components/ScreenBg/ScreenBg';

export default () => {

  return (
    <ResizeObserver
      onResize={({ width }) => {
        // console.log(width);
        const rootElement = document.getElementsByTagName('html')[0];
        const fontSizeRoot = getComputedStyle(rootElement).fontSize.slice(0, -2);
        rootElement.style.fontSize = width / 1920 * 16 + 'px';
        // console.log(fontSizeRoot);
      }}
    >
      <ScreenBg name="热点会议">
        <h2>123</h2>
      </ScreenBg>
    </ResizeObserver>
  );
};