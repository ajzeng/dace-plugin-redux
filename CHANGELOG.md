# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [3.4.3](https://github.com/dacejs/dace-plugin-redux/compare/v3.4.2...v3.4.3) (2020-05-12)


### Bug Fixes

* 修复 reducer 中 state 默认值initState不生效的问题 ([e25b024](https://github.com/dacejs/dace-plugin-redux/commit/e25b02403c22452000c9baa7201f5892d3e78c1e))

### [3.4.2](https://github.com/dacejs/dace-plugin-redux/compare/v3.4.1...v3.4.2) (2020-04-19)


### Bug Fixes

* 修复 server-side HMR 无效的问题 ([058cd3d](https://github.com/dacejs/dace-plugin-redux/commit/058cd3d3160b97037635bf709e95d6e16fd15e5d))

### [3.4.1](https://github.com/dacejs/dace-plugin-redux/compare/v3.4.0...v3.4.1) (2020-01-17)


### Features

* 在页面类上增加静态属性 pageName ([bb92cab](https://github.com/dacejs/dace-plugin-redux/commit/bb92cabf0854bf815d49385fb04ca837f155555d))

## [3.4.0](https://github.com/dacejs/dace-plugin-redux/compare/v3.3.8...v3.4.0) (2020-01-16)


### Features

* 移除 axios 请求 header 中的 X-Real-IP ([8d7fb06](https://github.com/dacejs/dace-plugin-redux/commit/8d7fb063bd18a1cb8d608dd9c44899b1222455a2))

### [3.3.8](https://github.com/dacejs/dace-plugin-redux/compare/v3.3.7...v3.3.8) (2019-12-25)


### Bug Fixes

* 修复addRoutes找不到的问题 ([2bce25e](https://github.com/dacejs/dace-plugin-redux/commit/2bce25e5b8140c6e9b5a509e496385c495fd61a5))

### [3.3.7](https://github.com/dacejs/dace-plugin-redux/compare/v3.3.6...v3.3.7) (2019-12-20)

### [3.3.6](https://github.com/dacejs/dace-plugin-redux/compare/v3.3.5...v3.3.6) (2019-12-20)

### [3.3.5](https://github.com/dacejs/dace-plugin-redux/compare/v3.3.4...v3.3.5) (2019-12-20)

### [3.3.4](https://github.com/dacejs/dace-plugin-redux/compare/v3.3.3...v3.3.4) (2019-12-19)


### Bug Fixes

* 修复 body-parser 拼写错误 ([2f6f5d5](https://github.com/dacejs/dace-plugin-redux/commit/2f6f5d52a70093d719b46488b2f23c2386700d0a))

### [3.3.3](https://github.com/dacejs/dace-plugin-redux/compare/v3.3.2...v3.3.3) (2019-12-19)


### Bug Fixes

* 修复不支持 post 请求的问题 ([603775a](https://github.com/dacejs/dace-plugin-redux/commit/603775a8152378cbc7f830a84db9c46fba87189c))

### [3.3.2](https://github.com/dacejs/dace-plugin-redux/compare/v3.3.1...v3.3.2) (2019-12-18)


### Features

* 在 axios 请求头中添加 Original-Url 原始请求地址 ([f482c24](https://github.com/dacejs/dace-plugin-redux/commit/f482c249154ab2506dcef4f0efe8957b2dbc4f19))

### [3.3.1](https://github.com/dacejs/dace-plugin-redux/compare/v3.3.0...v3.3.1) (2019-12-18)


### Bug Fixes

* 修复 req 透传 header 失效的问题 ([945c241](https://github.com/dacejs/dace-plugin-redux/commit/945c2419a2dcf9e156433153b6b3e6ad92a338a6))

## [3.3.0](https://github.com/dacejs/dace-plugin-redux/compare/v3.2.1...v3.3.0) (2019-12-06)


### Features

* 将服务器端渲染代码封装成中间件 ([9988267](https://github.com/dacejs/dace-plugin-redux/commit/9988267b058b43226832abc779fdfa35af3f0839))

### [3.2.1](https://github.com/dacejs/dace-plugin-redux/compare/v3.2.0...v3.2.1) (2019-12-04)


### Bug Fixes

* 修复`在IE下导致的报错 ([7af07ca](https://github.com/dacejs/dace-plugin-redux/commit/7af07caa773b7744993620b68e1dbdc5f6f76290))

## [3.2.0](https://github.com/dacejs/dace-plugin-redux/compare/v3.1.2...v3.2.0) (2019-12-03)


### Features

* 支持静态文件路由 ([9d7c253](https://github.com/dacejs/dace-plugin-redux/commit/9d7c253742d1f4a33879e19c056fcdce407f5cbf))

### [3.1.2](https://github.com/dacejs/dace-plugin-redux/compare/v3.1.1...v3.1.2) (2019-11-28)

### [3.1.1](https://github.com/dacejs/dace-plugin-redux/compare/v3.1.0...v3.1.1) (2019-11-27)


### Bug Fixes

* 修复关闭服务器端渲染时 noscript 不生效的问题 ([2836d58](https://github.com/dacejs/dace-plugin-redux/commit/2836d58c2c86e5eb345fdd6c96646e8d90704c8b))

## [3.1.0](https://github.com/dacejs/dace-plugin-redux/compare/v3.0.0...v3.1.0) (2019-11-27)


### Features

* 支持 DACE_SSR 是否启用服务器端渲染的开关 ([01e8e4c](https://github.com/dacejs/dace-plugin-redux/commit/01e8e4cb04be81e87657a25f5dc9d2d622b04cef))

## [3.0.0](https://github.com/dacejs/dace-plugin-redux/compare/v2.2.0...v3.0.0) (2019-11-25)


### Features

* 重写数据代理模块 ([6c8f145](https://github.com/dacejs/dace-plugin-redux/commit/6c8f145b16a07a29aaeb347a005530e409a24197))

## [2.2.0](https://github.com/dacejs/dace-plugin-redux/compare/v2.1.5...v2.2.0) (2019-11-20)


### Features

* 增加 cookie 解析 ([df90806](https://github.com/dacejs/dace-plugin-redux/commit/df90806dfe86358fa3f9422de5d1d2e9d2a1017e))

### [2.1.5](https://github.com/dacejs/dace-plugin-redux/compare/v2.1.4...v2.1.5) (2019-11-19)

<a name="2.1.4"></a>
## [2.1.4](https://github.com/dacejs/dace-plugin-redux/compare/v2.1.3...v2.1.4) (2019-06-17)


### Bug Fixes

* 使用 stats 代替 statsFile ([314b702](https://github.com/dacejs/dace-plugin-redux/commit/314b702))



<a name="2.1.3"></a>
## [2.1.3](https://github.com/dacejs/dace-plugin-redux/compare/v2.1.2...v2.1.3) (2019-06-17)


### Bug Fixes

* DACE_PATH_LOADABLE_STATS_JSON ([d48f070](https://github.com/dacejs/dace-plugin-redux/commit/d48f070))



<a name="2.1.2"></a>
## [2.1.2](https://github.com/dacejs/dace-plugin-redux/compare/v2.1.1...v2.1.2) (2019-06-17)


### Bug Fixes

* 修复 prd/loadable-stats.json 找不到的问题 ([163ae5e](https://github.com/dacejs/dace-plugin-redux/commit/163ae5e))



<a name="2.1.1"></a>
## [2.1.1](https://github.com/dacejs/dace-plugin-redux/compare/v2.1.0...v2.1.1) (2019-06-13)



<a name="2.1.0"></a>
# [2.1.0](https://github.com/dacejs/dace-plugin-redux/compare/v2.0.8...v2.1.0) (2019-06-13)


### Features

* 升级 react-redux@^7.1.0 ([d3f31d7](https://github.com/dacejs/dace-plugin-redux/commit/d3f31d7))



<a name="2.0.8"></a>
## [2.0.8](https://github.com/dacejs/dace-plugin-redux/compare/v2.0.7...v2.0.8) (2019-06-12)


### Bug Fixes

* 修复 store is undefined 错误 ([221fbcf](https://github.com/dacejs/dace-plugin-redux/commit/221fbcf))



<a name="2.0.7"></a>
## [2.0.7](https://github.com/dacejs/dace-plugin-redux/compare/v2.0.6...v2.0.7) (2019-06-12)



<a name="2.0.6"></a>
## [2.0.6](https://github.com/dacejs/dace-plugin-redux/compare/v2.0.5...v2.0.6) (2019-06-12)


### Bug Fixes

* 预加载 [@loadable](https://github.com/loadable)/component 确保服务器端第一次渲染时能拿到数据 ([3fc8ad8](https://github.com/dacejs/dace-plugin-redux/commit/3fc8ad8))



<a name="2.0.5"></a>
## [2.0.5](https://github.com/dacejs/dace-plugin-redux/compare/v2.0.4...v2.0.5) (2019-06-11)


### Bug Fixes

* 使用 [@loadable](https://github.com/loadable) getStyleTags 代替 dace cssTags ([a98e5f4](https://github.com/dacejs/dace-plugin-redux/commit/a98e5f4))



<a name="2.0.4"></a>
## [2.0.4](https://github.com/dacejs/dace-plugin-redux/compare/v2.0.3...v2.0.4) (2019-06-11)


### Bug Fixes

* 修复报错 jsTags is not defined ([3329735](https://github.com/dacejs/dace-plugin-redux/commit/3329735))



<a name="2.0.3"></a>
## [2.0.3](https://github.com/dacejs/dace-plugin-redux/compare/v2.0.2...v2.0.3) (2019-06-11)


### Bug Fixes

* 修复报错 Cannot find module 'dist/loadable-stats.json' ([4d2af08](https://github.com/dacejs/dace-plugin-redux/commit/4d2af08))



<a name="2.0.2"></a>
## [2.0.2](https://github.com/dacejs/dace-plugin-redux/compare/v2.0.1...v2.0.2) (2019-06-11)



<a name="2.0.1"></a>
## [2.0.1](https://github.com/dacejs/dace-plugin-redux/compare/v2.0.0...v2.0.1) (2019-06-11)


### Bug Fixes

* loadable-components/server -> [@loadable](https://github.com/loadable)/server ([1c75df6](https://github.com/dacejs/dace-plugin-redux/commit/1c75df6))



<a name="2.0.0"></a>
# [2.0.0](https://github.com/dacejs/dace-plugin-redux/compare/v2.0.0-alpha.7...v2.0.0) (2019-06-11)


### Features

* 升级 loadable-components ，用 [@loadable](https://github.com/loadable)/component 代替 ([1ca1ea0](https://github.com/dacejs/dace-plugin-redux/commit/1ca1ea0))



<a name="2.0.0-alpha.7"></a>
# [2.0.0-alpha.7](https://github.com/dacejs/dace-plugin-redux/compare/v2.0.0-alpha.6...v2.0.0-alpha.7) (2019-01-30)



<a name="2.0.0-alpha.6"></a>
# [2.0.0-alpha.6](https://github.com/dacejs/dace-plugin-redux/compare/v2.0.0-alpha.5...v2.0.0-alpha.6) (2019-01-30)



<a name="2.0.0-alpha.5"></a>
# [2.0.0-alpha.5](https://github.com/dacejs/dace-plugin-redux/compare/v2.0.0-alpha.4...v2.0.0-alpha.5) (2019-01-30)



<a name="2.0.0-alpha.4"></a>
# [2.0.0-alpha.4](https://github.com/dacejs/dace-plugin-redux/compare/v2.0.0-alpha.3...v2.0.0-alpha.4) (2019-01-30)



<a name="2.0.0-alpha.3"></a>
# [2.0.0-alpha.3](https://github.com/dacejs/dace-plugin-redux/compare/v2.0.0-alpha.2...v2.0.0-alpha.3) (2019-01-29)



<a name="2.0.0-alpha.2"></a>
# [2.0.0-alpha.2](https://github.com/dacejs/dace-plugin-redux/compare/v2.0.0-alpha.1...v2.0.0-alpha.2) (2019-01-28)


### Features

* 增加404页面的支持 ([10a2d31](https://github.com/dacejs/dace-plugin-redux/commit/10a2d31))
* 支持是否启用服务器端渲染开关 `DACE_SSR` ([26ba641](https://github.com/dacejs/dace-plugin-redux/commit/26ba641))
* 新增请求转发功能 ([8aa7187](https://github.com/dacejs/dace-plugin-redux/commit/8aa7187))
* 重命名配置参数名称 `DACE_PATH_PLUGIN_REDUX_AXIOS_INSTANCE` -> `DACE_PATH_AXIOS_INSTANCE` ([a4ca845](https://github.com/dacejs/dace-plugin-redux/commit/a4ca845))



<a name="2.0.0-alpha.1"></a>
# [2.0.0-alpha.1](https://github.com/dacejs/dace-plugin-redux/compare/v2.0.0-alpha.0...v2.0.0-alpha.1) (2019-01-23)


### Features

* 重构目录结构 ([b43a437](https://github.com/dacejs/dace-plugin-redux/commit/b43a437))



<a name="2.0.0-alpha.0"></a>
# [2.0.0-alpha.0](https://github.com/dacejs/dace-plugin-redux/compare/v1.11.0...v2.0.0-alpha.0) (2019-01-22)


### Features

* 使用新的配置参数名称 ([28ad5f1](https://github.com/dacejs/dace-plugin-redux/commit/28ad5f1))
* 更新script插入方式 ([8483cc0](https://github.com/dacejs/dace-plugin-redux/commit/8483cc0))



<a name="1.11.0"></a>
# [1.11.0](https://github.com/dacejs/dace-plugin-redux/compare/v1.10.0...v1.11.0) (2019-01-14)


### Features

* 增加 `DACE_AXIOS_INSTANCE_PATH` 参数 ([8620e5f](https://github.com/dacejs/dace-plugin-redux/commit/8620e5f))



<a name="1.10.0"></a>
# [1.10.0](https://github.com/dacejs/dace-plugin-redux/compare/v1.9.0...v1.10.0) (2019-01-11)


### Bug Fixes

* [#6](https://github.com/dacejs/dace-plugin-redux/issues/6) 修复设置router.js时页面不能正常插入css文件的问题 ([28b7263](https://github.com/dacejs/dace-plugin-redux/commit/28b7263))


### Features

* 对外暴露 axios 实例 ([4e2ef9d](https://github.com/dacejs/dace-plugin-redux/commit/4e2ef9d))



<a name="1.9.0"></a>
# [1.9.0](https://github.com/dacejs/dace-plugin-redux/compare/v1.8.2...v1.9.0) (2019-01-07)


### Features

* entry.client 改为 entry。 BREAKING CHANGE: 需要 `dace@>1.6.0` ([565aec2](https://github.com/dacejs/dace-plugin-redux/commit/565aec2))



<a name="1.8.2"></a>
## [1.8.2](https://github.com/dacejs/dace-plugin-redux/compare/v1.8.1...v1.8.2) (2019-01-03)


### Bug Fixes

* 修复浏览器中 Refused to set unsafe header "cookie" 错误 ([a93efc9](https://github.com/dacejs/dace-plugin-redux/commit/a93efc9))



<a name="1.8.1"></a>
## [1.8.1](https://github.com/dacejs/dace-plugin-redux/compare/v1.8.0...v1.8.1) (2018-12-29)


### Bug Fixes

* 修复页面回退时重复注入 reducer 的问题 [#4](https://github.com/dacejs/dace-plugin-redux/issues/4) ([4137829](https://github.com/dacejs/dace-plugin-redux/commit/4137829))



<a name="1.8.0"></a>
# [1.8.0](https://github.com/dacejs/dace-plugin-redux/compare/v1.7.1...v1.8.0) (2018-12-26)


### Features

* 注入reducer时支持数组参数 [#3](https://github.com/dacejs/dace-plugin-redux/issues/3) ([5a3ec3c](https://github.com/dacejs/dace-plugin-redux/commit/5a3ec3c))



<a name="1.7.1"></a>
## [1.7.1](https://github.com/dacejs/dace-plugin-redux/compare/v1.7.0...v1.7.1) (2018-12-20)


### Bug Fixes

* 修复浏览器运行时 req 不存在的问题 ([bcbf17e](https://github.com/dacejs/dace-plugin-redux/commit/bcbf17e))



<a name="1.7.0"></a>
# [1.7.0](https://github.com/dacejs/dace-plugin-redux/compare/v1.6.2...v1.7.0) (2018-12-20)


### Features

* 不传 DACE_API_BASE_URL 时 baseUrl 使用当前域名 [#2](https://github.com/dacejs/dace-plugin-redux/issues/2) ([795e744](https://github.com/dacejs/dace-plugin-redux/commit/795e744))



<a name="1.6.2"></a>
## [1.6.2](https://github.com/dacejs/dace-plugin-redux/compare/v1.6.1...v1.6.2) (2018-12-13)



<a name="1.6.1"></a>
## [1.6.1](https://github.com/dacejs/dace-plugin-redux/compare/v1.6.0...v1.6.1) (2018-10-22)


### Bug Fixes

* withCredentials = true ([11c119b](https://github.com/dacejs/dace-plugin-redux/commit/11c119b))



<a name="1.6.0"></a>
# [1.6.0](https://github.com/dacejs/dace-plugin-redux/compare/v1.5.3...v1.6.0) (2018-10-22)


### Features

* 发起 api 请求时自动带上 cookie ([bf8879e](https://github.com/dacejs/dace-plugin-redux/commit/bf8879e))



<a name="1.5.3"></a>
## [1.5.3](https://github.com/dacejs/dace-plugin-redux/compare/v1.5.2...v1.5.3) (2018-10-18)


### Bug Fixes

* 修复使用 history.push 修改 url 后 query 获取异常的问题 ([6af40a8](https://github.com/dacejs/dace-plugin-redux/commit/6af40a8))



<a name="1.5.2"></a>
## [1.5.2](https://github.com/dacejs/dace-plugin-redux/compare/v1.5.1...v1.5.2) (2018-09-28)


### Bug Fixes

* 给 script 标签加上 crossorigin="anonymous" ([30629a8](https://github.com/dacejs/dace-plugin-redux/commit/30629a8))



<a name="1.5.1"></a>
## [1.5.1](https://github.com/dacejs/dace-plugin-redux/compare/v1.5.0...v1.5.1) (2018-09-27)


### Bug Fixes

* 修复多级目录时初始化HTML插入script标签错误的问题 ([cf1396f](https://github.com/dacejs/dace-plugin-redux/commit/cf1396f))



<a name="1.5.0"></a>
# [1.5.0](https://github.com/dacejs/dace-plugin-redux/compare/v1.4.0...v1.5.0) (2018-09-27)


### Features

* 将 styles.css 直接输出到 HTML 中，避免网页首屏抖动 ([bd1e2ed](https://github.com/dacejs/dace-plugin-redux/commit/bd1e2ed))



<a name="1.4.0"></a>
# [1.4.0](https://github.com/dacejs/dace-plugin-redux/compare/v1.3.1...v1.4.0) (2018-09-14)


### Features

* Code-splitting support ([fb3867c](https://github.com/dacejs/dace-plugin-redux/commit/fb3867c))



<a name="1.3.1"></a>
## [1.3.1](https://github.com/dacejs/dace-plugin-redux/compare/v1.3.0...v1.3.1) (2018-09-13)



<a name="1.3.0"></a>
# [1.3.0](https://github.com/dacejs/dace-plugin-redux/compare/v1.2.1...v1.3.0) (2018-08-29)


### Features

* 增加自定义 redux 中间件的功能 ([2c9e6f4](https://github.com/dacejs/dace-plugin-redux/commit/2c9e6f4))



<a name="1.2.1"></a>
## [1.2.1](https://github.com/dacejs/dace-plugin-redux/compare/v1.2.0...v1.2.1) (2018-08-23)


### Bug Fixes

* 修复 rules 配置文件不存在时报错的问题 ([bb9597d](https://github.com/dacejs/dace-plugin-redux/commit/bb9597d))



<a name="1.2.0"></a>
# [1.2.0](https://github.com/dacejs/dace-plugin-redux/compare/v1.1.2...v1.2.0) (2018-08-22)


### Features

* 为 api 增加 baseUrl 参数 ([ff594e3](https://github.com/dacejs/dace-plugin-redux/commit/ff594e3))
* 增加数据mock功能 ([6e90bcb](https://github.com/dacejs/dace-plugin-redux/commit/6e90bcb))



<a name="1.1.2"></a>
## [1.1.2](https://github.com/dacejs/dace-plugin-redux/compare/v1.1.1...v1.1.2) (2018-08-21)



<a name="1.1.1"></a>
## [1.1.1](https://github.com/dacejs/dace-plugin-redux/compare/v1.1.0...v1.1.1) (2018-08-17)



<a name="1.1.0"></a>
# [1.1.0](https://github.com/dacejs/dace-plugin-redux/compare/v1.0.14...v1.1.0) (2018-08-17)


### Bug Fixes

* 修复 server.js 找不到 chalk ([3f99144](https://github.com/dacejs/dace-plugin-redux/commit/3f99144))


### Features

* 提供 getInitialProps 以简化开发编码 ([4874ce1](https://github.com/dacejs/dace-plugin-redux/commit/4874ce1))



<a name="1.0.14"></a>
## [1.0.14](https://github.com/dacejs/dace-plugin-redux/compare/v1.0.13...v1.0.14) (2018-08-17)



<a name="1.0.13"></a>
## [1.0.13](https://github.com/dacejs/dace-plugin-redux/compare/v1.0.12...v1.0.13) (2018-08-14)


### Bug Fixes

* client fetch error ([ccc6cca](https://github.com/dacejs/dace-plugin-redux/commit/ccc6cca))



<a name="1.0.12"></a>
## [1.0.12](https://github.com/dacejs/dace-plugin-redux/compare/v1.0.11...v1.0.12) (2018-08-10)


### Bug Fixes

* 修复因 node_modules/dace-plugin-redux 存在引发的错误 ([330d91e](https://github.com/dacejs/dace-plugin-redux/commit/330d91e))
* 解决服务器端渲染中文乱码的问题 ([35d2b00](https://github.com/dacejs/dace-plugin-redux/commit/35d2b00))



<a name="1.0.11"></a>
## [1.0.11](https://github.com/dacejs/dace-plugin-redux/compare/v1.0.10...v1.0.11) (2018-08-09)



<a name="1.0.10"></a>
## [1.0.10](https://github.com/dacejs/dace-plugin-redux/compare/v1.0.9...v1.0.10) (2018-08-08)



<a name="1.0.9"></a>
## [1.0.9](https://github.com/dacejs/dace-plugin-redux/compare/v1.0.8...v1.0.9) (2018-08-08)



<a name="1.0.8"></a>
## [1.0.8](https://github.com/dacejs/dace-plugin-redux/compare/v1.0.7...v1.0.8) (2018-08-08)



<a name="1.0.7"></a>
## [1.0.7](https://github.com/dacejs/dace-plugin-redux/compare/v1.0.6...v1.0.7) (2018-08-07)



<a name="1.0.6"></a>
## [1.0.6](https://github.com/dacejs/dace-plugin-redux/compare/v1.0.1...v1.0.6) (2018-08-06)



<a name="1.0.1"></a>
## 1.0.1 (2018-08-06)
