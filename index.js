/**
 * Created by jayazhang on 2017-8-21.
 */

import './page'

class wx {}
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
wx.prototype.uploadFile = function ({url, filePath, name, header, formData, success, fail, complete}) {}

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
wx.prototype.downloadFile = function ({url, header, success, fail, complete}) {}

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
wx.prototype.connectSocket = function ({url, data, header, method, protocols, success, fail, complete}) {}

/**
 * 监听WebSocket连接打开事件
 * @param cb
 * 文档地址
 * https://mp.weixin.qq.com/debug/wxadoc/dev/api/network-socket.html#wxonsocketopencallback
 */
wx.prototype.onSocketOpen = function (cb) {}

/**
 * 监听WebSocket错误。
 * @param cb
 * https://mp.weixin.qq.com/debug/wxadoc/dev/api/network-socket.html#wxclosesocket
 */
wx.prototype.onSocketError = function (cb) {}

/**
 * 通过 WebSocket 连接发送数据
 * @param data
 * @param success
 * @param fail
 * @param complete
 * https://mp.weixin.qq.com/debug/wxadoc/dev/api/network-socket.html#wxsendsocketmessageobject
 */
wx.prototype.sendSocketMessage = function ({ data, success, fail, complete }) {}

/**
 * 监听WebSocket接受到服务器的消息事件
 * @param cb
 * https://mp.weixin.qq.com/debug/wxadoc/dev/api/network-socket.html#wxonsocketmessagecallback
 */
wx.prototype.onSocketMessage = function (cb) {}

/**
 * 关闭WebSocket连接
 * @param code
 * @param reason
 * @param success
 * @param fail
 * @param complete
 * https://mp.weixin.qq.com/debug/wxadoc/dev/api/network-socket.html#wxclosesocket
 */
wx.prototype.closeSocket = function ({ code, reason, success, fail, complete }) {}

/**
 * 监听WebSocket关闭。
 * @param cb
 * https://mp.weixin.qq.com/debug/wxadoc/dev/api/network-socket.html#wxonsocketclosecallback
 */
wx.prototype.onSocketClose = function (cb) {}

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
wx.prototype.chooseImage = function ({ count, sizeType, sourceType, success, fail, complete }) {}

/**
 * 预览图片。
 * @param current
 * @param urls
 * @param success
 * @param fail
 * @param complete
 * https://mp.weixin.qq.com/debug/wxadoc/dev/api/media-picture.html#wxpreviewimageobject
 */
wx.prototype.previewImage = function ({ current, urls, success, fail, complete }) {}

/**
 * 获取图片信息
 * @param src
 * @param success
 * @param fail
 * @param complete
 * https://mp.weixin.qq.com/debug/wxadoc/dev/api/media-picture.html#wxgetimageinfoobject
 */
wx.prototype.getImageInfo = function ({ src, success, fail, complete }) {}

/**
 * 保存图片到系统相册，需要用户授权（scope.writePhotosAlbum）
 * @param filePath
 * @param success
 * @param fail
 * @param complete
 * https://mp.weixin.qq.com/debug/wxadoc/dev/api/media-picture.html#wxsaveimagetophotosalbumobject
 */
wx.prototype.saveImageToPhotosAlbum = function ({ filePath, success, fail, complete }) {}

/**
 * 开始录音。当主动调用wx.stopRecord，或者录音超过1分钟时自动结束录音，返回录音文件的临时文件路径。当用户离开小程序时，此接口无法调用。
 * @param success
 * @param fail
 * @param complete
 * https://mp.weixin.qq.com/debug/wxadoc/dev/api/media-record.html#wxstartrecordobject
 */
wx.prototype.startRecord = function ({ success, fail, complete }) {}

/**
 * 主动调用停止录音。
 * https://mp.weixin.qq.com/debug/wxadoc/dev/api/media-record.html#wxstoprecord
 */
wx.prototype.stopRecord = function () {}

/**
 * 开始播放语音，同时只允许一个语音文件正在播放，如果前一个语音文件还没播放完，将中断前一个语音播放。
 * @param filePath
 * @param success
 * @param fail
 * @param complete
 * https://mp.weixin.qq.com/debug/wxadoc/dev/api/media-voice.html#wxplayvoiceobject
 */
wx.prototype.playVoice = function ({ filePath, success, fail, complete }) {}

/**
 * 暂停正在播放的语音。再次调用wx.playVoice播放同一个文件时，会从暂停处开始播放。如果想从头开始播放，需要先调用 wx.stopVoice。
 * https://mp.weixin.qq.com/debug/wxadoc/dev/api/media-voice.html#wxpausevoice
 */
wx.prototype.pauseVoice = function () {}

/**
 * 结束播放语音。
 * https://mp.weixin.qq.com/debug/wxadoc/dev/api/media-voice.html#wxstopvoice
 */
wx.prototype.stopVoice = function () {}

/**
 * 获取后台音乐播放状态
 * @param success
 * @param fail
 * @param complete
 * https://mp.weixin.qq.com/debug/wxadoc/dev/api/media-background-audio.html#wxgetbackgroundaudioplayerstateobject
 */
wx.prototype.getBackgroundAudioPlayerState = function ({ success, fail, complete }) {}

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
wx.prototype.playBackgroundAudio = function ({ dataUrl, title, coverImgUrl, success, fail, complete }) {}

