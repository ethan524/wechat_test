// pages/createRobot/createRobot/robotName.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: "新建机器人"
    })
  },
  formsubmit : function(e){
    var robot = e.detail.value['robot_name'];
    var regex = new RegExp("^([\u4E00-\uFA29]|[\uE7C7-\uE7F3]|[a-zA-Z0-9_-]){2,20}$");
    if (!regex.test(robot)){
      wx.showModal({
        title: '提示',
        content: '请争取填写机器人名称,中英文、数字加下划线组合，长度为2~20',
        showCancel: false,
      })
    }

    //验证名称是否重复
  
    //发送请求

    // 跳转/pages/createRobot/choiceSkills/choiceSkills
  }  
})