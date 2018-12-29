// pages/login/login.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    "canUse": wx.canIUse('button.open-type.getUserInfo')
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 判断用户用户授权 
    wx.getSetting({
      success : function(res){
        if(res.authSetting['scope.userInfo']){
          wx.getUserInfo({
            success : function(){

            }
          })
        }
      }
    })
  },
  bindgetuserinfo : function(res){
    console.log(res);
    if(res.detail.userInfo){
      var that = this;
    }
  }
})