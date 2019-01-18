const app = getApp();
var util = require("../../utils/util.js");

Page({
  
  data : {
    "detail" : false,
    "nameIsexists" : false,  //false 表示不存在,没有人占有,
    "is_click" : [],    //按钮是否可点击
    "btn_bg": "#66B1FF",    //按钮背景色
    "checkbox" : false,
    "officialAccounts" : false,
    "officialAccountsUrl" : false,
    "is_disabled" : false,   //按钮点击
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
    var is_true= false;

    var regex = new RegExp("^([\u4E00-\uFA29]|[\uE7C7-\uE7F3]|[a-zA-Z0-9_-]){4,30}$");
    if (!regex.test(officialAccounts)){
        this.showTips('请正确填写公众号名称');
        is_true = false;
        return false;
    }else{
        is_true = true;
    }

    if (this.data['nameIsexists']) {
        this.showTips("抱歉，公众号名称已存在");
        is_true = false;
        return false;
    } else {
        is_true = true;
    }

    if (!util.IsURL(officialAccountsUrl)){
        this.showTips('请正确填写连接地址');
        is_true = false;
        return false;
    } else {
        is_true = true;
    }

    if (!this.data['checkbox']){
        this.showTips("请勾选‘相关条例’");
        is_true = false;
        return false;
    } else {
        is_true = true;
    }

    if(is_true){
        wx.navigateTo({
            url: '/pages/createRobot/robotName/robotName',
        })
    }
  },
  /**
   * 阅读并同意 复选框
   */
    checkboxChange : function(e){
        var f = e.detail.value.length ? true : false;
        this.data['checkbox'] = f;
        this.changBtn();
    },
  /**
   * 公众号名称 验证是否重复
   */
    checkBlur : function(e){
        //公众号名
        if (e.target['id'] == 'officialAccounts'){
            var regex = new RegExp("^([\u4E00-\uFA29]|[\uE7C7-\uE7F3]|[a-zA-Z0-9_-]){4,30}$");
            var f = regex.test(e.detail.value) ? true : false;
            this.data['officialAccounts'] = f;
        }
        //链接地址
        if (e.target['id'] == 'officialAccountsUrl'){
            var f = util.IsURL(e.detail.value) ? true : false;
            this.data['officialAccountsUrl'] = f;
        }
        this.changBtn();
    },
    /**
     * 检查表单值 修改按钮颜色
     */
    changBtn : function(){
        var list = ['checkbox', 'officialAccounts', 'officialAccountsUrl'];
        var btn = true;
        for(var x in list){
            if (!this.data[list[x]]){
                btn = false;
                break;
            }
        }
        var color = btn ? "#007CFF" : "#66B1FF";
        this.setData({ 'btn_bg': color });
        this.setData({ "disabled": btn});
    },
    /**
     * 获取说明
     */
    getExplain : function(){
        wx.navigateTo({
            url: '/pages/getExplain/getExplain',
        })
    }
})