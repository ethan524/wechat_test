// pages/myRobot/myRobot.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    "status" : 2  //状态 1-启用，2-停用，3-草稿
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  },
  deleteRobot : function(){
    wx.navigateTo({
      url: '/pages/deleteRobot/deleteRobot',
    })
  },
  jumoToCreate : function(){
    wx.navigateTo({
      url: '/pages/createRobot/createRobot',
    })
  }
 
})