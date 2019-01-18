// pages/createRobot/onlineResult/onlineResult.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    "flag" : false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: "新建机器人"
    })
  },
  nextstep : function(){
    wx.navigateTo({
      url: '/pages/myRobot/myRobot',
    })
  }
  
})