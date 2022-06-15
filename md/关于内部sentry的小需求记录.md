
## 背景
平台希望新增浏览日志功能，现有项目有/api/v0/logging，上报希望在此基础上低成本完成浏览日志功能

## 问题
翻看sentry源码 有个pv上报的功能（Logger.log.pv()）是否支持用户信息携带区分用户数据维度？目前日志平台只能区分到appcode项目维度

## 查阅源码
### `Logger.Sentry`

此属性指向 Sentry SDK 的入口，可调用 Sentry SDK 的各个 API。比如：

* `.captureException(error)` —— 上报 JS 运行时错误
* `.captureMessage(msg, level)` —— 上报自定义信息

``` js
#log.js
function _report(payload) {
	const host = 'hades.2345.com'
	const path = '/api/v0/logging'
	const url = '//' + host + path
	const headers = {
		'Content-Type': 'application/json',
	}
	return post(url, headers, JSON.stringify(payload))
}

log.event = (name, data) => log(name, 'event', data)
log.pv = () => log('pv', 'pv')

```

## 替代方案

- 1、用阿里云 SLS。它支持网页直接上报日志。
- 2、用 Sentry 的 captureMessage() 接口上报自定义日志，可以附带用户信息。然后用 Sentry 来接收日志并展示，但浏览和查询日志就不太方便，毕竟 Sentry 不是专门干这个的。

备注：如果项目有 SLS ，那单开一个日志桶专用来收集 PV 日志就可以了

## 解决方案 Logger.log.event
-  Logger.log.event自定义事件上报
-  弱需求低成本处理


## 随记
人员的流动和架构的调整（裁员）导致基础建设的平台及服务随之被“埋没”，例如：日志平台（指标平台），也成了半成品反之增加了项目的维护成本