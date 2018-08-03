import axios from 'axios'

axios.defaults.timeout = 5000; //超时终止请求
axios.defaults.baseURL ='http://elm.cangdu.org'; //配置请求地址


//http request 拦截器
axios.interceptors.request.use(
  config => {
    // const token = getCookie('名称');注意使用的时候需要引入cookie方法，推荐js-cookie
    config.data = JSON.stringify(config.data);
    config.headers = {
      'Content-Type':'application/x-www-form-urlencoded'
    }
    // if(token){
    //   config.params = {'token':token}
    // }
    return config;
  },
  error => {
    return Promise.reject(err);
  }
);


//http response 拦截器
axios.interceptors.response.use(
  response => {
    if(response.data.errCode ==2){
      router.push({
        path:"/login",
        querry:{redirect:router.currentRoute.fullPath}//从哪个页面跳转
      })
    }
    return response;
  },
  error => {
    return Promise.reject(error)
  }
)


/**
 * 封装get方法
 * @param url
 * @param data
 * @returns {Promise}
 */

export function fetch(url,params={}){
  return new Promise((resolve,reject) => {
    axios.get(url,{
      params:params
    })
      .then(response => {
        resolve(response.data);
      })
      .catch(err => {
        reject(err)
      })
  })
}


/**
 * 封装post请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function post(url,data = {}){
  return new Promise((resolve,reject) => {
    axios.post(url,data)
      .then(response => {
        resolve(response.data);
      },err => {
        reject(err)
      })
  })
}

/**
 * 封装patch请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function patch(url,data = {}){
  return new Promise((resolve,reject) => {
    axios.patch(url,data)
      .then(response => {
        resolve(response.data);
      },err => {
        reject(err)
      })
  })
}

/**
 * 封装put请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function put(url,data = {}){
  return new Promise((resolve,reject) => {
    axios.put(url,data)
      .then(response => {
        resolve(response.data);
      },err => {
        reject(err)
      })
  })
}

// const baseUrl = 'http://elm.cangdu.org';
// const imgBaseUrl = '//elm.cangdu.org/img/';

// export default async(url = '', data = {}, type = 'GET', method = 'fetch') => {
// 	type = type.toUpperCase();
// 	url = baseUrl + url;

// 	if (type == 'GET') {
// 		let dataStr = ''; //数据拼接字符串
// 		Object.keys(data).forEach(key => {
// 			dataStr += key + '=' + data[key] + '&';
// 		})

// 		if (dataStr !== '') {
// 			dataStr = dataStr.substr(0, dataStr.lastIndexOf('&'));
// 			url = url + '?' + dataStr;
// 		}
// 	}

// 	if (window.fetch && method == 'fetch') {
// 		let requestConfig = {
// 			credentials: 'include',
// 			method: type,
// 			headers: {
// 				'Accept': 'application/json',
// 				'Content-Type': 'application/json'
// 			},
// 			mode: "cors",
// 			cache: "force-cache"
// 		}

// 		if (type == 'POST') {
// 			Object.defineProperty(requestConfig, 'body', {
// 				value: JSON.stringify(data)
// 			})
// 		}
		
// 		try {
// 			const response = await fetch(url, requestConfig);
// 			const responseJson = await response.json();
// 			return responseJson
// 		} catch (error) {
// 			throw new Error(error)
// 		}
// 	} else {
// 		return new Promise((resolve, reject) => {
// 			let requestObj;
// 			if (window.XMLHttpRequest) {
// 				requestObj = new XMLHttpRequest();
// 			} else {
// 				requestObj = new ActiveXObject;
// 			}

// 			let sendData = '';
// 			if (type == 'POST') {
// 				sendData = JSON.stringify(data);
// 			}

// 			requestObj.open(type, url, true);
// 			requestObj.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
// 			requestObj.send(sendData);

// 			requestObj.onreadystatechange = () => {
// 				if (requestObj.readyState == 4) {
// 					if (requestObj.status == 200) {
// 						let obj = requestObj.response
// 						if (typeof obj !== 'object') {
// 							obj = JSON.parse(obj);
// 						}
// 						resolve(obj)
// 					} else {
// 						reject(requestObj)
// 					}
// 				}
// 			}
// 		})
// 	}
// }