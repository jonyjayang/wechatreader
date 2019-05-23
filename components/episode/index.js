// components/episode/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    //observer当属性的值进行改变之后会被坚挺到
    index:{
      type:String,
      observer:function(newVal,oldVal,changePath){
          let val=newVal<10?"0"+newVal:newVal
          this.setData({
            _index:val
          })

      }

    }

  },

  /**
   * 组件的初始数据
   */
  data: {
    _index:"",
    year:'',
    months: [
      '一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月',
      '十二月'
    ],
  

  },
  //生命周期函数中添加当月时间
  attached:function(){
    let date = new Date()
    let year = date.getFullYear()
    let month = date.getMonth()
    console.log(year)
    console.log(month)

    this.setData({
      year,
      month:this.data.months[month]
    })
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