/**
 * 暂停播放音乐
 * https://mp.weixin.qq.com/debug/wxadoc/dev/api/media-background-audio.html#wxpausebackgroundaudio
 */
wx.prototype.pauseBackgroundAudio = function () {}

/**
 * 控制音乐播放进度。
 * @param position
 * @param success
 * @param fail
 * @param complete
 * https://mp.weixin.qq.com/debug/wxadoc/dev/api/media-background-audio.html#wxseekbackgroundaudioobject
 */
wx.prototype.seekBackgroundAudio = function ({ position, success, fail, complete }) {}

/**
 * 停止播放音乐。
 * https://mp.weixin.qq.com/debug/wxadoc/dev/api/media-background-audio.html#wxstopbackgroundaudio
 */
wx.prototype.stopBackgroundAudio = function () {}

/**
 * 监听音乐播放。
 * @param cb
 * https://mp.weixin.qq.com/debug/wxadoc/dev/api/media-background-audio.html#wxonbackgroundaudioplaycallback
 */
wx.prototype.onBackgroundAudioPlay = function (cb) {}

/**
 * 监听音乐暂停。
 * @param cb
 * https://mp.weixin.qq.com/debug/wxadoc/dev/api/media-background-audio.html#wxonbackgroundaudiopausecallback
 */
wx.prototype.onBackgroundAudioPause = function (cb) {}


/**
 * 监听音乐停止。
 * @param cb
 * https://mp.weixin.qq.com/debug/wxadoc/dev/api/media-background-audio.html#wxonbackgroundaudiostopcallback
 */
wx.prototype.onBackgroundAudioStop = function (cb) {}

/**
 * 获取全局唯一的背景音频管理器 backgroundAudioManager
 * https://mp.weixin.qq.com/debug/wxadoc/dev/api/getBackgroundAudioManager.html
 */
wx.prototype.getBackgroundAudioManager = function () {}

/**
 * 创建并返回 audio 上下文 audioContext 对象
 * https://mp.weixin.qq.com/debug/wxadoc/dev/api/api-audio.html
 */
wx.prototype.createAudioContext = function (audioId) {}

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
wx.prototype.chooseVideo = function ({ sourceType, maxDuration, camera, success, fail, complete }) {}

/**
 * 保存视频到系统相册，需要用户授权（scope.writePhotosAlbum），详见 用户授权
 * @param filePath
 * @param success
 * @param fail
 * @param complete
 * https://mp.weixin.qq.com/debug/wxadoc/dev/api/media-video.html#wxsavevideotophotosalbumobject
 */
wx.prototype.saveVideoToPhotosAlbum = function ({ filePath, success, fail, complete}) {}

/**
 * 创建并返回 video 上下文 videoContext 对象
 * @param videoId
 * https://mp.weixin.qq.com/debug/wxadoc/dev/api/api-video.html#wxcreatevideocontextvideoid
 */
wx.prototype.createVideoContext = function (videoId) {}

/**
 * 保存文件到本地。
 * @param tempFilePath
 * @param success
 * @param fail
 * @param coomplete
 * https://mp.weixin.qq.com/debug/wxadoc/dev/api/file.html#wxsavefileobject
 */
wx.prototype.saveFile = function ({ tempFilePath, success, fail, coomplete}) {}

/**
 * 获取文件信息
 * @param filePath
 * @param digestAlgorithm
 * @param success
 * @param fail
 * @param complete
 * https://mp.weixin.qq.com/debug/wxadoc/dev/api/getFileInfo.html
 */
wx.prototype.getFileInfo = function ({ filePath, digestAlgorithm, success, fail, complete }) {}

/**
 * 获取本地已保存的文件列表
 * @param success
 * @param fail
 * @param complete
 * https://mp.weixin.qq.com/debug/wxadoc/dev/api/file.html#wxgetsavedfilelistobject
 */
wx.prototype.getSavedFileList = function ({ success, fail, complete }) {}

/**
 * 获取本地文件的文件信息。此接口只能用于获取已保存到本地的文件，若需要获取临时文件信息，请使用 wx.getFileInfo 接口。
 * @param filePath
 * @param success
 * @param fail
 * @param complete
 * https://mp.weixin.qq.com/debug/wxadoc/dev/api/file.html#wxgetsavedfileinfoobject
 */
wx.prototype.getSavedFileInfo = function ({ filePath, success, fail, complete }) {}

/**
 * 删除本地存储的文件
 * @param filePath
 * @param success
 * @param fail
 * @param complete
 * https://mp.weixin.qq.com/debug/wxadoc/dev/api/file.html#wxremovesavedfileobject
 */
wx.prototype.removeSavedFile = function ({ filePath, success, fail, complete }) {}

/**
 * 新开页面打开文档，支持格式：doc, xls, ppt, pdf, docx, xlsx, pptx
 * @param filePath
 * @param fileType
 * @param success
 * @param fail
 * @param complete
 * https://mp.weixin.qq.com/debug/wxadoc/dev/api/file.html#wxopendocumentobject
 */
wx.prototype.openDocument = function ({ filePath, fileType, success, fail, complete }) {}

