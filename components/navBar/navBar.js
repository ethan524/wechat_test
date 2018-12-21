const app = getApp();
Component({
  data : {
    "back_style" : 'none',
    "topBar_height" : '',
    "head_title": ''
  },
  ready : function(res){
    let that = this;
    let page_url = getCurrentPages()[0].route;
    let page_arr = page_url.split('/');
    if(page_arr[1] != 'index' && page_arr[2] != 'index'){
      that.setData({
        "back_style" : "block",
      });
    }

    // 设置页面标题
    let page_title = getCurrentPages()[0].options['title'];
    page_title = page_title == undefined ? "智能对话机器人" : page_title;
    page_title = page_title.replace(/'/g,"");
    that.setData({
      "head_title": page_title
    })


    wx.getSystemInfo({
      success: function (res) {
        // 设置内容高度
        let navBar_height = res.model == 'iPhone X' ? "45px" : "20px";
        that.setData({
          "topBar_height": navBar_height
        })
      }
    })

  },
  methods : {
    goBack(){
      wx.redirectTo({
        "url": "/pages/index/index"
      })
    }
  }
})