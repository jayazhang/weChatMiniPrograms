/**
 * Created by jayazhang on 2017-8-21.
 */

import './page'

class wx {
  /* https://mp.weixin.qq.com/debug/wxadoc/dev/api/checkIsSoterEnrolledInDevice.html */
  static checkIsSoterEnrolledInDevice ({ checkAuthMode, success, fail, complete }) {

  }
  // https://mp.weixin.qq.com/debug/wxadoc/dev/api/getRecorderManager.html
  static getRecorderManager () {}

  // https://mp.weixin.qq.com/debug/wxadoc/dev/api/createInnerAudioContext.html
  static createInnerAudioContext () {}

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
  static request ({ url, data, header, method, dataType, success, fail, complete }) {}

  /**
   * 将本地资源上传到开发者服务器
   * @param url
   * @param filePath
   * @param name
   * @param header
   * @param formData
   * @param success
   * @param fail
   * @param complete
   * 文档地址
   * https://mp.weixin.qq.com/debug/wxadoc/dev/api/network-file.html
   */
  static uploadFile ({url, filePath, name, header, formData, success, fail, complete}) {}



  /**
   * 下载文件资源到本地
   * @param url
   * @param header
   * @param success
   * @param fail
   * @param complete
   * 文档地址
   * https://mp.weixin.qq.com/debug/wxadoc/dev/api/network-file.html#wxdownloadfileobject
   */
  static downloadFile ({url, header, success, fail, complete}) {}

  /**
   * 创建一个 WebSocket 连接
   * @param url
   * @param data
   * @param header
   * @param method
   * @param protocols
   * @param success
   * @param fail
   * @param complete
   * 文档地址
   * https://mp.weixin.qq.com/debug/wxadoc/dev/api/network-socket.html#wxconnectsocketobject
   */
  static connectSocket ({url, data, header, method, protocols, success, fail, complete}) {}

  /**
   * 监听WebSocket连接打开事件
   * @param cb
   * 文档地址
   * https://mp.weixin.qq.com/debug/wxadoc/dev/api/network-socket.html#wxonsocketopencallback
   */
  static onSocketOpen (cb) {}

  /**
   * 监听WebSocket错误。
   * @param cb
   * https://mp.weixin.qq.com/debug/wxadoc/dev/api/network-socket.html#wxclosesocket
   */
  static onSocketError (cb) {}

  /**
   * 通过 WebSocket 连接发送数据
   * @param data
   * @param success
   * @param fail
   * @param complete
   * https://mp.weixin.qq.com/debug/wxadoc/dev/api/network-socket.html#wxsendsocketmessageobject
   */
  static sendSocketMessage ({ data, success, fail, complete }) {}

  /**
   * 监听WebSocket接受到服务器的消息事件
   * @param cb
   * https://mp.weixin.qq.com/debug/wxadoc/dev/api/network-socket.html#wxonsocketmessagecallback
   */
  static onSocketMessage (cb) {}

  /**
   * 关闭WebSocket连接
   * @param code
   * @param reason
   * @param success
   * @param fail
   * @param complete
   * https://mp.weixin.qq.com/debug/wxadoc/dev/api/network-socket.html#wxclosesocket
   */
  static closeSocket ({ code, reason, success, fail, complete }) {}

  /**
   * 监听WebSocket关闭。
   * @param cb
   * https://mp.weixin.qq.com/debug/wxadoc/dev/api/network-socket.html#wxonsocketclosecallback
   */
  static onSocketClose (cb) {}

  /**
   * 从本地相册选择图片或使用相机拍照。
   * @param count
   * @param sizeType
   * @param sourceType
   * @param success
   * @param fail
   * @param complete
   * https://mp.weixin.qq.com/debug/wxadoc/dev/api/media-picture.html#wxchooseimageobject
   */
  static chooseImage ({ count, sizeType, sourceType, success, fail, complete }) {}

  /**
   * 预览图片。
   * @param current
   * @param urls
   * @param success
   * @param fail
   * @param complete
   * https://mp.weixin.qq.com/debug/wxadoc/dev/api/media-picture.html#wxpreviewimageobject
   */
  static previewImage ({ current, urls, success, fail, complete }) {}

  /**
   * 获取图片信息
   * @param src
   * @param success
   * @param fail
   * @param complete
   * https://mp.weixin.qq.com/debug/wxadoc/dev/api/media-picture.html#wxgetimageinfoobject
   */
  static getImageInfo ({ src, success, fail, complete }) {}

  /**
   * 保存图片到系统相册，需要用户授权（scope.writePhotosAlbum）
   * @param filePath
   * @param success
   * @param fail
   * @param complete
   * https://mp.weixin.qq.com/debug/wxadoc/dev/api/media-picture.html#wxsaveimagetophotosalbumobject
   */
  static saveImageToPhotosAlbum ({ filePath, success, fail, complete }) {}

  /**
   * 开始录音。当主动调用wx.stopRecord，或者录音超过1分钟时自动结束录音，返回录音文件的临时文件路径。当用户离开小程序时，此接口无法调用。
   * @param success
   * @param fail
   * @param complete
   * https://mp.weixin.qq.com/debug/wxadoc/dev/api/media-record.html#wxstartrecordobject
   */
  static startRecord ({ success, fail, complete }) {}

  /**
   * 主动调用停止录音。
   * https://mp.weixin.qq.com/debug/wxadoc/dev/api/media-record.html#wxstoprecord
   */
  static stopRecord () {}

  /**
   * 开始播放语音，同时只允许一个语音文件正在播放，如果前一个语音文件还没播放完，将中断前一个语音播放。
   * @param filePath
   * @param success
   * @param fail
   * @param complete
   * https://mp.weixin.qq.com/debug/wxadoc/dev/api/media-voice.html#wxplayvoiceobject
   */
  static playVoice ({ filePath, success, fail, complete }) {}

  /**
   * 暂停正在播放的语音。再次调用wx.playVoice播放同一个文件时，会从暂停处开始播放。如果想从头开始播放，需要先调用 wx.stopVoice。
   * https://mp.weixin.qq.com/debug/wxadoc/dev/api/media-voice.html#wxpausevoice
   */
  static pauseVoice () {}

