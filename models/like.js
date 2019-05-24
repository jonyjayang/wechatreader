import {Http} from '../utils/http'
class LikeModel extends Http{
    like(behavior,art_id,type){
        let url=behavior=='like'?'like':'like/cancel'
        this.request({
            url:url,
            method:'POST',
            data:{
                art_id:art_id,
                type:type,
            }
        })

    }
    getClassicLikeStatus(artID,category,sCallback){
        this.request({
            url:'classic/' + category + '/' + artID + '/favor',
            success:sCallback
        })
    }
}
export {LikeModel}