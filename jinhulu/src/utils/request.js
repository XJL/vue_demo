import axios from 'axios';
import Vue from 'vue';

const request = axios.create({
  baseURL: 'https://www.jinhulu.com/api/',
  method: 'get',
  timeout: 30000,
  params: JSON.parse(sessionStorage.getItem('user')) || {},
  headers:{
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  transformRequest: [function (data) {
    let arr = [];
    for(let key in data) {
      arr.push(`${key}=${data[key]}`);
    }
    return arr.join('&');
  }]
});

/**
 * axios.get
 * @param url
 * @param params
 * @returns {Promise<any>}
 */
function get(url, params) {
  return new Promise((resolve, reject) => {
    request.get(url, params)
      .then((rsp)=> {
        if(rsp.status == 200) {
          if(rsp.data && rsp.data.code == 0) {
            resolve(rsp.data.obj);
          }
          else {
            reject(rsp.data.message)
          }
        }
        else {
          reject("网络请求失败")
        }
      })
      .catch((error)=>{
        reject(error)
      })
  })
}

/**
 * axios.post
 * @param url
 * @param params
 * @returns {Promise<any>}
 */
function post(url, params) {
  return new Promise((resolve, reject) => {
    request.post(url, params)
      .then((rsp)=> {
        if(rsp.status == 200) {
          if(rsp.data && rsp.data.code == 0) {
            resolve(rsp.data.obj);
          }
          else {
            reject(rsp.data.message)
          }
        }
        else {
          reject("网络请求失败")
        }
      })
      .catch((error)=>{
        reject(error)
      })
  })
}

/**
 * 上传数据 TODO:以后再完善
 * @param url
 * @param params
 */
function upload(url, params) {

}

export default {
  request,
  get,
  post
}
