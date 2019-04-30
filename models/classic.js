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

}
export {ClassicModel}