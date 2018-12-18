const app = getApp();
Component({
  data : {
    "back_style" : 'none'
  },
  ready : function(){
    let that = this;
    let page_url = getCurrentPages()[0].route;
    let page_arr = page_url.split('/');
    if(page_arr[1] != 'index' && page_arr[2] != 'index'){
      console.log(page_url);
      that.setData({
        "back_style" : "block"
      });
    }
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