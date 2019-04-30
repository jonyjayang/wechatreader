import {
  ClassicModel
} from '../../models/classic.js'
import {
 LikeModel
} from '../../models/like.js'
const classicModel = new ClassicModel()
const likeModel = new LikeModel()

// pages/classic/classic.js
Component({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  attached (options) {
    classicModel.getlastest((res)=>{
      this.setData({
        classic: res,
        likeCount: res.fav_nums,
        likeStatus: res.like_status
      })
    })
  },
  methods: {
    onlike(e){
      console.log(e)
      let behavior=e.detail.behavior;
      likeModel.like(behavior,this.data.classic.id,this.data.classic.type)

    }

  }

  
})