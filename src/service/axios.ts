import axios, { AxiosPromise, AxiosRequestConfig } from 'axios';
import { Observable } from 'rxjs';

import { config, request, requestFail, response, responseError } from '../config/axios';

const ax = axios.create(config);

// 拦截器
ax.interceptors.request.use(request, requestFail);

ax.interceptors.response.use(response, responseError);

const observableRequest = (request: AxiosPromise) =>
  Observable.create((observer: any) => {
    request
      .then(response => {
        observer.next(response.data);
        observer.complete();
      })
      .catch(err => observer.error(err));
  });

const get = (url: string, config?: AxiosRequestConfig) => observableRequest(ax.get(url, config));
const post = (url: string, data?: any, config?: AxiosRequestConfig) => observableRequest(ax.post(url, data, config));

const put = (url: string, data?: any, config?: AxiosRequestConfig) => observableRequest(ax.put(url, data, config));

export { get, post, put };
