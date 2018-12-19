const app = getApp();
Component({
  data : {
    "back_style" : 'none',
    "topBar_height" : '',
    "head_title": ''
  },
  ready : function(){
    let that = this;
    let page_url = getCurrentPages()[0].route;
    let page_arr = page_url.split('/');
    if(page_arr[1] != 'index' && page_arr[2] != 'index'){
      console.log(page_url);
      that.setData({
        "back_style" : "block",
        "head_title" : "技能"
      });
    }else{
      that.setData({
        "head_title": "智能机器人"
      });
    }

    wx.getSystemInfo({
      success: function (res) {
        // 设置内容高度
        let navBar_height = res.model == 'iPhone X' ? "45px" : "20px";
        console.log(navBar_height)
        that.setData({
          "topBar_height": navBar_height
        })
      }
    })

  },
  methods : {
    goBack(){
      console.log('go back');
      wx.redirectTo({
        "url": "/pages/index/index"
      })
    }
  }
})