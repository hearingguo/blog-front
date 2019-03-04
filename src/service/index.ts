import qs from 'qs';
import { API_HOST } from '../api';
import * as ax from '../service/axios';

// get blog articles
export const getArticles = (params: IArticleGetParams) => ax.get(`${API_HOST}/article`, { params });
