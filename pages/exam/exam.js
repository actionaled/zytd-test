// pages/exam/exam.js
Page({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    num:'1',
    question:'问题？',
    item:'A.XX\nB.xx',
    answer:"ada",

  },

  /**
   * 组件的方法列表
   */
  methods: {
  },
  cleckbtn:function() {
    
    console.log(this.innerText)       
    this.setData({
      answer: this.text
    })
           
  },
  onLoad() {
    console.log('111')
  }
  
})
