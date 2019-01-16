const app = getApp();
var util = require("../../utils/util.js");

Page({
  
  data : {
    "detail" : false,
    "checkbox" : false,
    "nameIsexists" : false  //false 表示不存在,没有人占有
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
    return false;

    wx.navigateTo({
      url: '/pages/createRobot/robotName/robotName',
    })
  },
  showTips : function(msg){
    wx.showModal({
      title: '提示',
      content: msg,
      showCancel : false
    })
  },
  formsubmit : function(e){
    var officialAccounts = e.detail.value.officialAccounts;           // 公众号名称
    var officialAccountsUrl = e.detail.value.officialAccountsUrl;     // 公众号链接
    var isRead = e.detail.value.isRead;                               // 是否阅读并同意

    var regex = new RegExp("^([\u4E00-\uFA29]|[\uE7C7-\uE7F3]|[a-zA-Z0-9_-]){4,30}$");
    // if (!regex.test(officialAccounts)){
    //   this.showTips('请正确填写公众号名称');
    //   return false;
    // }

    // if (this.data['nameIsexists']) {
    //   this.showTips("抱歉，公众号名称已存在");
    //   return false;
    // }

    // if (!util.IsURL(officialAccountsUrl)){
    //   this.showTips('请正确填写连接地址');
    //   return false;
    // }

    // if (!this.data['checkbox']){
    //   this.showTips("请勾选‘相关条例’");
    //   return false;
    // }

    // 发送请求 存取数据
    wx.navigateTo({
      url: '/pages/createRobot/robotName/robotName',
    })

  },
  /**
   * 阅读并同意 复选框
   */
  checkboxChange : function(e){
    if (!e.detail.value.length){
      this.setData({"checkbox" : false})
    }else{
      this.setData({"checkbox" : true})
    }
  },
  /**
   * 公众号名称 验证是否重复
   */
  officialAccountsBlur : function(e){
    var name = e.detail.value;
    // wx.request({
    //   url: '',
    //   data: {
    //     'officialAccounts': name,
    //   },
    //   header: {
    //     'content-type': 'application/json'
    //   },
    //   success: function (res) {
    //     console.log(res);
    //   }
    // })
  },
  getExplain : function(){
    wx.navigateTo({
      url: '/pages/getExplain/getExplain',
    })
  }


})