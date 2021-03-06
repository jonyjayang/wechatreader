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
    classic: null,
    latest: true,
    first: false,
    likeCount: 0,
    likeStatus: false


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
    },
    onNext(){
      this._updateClassic('next')
    },
    onPrev(){
      this._updateClassic('previous')
    },
    _updateClassic: function (nextOrPrevious) {
      const index=this.data.classic.index
    
      classicModel.getClassic(index,nextOrPrevious,(res)=>{
        this._getLikeStatus(res.id,res.type)
        this.setData({
          classic:res,
          latest:classicModel.isLatest(res.index),
          first:classicModel.isFirst(res.index),
        })
      })
    },
    _getLikeStatus: function (artID, category) {
      likeModel.getClassicLikeStatus(artID, category,
        (res) => {
          this.setData({
            likeCount: res.fav_nums,
            likeStatus: res.like_status
          })
        })
    },
  



  }

  
})