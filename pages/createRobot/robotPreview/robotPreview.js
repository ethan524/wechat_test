// pages/createRobot/robotPreview/robotPreview.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    robot : {
        "robot_name" : "移动服务之家",
        "robot_officialAccounts": "移动服务之家",
        "robot_url": "http://robo.chinamobile.com/webmail/se/ew/m.do?d=agveQtgSU2IRA0txip1s9THfEO1p1SX000004&r=715bda000004&r=715bda",
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
    onLoad: function (options) {
        
    },
    nextstep : function(){
        wx.navigateTo({
            url: '/pages/createRobot/onlineResult/onlineResult',
        })
    },
    backstep : function(){
        wx.navigateTo({
            url: '/pages/createRobot/submitSRobot/submitSRobot',
        })
    }
  
})