import React from 'react';
import ResizeObserver from 'rc-resize-observer';
import ScreenBg from '../show/components/ScreenBg/ScreenBg';

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
			<ScreenBg name="热点内容"></ScreenBg>
		</ResizeObserver>
	);
};