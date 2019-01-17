// pages/skillInfo/skillInfo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    "bg_img": "/images/GroupBg.png",
    "skill_params": "",
    "skill_name" : {
      "communication": "移动业务查询",
      "joke": "寒暄笑话聊天",
      "weather": "天气查询",
      "translate": "实时翻译",
      "knowledge": "知识百科",
      "hotel": "酒店预订",
    },
    "skillImg" : {
        "communication": "/images/yidong_bg@2x.png",
        "joke": "/images/joke_bg@2x.png",
        "weather": "/images/weather_bg@2x.png",
        "translate": "/images/translate_bg@2x.png",
        "knowledge": "/images/knowledge_bg@2x.png",
        "hotel": "/images/hotel_bg@2x.png",
    },
    "skillDesc" : {
      "communication": "帮助用户通过客服聊天方式，快速准确查询本机移动业务情况，如套餐余量、话费、流量等相关业务信息",
      "joke": "机器人可以陪伴用户寒暄、聊天，轻松度过休闲时光~",
      "weather": "可以随时帮您查询各地实时天气信息。用了我，天气预报早知道",
      "translate": "具备实时翻译功能，能精准快速帮您翻译~",
      "knowledge": "拥有最全的百科知识，帮您一下全部掌握",
      "hotel": "机器人能够帮您轻松预定入住酒店，享受全流程服务",
    },
    "skillText" : {
      "communication" : [
        ["User:","查询我的套餐余量"],
        ["Robot:","您的手机号码是多少？"],
        ["User:","13811916812"],
        ["Robot:","您的本月套餐为5G，本月余量为2.54G"]
      ],
      "joke" : [
        ["User:","今天真没意思"],
        ["Robot:","那我给你唱首歌吧~"],
        ["User:","我不听"],
        ["Robot:","那给你放一首纯音乐好不好~？"], 
        ["User:","好"],
        ["Robot:","正在播放《森林之夜（雅尼）》"],
      ],
      "weather" : [
        ["User:","明儿什么天儿啊？"],
        ["Robot:","稍等帮您查询天气情况…"], 
        ["Robot:","明天北京天气晴朗有霾，18℃-23℃，东北风 1 - 2级，适宜外出，建议轻度防晒"],
      ],
      "translate" : [
        ["User:","帮我翻译下"],
        ["Robot:","OK"], 
        ["User:","What’s your name？"], 
        ["Robot:","【翻译】你叫什么名字？"], 
        ["User:","Everyday is a new day."],
        ["Robot:","【翻译】每天都是新的一天。"],
      ],
      "knowledge" : [
        ["User:","啄木鸟属于什么科？"],
        ["Robot:","啄木鸟属于啄木鸟科，是鸟纲鴷形目的1科， 约有221种，体长90 - 560毫米。该科鸟类头 大，但颈部较长，最强硬而直，舌长而能伸 缩；因主要食用害虫而得名“森林医生”。"],
        ["User:","豆角生吃有毒吗？"],
        ["Robot:","豆角属于类，未煮熟时食用容易引起中毒， 主要现象有：腹泻、低烧、腹痛伴随呕吐， 因此不建议生食。"],
      ],
      "hotel" : [
        ["User:","我要订酒店"],
        ["Robot:","请问您要预定哪里的？"], 
        ["User:","广州"],
        ["Robot:","请问您要预定哪天的呢？"], 
        ["User:","26日到28日"],
        ["Robot:","请问您要预定哪间酒店？"], 
        ["User:","君悦大酒店"],
        ["Robot:","标准间1288一晚，还有两间，您要预定吗？"],
        ["User:","可以"],
        ["Robot:","已帮您成功预定2018.11.26 - 2018.22.28两晚 广州君悦大酒店标准间一间，1288元 / 天"],
      ]
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: "技能详情"
    })

    console.log(options)

    this.setData({
      'skill_params': options['params'] == undefined ? "communication" : options['params']
    });

    var base64 = wx.getFileSystemManager().readFileSync(this.data.bg_img, 'base64');
    this.setData({
      'bg_img': 'data:image/jpg;base64,' + base64
    });
  }
})