  /**
   * 结束播放语音。
   * https://mp.weixin.qq.com/debug/wxadoc/dev/api/media-voice.html#wxstopvoice
   */
  static stopVoice () {}

  /**
   * 获取后台音乐播放状态
   * @param success
   * @param fail
   * @param complete
   * https://mp.weixin.qq.com/debug/wxadoc/dev/api/media-background-audio.html#wxgetbackgroundaudioplayerstateobject
   */
  static getBackgroundAudioPlayerState ({ success, fail, complete }) {}

  /**
   * 使用后台播放器播放音乐
   * @param dataUrl
   * @param title
   * @param coverImgUrl
   * @param success
   * @param fail
   * @param complete
   * https://mp.weixin.qq.com/debug/wxadoc/dev/api/media-background-audio.html#wxplaybackgroundaudioobject
   */
  static playBackgroundAudio ({ dataUrl, title, coverImgUrl, success, fail, complete }) {}

  /**
   * 暂停播放音乐
   * https://mp.weixin.qq.com/debug/wxadoc/dev/api/media-background-audio.html#wxpausebackgroundaudio
   */
  static pauseBackgroundAudio () {}

  /**
   * 控制音乐播放进度。
   * @param position
   * @param success
   * @param fail
   * @param complete
   * https://mp.weixin.qq.com/debug/wxadoc/dev/api/media-background-audio.html#wxseekbackgroundaudioobject
   */
  static seekBackgroundAudio ({ position, success, fail, complete }) {}

  /**
   * 停止播放音乐。
   * https://mp.weixin.qq.com/debug/wxadoc/dev/api/media-background-audio.html#wxstopbackgroundaudio
   */
  static stopBackgroundAudio () {}

  /**
   * 监听音乐播放。
   * @param cb
   * https://mp.weixin.qq.com/debug/wxadoc/dev/api/media-background-audio.html#wxonbackgroundaudioplaycallback
   */
  static onBackgroundAudioPlay (cb) {}

  /**
   * 监听音乐暂停。
   * @param cb
   * https://mp.weixin.qq.com/debug/wxadoc/dev/api/media-background-audio.html#wxonbackgroundaudiopausecallback
   */
  static onBackgroundAudioPause (cb) {}


  /**
   * 监听音乐停止。
   * @param cb
   * https://mp.weixin.qq.com/debug/wxadoc/dev/api/media-background-audio.html#wxonbackgroundaudiostopcallback
   */
  static onBackgroundAudioStop (cb) {}

  /**
   * 获取全局唯一的背景音频管理器 backgroundAudioManager
   * https://mp.weixin.qq.com/debug/wxadoc/dev/api/getBackgroundAudioManager.html
   */
  static getBackgroundAudioManager () {}

  /**
   * 创建并返回 audio 上下文 audioContext 对象
   * https://mp.weixin.qq.com/debug/wxadoc/dev/api/api-audio.html
   */
  static createAudioContext (audioId) {}

  /**
   * 拍摄视频或从手机相册中选视频，返回视频的临时文件路径。
   * @param sourceType
   * @param maxDuration
   * @param camera
   * @param success
   * @param fail
   * @param complete
   * https://mp.weixin.qq.com/debug/wxadoc/dev/api/media-video.html#wxchoosevideoobject
   */
  static chooseVideo ({ sourceType, maxDuration, camera, success, fail, complete }) {}

  /**
   * 保存视频到系统相册，需要用户授权（scope.writePhotosAlbum），详见 用户授权
   * @param filePath
   * @param success
   * @param fail
   * @param complete
   * https://mp.weixin.qq.com/debug/wxadoc/dev/api/media-video.html#wxsavevideotophotosalbumobject
   */
  static saveVideoToPhotosAlbum ({ filePath, success, fail, complete}) {}

  /**
   * 创建并返回 video 上下文 videoContext 对象
   * @param videoId
   * https://mp.weixin.qq.com/debug/wxadoc/dev/api/api-video.html#wxcreatevideocontextvideoid
   */
  static createVideoContext (videoId) {}

  /**
   * 保存文件到本地。
   * @param tempFilePath
   * @param success
   * @param fail
   * @param coomplete
   * https://mp.weixin.qq.com/debug/wxadoc/dev/api/file.html#wxsavefileobject
   */
  static saveFile ({ tempFilePath, success, fail, coomplete}) {}

  /**
   * 获取文件信息
   * @param filePath
   * @param digestAlgorithm
   * @param success
   * @param fail
   * @param complete
   * https://mp.weixin.qq.com/debug/wxadoc/dev/api/getFileInfo.html
   */
  static getFileInfo ({ filePath, digestAlgorithm, success, fail, complete }) {}

  /**
   * 获取本地已保存的文件列表
   * @param success
   * @param fail
   * @param complete
   * https://mp.weixin.qq.com/debug/wxadoc/dev/api/file.html#wxgetsavedfilelistobject
   */
  static getSavedFileList ({ success, fail, complete }) {}

  /**
   * 获取本地文件的文件信息。此接口只能用于获取已保存到本地的文件，若需要获取临时文件信息，请使用 wx.getFileInfo 接口。
   * @param filePath
   * @param success
   * @param fail
   * @param complete
   * https://mp.weixin.qq.com/debug/wxadoc/dev/api/file.html#wxgetsavedfileinfoobject
   */
  static getSavedFileInfo ({ filePath, success, fail, complete }) {}

  /**
   * 删除本地存储的文件
   * @param filePath
   * @param success
   * @param fail
   * @param complete
   * https://mp.weixin.qq.com/debug/wxadoc/dev/api/file.html#wxremovesavedfileobject
   */
  static removeSavedFile ({ filePath, success, fail, complete }) {}

  /**
   * 新开页面打开文档，支持格式：doc, xls, ppt, pdf, docx, xlsx, pptx
   * @param filePath
   * @param fileType
   * @param success
   * @param fail
   * @param complete
   * https://mp.weixin.qq.com/debug/wxadoc/dev/api/file.html#wxopendocumentobject
   */
  static openDocument ({ filePath, fileType, success, fail, complete }) {}

