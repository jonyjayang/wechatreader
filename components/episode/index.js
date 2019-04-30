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
    _index:""

  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
