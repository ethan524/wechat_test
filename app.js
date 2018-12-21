//app.js
App({
  globalData: {
  },
  onLaunch: function () {
    var that = this;
    // userLogin();
  }
})

// 用户登录
function userLogin(){
  wx.login({
    success: function (res) {
      wx.getUserInfo({
        success(res) {
          console.log(res);
        },
        // 获取用户信息失败，前往授权页面
        fail(res) {
          wx.showModal({
            title: '提示',
            content: '用户尚未授权',
            success: function (res) {
              if (res.confirm) {
                console.log("user confirm");
              } else {
                console.log("user cancle");
              }
            }
          })
        }
      })
    },
    // 登陆失败
    error: function (res) {
      console.log('error');
    }
  })
}