  /**
   * 将数据存储在本地缓存中指定的 key 中，会覆盖掉原来该 key 对应的内容，这是一个异步接口。
   * @param key
   * @param data
   * @param success
   * @param fail
   * @param complete
   * https://mp.weixin.qq.com/debug/wxadoc/dev/api/data.html#wxsetstorageobject
   */
  static setStorage ({ key, data, success, fail, complete }) {}

  /**
   * 将 data 存储在本地缓存中指定的 key 中，会覆盖掉原来该 key 对应的内容，这是一个同步接口。
   * @param key
   * @param data
   * https://mp.weixin.qq.com/debug/wxadoc/dev/api/data.html#wxsetstoragesynckeydata
   */
  static setStorageSync (key, data) {}

  /**
   * 从本地缓存中异步获取指定 key 对应的内容。
   * @param key
   * @param success
   * @param fail
   * @param complete
   * https://mp.weixin.qq.com/debug/wxadoc/dev/api/data.html#wxgetstorageobject
   */
  static getStorage ({ key, success, fail, complete }) {}

  /**
   * 从本地缓存中同步获取指定 key 对应的内容。
   * @param key
   * https://mp.weixin.qq.com/debug/wxadoc/dev/api/data.html#wxgetstoragesynckey
   */
  static getStorageSync (key) {}

  /**
   * 异步获取当前storage的相关信息
   * @param success
   * @param fail
   * @param complete
   * https://mp.weixin.qq.com/debug/wxadoc/dev/api/data.html#wxgetstorageinfoobject
   */
  static getStorageInfo ({ success, fail, complete }) {}

  /**
   * 同步获取当前storage的相关信息
   * https://mp.weixin.qq.com/debug/wxadoc/dev/api/data.html#wxgetstorageinfosync
   */
  static getStorageInfoSync () {}

  /**
   * 从本地缓存中异步移除指定 key 。
   * @param key
   * @param success
   * @param fail
   * @param complete
   * https://mp.weixin.qq.com/debug/wxadoc/dev/api/data.html#wxremovestorageobject
   */
  static removeStorage ({ key, success, fail, complete }) {}

  /**
   * 从本地缓存中同步移除指定 key 。
   * @param key
   * https://mp.weixin.qq.com/debug/wxadoc/dev/api/data.html#wxremovestoragesynckey
   */
  static removeStorageSync (key) {}

  /**
   * 清理本地数据缓存。
   * https://mp.weixin.qq.com/debug/wxadoc/dev/api/data.html#wxclearstorage
   */
  static clearStorage () {}

  /**
   * 同步清理本地数据缓存
   * https://mp.weixin.qq.com/debug/wxadoc/dev/api/data.html#wxclearstoragesync
   */
  static clearStorageSync () {}

  /**
   * 获取当前的地理位置、速度。当用户离开小程序后，此接口无法调用；当用户点击“显示在聊天顶部”时，此接口可继续调用。
   * @param type
   * @param success
   * @param fail
   * @param complete
   * https://mp.weixin.qq.com/debug/wxadoc/dev/api/location.html#wxgetlocationobject
   */
  static getLocation ({ type, success, fail, complete }) {}

  /**
   * 打开地图选择位置
   * @param success
   * @param cancel
   * @param fail
   * @param complete
   * https://mp.weixin.qq.com/debug/wxadoc/dev/api/location.html#wxchooselocationobject
   */
  static chooseLocation ({ success, cancel, fail, complete }) {}

  /**
   *  使用微信内置地图查看位置
   * @param latitude
   * @param longitude
   * @param scale
   * @param name
   * @param address
   * @param success
   * @param fail
   * @param complete
   * https://mp.weixin.qq.com/debug/wxadoc/dev/api/location.html#wxopenlocationobject
   */
  static openLocation ({ latitude, longitude, scale, name, address, success, fail, complete }) {}

  /**
   * 创建并返回 map 上下文 mapContext 对象
   * @param mapId
   * https://mp.weixin.qq.com/debug/wxadoc/dev/api/api-map.html#wxcreatemapcontextmapid
   */
  static createMapContext (mapId) {}

  /**
   * 获取系统信息。
   * @param success
   * @param fail
   * @param complete
   * https://mp.weixin.qq.com/debug/wxadoc/dev/api/systeminfo.html#wxgetsysteminfoobject
   */
  static getSystemInfo ({ success, fail, complete }) {}

  /**
   * 获取系统信息同步接口
   * https://mp.weixin.qq.com/debug/wxadoc/dev/api/systeminfo.html#wxgetsysteminfosync
   */
  static getSystemInfoSync () {}

  /**
   * 判断小程序的API，回调，参数，组件等是否在当前版本可用。
   * @param string
   * https://mp.weixin.qq.com/debug/wxadoc/dev/api/api-caniuse.html
   */
  static canIUse (string) {}

  /**
   * 获取网络类型。
   * @param success
   * @param fail
   * @param complete
   * https://mp.weixin.qq.com/debug/wxadoc/dev/api/device.html#wxgetnetworktypeobject
   */
  static getNetworkType ({ success, fail, complete }) {}

  /**
   * 监听网络状态变化
   * @param cb
   * https://mp.weixin.qq.com/debug/wxadoc/dev/api/device.html#wxonnetworkstatuschangecallback
   */
  static onNetworkStatusChange (cb) {}

  /**
   * 监听加速度数据，频率：5次/秒，接口调用后会自动开始监听，可使用 wx.stopAccelerometer 停止监听。
   * @param cb
   * https://mp.weixin.qq.com/debug/wxadoc/dev/api/accelerometer.html#wxonaccelerometerchangecallback
   */
  static onAccelerometerChange (cb) {}

  /**
   * 开始监听加速度数据
   * @param success
   * @param fail
   * @param complete
   * https://mp.weixin.qq.com/debug/wxadoc/dev/api/accelerometer.html#wxstartaccelerometerobject
   */
  static startAccelerometer ({ success, fail, complete }) {}

  /**
   * 停止监听加速度数据。
   * @param success
   * @param fail
   * @param complete
   * https://mp.weixin.qq.com/debug/wxadoc/dev/api/accelerometer.html#wxstopaccelerometerobject
   */
  static stopAccelerometer ({ success, fail, complete }) {}

