// components/like/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    count:Number,
    like:Boolean

  },
  
  /**
   * 组件的初始数据
   */
  data: {
    yes:"images/like.png",
    no:"images/like@dis.png"

  },

  /**
   * 组件的方法列表
   */
  methods: {
    onlike(e){
      let count =this.properties.count;
      let like =this.properties.like;
      count=like?count-1:count+1;
      this.setData({
        count:count,
        like:!like
      })
      // 激活
      let behavior=this.properties.like?'like':'cancel';
      this.triggerEvent('like',{
        behavior:behavior
      },{})
    }

  }
})
