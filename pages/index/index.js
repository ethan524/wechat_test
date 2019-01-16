const app = getApp();
var util = require("../../utils/util.js");
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
    checkLogin: function (res) {
        wx.checkSession({
            success : function(res){
                wx.navigateTo({
                    url: '/pages/createRobot/createRobot',
                })
            },
            fail : function(res){
                wx.redirectTo({
                    url: '/pages/login/login?p=createRobot',
                })
            }
        })
    }
});