  /**
   * 监听罗盘数据，频率：5次/秒，接口调用后会自动开始监听，可使用wx.stopCompass停止监听。
   * @param cb
   * https://mp.weixin.qq.com/debug/wxadoc/dev/api/compass.html#wxoncompasschangecallback
   */
  static onCompassChange (cb) {}

  /**
   * 开始监听罗盘数据。
   * @param success
   * @param fail
   * @param complete
   * https://mp.weixin.qq.com/debug/wxadoc/dev/api/compass.html#wxstartcompassobject
   */
  static startCompass ({ success, fail, complete }) {}

  /**
   * 停止监听罗盘数据。
   * @param success
   * @param fail
   * @param complete
   * https://mp.weixin.qq.com/debug/wxadoc/dev/api/compass.html#wxstopcompassobject
   */
  static stopCompass ({ success, fail, complete }) {}

  /**
   * 打电话
   * @param phoneNumber
   * @param success
   * @param fail
   * @param complete
   * https://mp.weixin.qq.com/debug/wxadoc/dev/api/phonecall.html#wxmakephonecallobject
   */
  static makePhoneCall ({ phoneNumber, success, fail, complete }) {}

  /**
   * 调起客户端扫码界面，扫码成功后返回对应的结果
   * @param onlyFromCamera
   * @param success
   * @param fail
   * @param complete
   * https://mp.weixin.qq.com/debug/wxadoc/dev/api/scancode.html#wxscancodeobject
   */
  static scanCode ({ onlyFromCamera, success, fail, complete }) {}

  /**
   * 设置系统剪贴板的内容
   * @param data
   * @param success
   * @param fail
   * @param complete
   * https://mp.weixin.qq.com/debug/wxadoc/dev/api/clipboard.html#wxsetclipboarddataobject
   */
  static setClipboardData ({ data, success, fail, complete }) {}

  /**
   * 获取系统剪贴板内容
   * @param success
   * @param fail
   * @param complete
   * https://mp.weixin.qq.com/debug/wxadoc/dev/api/clipboard.html#wxgetclipboarddataobject
   */
  static getClipboardData ({ success, fail, complete }) {}

  /**
   * 初始化蓝牙适配器
   * @param success
   * @param fail
   * @param complete
   * https://mp.weixin.qq.com/debug/wxadoc/dev/api/bluetooth.html#wxopenbluetoothadapterobject
   */
  static openBluetoothAdapter ({ success, fail, complete }) {}

  /**
   * 关闭蓝牙模块。调用该方法将断开所有已建立的链接并释放系统资源
   * @param success
   * @param fail
   * @param complete
   * https://mp.weixin.qq.com/debug/wxadoc/dev/api/bluetooth.html#wxclosebluetoothadapterobject
   */
  static closeBluetoothAdapter ({ success, fail, complete }) {}

  /**
   * 获取本机蓝牙适配器状态
   * @param success
   * @param fail
   * @param complete
   * https://mp.weixin.qq.com/debug/wxadoc/dev/api/bluetooth.html#wxgetbluetoothadapterstateobject
   */
  static getBluetoothAdapterState ({ success, fail, complete }) {}

  /**
   * 监听蓝牙适配器状态变化事件
   * @param cb
   * https://mp.weixin.qq.com/debug/wxadoc/dev/api/bluetooth.html#wxonbluetoothadapterstatechangecallback
   */
  static onBluetoothAdapterStateChange (cb) {}

  /**
   * 开始搜寻附近的蓝牙外围设备。注意，该操作比较耗费系统资源，请在搜索并连接到设备后调用 stop 方法停止搜索。
   * @param services
   * @param allowDuplicatesKey
   * @param interval
   * @param success
   * @param fail
   * @param complete
   * https://mp.weixin.qq.com/debug/wxadoc/dev/api/bluetooth.html#wxstartbluetoothdevicesdiscoveryobject
   */
  static startBluetoothDevicesDiscovery ({services, allowDuplicatesKey, interval, success, fail, complete}) {}

  /**
   * 停止搜寻附近的蓝牙外围设备。请在确保找到需要连接的设备后调用该方法停止搜索。
   * @param object
   * @param fail
   * @param complete
   * https://mp.weixin.qq.com/debug/wxadoc/dev/api/bluetooth.html#wxstopbluetoothdevicesdiscoveryobject
   */
  static stopBluetoothDevicesDiscovery ({ object, fail, complete}) {}

  /**
   * 获取所有已发现的蓝牙设备，包括已经和本机处于连接状态的设备
   * @param object
   * @param fail
   * @param complete
   * https://mp.weixin.qq.com/debug/wxadoc/dev/api/bluetooth.html#wxgetbluetoothdevicesobject
   */
  static getBluetoothDevices ({ object, fail, complete }) {}

  /**
   * 根据 uuid 获取处于已连接状态的设备
   * @param services
   * @param success
   * @param fail
   * @param complete
   * https://mp.weixin.qq.com/debug/wxadoc/dev/api/bluetooth.html#wxonbluetoothdevicefoundcallback
   */
  static getConnectedBluetoothDevices ({services, success, fail, complete}) {}


  /**
   * 连接低功耗蓝牙设备
   * @param deviceId
   * @param success
   * @param fail
   * @param complete
   * https://mp.weixin.qq.com/debug/wxadoc/dev/api/bluetooth.html#wxcreatebleconnectionobject
   */
  static createBLEConnection ({ deviceId, success, fail, complete }) {}

  /**
   * 断开与低功耗蓝牙设备的连接
   * @param deviceId
   * @param success
   * @param fail
   * @param complete
   * https://mp.weixin.qq.com/debug/wxadoc/dev/api/bluetooth.html#wxclosebleconnectionobject
   */
  static closeBLEConnection ({ deviceId, success, fail, complete }) {}

  /**
   * 获取蓝牙设备所有 service（服务）
   * @param deviceId
   * @param success
   * @param fail
   * @param complete
   * https://mp.weixin.qq.com/debug/wxadoc/dev/api/bluetooth.html#wxgetbledeviceservicesobject
   */
  static getBLEDeviceServices ({ deviceId, success, fail, complete }) {}

