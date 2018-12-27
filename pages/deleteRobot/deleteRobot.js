// pages/deleteRobot/deleteRobot.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    "showModal" : false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: "智能对话机器人"
    })
  },
  onReady: function(){
    this.myModal = this.selectComponent("#myModal")
  },
  /**
   * 确定删除
   */
  toggleModal : function(res){
    this.myModal.clickMask();
  },

  
  
})