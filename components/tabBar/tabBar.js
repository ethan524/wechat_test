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
    data: {},

  /**
   * 组件的方法列表
   */
    methods: {
        jump : function(e){
            var id = e.currentTarget['id'];
            var url = id == 'home' ? '/pages/index/index' : '/pages/skill/skill' ;
            wx.redirectTo({
                url: url,
            })
        }
    }
})