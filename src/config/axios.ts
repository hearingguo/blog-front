import { AxiosResponse, AxiosRequestConfig } from 'axios';

// axios config
export const config: AxiosRequestConfig = {
  maxContentLength: 20000,

  // 超时设置s
  timeout: 30000,

  // 跨域是否带Token
  withCredentials: false,
  responseType: 'json',

  // xsrf 设置
  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  // 自定义正确代码状态码范围
  validateStatus(status: number) {
    return status >= 200 && status < 300;
  }
};

// request
export function request(config: AxiosRequestConfig) {
  // if (
  //   config.method === 'post' ||
  //   config.method === 'put' ||
  //   config.method === 'delete' ||
  //   config.method === 'patch'
  // ) {
  //   config.data = querystring.stringify(config.data)
  // }
  return config;
}

// request Fail
export function requestFail(error: Error) {
  // 自定义发送请求失败逻辑，断网，请求发送监控等

  return Promise.reject(error);
}

// response
export function response(response: AxiosResponse<AjaxResponse>) {
  const { status, msg } = response.data;
  if (status === 0) {
    alert(msg);
  }
  return response;
}

// response error
export function responseError(error: any) {
  alert('error');
  return Promise.reject(error);
}
