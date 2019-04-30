import {config} from '../config'
const tips = {
    1: '抱歉，出现了一个错误',
    1005:'appkey无效，请前往www.7yue.pro申请',
    3000:'期刊不存在'
}
class Http{
    request(params){
        if(!params.method){
            params.method="GET"
        }
        wx.request({
            url: config.api_base_url+params.url,
            data: params.data,
            header: {
                'content-type':'application/json',
                'appkey':config.appkey
            },
            method: params.method,
            dataType: 'json',
            responseType: 'text',
            success: (result)=>{
              const code=result.statusCode.toString()
              if(code.startsWith("2")){
                  params.success&&params.success(result.data)
              }else{
                  let error_code=result.error_code;
                  _show_erro_tip(error_code);
              }
              
                
            },
            fail: ()=>{
                this._show_error(1)
            },
            complete: ()=>{}
        });

    }
    _show_erro_tip(error_code){
        if(error_code=""){
            error_code=1;
        }
        const tip=tips[error_code]
        wx.showToast({
            title: tip?tip:tips[1],
            icon: 'none',
            image: '',
            duration: 1500,
        });

    }
}
export {Http}