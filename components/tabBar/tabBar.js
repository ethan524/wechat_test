// components/component-tag-name.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    "home_url" : "/pages/index/index?title='智能对话机器人'",
    "skill_url" : "/pages/skill/skill?title='技能'"
  },

  /**
   * 组件的方法列表
   */
  methods: {
      checkLogin : function(res){
          wx.checkSession({
              success: function (res) {
                //   console.log('login in')
                  wx.navigateTo({
                      url: '/pages/skill/skill',
                  })
              },
              fail: function (res) {
                //   console.log('not login in')
                  wx.redirectTo({
                      url: '/pages/login/login?p=skill',
                  })
              }
          })
      }
  }
})