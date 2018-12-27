// pages/myRobot/myRobot.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    "status" : 2
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: "智能对话机器人"
    })
  },
  deleteRobot : function(){
    wx.navigateTo({
      url: '/pages/deleteRobot/deleteRobot',
    })
  }
 
})