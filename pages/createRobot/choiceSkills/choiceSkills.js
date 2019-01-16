  // pages/createRobot/choiceSkills/choiceSkills.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    "skill_name": {
      "communication": false,
      "joke": false,
      "weather": false,
      "translate": false,
      "knowledge": false,
      "hotel": false,
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },
  checkboxChange : function(e){
    var index = e.target.dataset.index;
    var val = e.detail.value[0];
    var tmp = [index,val]
    var skills = this.data['skill_name'];
    // 选中
    for(var x in skills){
      if (x == e.detail.value){
        skills[x] = true
      }
    }
    // 选中后取消
    for(var x in skills){
      if (skills[x] && tmp[0] == x && tmp[1] == undefined){
        skills[x] = false
      }
    }
    this.setData({
      skill_name : skills
    })
  },
  nextstep : function(){
    var choice_skill = [];
    var skills = this.data['skill_name'];
    for(var x in skills){
      if(skills[x]){
        choice_skill.push(x)
      }
    }
    wx.navigateTo({
      url: '/pages/createRobot/submitSRobot/submitSRobot',
    })

    console.log(choice_skill)
    // wx.request({
    //   url: '',
    //   data: choice_skill,
    //   header: {
    //     'content-type': 'application/json'
    //   },
    //   success : function(data){
    //     console.log(data);
    //     // 跳转/pages/createRobot/submitSRobot/submitSRobot
    //   }
    // })
  }
  


  

  

})