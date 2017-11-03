/**
 * Created by jayazhang on 2017-8-21.
 */

function getApp () {}

function App () {}
// 生命周期函数--监听小程序初始化
// 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
App.prototype.onLaunch = function () {}
// 生命周期函数--监听小程序显示
// 当小程序启动，或从后台进入前台显示，会触发 onShow
App.prototype.onShow = function () {}
// 生命周期函数--监听小程序隐藏
// 当小程序从前台进入后台，会触发 onHide
App.prototype.onHide = function () {}
// 错误监听函数
// 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
App.prototype.onError = function () {}


function Page () {}
/**
 * 在 Page 中定义 onPullDownRefresh 处理函数，监听该页面用户下拉刷新事件。

 需要在 config 的window选项中开启 enablePullDownRefresh。
 当处理完数据刷新后，wx.stopPullDownRefresh可以停止当前页面的下拉刷新。

 https://mp.weixin.qq.com/debug/wxadoc/dev/api/pulldown.html#onpulldownrefresh
 */
Page.prototype.onPullDownRefresh = function () {

}

/**
 * 在 Page 中定义 onShareAppMessage 函数，设置该页面的转发信息。
 * 只有定义了此事件处理函数，右上角菜单才会显示 “转发” 按钮
 * 用户点击转发按钮的时候会调用
 * 此事件需要 return 一个 Object，用于自定义转发内容
 */
Page.prototype.onShareAppMessage = function () {}

// 生命周期函数--监听页面加载
Page.prototype.onLoad = function (query) {}

// 生命周期函数--监听页面初次渲染完成
Page.prototype.onReady = function () {}

// 生命周期函数--监听页面显示
Page.prototype.onShow = function () {}

// 生命周期函数--监听页面隐藏
Page.prototype.onHide = function () {}

// 生命周期函数--监听页面卸载
Page.prototype.onUnload = function () {}

// 页面上拉触底事件的处理函数
Page.prototype.onReachBottom = function () {}

// 页面滚动触发事件的处理函数
Page.prototype.onPageScroll = function () {}

// setData 函数用于将数据从逻辑层发送到视图层（异步），同时改变对应的 this.data 的值（同步）。
Page.prototype.setData = function () {}