/**
 * 将数据存储在本地缓存中指定的 key 中，会覆盖掉原来该 key 对应的内容，这是一个异步接口。
 * @param key
 * @param data
 * @param success
 * @param fail
 * @param complete
 * https://mp.weixin.qq.com/debug/wxadoc/dev/api/data.html#wxsetstorageobject
 */
wx.prototype.setStorage = function ({ key, data, success, fail, complete }) {}

/**
 * 将 data 存储在本地缓存中指定的 key 中，会覆盖掉原来该 key 对应的内容，这是一个同步接口。
 * @param key
 * @param data
 * https://mp.weixin.qq.com/debug/wxadoc/dev/api/data.html#wxsetstoragesynckeydata
 */
wx.prototype.setStorageSync = function (key, data) {}

/**
 * 从本地缓存中异步获取指定 key 对应的内容。
 * @param key
 * @param success
 * @param fail
 * @param complete
 * https://mp.weixin.qq.com/debug/wxadoc/dev/api/data.html#wxgetstorageobject
 */
wx.prototype.getStorage = function ({ key, success, fail, complete }) {}

/**
 * 从本地缓存中同步获取指定 key 对应的内容。
 * @param key
 * https://mp.weixin.qq.com/debug/wxadoc/dev/api/data.html#wxgetstoragesynckey
 */
wx.prototype.getStorageSync = function (key) {}

/**
 * 异步获取当前storage的相关信息
 * @param success
 * @param fail
 * @param complete
 * https://mp.weixin.qq.com/debug/wxadoc/dev/api/data.html#wxgetstorageinfoobject
 */
wx.prototype.getStorageInfo = function ({ success, fail, complete }) {}

/**
 * 同步获取当前storage的相关信息
 * https://mp.weixin.qq.com/debug/wxadoc/dev/api/data.html#wxgetstorageinfosync
 */
wx.prototype.getStorageInfoSync = function () {}

/**
 * 从本地缓存中异步移除指定 key 。
 * @param key
 * @param success
 * @param fail
 * @param complete
 * https://mp.weixin.qq.com/debug/wxadoc/dev/api/data.html#wxremovestorageobject
 */
wx.prototype.removeStorage = function ({ key, success, fail, complete }) {}

/**
 * 从本地缓存中同步移除指定 key 。
 * @param key
 * https://mp.weixin.qq.com/debug/wxadoc/dev/api/data.html#wxremovestoragesynckey
 */
wx.prototype.removeStorageSync = function (key) {}

/**
 * 清理本地数据缓存。
 * https://mp.weixin.qq.com/debug/wxadoc/dev/api/data.html#wxclearstorage
 */
wx.prototype.clearStorage = function () {}

/**
 * 同步清理本地数据缓存
 * https://mp.weixin.qq.com/debug/wxadoc/dev/api/data.html#wxclearstoragesync
 */
wx.prototype.clearStorageSync = function () {}

/**
 * 获取当前的地理位置、速度。当用户离开小程序后，此接口无法调用；当用户点击“显示在聊天顶部”时，此接口可继续调用。
 * @param type
 * @param success
 * @param fail
 * @param complete
 * https://mp.weixin.qq.com/debug/wxadoc/dev/api/location.html#wxgetlocationobject
 */
wx.prototype.getLocation = function ({ type, success, fail, complete }) {}

/**
 * 打开地图选择位置
 * @param success
 * @param cancel
 * @param fail
 * @param complete
 * https://mp.weixin.qq.com/debug/wxadoc/dev/api/location.html#wxchooselocationobject
 */
wx.prototype.chooseLocation = function ({ success, cancel, fail, complete }) {}

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
wx.prototype.openLocation = function ({ latitude, longitude, scale, name, address, success, fail, complete }) {}

/**
 * 创建并返回 map 上下文 mapContext 对象
 * @param mapId
 * https://mp.weixin.qq.com/debug/wxadoc/dev/api/api-map.html#wxcreatemapcontextmapid
 */
wx.prototype.createMapContext = function (mapId) {}

/**
 * 获取系统信息。
 * @param success
 * @param fail
 * @param complete
 * https://mp.weixin.qq.com/debug/wxadoc/dev/api/systeminfo.html#wxgetsysteminfoobject
 */
wx.prototype.getSystemInfo = function ({ success, fail, complete }) {}

/**
 * 获取系统信息同步接口
 * https://mp.weixin.qq.com/debug/wxadoc/dev/api/systeminfo.html#wxgetsysteminfosync
 */
wx.prototype.getSystemInfoSync = function () {}

/**
 * 判断小程序的API，回调，参数，组件等是否在当前版本可用。
 * @param string
 * https://mp.weixin.qq.com/debug/wxadoc/dev/api/api-caniuse.html
 */
wx.prototype.canIUse = function (string) {}

/**
 * 获取网络类型。
 * @param success
 * @param fail
 * @param complete
 * https://mp.weixin.qq.com/debug/wxadoc/dev/api/device.html#wxgetnetworktypeobject
 */
wx.prototype.getNetworkType = function ({ success, fail, complete }) {}

/**
 * 监听网络状态变化
 * @param cb
 * https://mp.weixin.qq.com/debug/wxadoc/dev/api/device.html#wxonnetworkstatuschangecallback
 */
