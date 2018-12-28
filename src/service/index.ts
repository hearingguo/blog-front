import qs from 'qs';
import { API_HOST } from '../api';
import { ax } from '../api/axios';

// get blog wesite infomation
export async function getArticles<T = undefined>(params: any): Promise<AjaxResponse<T>> {
  const res = await ax.get<AjaxResponse<T>>(`${API_HOST}/article?${qs.stringify(params)}`);
  return res.data;
}
