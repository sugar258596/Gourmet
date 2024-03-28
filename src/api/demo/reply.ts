import { defHttp } from '/@/utils/http/axios';

import { ErrorMessageMode } from '/#/axios';

import { ListTpye } from './model/publishModel';
import { AddParams, GetParams } from './model/replyModel';

import { SucssInfoModel } from '../type';

// 获取回复以及删除的接口

enum Api {
  AddReply = '/reply/add',
  GetReply = '/reply/get',
  DeleteReply = '/reply/delete',
}

/**
 * @description - 发布的方法
 * @param {AddReply} params - 携带参数
 * @param {number} params.id - 评论的id
 * @param {string} params.content - 回复的内容
 * @param {number} params.type - 回复的类型
 * @param {ErrorMessageMode} mode - 错误提示
 * @returns
 */

export function addReply(params: AddParams, mode: ErrorMessageMode = 'modal') {
  return defHttp.post<SucssInfoModel>(
    {
      url: Api.AddReply,
      params,
    },
    {
      errorMessageMode: mode,
      successMessageMode: 'message',
    },
  );
}

/**
 * @description - 获取回复的方法
 * @param {GetReply} params - 携带参数
 * @param {number} params.id - 评论的id
 * @param {number} params.page - 页码
 * @param {number} params.pageSize - 每页的数量
 * @param {ErrorMessageMode} mode - 错误提示
 * @returns
 */

export function getReply(params: GetParams, mode: ErrorMessageMode = 'modal') {
  return defHttp.get<SucssInfoModel<ListTpye[]>>(
    {
      url: Api.GetReply,
      params,
    },
    {
      errorMessageMode: mode,
    },
  );
}

/**
 * @description - 删除回复的方法
 * @param {number} id - 回复的id
 * @returns
 */

export const removeComment = (id: number) => {
  return defHttp.delete<SucssInfoModel>(
    {
      url: `${Api.DeleteReply}/${id}`,
    },
    {
      successMessageMode: 'message',
      errorMessageMode: 'modal',
    },
  );
};