wx.prototype.onNetworkStatusChange = function (cb) {}

/**
 * 监听加速度数据，频率：5次/秒，接口调用后会自动开始监听，可使用 wx.stopAccelerometer 停止监听。
 * @param cb
 * https://mp.weixin.qq.com/debug/wxadoc/dev/api/accelerometer.html#wxonaccelerometerchangecallback
 */
wx.prototype.onAccelerometerChange = function (cb) {}

/**
 * 开始监听加速度数据
 * @param success
 * @param fail
 * @param complete
 * https://mp.weixin.qq.com/debug/wxadoc/dev/api/accelerometer.html#wxstartaccelerometerobject
 */
wx.prototype.startAccelerometer = function ({ success, fail, complete }) {}

/**
 * 停止监听加速度数据。
 * @param success
 * @param fail
 * @param complete
 * https://mp.weixin.qq.com/debug/wxadoc/dev/api/accelerometer.html#wxstopaccelerometerobject
 */
wx.prototype.stopAccelerometer = function ({ success, fail, complete }) {}

/**
 * 监听罗盘数据，频率：5次/秒，接口调用后会自动开始监听，可使用wx.stopCompass停止监听。
 * @param cb
 * https://mp.weixin.qq.com/debug/wxadoc/dev/api/compass.html#wxoncompasschangecallback
 */
wx.prototype.onCompassChange = function (cb) {}

/**
 * 开始监听罗盘数据。
 * @param success
 * @param fail
 * @param complete
 * https://mp.weixin.qq.com/debug/wxadoc/dev/api/compass.html#wxstartcompassobject
 */
wx.prototype.startCompass = function ({ success, fail, complete }) {}

/**
 * 停止监听罗盘数据。
 * @param success
 * @param fail
 * @param complete
 * https://mp.weixin.qq.com/debug/wxadoc/dev/api/compass.html#wxstopcompassobject
 */
wx.prototype.stopCompass = function ({ success, fail, complete }) {}

/**
 * 打电话
 * @param phoneNumber
 * @param success
 * @param fail
 * @param complete
 * https://mp.weixin.qq.com/debug/wxadoc/dev/api/phonecall.html#wxmakephonecallobject
 */
wx.prototype.makePhoneCall = function ({ phoneNumber, success, fail, complete }) {}

/**
 * 调起客户端扫码界面，扫码成功后返回对应的结果
 * @param onlyFromCamera
 * @param success
 * @param fail
 * @param complete
 * https://mp.weixin.qq.com/debug/wxadoc/dev/api/scancode.html#wxscancodeobject
 */
wx.prototype.scanCode = function ({ onlyFromCamera, success, fail, complete }) {}

/**
 * 设置系统剪贴板的内容
 * @param data
 * @param success
 * @param fail
 * @param complete
 * https://mp.weixin.qq.com/debug/wxadoc/dev/api/clipboard.html#wxsetclipboarddataobject
 */
wx.prototype.setClipboardData = function ({ data, success, fail, complete }) {}

/**
 * 获取系统剪贴板内容
 * @param success
 * @param fail
 * @param complete
 * https://mp.weixin.qq.com/debug/wxadoc/dev/api/clipboard.html#wxgetclipboarddataobject
 */
wx.prototype.getClipboardData = function ({ success, fail, complete }) {}

/**
 * 初始化蓝牙适配器
 * @param success
 * @param fail
 * @param complete
 * https://mp.weixin.qq.com/debug/wxadoc/dev/api/bluetooth.html#wxopenbluetoothadapterobject
 */
wx.prototype.openBluetoothAdapter = function ({ success, fail, complete }) {}

/**
 * 关闭蓝牙模块。调用该方法将断开所有已建立的链接并释放系统资源
 * @param success
 * @param fail
 * @param complete
 * https://mp.weixin.qq.com/debug/wxadoc/dev/api/bluetooth.html#wxclosebluetoothadapterobject
 */
wx.prototype.closeBluetoothAdapter = function ({ success, fail, complete }) {}

/**
 * 获取本机蓝牙适配器状态
 * @param success
 * @param fail
 * @param complete
 * https://mp.weixin.qq.com/debug/wxadoc/dev/api/bluetooth.html#wxgetbluetoothadapterstateobject
 */
wx.prototype.getBluetoothAdapterState = function ({ success, fail, complete }) {}

/**
 * 监听蓝牙适配器状态变化事件
 * @param cb
 * https://mp.weixin.qq.com/debug/wxadoc/dev/api/bluetooth.html#wxonbluetoothadapterstatechangecallback
 */
wx.prototype.onBluetoothAdapterStateChange = function (cb) {}

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
wx.prototype.startBluetoothDevicesDiscovery = function ({services, allowDuplicatesKey, interval, success, fail, complete}) {}

/**
 * 停止搜寻附近的蓝牙外围设备。请在确保找到需要连接的设备后调用该方法停止搜索。
 * @param object
 * @param fail
 * @param complete
 * https://mp.weixin.qq.com/debug/wxadoc/dev/api/bluetooth.html#wxstopbluetoothdevicesdiscoveryobject
 */
wx.prototype.stopBluetoothDevicesDiscovery = function ({ object, fail, complete}) {}

