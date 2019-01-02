//app.js
App({
  globalData: {
  },
  onLaunch: function () {
    var that = this;
    this.checkPermissionStatus()
  },
  checkPermissionStatus: function () {
    wx.getSetting({
      success: function (res) {
        if (!res.authSetting['scope.userInfo']) {
          wx.showModal({
            title: '提示',
            content: "尊敬的用户,为确保之后的操作顺畅无误,小程序需要您的授权",
            success: function (res) {
              // 用户点击授权
              if (res.confirm) {
                wx.navigateTo({
                  url: '/pages/login/login',
                })
              } else {
                // 用户点击取消
                wx.showModal({
                  title: '提示',
                  content: '尊敬的用户，如需正常使用“智能对话机器人”小程序，请按确定并在授权管理中选择用户信息',
                  showCancel: false,
                  success : function(res){
                    if(res.confirm){
                      wx.openSetting({
                        scope: "scope.userInfo",
                        success : function(res){
                          // console.log('openSetting success', res.authSetting);
                          res.authSetting = {
                            "scope.userInfo" : true
                          }
                        }
                      })
                    }
                  }
                })
              }
            }
          })
        }else{
          wx.getUserInfo({
            success : function(res){
              // console.log(res);
            }
          })
        }
      }
    })
  }
})

