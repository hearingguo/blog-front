import qs from 'qs';
import { API_HOST } from '../api';
import * as ax from '../service/axios';

// get blog articles
export async function getArticles<T = undefined>(params: IArticleGetParams): Promise<Ajax.Response<T>> {
  const res = await ax.get(`${API_HOST}/article`, { params });
  return res.data;
}
