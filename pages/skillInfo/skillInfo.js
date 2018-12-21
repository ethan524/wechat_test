// pages/skillInfo/skillInfo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    "body_height": "",
    "body_width": "",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this;
    wx.getSystemInfo({
      success: function (res) {
        // 设置内容高度
        let navBar_height = res.model == 'iPhone X' ? (64 + 32) : 64;
        let body_height = res.windowHeight - navBar_height;
        // 设置内容宽度
        let body_width = res.windowWidth + "px";
        that.setData({
          "body_height": body_height + 'px',
          "body_width": body_width
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})