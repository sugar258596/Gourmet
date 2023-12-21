import { defHttp } from '@/utils/http/axios';
import { SucssInfoModel } from '@/api/type';

import { AddParams, SearchParams, SearchInfoModel } from './model/userModel';
import { SuccessMessageMode } from '/#/axios';

enum Api {
  AddUser = '/user/adduser',
  GetUser = '/user',
  EditUser = '/user/1',
  DeleteUser = '/user/2',
}

/**
 * @description 添加用户的方法
 * @param {AddParams} params
 * @param {string} params.username - 用户名
 * @param {string} params.password - 密码
 * @param {string} params.Email - 邮箱
 * @returns
 */
export const AppendApi = (params: AddParams) => {
  return defHttp.post<SucssInfoModel>(
    {
      url: Api.AddUser,
      params,
    },
    {
      successMessageMode: 'message',
      errorMessageMode: 'modal',
    },
  );
};

/**
 * @description 搜索的方法
 * @param {SearchParams} params
 * @param {string} params.username - 用户名
 * @param {number} params.page - 页码
 * @param {number} params.pageSize - 条数
 * @returns
 */

export const SearchApi = (params?: SearchParams, model: SuccessMessageMode = 'none') => {
  return defHttp.get<SearchInfoModel>(
    {
      url: Api.GetUser,
      params,
    },
    {
      successMessageMode: model,
      errorMessageMode: 'modal',
    },
  );
};

/**
 * @description 修改信息
 * @param id - 用户ID
 * @param {SearchParams} params
 * @param {string} params.username - 用户名
 * @param {string} params.password - 密码
 * @param {string} params.Email - 邮箱
 * @returns
 */

export const EditApi = (id: number, params: AddParams) => {
  return defHttp.request<SucssInfoModel>(
    {
      url: `${Api.EditUser}/${id}`,
      method: 'PATCH',
      params,
    },
    {
      successMessageMode: 'message',
      errorMessageMode: 'modal',
    },
  );
};

/**
 * @description 删除用户
 * @param id - 用户ID
 * @returns
 */

export const DeleteApi = (id: number) => {
  return defHttp.delete<SucssInfoModel>(
    {
      url: `${Api.DeleteUser}/${id}`,
    },
    {
      successMessageMode: 'message',
      errorMessageMode: 'modal',
    },
  );
};