  /**
   * 获取蓝牙设备所有 characteristic（特征值）
   * @param deviceId
   * @param serviceId
   * @param success
   * @param fail
   * @param complete
   * https://mp.weixin.qq.com/debug/wxadoc/dev/api/bluetooth.html#wxgetbledevicecharacteristicsobject
   */
  static getBLEDeviceCharacteristics ({ deviceId, serviceId, success, fail, complete }) {}

  /**
   * 读取低功耗蓝牙设备的特征值的二进制数据值。注意：必须设备的特征值支持read才可以成功调用，具体参照 characteristic 的 properties 属性
   * @param deviceId
   * @param serviceId
   * @param characteristicId
   * @param success
   * @param fail
   * @param complete
   * https://mp.weixin.qq.com/debug/wxadoc/dev/api/bluetooth.html#wxreadblecharacteristicvalueobject
   */
  static readBLECharacteristicValue ({ deviceId, serviceId, characteristicId, success, fail, complete }) {}

  /**
   * 向低功耗蓝牙设备特征值中写入二进制数据。注意：必须设备的特征值支持write才可以成功调用，具体参照 characteristic 的 properties 属性
   * tips: 并行调用多次读写接口存在读写失败的可能性
   * @param deviceId
   * @param serviceId
   * @param characteristicId
   * @param value
   * @param success
   * @param fail
   * @param complete
   * https://mp.weixin.qq.com/debug/wxadoc/dev/api/bluetooth.html#wxwriteblecharacteristicvalueobject
   */
  static writeBLECharacteristicValue ({ deviceId, serviceId, characteristicId, value, success, fail, complete }) {}

  /**
   * 启用低功耗蓝牙设备特征值变化时的 notify 功能。注意：必须设备的特征值支持notify才可以成功调用，具体参照 characteristic 的 properties 属性
   * 另外，必须先启用notify才能监听到设备 characteristicValueChange 事件
   * @param deviceId
   * @param serviceId
   * @param characteristicId
   * @param state
   * @param success
   * @param fail
   * @param complete
   * https://mp.weixin.qq.com/debug/wxadoc/dev/api/bluetooth.html#wxnotifyblecharacteristicvaluechangeobject
   */
  static notifyBLECharacteristicValueChange ({ deviceId, serviceId, characteristicId, state, success, fail, complete }) {}

  /**
   * 监听低功耗蓝牙连接的错误事件，包括设备丢失，连接异常断开等等。
   * @param cb
   * https://mp.weixin.qq.com/debug/wxadoc/dev/api/bluetooth.html#wxonbleconnectionstatechangecallback
   */
  static onBLEConnectionStateChange (cb) {}


  /**
   * 监听低功耗蓝牙设备的特征值变化。
   * @param cb
   * https://mp.weixin.qq.com/debug/wxadoc/dev/api/bluetooth.html#wxonblecharacteristicvaluechangecallback
   */
  static onBLECharacteristicValueChange (cb) {}

  /**
   * 开始搜索附近的iBeacon设备
   * @param uuids
   * @param success
   * @param fail
   * @param complete
   * https://mp.weixin.qq.com/debug/wxadoc/dev/api/iBeacon.html#wxstartbeacondiscoveryobject
   */
  static startBeaconDiscovery ({ uuids, success, fail, complete }) {}


  /**
   * 停止搜索附近的iBeacon设备
   * @param success
   * @param fail
   * @param complete
   * https://mp.weixin.qq.com/debug/wxadoc/dev/api/iBeacon.html#wxstopbeacondiscoveryobject
   */
  static stopBeaconDiscovery ({ success, fail, complete }) {}

  /**
   * 获取所有已搜索到的iBeacon设备
   * @param success
   * @param fail
   * @param complete
   * https://mp.weixin.qq.com/debug/wxadoc/dev/api/iBeacon.html#wxgetbeaconsobject
   */
  static getBeacons ({ success, fail, complete }) {}

  /**
   * 监听 iBeacon 设备的更新事件
   * @param cb
   * https://mp.weixin.qq.com/debug/wxadoc/dev/api/iBeacon.html#wxonbeaconupdatecallback
   */
  static onBeaconUpdate (cb) {}

  /**
   * 监听 iBeacon 服务的状态变化
   * @param cb
   * https://mp.weixin.qq.com/debug/wxadoc/dev/api/iBeacon.html#wxonbeaconservicechangecallback
   */
  static onBeaconServiceChange (cb) {}

  /**
   * 设置屏幕亮度。
   * @param value
   * @param success
   * @param fail
   * @param complete
   * https://mp.weixin.qq.com/debug/wxadoc/dev/api/device.html#wxsetscreenbrightnessobject
   */
  static setScreenBrightness ({ value, success, fail, complete }) {}

  /**
   * 获取屏幕亮度。
   * @param success
   * @param fail
   * @param complete
   * https://mp.weixin.qq.com/debug/wxadoc/dev/api/device.html#wxgetscreenbrightnessobject
   */
  static getScreenBrightness ({ success, fail, complete }) {}

  /**
   * 设置是否保持常亮状态。仅在当前小程序生效，离开小程序后设置失效。
   * @param keepScreenOn
   * @param success
   * @param fail
   * @param complete
   * https://mp.weixin.qq.com/debug/wxadoc/dev/api/setKeepScreenOn.html
   */
  static setKeepScreenOn ({keepScreenOn, success, fail, complete}) {}

  /**
   * 监听用户主动截屏事件，用户使用系统截屏按键截屏时触发此事件
   * @param cb
   * https://mp.weixin.qq.com/debug/wxadoc/dev/api/onUserCaptureScreen.html
   */
  static onUserCaptureScreen (cb) {}

  /**
   * 使手机发生较长时间的振动（400ms）
   * @param success
   * @param fail
   * @param complete
   * https://mp.weixin.qq.com/debug/wxadoc/dev/api/device.html#wxvibratelongobject
   */
  static vibrateLong ({success, fail, complete}) {}

