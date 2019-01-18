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
            if (options['p'] == 'index'){
                var url = '/pages/index/index';
            }
            if (options['p'] == 'skill') {
                var url = '/pages/skill/skill';
            }
            this.setData({
                "url" : url
            })
        }
        wx.checkSession({
            success: function (res) {
                wx.navigateTo({
                    url: '/pages/index/index',
                })
            }
        })
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