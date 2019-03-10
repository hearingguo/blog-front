import qs from 'qs';
import { API_HOST } from '../api';
import * as ax from '../service/axios';

// get articles
export const getArticles = (params: IArticleGetParams) => ax.get(`${API_HOST}/article`, { params });

// get calssifies
export const getClassifies = (params?: IClassifyGetParams) => ax.get(`${API_HOST}/classify`, { params });

// links
export const getlinks = () => ax.get(`${API_HOST}/link`);