  /**
   * 使手机发生较短时间的振动（15ms）
   * @param success
   * @param fail
   * @param complete
   * https://mp.weixin.qq.com/debug/wxadoc/dev/api/device.html#wxvibrateshortobject
   */
  static vibrateShort ({success, fail, complete}) {}

  /**
   * 调用后，用户可以选择将该表单以“新增联系人”或“添加到已有联系人”的方式，写入手机系统通讯录，完成手机通讯录联系人和联系方式的增加。
   * @param photoFilePath
   * @param nickName
   * @param lastName
   * @param middleName
   * @param firstName
   * @param remark
   * @param mobilePhoneNumber
   * @param weChatNumber
   * @param addressCountry
   * @param addressState
   * @param addressCity
   * @param addressStreet
   * @param addressPostalCode
   * @param organization
   * @param title
   * @param workFaxNumber
   * @param hostNumber
   * @param email
   * @param url
   * @param workAddressCountry
   * @param workAddressState
   * @param workAddressCity
   * @param workAddressStreet
   * @param workAddressPostalCode
   * @param homeFaxNumber
   * @param homePhoneNumber
   * @param homeAddressCountry
   * @param homeAddressState
   * @param homeAddressCity
   * @param homeAddressStreet
   * @param homeAddressPostalCode
   * @param success
   * @param fail
   * @param complete
   * https://mp.weixin.qq.com/debug/wxadoc/dev/api/phone-contact.html#wxaddphonecontactobject
   */
  static addPhoneContact ({ photoFilePath, nickName, lastName, middleName, firstName, remark, mobilePhoneNumber, weChatNumber, addressCountry, addressState, addressCity, addressStreet, addressPostalCode, organization, title, workFaxNumber, hostNumber,email, url, workAddressCountry, workAddressState, workAddressCity, workAddressStreet, workAddressPostalCode, homeFaxNumber, homePhoneNumber, homeAddressCountry, homeAddressState, homeAddressCity, homeAddressStreet, homeAddressPostalCode, success, fail, complete }) {}

  /**
   * 显示消息提示框
   * @param title
   * @param icon
   * @param image
   * @param duration
   * @param mask
   * @param success
   * @param fail
   * @param complete
   * https://mp.weixin.qq.com/debug/wxadoc/dev/api/api-react.html#wxshowtoastobject
   */
  static showToast ({ title, icon, image, duration, mask, success, fail, complete }) {}

  /**
   * 显示 loading 提示框, 需主动调用 wx.hideLoading 才能关闭提示框
   * @param title
   * @param mask
   * @param success
   * @param fail
   * @param complete
   * https://mp.weixin.qq.com/debug/wxadoc/dev/api/api-react.html#wxshowloadingobject
   */
  static showLoading ({title, mask, success, fail, complete}) {}

  /**
   * 隐藏消息提示框
   * https://mp.weixin.qq.com/debug/wxadoc/dev/api/api-react.html#wxhidetoast
   */
  static hideToast () {}

  /**
   * 隐藏 loading 提示框
   * https://mp.weixin.qq.com/debug/wxadoc/dev/api/api-react.html#wxhideloading
   */
  static hideLoading () {}

  /**
   * 显示模态弹窗
   * @param title
   * @param content
   * @param showCancel
   * @param cancelText
   * @param cancelColor
   * @param confirmText
   * @param confirmColor
   * @param success
   * @param fail
   * @param complete
   * https://mp.weixin.qq.com/debug/wxadoc/dev/api/api-react.html#wxshowmodalobject
   */
  static showModal ({ title, content, showCancel, cancelText, cancelColor, confirmText, confirmColor, success, fail, complete }) {}

  /**
   * ​显示操作菜单
   * @param itemList
   * @param itemColor
   * @param success
   * @param fail
   * @param complete
   * https://mp.weixin.qq.com/debug/wxadoc/dev/api/api-react.html#wxshowactionsheetobject
   */
  static showActionSheet ({ itemList, itemColor, success, fail, complete }) {}

  /**
   * 动态设置当前页面的标题。
   * @param title
   * @param success
   * @param fail
   * @param complete
   * https://mp.weixin.qq.com/debug/wxadoc/dev/api/ui.html#wxsettopbartextobject
   */
  static setNavigationBarTitle ({ title, success, fail, complete }) {}

  /**
   * 在当前页面显示导航条加载动画。
   */
  static showNavigationBarLoading () {}

  /**
   *隐藏导航条加载动画。
   */
  static hideNavigationBarLoading () {}

  /**
   * 设置导航条颜色变化
   * @param frontColor
   * @param backgroundColor
   * @param animation
   * @param duration
   * @param timingFunc
   * @param success
   * @param fail
   * @param compete
   * https://mp.weixin.qq.com/debug/wxadoc/dev/api/setNavigationBarColor.html
   */
  static setNavigationBarColor ({ frontColor, backgroundColor, animation, duration, timingFunc, success, fail, compete}) {}

  /**
   * 动态设置置顶栏文字内容，只有当前小程序被置顶时能生效，如果当前小程序没有被置顶，也能调用成功，但是不会立即生效，只有在用户将这个小程序置顶后才换上设置的文字内容。注意：调用成功后，需间隔 5s 才能再次调用此接口，如果在 5s 内再次调用此接口，会回调 fail，errMsg："setTopBarText: fail invoke too frequently"
   * @param text
   * @param success
   * @param fail
   * @param complete
   * https://mp.weixin.qq.com/debug/wxadoc/dev/api/ui.html#wxsettopbartextobject
   */
  static setTopBarText ({ text, success, fail, complete}) {}

  /**
   * 保留当前页面，跳转到应用内的某个页面，使用wx.navigateBack可以返回到原页面。
   * @param url
   * @param success
   * @param fail
   * @param complete
   * https://mp.weixin.qq.com/debug/wxadoc/dev/api/ui-navigate.html#wxnavigatetoobject
   */
  static navigateTo ({ url, success, fail, complete }) {}

  /**
   * 关闭当前页面，跳转到应用内的某个页面。
   * @param url
   * @param success
   * @param fail
   * @param complete
   * https://mp.weixin.qq.com/debug/wxadoc/dev/api/ui-navigate.html#wxredirecttoobject
   */
  static redirectTo ({ url, success, fail, complete}) {}

