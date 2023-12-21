import { defHttp } from '@/utils/http/axios';
import { SucssInfoModel } from '@/api/type';

import { SearchInfoModel, AddParams, SearchParams } from './model/addressModel';

enum Api {
  AddAddress = '/address',
  GetAddress = '/address/1',
  EditAddress = '/address/2',
  DeleteAddress = '/address/3',
}

export const AppendApi = (params: AddParams) => {
  return defHttp.post<SucssInfoModel>({
    url: Api.AddAddress,
    params,
  });
};

export const SearchApi = (params?: SearchParams) => {
  return defHttp.get<SearchInfoModel>({
    url: Api.GetAddress,
    params,
  });
};

export const EditApi = (id: number, params: AddParams) => {
  return defHttp.request<SucssInfoModel>({
    url: `${Api.EditAddress}/${id}`,
    method: 'PATCH',
    params,
  });
};

export const DeleteApi = (id: number) => {
  return defHttp.delete<SucssInfoModel>({
    url: `${Api.DeleteAddress}/${id}`,
  });
};
