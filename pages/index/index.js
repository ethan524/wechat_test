//index.js
//获取应用实例
const app = getApp()
Page({
  data: {
    "background": "/images/backgr.png",  //背景图片
    "logo_robot": "/images/logo-robot.png",
  },
  onLoad: function () {
    var that = this;
    wx.setNavigationBarTitle({
      title: "智能对话机器人"
    })


    var base64 = wx.getFileSystemManager().readFileSync(this.data.background, 'base64');
    that.setData({
      'background': 'data:image/jpg;base64,' + base64
    });
  }
})
