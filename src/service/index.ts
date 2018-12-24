import { API_HOST } from '../api';
import { ax } from '../api/axios';

// get blog wesite infomation
export async function getApplyStatus<T = undefined>(params: any): Promise<AjaxResponse<T>> {
  const res = await ax.post<AjaxResponse<T>>(`${API_HOST}`, params);
  return res.data;
}
