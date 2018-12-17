const app = getApp()
Page({
  data: {
    "body_height": ''
  },

  onLoad: function () {
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        // 设置高度
        let h = res.windowHeight - 49 - 64;
        console.log(h)
        that.setData({
          'body_height': h + 'px'
        })
        console.log(that.data.body_height)
      }
    })


  },
})