/**
 * 获取所有已发现的蓝牙设备，包括已经和本机处于连接状态的设备
 * @param object
 * @param fail
 * @param complete
 * https://mp.weixin.qq.com/debug/wxadoc/dev/api/bluetooth.html#wxgetbluetoothdevicesobject
 */
wx.prototype.getBluetoothDevices = function ({ object, fail, complete }) {}

/**
 * 根据 uuid 获取处于已连接状态的设备
 * @param services
 * @param success
 * @param fail
 * @param complete
 * https://mp.weixin.qq.com/debug/wxadoc/dev/api/bluetooth.html#wxonbluetoothdevicefoundcallback
 */
wx.prototype.getConnectedBluetoothDevices = function ({services, success, fail, complete}) {}


/**
 * 连接低功耗蓝牙设备
 * @param deviceId
 * @param success
 * @param fail
 * @param complete
 * https://mp.weixin.qq.com/debug/wxadoc/dev/api/bluetooth.html#wxcreatebleconnectionobject
 */
wx.prototype.createBLEConnection = function ({ deviceId, success, fail, complete }) {}

/**
 * 断开与低功耗蓝牙设备的连接
 * @param deviceId
 * @param success
 * @param fail
 * @param complete
 * https://mp.weixin.qq.com/debug/wxadoc/dev/api/bluetooth.html#wxclosebleconnectionobject
 */
wx.prototype.closeBLEConnection = function ({ deviceId, success, fail, complete }) {}

/**
 * 获取蓝牙设备所有 service（服务）
 * @param deviceId
 * @param success
 * @param fail
 * @param complete
 * https://mp.weixin.qq.com/debug/wxadoc/dev/api/bluetooth.html#wxgetbledeviceservicesobject
 */
wx.prototype.getBLEDeviceServices = function ({ deviceId, success, fail, complete }) {}

/**
 * 获取蓝牙设备所有 characteristic（特征值）
 * @param deviceId
 * @param serviceId
 * @param success
 * @param fail
 * @param complete
 * https://mp.weixin.qq.com/debug/wxadoc/dev/api/bluetooth.html#wxgetbledevicecharacteristicsobject
 */
wx.prototype.getBLEDeviceCharacteristics = function ({ deviceId, serviceId, success, fail, complete }) {}

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
wx.prototype.readBLECharacteristicValue = function ({ deviceId, serviceId, characteristicId, success, fail, complete }) {}

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
wx.prototype.writeBLECharacteristicValue = function ({ deviceId, serviceId, characteristicId, value, success, fail, complete }) {}

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
wx.prototype.notifyBLECharacteristicValueChange = function ({ deviceId, serviceId, characteristicId, state, success, fail, complete }) {}

/**
 * 监听低功耗蓝牙连接的错误事件，包括设备丢失，连接异常断开等等。
 * @param cb
 * https://mp.weixin.qq.com/debug/wxadoc/dev/api/bluetooth.html#wxonbleconnectionstatechangecallback
 */
wx.prototype.onBLEConnectionStateChange = function (cb) {}


/**
 * 监听低功耗蓝牙设备的特征值变化。
 * @param cb
 * https://mp.weixin.qq.com/debug/wxadoc/dev/api/bluetooth.html#wxonblecharacteristicvaluechangecallback
 */
wx.prototype.onBLECharacteristicValueChange = function (cb) {}

/**
 * 开始搜索附近的iBeacon设备
 * @param uuids
 * @param success
 * @param fail
 * @param complete
 * https://mp.weixin.qq.com/debug/wxadoc/dev/api/iBeacon.html#wxstartbeacondiscoveryobject
 */
wx.prototype.startBeaconDiscovery = function ({ uuids, success, fail, complete }) {}


/**
 * 停止搜索附近的iBeacon设备
 * @param success
 * @param fail
 * @param complete
 * https://mp.weixin.qq.com/debug/wxadoc/dev/api/iBeacon.html#wxstopbeacondiscoveryobject
 */
wx.prototype.stopBeaconDiscovery = function ({ success, fail, complete }) {}

/**
 * 获取所有已搜索到的iBeacon设备
 * @param success
 * @param fail
 * @param complete
 * https://mp.weixin.qq.com/debug/wxadoc/dev/api/iBeacon.html#wxgetbeaconsobject
 */
wx.prototype.getBeacons = function ({ success, fail, complete }) {}

/**
 * 监听 iBeacon 设备的更新事件
 * @param cb
 * https://mp.weixin.qq.com/debug/wxadoc/dev/api/iBeacon.html#wxonbeaconupdatecallback
 */
wx.prototype.onBeaconUpdate = function (cb) {}

/**
 * 监听 iBeacon 服务的状态变化
 * @param cb
 * https://mp.weixin.qq.com/debug/wxadoc/dev/api/iBeacon.html#wxonbeaconservicechangecallback
 */
wx.prototype.onBeaconServiceChange = function (cb) {}

/**
 * 设置屏幕亮度。
 * @param value
 * @param success
 * @param fail
 * @param complete
 * https://mp.weixin.qq.com/debug/wxadoc/dev/api/device.html#wxsetscreenbrightnessobject
 */
wx.prototype.setScreenBrightness = function ({ value, success, fail, complete }) {}