  /**
   * 跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面
   * @param url
   * @param success
   * @param fail
   * @param complete
   * https://mp.weixin.qq.com/debug/wxadoc/dev/api/ui-navigate.html#wxrelaunchobject
   */
  static switchTab ({ url, success, fail, complete }) {}

  /**
   * 关闭当前页面，返回上一页面或多级页面。可通过 getCurrentPages()) 获取当前的页面栈，决定需要返回几层。
   * @param delta
   * https://mp.weixin.qq.com/debug/wxadoc/dev/api/ui-navigate.html#wxrelaunchobject
   */
  static navigateBack ({ delta }) {}

  /**
   * 关闭所有页面，打开到应用内的某个页面。
   * @param url
   * @param success
   * @param fail
   * @param complete
   * https://mp.weixin.qq.com/debug/wxadoc/dev/api/ui-navigate.html#wxrelaunchobject
   */
  static reLaunch ({ url, success, fail, complete }) {}

  /**
   * 创建一个动画实例animation。调用实例的方法来描述动画
   * @param duration
   * @param timingFunction
   * @param delay
   * @param transformOrigin
   * https://mp.weixin.qq.com/debug/wxadoc/dev/api/api-animation.html#wxcreateanimationobject
   */
  static createAnimation ({ duration, timingFunction, delay, transformOrigin }) {}

  /**
   * 将页面滚动到目标位置。
   * @param scrollTop
   * https://mp.weixin.qq.com/debug/wxadoc/dev/api/scroll.html
   */
  static pageScrollTo ({ scrollTop }) {}

  /**
   * 返回一个SelectorQuery对象实例。可以在这个实例上使用select等方法选择节点，并使用boundingClientRect等方法选择需要查询的信息。
   * https://mp.weixin.qq.com/debug/wxadoc/dev/api/wxml-nodes-info.html
   */
  static createSelectorQuery () {}

  /**
   * 创建wx 的canvas
   * @param canvasId
   * https://mp.weixin.qq.com/debug/wxadoc/dev/api/canvas/intro.html
   */
  static createCanvasContext (canvasId) {}

  /**
   * 不推荐使用
   */
  static createContext () {}

  /**
   * 不推荐使用
   */
  static drawCanvas () {}

  /**
   * 把当前画布指定区域的内容导出生成指定大小的图片，并返回文件路径。
   * @param x
   * @param y
   * @param width
   * @param height
   * @param destWidth
   * @param destHeight
   * @param canvasId
   * @param success
   * @param fail
   * @param complete
   * https://mp.weixin.qq.com/debug/wxadoc/dev/api/canvas/temp-file.html
   */
  static canvasToTempFilePath ({ x, y, width, height, destWidth, destHeight, canvasId, success, fail, complete}) {}

  /**
   * 开始下拉刷新，调用后触发下拉刷新动画，效果与用户手动下拉刷新一致
   * @param success
   * @param fail
   * @param complete
   * https://mp.weixin.qq.com/debug/wxadoc/dev/api/pulldown.html#wxstartpulldownrefresh
   */
  static startPullDownRefresh ({success, fail, complete}) {}

  /**
   * 停止当前页面下拉刷新。
   * https://mp.weixin.qq.com/debug/wxadoc/dev/api/pulldown.html#wxstoppulldownrefresh
   */
  static stopPullDownRefresh () {}

  /**
   * 获取第三方平台自定义的数据字段。
   * @param success
   * @param fail
   * @param complete
   * https://mp.weixin.qq.com/debug/wxadoc/dev/api/ext-api.html#wxgetextconfigobject
   */
  static getExtConfig ({success, fail, complete}) {}

  /**
   * 获取第三方平台自定义的数据字段的同步接口。
   * https://mp.weixin.qq.com/debug/wxadoc/dev/api/ext-api.html#wxgetextconfigsync
   */
  static getExtConfigSync () {}

  /**
   * 调用接口获取登录凭证（code）进而换取用户登录态信息，
   * 包括用户的唯一标识（openid） 及本次登录的 会话密钥（session_key）。
   * 用户数据的加解密通讯需要依赖会话密钥完成。
   * @param success
   * @param fail
   * @param complete
   * https://mp.weixin.qq.com/debug/wxadoc/dev/api/api-login.html#wxloginobject
   */
  static login ({ success, fail, complete }) {}

  /**
   * 通过上述接口获得的用户登录态拥有一定的时效性。
   * 用户越久未使用小程序，用户登录态越有可能失效。
   * 反之如果用户一直在使用小程序，则用户登录态一直保持有效。
   * 具体时效逻辑由微信维护，对开发者透明。
   * 开发者只需要调用wx.checkSession接口检测当前用户登录态是否有效。
   * 登录态过期后开发者可以再调用wx.login获取新的用户登录态。
   * @param success
   * @param fail
   * @param complete
   */
  static checkSession ({ success, fail, complete }) {}

  /**
   * 部分接口需要获得同意后才能调用。
   * 此类接口调用时，如果用户未授权过，
   * 会弹窗询问用户，用户点击同意后方可调用接口。
   * 如果用户点了拒绝，则短期内调用不会出现弹窗，
   * 而是直接进入 fail 回调。用户可以在小程序设置界面中修改对该小程序的授权信息。
   * 本接口用于提前向用户发起授权，
   * 调用后会立刻弹窗询问用户是否同意小程序使用某项功能或获取用户的某些数据，
   * 但不会实际调用接口。如果用户之前已经同意，则不会出现弹窗，直接返回成功。
   * @param scope
   * @param success
   * @param fail
   * @param complete
   * https://mp.weixin.qq.com/debug/wxadoc/dev/api/authorize.html#wxauthorizeobject
   */
  static authorize ({scope, success, fail, complete}) {}

  /**
   * 获取用户信息，withCredentials 为 true 时需要先调用 wx.login 接口。
   * @param withCredentials
   * @param lang
   * @param success
   * @param fail
   * @param complete
   * https://mp.weixin.qq.com/debug/wxadoc/dev/api/open.html#wxgetuserinfoobject
   */
  static getUserInfo ({ withCredentials, lang, success, fail, complete }) {}

