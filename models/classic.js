import {Http} from '../utils/http'
class ClassicModel extends Http{
    getlastest(sCallback){
        this.request({
            url:'classic/latest',
            success:(res)=>{
                sCallback(res)
            }
        })
    }
    getClassic(index,nextOrPrevious,sCallback){
        let classic = wx.getStorageSync();
        let key=nextOrPrevious==='next'?this._getkey(index+1):this._getkey(index-1)
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
    _getkey(index){
        const key = 'classic-' + index
        return key
    }
}
export {ClassicModel}