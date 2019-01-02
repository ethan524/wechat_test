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
    var base64 = wx.getFileSystemManager().readFileSync(this.data.background, 'base64');
    that.setData({
      'background': 'data:image/jpg;base64,' + base64
    });

  },
  exercise_now : function(){
    // 查看用户已经获取的权限
    wx.getSetting({
      success : function(res){
        if(res.authSetting['scope.userInfo']){
          wx.navigateTo({
            url: '/pages/createRobot/createRobot',
          })
        }else{
          wx.navigateTo({
            url: '/pages/login/login',
          })
        }
      }
    })
  }
})
