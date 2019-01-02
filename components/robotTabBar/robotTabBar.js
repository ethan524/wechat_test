Component({

  /**
   * 组件的初始数据
   */
  data: {
  },

  methods: {
    upEdit: function (res) {
      var that = this;
    },
    nextstep : function(){
      wx.navigateTo({
        url: '/pages/createRobot/robotPreview/robotPreview',
      })
    },
    backstep : function(){
      wx.navigateTo({
        url: '/pages/createRobot/choiceSkills/choiceSkills',
      })
    }
  }

})