/**
 * 获取屏幕亮度。
 * @param success
 * @param fail
 * @param complete
 * https://mp.weixin.qq.com/debug/wxadoc/dev/api/device.html#wxgetscreenbrightnessobject
 */
wx.prototype.getScreenBrightness = function ({ success, fail, complete }) {}

/**
 * 设置是否保持常亮状态。仅在当前小程序生效，离开小程序后设置失效。
 * @param keepScreenOn
 * @param success
 * @param fail
 * @param complete
 * https://mp.weixin.qq.com/debug/wxadoc/dev/api/setKeepScreenOn.html
 */
wx.prototype.setKeepScreenOn = function ({keepScreenOn, success, fail, complete}) {}

/**
 * 监听用户主动截屏事件，用户使用系统截屏按键截屏时触发此事件
 * @param cb
 * https://mp.weixin.qq.com/debug/wxadoc/dev/api/onUserCaptureScreen.html
 */
wx.prototype.onUserCaptureScreen = function (cb) {}

/**
 * 使手机发生较长时间的振动（400ms）
 * @param success
 * @param fail
 * @param complete
 * https://mp.weixin.qq.com/debug/wxadoc/dev/api/device.html#wxvibratelongobject
 */
wx.prototype.vibrateLong = function ({success, fail, complete}) {}

/**
 * 使手机发生较短时间的振动（15ms）
 * @param success
 * @param fail
 * @param complete
 * https://mp.weixin.qq.com/debug/wxadoc/dev/api/device.html#wxvibrateshortobject
 */
wx.prototype.vibrateShort = function ({success, fail, complete}) {}

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
wx.prototype.addPhoneContact = function ({ photoFilePath, nickName, lastName, middleName, firstName, remark, mobilePhoneNumber, weChatNumber, addressCountry, addressState, addressCity, addressStreet, addressPostalCode, organization, title, workFaxNumber, hostNumber,email, url, workAddressCountry, workAddressState, workAddressCity, workAddressStreet, workAddressPostalCode, homeFaxNumber, homePhoneNumber, homeAddressCountry, homeAddressState, homeAddressCity, homeAddressStreet, homeAddressPostalCode, success, fail, complete }) {}

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
wx.prototype.showToast = function ({ title, icon, image, duration, mask, success, fail, complete }) {}

/**
 * 显示 loading 提示框, 需主动调用 wx.hideLoading 才能关闭提示框
 * @param title
 * @param mask
 * @param success
 * @param fail
 * @param complete
 * https://mp.weixin.qq.com/debug/wxadoc/dev/api/api-react.html#wxshowloadingobject
 */
wx.prototype.showLoading = function ({title, mask, success, fail, complete}) {}

/**
 * 隐藏消息提示框
 * https://mp.weixin.qq.com/debug/wxadoc/dev/api/api-react.html#wxhidetoast
 */
wx.prototype.hideToast = function () {}

/**
 * 隐藏 loading 提示框
 * https://mp.weixin.qq.com/debug/wxadoc/dev/api/api-react.html#wxhideloading
 */
wx.prototype.hideLoading = function () {}

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
wx.prototype.showModal = function ({ title, content, showCancel, cancelText, cancelColor, confirmText, confirmColor, success, fail, complete }) {}

/**
 * ​显示操作菜单
 * @param itemList
 * @param itemColor
 * @param success
 * @param fail
 * @param complete
 * https://mp.weixin.qq.com/debug/wxadoc/dev/api/api-react.html#wxshowactionsheetobject
 */
wx.prototype.showActionSheet = function ({ itemList, itemColor, success, fail, complete }) {}

/**
 * 动态设置当前页面的标题。
 * @param title
 * @param success
 * @param fail
 * @param complete
 * https://mp.weixin.qq.com/debug/wxadoc/dev/api/ui.html#wxsettopbartextobject
 */
wx.prototype.setNavigationBarTitle = function ({ title, success, fail, complete }) {}

/**
 * 在当前页面显示导航条加载动画。
 */
wx.prototype.showNavigationBarLoading = function () {}

/**
 *隐藏导航条加载动画。
 */
wx.prototype.hideNavigationBarLoading = function () {}

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
wx.prototype.setNavigationBarColor = function ({ frontColor, backgroundColor, animation, duration, timingFunc, success, fail, compete}) {}

/**
 * 动态设置置顶栏文字内容，只有当前小程序被置顶时能生效，如果当前小程序没有被置顶，也能调用成功，但是不会立即生效，只有在用户将这个小程序置顶后才换上设置的文字内容。注意：调用成功后，需间隔 5s 才能再次调用此接口，如果在 5s 内再次调用此接口，会回调 fail，errMsg："setTopBarText: fail invoke too frequently"
 * @param text
 * @param success
 * @param fail
 * @param complete
 * https://mp.weixin.qq.com/debug/wxadoc/dev/api/ui.html#wxsettopbartextobject
 */
wx.prototype.setTopBarText = function ({ text, success, fail, complete}) {}

/**
 * 保留当前页面，跳转到应用内的某个页面，使用wx.navigateBack可以返回到原页面。
 * @param url
 * @param success
 * @param fail
 * @param complete
 * https://mp.weixin.qq.com/debug/wxadoc/dev/api/ui-navigate.html#wxnavigatetoobject
 */
wx.prototype.navigateTo = function ({ url, success, fail, complete }) {}

