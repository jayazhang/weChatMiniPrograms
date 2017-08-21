/**
 * Created by jayazhang on 2017-8-21.
 */

function wx () {}
/**
 *
 * @param {String} url                  （必须）开发者服务器接口地址
 * @param {String | Object} [data]      （选填）请求的参数
 * @param {Object} [header]             （选填）设置请求的 header , header 中不能设置 Referer
 * @param {String} [method]             （选填）默认为 GET，有效值：OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
 * @param {String} [dataType]           （选填）默认为 json。如果设置了 dataType 为 json，则会尝试对响应的数据做一次 JSON.parse
 * @param {function (data, statusCode, head)} [success]
 *                                       （选填）收到开发者服务成功返回的回调函数，res = {data: '开发者服务器返回的内容'}
 * @param {Function} [fail]             （选填）接口调用失败的回调函数
 * @param {Function} [complete]         （选填）接口调用结束的回调函数（调用成功、失败都会执行）
 * description https://mp.weixin.qq.com/debug/wxadoc/dev/api/network-request.html
 */
wx.prototype.request = function ({ url, data, header, method, dataType, success, fail, complete }) {}


