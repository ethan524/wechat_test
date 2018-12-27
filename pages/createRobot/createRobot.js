const app = getApp();

Page({
  
  data : {
    "detail" : false
  },

  onLoad : function(){
    wx.setNavigationBarTitle({
      title: "新建机器人"
    })
    var that = this;
    var phone = wx.getSystemInfoSync()
    var model = phone.model;
    if (model.indexOf("iPhone") != -1){
      that.setData({
        "detail": true
      });
    }else{
      that.setData({
        "detail": false
      });
    }
    // if(phone.platform == "ios"){
    //   that.setData({
    //     "detail": true
    //   });
    // }else if(phone.platform == "android"){
    //   that.setData({
    //     "detail": false
    //   });
    // }

  },
  nextstep : function(){
    wx.navigateTo({
      url: '/pages/createRobot/robotName/robotName',
    })
  }

})