import { AxiosResponse, AxiosRequestConfig } from 'axios';
import { API_ROOT } from '../api/url';

// axios config
export const config: AxiosRequestConfig = {
  baseURL: API_ROOT,

  // 请求前处理数据
  transformRequest: [
    (data, headers) => {
      // 自定义请求拦截逻辑，可以处理权限，请求发送监控等

      // ...
      return data;
    }
  ],

  // 请求后的数据处理
  transformResponse: [
    (response: Ajax.Response) => {
      // 处理返回数据格式
      return response;
    }
  ],

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
  return config;
}

// request Fail
export function requestFail(error: Error) {
  // 自定义发送请求失败逻辑，断网，请求发送监控等
  return Promise.reject(error);
}

// response
export function response(response: AxiosResponse<Ajax.Response>) {
  return response;
}

// response error
export function responseError(error: any) {
  // 登录校验
  return Promise.reject(error);
}
