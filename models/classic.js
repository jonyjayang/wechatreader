import {Http} from '../utils/http'
class ClassicModel extends Http{
    getlastest(sCallback){
        this.request({
            url:'classic/latest',
            success:(res)=>{
                this._setLatestIndex(res.index)
                let key = this._getkey(res.index)
                wx.setStorageSync(key, res)
                sCallback(res)
            }
        })
    }
    getClassic(index,nextOrPrevious,sCallback){
        let key=nextOrPrevious==='next'?this._getkey(index+1):this._getkey(index-1)
        let classic = wx.getStorageSync(key);
        if(!classic){
            this.request({
                url:`classic/${index}/${nextOrPrevious}`,
                success:(res)=>{
                    wx.setStorageSync(key, res);
                    sCallback(res)
                }
            })
        }else{
            sCallback(classic)
        }
    }
  
    _setLatestIndex(index) {
        wx.setStorageSync('latest', index)
    }
    isLatest(index){
        let latestIndex = this._getLatest()
        return latestIndex == index ? true : false
    }
    isFirst(index){
        return  index ===1?true:false  
    }
    _getkey(index){
        const key = 'classic-' + index
        return key
    }
    _getLatest(){
        const index = wx.getStorageSync('latest')
        return index
    }
 
}
export {ClassicModel}