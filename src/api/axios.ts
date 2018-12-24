import axios from 'axios';

import { config, request, requestFail, response, responseError } from '../config/axios';

const ax = axios.create(config);

// 拦截器
ax.interceptors.request.use(request, requestFail);

ax.interceptors.response.use(response, responseError);

export { ax };
