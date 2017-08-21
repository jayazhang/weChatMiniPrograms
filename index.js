/**
 * Created by jayazhang on 2017-8-21.
 */
/**
 *
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
 * description
 * data 数据说明
 * 最终发送给服务器的数据是 String 类型，如果传入的 data 不是 String 类型，会被转换成 String 。转换规则如下：
 * 对于 header['content-type'] 为 'application/json' 的数据，会对数据进行 JSON 序列化
 * 对于 header['content-type'] 为 'application/x-www-form-urlencoded' 的数据，会将数据转换成 query string
 * （encodeURIComponent(k)=encodeURIComponent(v)&encodeURIComponent(k)=encodeURIComponent(v)...）
 * 示例代码：
 * wx.request({
  url: 'test.php', //仅为示例，并非真实的接口地址
  data: {
     x: '' ,
     y: ''
  },
  header: {
      'content-type': 'application/json'
  },
  success: function(res) {
    console.log(res.data)
  }

tip: content-type 默认为 'application/json'
bug: 开发者工具 0.10.102800 版本，header 的 content-type 设置异常；
tip: 客户端的 HTTPS TLS 版本为1.2，但 Android 的部分机型还未支持 TLS 1.2，所以请确保 HTTPS 服务器的 TLS 版本支持1.2及以下版本；
tip: 要注意 method 的 value 必须为大写（例如：GET）；
tip: url 中不能有端口；
tip: request 的默认超时时间和最大超时时间都是 60s
tip: request 的最大并发数是 10
tip: 网络请求的 referer 是不可以设置的，格式固定为 https://servicewechat.com/{appid}/{version}/page-frame.html，其中 {appid} 为小程序的 appid，{version} 为小程序的版本号，版本号为 0 表示为开发版。
})
 */
wx.prototype.request = function ({ url, data, header, method, dataType, success, fail, complete }) {}


