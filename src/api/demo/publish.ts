import { defHttp } from '/@/utils/http/axios';

import { ErrorMessageMode } from '/#/axios';

import { AddParams, GetParams, GetInfoModel } from './model/publishModel';
import { SucssInfoModel } from '../type';

// 获取发布美食以及删除的接口

enum Api {
  AddFoodPost = '/food-post/add',
  GetFoodPost = '/food-post/get',
  GetUserFoodPost = '/food-post/user',
  DeleteFoodPost = '/food-post/delete',
}

/**
 * @description - 发布的方法
 * @param {AddParams} params - 携带参数
 * @param {string} params.title - 标题
 * @param {string} params.description - 描述
 * @param {FileList} params.files - 文件
 * @param {ErrorMessageMode} mode - 错误提示
 * @returns
 */

export function addFoodPost(params: AddParams, mode: ErrorMessageMode = 'modal') {
  return defHttp.post<SucssInfoModel>(
    {
      url: Api.AddFoodPost,
      params,
    },
    {
      errorMessageMode: mode,
      successMessageMode: 'message',
    },
  );
}

/**
 * @description - 获取的方法
 * @param {GetParams} params - 携带参数
 * @param {string} params.title - 标题
 * @param {number} params.page - 页码
 * @param {number} params.pageSize - 每页的数量
 * @param {ErrorMessageMode} mode - 错误提示
 * @returns
 */

export function getFoodPost(params?: GetParams, mode: ErrorMessageMode = 'modal') {
  return defHttp.get<GetInfoModel>(
    {
      url: Api.GetFoodPost,
      params,
    },
    {
      errorMessageMode: mode,
    },
  );
}

/**
 * @description - 删除的方法
 * @param {number} id - id
 * @param {ErrorMessageMode} mode - 错误提示
 */

export function deleteFoodPost(id: number) {
  return defHttp.delete<SucssInfoModel>(
    {
      url: `${Api.DeleteFoodPost}/${id}`,
    },
    {
      successMessageMode: 'message',
      errorMessageMode: 'modal',
    },
  );
}

/**
 * @description - 获取当前用户下发布的信息
 * @param {ErrorMessageMode} mode - 错误提示
 * @returns
 */
export function getUserFoodPost(mode: ErrorMessageMode = 'modal') {
  return defHttp.post<SucssInfoModel>(
    {
      url: Api.GetUserFoodPost,
    },
    {
      errorMessageMode: mode,
    },
  );
}
