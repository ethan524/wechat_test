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
    onGotUserInfo: function (res){
        var that = this;
        if(res.detail.userInfo){
            var info = res.detail.userInfo;
            wx.login({
                success : function(res_login){
                    if (res_login.code){
                        // wx.getUserInfo({
                            // withCredentials: true,
                            // success : function(res_user){
                                wx.request({
                                    url: 'https://gyh.phpmoo.com/web/wx/login/login.php',
                                    data : {
                                        code: res_login.code,
                                        // encryptedData: res_user.encryptedData,
                                        // iv: res_user.iv
                                    },
                                    method : 'GET',
                                    header : {
                                        'content-type': 'application/json'
                                    },
                                    success : function(res){
                                        console.log(res)
                                    }
                                })
                            // }
                        // })


                        // var params = {
                        //     'code': res.code,
                        //     'nickname': info.nickName,
                        //     "city": info.city,
                        //     "gender": info.gender,
                        //     "province": info.province,
                        //     "avatarUrl": info.avatarUrl,
                        // }
                        // that.getUserInfo();
                    }else{
                        console.log("用户拒绝授权2");
                    }
                }
            })
        }else{
            console.log("用户拒绝授权1")
        }
    }
});

