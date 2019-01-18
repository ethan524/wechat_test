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
        },
        "btn_bg": "#66B1FF",    //按钮背景色
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
        var n=0;
        for(var x in skills){
            if(skills[x]){
                n++;
            }
        }
        var color = n ? "#007CFF" : "#66B1FF";
        this.setData({
            skill_name : skills,
            btn_bg : color
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
        if(choice_skill.length){
            wx.navigateTo({
                url: '/pages/createRobot/submitSRobot/submitSRobot',
            })
        }else{
            wx.showModal({
                title: '提示',
                content: '请至少选择一项技能',
                showCancel : false
            })
        }
    }
})