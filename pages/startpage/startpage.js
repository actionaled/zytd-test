// pages/exclse.js
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
    "title":"特种设备电梯操作证考试\n",
    "text": "考试时间：60分钟，考试题目100题，70分及格"

  },

  /**
   * 组件的方法列表
   */
  methods: {
    startExam: function () {
      wx.navigateTo({
        url: '../exam/exam',
      })
    }


  }
 
})