/**
 * 关闭当前页面，跳转到应用内的某个页面。
 * @param url
 * @param success
 * @param fail
 * @param complete
 * https://mp.weixin.qq.com/debug/wxadoc/dev/api/ui-navigate.html#wxredirecttoobject
 */
wx.prototype.redirectTo = function ({ url, success, fail, complete}) {}

/**
 * 跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面
 * @param url
 * @param success
 * @param fail
 * @param complete
 * https://mp.weixin.qq.com/debug/wxadoc/dev/api/ui-navigate.html#wxrelaunchobject
 */
wx.prototype.switchTab = function ({ url, success, fail, complete }) {}

/**
 * 关闭当前页面，返回上一页面或多级页面。可通过 getCurrentPages()) 获取当前的页面栈，决定需要返回几层。
 * @param delta
 * https://mp.weixin.qq.com/debug/wxadoc/dev/api/ui-navigate.html#wxrelaunchobject
 */
wx.prototype.navigateBack = function ({ delta }) {}

/**
 * 关闭所有页面，打开到应用内的某个页面。
 * @param url
 * @param success
 * @param fail
 * @param complete
 * https://mp.weixin.qq.com/debug/wxadoc/dev/api/ui-navigate.html#wxrelaunchobject
 */
wx.prototype.reLaunch = function ({ url, success, fail, complete }) {}

/**
 * 创建一个动画实例animation。调用实例的方法来描述动画
 * @param duration
 * @param timingFunction
 * @param delay
 * @param transformOrigin
 * https://mp.weixin.qq.com/debug/wxadoc/dev/api/api-animation.html#wxcreateanimationobject
 */
wx.prototype.createAnimation = function ({ duration, timingFunction, delay, transformOrigin }) {}

/**
 * 将页面滚动到目标位置。
 * @param scrollTop
 * https://mp.weixin.qq.com/debug/wxadoc/dev/api/scroll.html
 */
wx.prototype.pageScrollTo = function ({ scrollTop }) {}

/**
 * 返回一个SelectorQuery对象实例。可以在这个实例上使用select等方法选择节点，并使用boundingClientRect等方法选择需要查询的信息。
 * https://mp.weixin.qq.com/debug/wxadoc/dev/api/wxml-nodes-info.html
 */
wx.prototype.createSelectorQuery = function () {}

/**
 * 创建wx 的canvas
 * @param canvasId
 * https://mp.weixin.qq.com/debug/wxadoc/dev/api/canvas/intro.html
 */
wx.prototype.createCanvasContext = function (canvasId) {}

/**
 * 不推荐使用
 */
wx.prototype.createContext = function () {}

/**
 * 不推荐使用
 */
wx.prototype.drawCanvas = function () {}

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
wx.prototype.canvasToTempFilePath = function ({ x, y, width, height, destWidth, destHeight, canvasId, success, fail, complete}) {}

/**
 * 开始下拉刷新，调用后触发下拉刷新动画，效果与用户手动下拉刷新一致
 * @param success
 * @param fail
 * @param complete
 * https://mp.weixin.qq.com/debug/wxadoc/dev/api/pulldown.html#wxstartpulldownrefresh
 */
wx.prototype.startPullDownRefresh = function ({success, fail, complete}) {}

/**
 * 停止当前页面下拉刷新。
 * https://mp.weixin.qq.com/debug/wxadoc/dev/api/pulldown.html#wxstoppulldownrefresh
 */
wx.prototype.stopPullDownRefresh = function () {}

/**
 * 获取第三方平台自定义的数据字段。
 * @param success
 * @param fail
 * @param complete
 * https://mp.weixin.qq.com/debug/wxadoc/dev/api/ext-api.html#wxgetextconfigobject
 */
wx.prototype.getExtConfig = function ({success, fail, complete}) {}

/**
 * 获取第三方平台自定义的数据字段的同步接口。
 * https://mp.weixin.qq.com/debug/wxadoc/dev/api/ext-api.html#wxgetextconfigsync
 */
wx.prototype.getExtConfigSync = function () {}

/**
 * 调用接口获取登录凭证（code）进而换取用户登录态信息，
 * 包括用户的唯一标识（openid） 及本次登录的 会话密钥（session_key）。
 * 用户数据的加解密通讯需要依赖会话密钥完成。
 * @param success
 * @param fail
 * @param complete
 * https://mp.weixin.qq.com/debug/wxadoc/dev/api/api-login.html#wxloginobject
 */
wx.prototype.login = function ({ success, fail, complete }) {}

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
wx.prototype.checkSession = function ({ success, fail, complete }) {}

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
wx.prototype.authorize = function ({scope, success, fail, complete}) {}

/**
 * 获取用户信息，withCredentials 为 true 时需要先调用 wx.login 接口。
 * @param withCredentials
 * @param lang
 * @param success
 * @param fail
 * @param complete
 * https://mp.weixin.qq.com/debug/wxadoc/dev/api/open.html#wxgetuserinfoobject
 */
wx.prototype.getUserInfo = function ({ withCredentials, lang, success, fail, complete }) {}

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
wx.prototype.requestPayment = function ({ timeStamp, nonceStr, package1, signType, paySign, success, fail, complete }) {}

