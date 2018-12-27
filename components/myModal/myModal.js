// components/component-tag-name.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    show :{
      type:Boolean,
      value:false
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    "flag": 'delete_no'  // delete_yes删除成功  delete_no删除失败
  },
  /**
   * 组件的方法列表
   */
  methods: {
    confirm : function(){
      this.setData({
        show : false
      })
      this.triggerEvent('confirm')
    },
    clickMask : function(){
      this.setData({
        show: true
      })
    }
  }
})