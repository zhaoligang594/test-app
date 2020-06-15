import React from 'react'
import {fetch as fetchPolyfill} from 'whatwg-fetch'
import { BrowserRouter as Router,Route,Link,Redirect, withRouter} from "react-router-dom";
import LoginMod from './../login/Signin'

import $ from 'jquery'

import 'antd/dist/antd.css';
import { Button, notification,message,Modal } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';

import store from './../store/store';

const { confirm } = Modal;

/**
 * 我们的基本的工具
 */
const prefix="https://myblogadmin.breakpoint.vip/";
//const prefix="http://localhost:8084/";

//export const Prefix ="http://localhost:8090/";



const openNotificationWithIcon = type => {
    notification[type]({
      message: 'Notification Title',
      description:
        'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
    });
};

/**
 * 我们的基本的提示操作
 * @param {string} type 
 * @param {string} content 
 */
export function MessageAlter(type,content){
    if("success"==type){
        message.success(content,2);
    }else if("error"==type){
        message.error(content,2)
    }else{
        message.warning(content,2);
    }
}


const  showConfirm=function(title,content) {
    confirm({
      title: title,
      icon: <ExclamationCircleOutlined />,
      content: content,
      cancelButtonProps: {
        disabled: true,
      },
      onOk() {
        console.log('OK');
        window.location.href="/login"
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  }
  
  function showDeleteConfirm() {
    confirm({
      title: 'Are you sure delete this task?',
      icon: <ExclamationCircleOutlined />,
      content: 'Some descriptions',
      okText: 'Yes',
      okType: 'danger',
      cancelText: 'No',
      onOk() {
        console.log('OK');
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  }



/**
 * 
 * @param {string} url  请求的url
 * @param {function} callback  回掉函数
 * @param {{}} paramMap  请求参数
 *  * @param {boolean isAlert  是否直接返回
 */
export function FetchDoGet(url,callback,paramMap,isAlert,isHaveToken){

    let moreStr="?"
    if(null!=paramMap&&undefined!=paramMap){
        const keys=Object.keys(paramMap);
        for(var index in keys){
            {moreStr=moreStr+"&"+keys[index]+"="+paramMap[keys[index]]}
        }
    }

    if(undefined==isHaveToken||null==isHaveToken||isHaveToken){
        const token=localStorage.getItem("user_token");
        moreStr=moreStr+"&token="+token
    }

    let request=null;
    if(url.indexOf("http")>=0){
        request=url;
    }else{
        request=prefix+url
    }

    fetch(request+moreStr,{
        method:"GET",
    }).then(function(response){
        return response.json()
    }).then(function(json){
  
        if(undefined==isAlert||null==isAlert||isAlert){
            if(json.respCode===200){
                if(null!=callback&&undefined!=callback){
                    callback(json.data) 
                }
            }else if(json.respCode===300){
                localStorage.setItem("user_token",null)
                store.setState({
                    token:null
                })
                message.error(json.data);
            }else{
                message.warning(json.data);
            }
        }else{
            callback(json) 
        }
    });
}

function getkey(obj) {
    var arr = []
    var str = ''
    for (const key in obj) {
        arr.push(key + "=" + obj[key])
    }
    str = arr.join('&')
}

/**
 * post 的请求操作
 * @param {*} url  请求的路径
 * @param {*} callback  回掉的函数
 * @param {*} paramMap  请求的参数
 */
export function FetchDoPost(url,callback,paramMap){
    //console.log("prefx",prefix)
    let data={}
    if(null!=paramMap&&undefined!=paramMap){
        data=paramMap
    }

    let moreStr=""
    if(null!=paramMap&&undefined!=paramMap){
        const keys=Object.keys(paramMap);
        console.log(keys)
        for(var index in keys){
            moreStr=moreStr+"&"+keys[index]+"="+encodeURI(paramMap[keys[index]])
            console.log("paramMap[keys[index]]",paramMap[keys[index]])
        }
    }

    const token=localStorage.getItem("user_token");
    moreStr=moreStr+"&token="+token
    let requestUrl=prefix+url+moreStr;
    fetch(prefix+url,{
        method:"POST",
        mode: 'cors',
        // credentials: 'include',
        headers: {
            // 'Accept': 'application/json', 
            // 'Content-Type': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
          },
        // body:JSON.stringify(requestData)
        body:moreStr
    }).then(function(response){
        return response.json()
    }).then(function(json){
        if(json.respCode==200){
            if(null!=callback&&undefined!=callback){
                callback(json.data)   
            }
        }else if(json.respCode==300){
            localStorage.setItem("user_token",null)
            store.setState({
                token:null
            })
            message.error(json.data);
            
        }else{
            message.warning(json.data);
        }
       //console.log(json)
    });

}

export const UploadFileUrl="/block/v1/oss/uploadFileToOss"
/**
 * 
 * 上传我们的文件的操作
 * @param {string} postUrl 请求接口
 * @param {FormData} formData new FormData();
 * @param {function} callBack 回掉函数
 */
export function FetchDoUploadFile(postUrl,formData,callBack){
    if(null==postUrl){
        postUrl=UploadFileUrl
    }
    const token=localStorage.getItem("user_token");
    let requestUrl=prefix+postUrl+ "?token="+token;
    /**
     * 执行上传的操作
     */
     fetch(requestUrl,{
         method:"POST",
         body:formData
     }).then(function(response){
         console.log(response)
         return response.json()
     }).then((json)=>{
        if(json.respCode==200){
            message.success("文件上传成功")
            if(null!=callBack&&undefined!=callBack){
                callBack(json.data)
            }
        }else if(json.respCode==300){
            localStorage.setItem("user_token",null)
            store.setState({
                token:null
            })
            message.error(json.data);
            //MessageAlter("系统提示","您没有登陆")    
        }else{
            message.warning(json.data);
            //alert(json.data)
        }
     })
}

export function GetQueryVariable(variable)
{
       var query = window.location.search.substring(1);
       var vars = query.split("&");
       for (var i=0;i<vars.length;i++) {
               var pair = vars[i].split("=");
               if(pair[0] == variable){return pair[1];}
       }
       return(false);
}

//ajax的基本操作

/**
 * ajax的请求
 * @param {string} url 
 * @param {function} callback 
 * @param {{}} paramMap 
 */
export function AjaxDoGet(url,callback,paramMap){

    let moreStr="?"
    if(null!=paramMap&&undefined!=paramMap){
        const keys=Object.keys(paramMap);
        for(var index in keys){
            moreStr=moreStr+"&"+keys[index]+"="+paramMap[keys[index]]
        }
    }

    const token=localStorage.getItem("user_token");
    moreStr=moreStr+"&token="+token

    let request=null;
    if(url.indexOf("http")>=0){
        request=url;
    }else{
        request=prefix+url
    }

    $.get(request+moreStr,function(response){
        if(response.respCode===200){
            if(null!=callback&&undefined!=callback){
                callback(response.data) 
            }
        }else if(response.respCode===300){
            localStorage.setItem("user_token",null)
            store.setState({
                token:null
            })
            message.error(response.data);
        }else{
            message.warning(response.data);
        }
    })
}//end AjaxDoGet

/**
 * ajax的请求
 * @param {string} url 
 * @param {function} callback 
 * @param {{}} paramMap 
 */
export function AjaxDoPost(url,callback,paramMap){

    let request=null;
    if(url.indexOf("http")>=0){
        request=url;
    }else{
        request=prefix+url
    }

    let data={
        ...paramMap,
        token:localStorage.getItem("user_token")
    }

    $.post(request,data,function(response){
        if(response.respCode===200){
            if(null!=callback&&undefined!=callback){
                callback(response.data) 
            }
        }else if(response.respCode===300){
            localStorage.setItem("user_token",null)
            store.setState({
                token:null
            })
            message.error(response.data);
        }else{
            message.warning(response.data);
        }
    })
}//end AjaxDoPost