/**
 * 显示当前页面的转发按钮
 * @param withShareTicket
 * @param success
 * @param fail
 * @param compete
 * https://mp.weixin.qq.com/debug/wxadoc/dev/api/share.html#wxshowsharemenuobject
 */
wx.prototype.showShareMenu = function ({ withShareTicket, success, fail, compete }) {}

/**
 * 隐藏转发按钮
 * @param success
 * @param fail
 * @param complete
 * https://mp.weixin.qq.com/debug/wxadoc/dev/api/share.html#wxhidesharemenuobject
 */
wx.prototype.hideShareMenu = function ({ success, fail, complete }) {}

/**
 * 更新转发属性
 * @param withShareTicket
 * @param success
 * @param fail
 * @param complete
 * https://mp.weixin.qq.com/debug/wxadoc/dev/api/share.html#wxupdatesharemenuobject
 */
wx.prototype.updateShareMenu = function ({ withShareTicket, success, fail, complete }) {}

/**
 * 获取转发详细信息
 * @param shareTicket
 * @param success
 * @param fail
 * @param complete
 * https://mp.weixin.qq.com/debug/wxadoc/dev/api/share.html#wxgetshareinfoobject
 */
wx.prototype.getShareInfo = function ({ shareTicket, success, fail, complete }) {}

/**
 * 调起用户编辑收货地址原生界面，并在编辑完成后返回用户选择的地址。
 * @param success
 * @param fail
 * @param complete
 * https://mp.weixin.qq.com/debug/wxadoc/dev/api/address.html#wxchooseaddressobject
 */
wx.prototype.chooseAddress = function ({ success, fail, complete }) {}

/**
 * 批量添加卡券。
 * @param cardList
 * @param success
 * @param fail
 * @param complete
 * https://mp.weixin.qq.com/debug/wxadoc/dev/api/card.html#wxaddcardobject
 */
wx.prototype.addCard = function ({ cardList, success, fail, complete }) {}

/**
 * 查看微信卡包中的卡券。
 * @param cardList
 * @param success
 * @param fail
 * @param complete
 * https://mp.weixin.qq.com/debug/wxadoc/dev/api/card.html#wxopencardobject
 */
wx.prototype.openCard = function ({ cardList, success, fail, complete}) {}

/**
 * 调起客户端小程序设置界面，返回用户设置的操作结果
 * @param success
 * @param fail
 * @param complete
 * https://mp.weixin.qq.com/debug/wxadoc/dev/api/setting.html#wxopensettingobject
 */
wx.prototype.openSetting = function ({success, fail, complete}) {}

/**
 * 获取用户的当前设置
 * @param success
 * @param fail
 * @param complete
 * https://mp.weixin.qq.com/debug/wxadoc/dev/api/setting.html#wxgetsettingobject
 */
wx.prototype.getSetting = function ({success, fail, complete}) {}

/**
 * 获取用户过去三十天微信运动步数，需要先调用 wx.login 接口。
 * @param success
 * @param fail
 * @param complete
 * https://mp.weixin.qq.com/debug/wxadoc/dev/api/we-run.html#wxgetwerundataobject
 */
wx.prototype.getWeRunData = function ({success, fail, complete}) {}

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
wx.prototype.navigateToMiniProgram = function ({ appId, path, extraData, envVersion, success, fail, complete }) {}

/**
 * 返回到上一个小程序，只有在当前小程序是被其他小程序打开时可以调用成功
 * @param extraData
 * @param success
 * @param fail
 * @param complete
 * https://mp.weixin.qq.com/debug/wxadoc/dev/api/navigateBackMiniProgram.html
 */
wx.prototype.navigateBackMiniProgram = function ({ extraData, success, fail, complete }) {}

/**
 * 选择用户的发票抬头
 * @param success
 * @param fail
 * @param complete
 * https://mp.weixin.qq.com/debug/wxadoc/dev/api/chooseInvoiceTitle.html
 */
wx.prototype.chooseInvoiceTitle = function ({success, fail, complete}) {}


/**
 * 获取本机支持的 SOTER 生物认证方式
 * @param success
 * @param fail
 * @param compete
 * https://mp.weixin.qq.com/debug/wxadoc/dev/api/checkIsSupportSoterAuthentication.html
 */
wx.prototype.checkIsSupportSoterAuthentication = function ({ success, fail, compete }) {}

/**
 * 开始 SOTER 生物认证
 * @param requestAuthModes
 * @param challenge
 * @param authContent
 * @param success
 * @param fail
 * @param complete
 */
wx.prototype.startSoterAuthentication = function ({requestAuthModes, challenge, authContent, success, fail, complete}) {}

/**
 * 将 ArrayBuffer 数据转成 Base64 字符串
 * @param arrayBuffer
 * https://mp.weixin.qq.com/debug/wxadoc/dev/api/api-util.html#wxarraybuffertobase64arraybuffer
 */
wx.prototype.arrayBufferToBase64 = function (arrayBuffer) {}

/**
 * 将 Base64 字符串转成 ArrayBuffer 数据
 * @param base64
 * https://mp.weixin.qq.com/debug/wxadoc/dev/api/api-util.html#wxarraybuffertobase64arraybuffer
 */
wx.prototype.base64ToArrayBuffer = function (base64) {}