  /**
   * 发起微信支付。
   * @param timeStamp
   * @param nonceStr
   * @param package1
   * @param signType
   * @param paySign
   * @param success
   * @param fail
   * @param complete
   * https://mp.weixin.qq.com/debug/wxadoc/dev/api/api-pay.html#wxrequestpaymentobject
   */
  static requestPayment ({ timeStamp, nonceStr, package1, signType, paySign, success, fail, complete }) {}

  /**
   * 显示当前页面的转发按钮
   * @param withShareTicket
   * @param success
   * @param fail
   * @param compete
   * https://mp.weixin.qq.com/debug/wxadoc/dev/api/share.html#wxshowsharemenuobject
   */
  static showShareMenu ({ withShareTicket, success, fail, compete }) {}

  /**
   * 隐藏转发按钮
   * @param success
   * @param fail
   * @param complete
   * https://mp.weixin.qq.com/debug/wxadoc/dev/api/share.html#wxhidesharemenuobject
   */
  static hideShareMenu ({ success, fail, complete }) {}

  /**
   * 更新转发属性
   * @param withShareTicket
   * @param success
   * @param fail
   * @param complete
   * https://mp.weixin.qq.com/debug/wxadoc/dev/api/share.html#wxupdatesharemenuobject
   */
  static updateShareMenu ({ withShareTicket, success, fail, complete }) {}

  /**
   * 获取转发详细信息
   * @param shareTicket
   * @param success
   * @param fail
   * @param complete
   * https://mp.weixin.qq.com/debug/wxadoc/dev/api/share.html#wxgetshareinfoobject
   */
  static getShareInfo ({ shareTicket, success, fail, complete }) {}

  /**
   * 调起用户编辑收货地址原生界面，并在编辑完成后返回用户选择的地址。
   * @param success
   * @param fail
   * @param complete
   * https://mp.weixin.qq.com/debug/wxadoc/dev/api/address.html#wxchooseaddressobject
   */
  static chooseAddress ({ success, fail, complete }) {}

  /**
   * 批量添加卡券。
   * @param cardList
   * @param success
   * @param fail
   * @param complete
   * https://mp.weixin.qq.com/debug/wxadoc/dev/api/card.html#wxaddcardobject
   */
  static addCard ({ cardList, success, fail, complete }) {}

  /**
   * 查看微信卡包中的卡券。
   * @param cardList
   * @param success
   * @param fail
   * @param complete
   * https://mp.weixin.qq.com/debug/wxadoc/dev/api/card.html#wxopencardobject
   */
  static openCard ({ cardList, success, fail, complete}) {}

  /**
   * 调起客户端小程序设置界面，返回用户设置的操作结果
   * @param success
   * @param fail
   * @param complete
   * https://mp.weixin.qq.com/debug/wxadoc/dev/api/setting.html#wxopensettingobject
   */
  static openSetting ({success, fail, complete}) {}

  /**
   * 获取用户的当前设置
   * @param success
   * @param fail
   * @param complete
   * https://mp.weixin.qq.com/debug/wxadoc/dev/api/setting.html#wxgetsettingobject
   */
  static getSetting ({success, fail, complete}) {}

  /**
   * 获取用户过去三十天微信运动步数，需要先调用 wx.login 接口。
   * @param success
   * @param fail
   * @param complete
   * https://mp.weixin.qq.com/debug/wxadoc/dev/api/we-run.html#wxgetwerundataobject
   */
  static getWeRunData ({success, fail, complete}) {}

  /**
   * 打开同一公众号下关联的另一个小程序。
   * @param appId
   * @param path
   * @param extraData
   * @param envVersion
   * @param success
   * @param fail
   * @param complete
   * https://mp.weixin.qq.com/debug/wxadoc/dev/api/navigateToMiniProgram.html
   */
  static navigateToMiniProgram ({ appId, path, extraData, envVersion, success, fail, complete }) {}

  /**
   * 返回到上一个小程序，只有在当前小程序是被其他小程序打开时可以调用成功
   * @param extraData
   * @param success
   * @param fail
   * @param complete
   * https://mp.weixin.qq.com/debug/wxadoc/dev/api/navigateBackMiniProgram.html
   */
  static navigateBackMiniProgram ({ extraData, success, fail, complete }) {}

  /**
   * 选择用户的发票抬头
   * @param success
   * @param fail
   * @param complete
   * https://mp.weixin.qq.com/debug/wxadoc/dev/api/chooseInvoiceTitle.html
   */
  static chooseInvoiceTitle ({success, fail, complete}) {}


  /**
   * 获取本机支持的 SOTER 生物认证方式
   * @param success
   * @param fail
   * @param compete
   * https://mp.weixin.qq.com/debug/wxadoc/dev/api/checkIsSupportSoterAuthentication.html
   */
  static checkIsSupportSoterAuthentication ({ success, fail, compete }) {}

  /**
   * 开始 SOTER 生物认证
   * @param requestAuthModes
   * @param challenge
   * @param authContent
   * @param success
   * @param fail
   * @param complete
   */
  static startSoterAuthentication ({requestAuthModes, challenge, authContent, success, fail, complete}) {}

  /**
   * 将 ArrayBuffer 数据转成 Base64 字符串
   * @param arrayBuffer
   * https://mp.weixin.qq.com/debug/wxadoc/dev/api/api-util.html#wxarraybuffertobase64arraybuffer
   */
  static arrayBufferToBase64 (arrayBuffer) {}

  /**
   * 将 Base64 字符串转成 ArrayBuffer 数据
   * @param base64
   * https://mp.weixin.qq.com/debug/wxadoc/dev/api/api-util.html#wxarraybuffertobase64arraybuffer
   */
  static base64ToArrayBuffer (base64) {}
  
  /**
   * 自定义分析数据上报接口。使用前，需要在小程序管理后台自定义分析中新建事件，配置好事件名与字段。
   * @param eventName 事件名
   * @param data 上报的自定义数据。key为配置中的字段名，value为上报的数据
   */
  static reportAnalytics (eventName, data) {}
}

