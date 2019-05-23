// components/navi/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
   
    title: String,
    first: Boolean,
    latest: Boolean
  },

  /**
   * 组件的初始数据
   */
  data: {
    disLeftSrc: 'images/triangle.dis@left.png',
    leftSrc: 'images/triangle@left.png',
    disRightSrc: 'images/triangle.dis@right.png',
    rightSrc: 'images/triangle@right.png'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    OnLeft:function(){
      //自定义事件，第一个字段代表事件名称，第二个对象就可以将想要的属性拿到
      if(!this.properties.latest){
        this.triggerEvent('left',{},{})
      }
    },
    OnRight:function(){
      //自定义事件，第一个字段代表事件名称，第二个对象就可以将想要的属性拿到
      if(!this.properties.first){
        this.triggerEvent('right',{},{})
      }
    },

  }
})
