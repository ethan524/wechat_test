var util = require("../../utils/util.js");
Page({
  /**
   * 页面的初始数据
   */
  data: {
    "canUse": wx.canIUse('button.open-type.getUserInfo'),
    "url" : ''
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      if(options['p']){
        //   var url = options['p'] == 'createRobot' ? '/pages/index/index' : '/pages/skill/skill';
          var url = '/pages/index/index';
          this.setData({
              "url" : url
          })
      }
  },
  bindgetuserinfo : function(res){
    var that = this;
    if(res.detail.userInfo){
        var url = that.data['url'];
        util.login(url);
    }else{
        wx.showModal({
            title: '提示',
            content: '为确保您使用我们的小程序时操作流畅，请您确定授权登录。',
        })
    }
  }
})