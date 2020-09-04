// https://umijs.org/config/
import { defineConfig } from 'umi';
import defaultSettings from './defaultSettings';
import proxy from './proxy';
const { REACT_APP_ENV } = process.env;
export default defineConfig({
  hash: true,
  antd: {},
  dva: {
    hmr: true,
  },
  locale: {
    // default zh-CN
    default: 'zh-CN',
    // default true, when it is true, will use `navigator.language` overwrite default
    antd: true,
    baseNavigator: true,
  },
  dynamicImport: {
    loading: '@/components/PageLoading/index',
  },
  targets: {
    ie: 11,
  },
  // umi routes: https://umijs.org/docs/routing
  routes: [
    {
      path: '/',
      routes: [
        {
          name: 'screen-components',
          icon: 'highlight',
          path: '/screen-components',
          component: './largeScreen/show'
        },
        {
          name: 'screen-page',
          path: '/screen-page',
          routes: [
            {
              name: 'page1',
              path: 'page1',
              component: './largeScreen/page1'
            },
            {
              name: 'page2',
              path: 'page2',
              component: './largeScreen/page2'
            },
            {
              name: 'page3',
              path: 'page3',
              component: './largeScreen/page3'
            },
            {
              name: 'page4',
              path: 'page4',
              component: './largeScreen/page4'
            }
          ]
        }
      ],
    },
  ],
  // Theme for antd: https://ant.design/docs/react/customize-theme-cn
  theme: {
    // ...darkTheme,
    'primary-color': defaultSettings.primaryColor,
  },
  // @ts-ignore
  title: false,
  ignoreMomentLocale: true,
  proxy: proxy[REACT_APP_ENV || 'dev'],
  manifest: {
    basePath: '/',
  },
});
