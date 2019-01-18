const app = getApp()
var util = require("../../utils/util.js");
Page({
    data: {
        "body_height": app.globalData.body_height,
        "hot_keywords_list" : [
            "刘德华2018演唱会",
            "深蹲训练",
            "微信小程序开发文档",
            "罗尼库尔曼巅峰时期",
            "美团外卖"
        ]
    },

    onLoad: function () {
        var that = this;
        wx.setNavigationBarTitle({
            title: "技能"
        })
    },
    jumpToInfo : function(event){
        var params = event.currentTarget.dataset.params;
        wx.navigateTo({
            url: '/pages/skillInfo/skillInfo?params=' + params,
        })
    },
    checkLogin : function(){
        wx.checkSession({
            success: function (res) {
                wx.navigateTo({
                    url: '/pages/createRobot/createRobot',
                })
            },
            fail: function (res) {
                wx.redirectTo({
                    url: '/pages/login/login?p=skill',
                })
            }
        })
    },
    jumpToConversation : function(res){
        // wx.navigateTo({
        //   url: '/pages/conversation/conversation'
        // })
    }
})