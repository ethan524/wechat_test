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
    let base64 = wx.getFileSystemManager().readFileSync(this.data.background, 'base64');
    that.setData({
      'background': 'data:image/jpg;base64,' + base64
    });
  }
})
