import { defHttp } from '/@/utils/http/axios';

import { ErrorMessageMode } from '/#/axios';

import { AddComment, GetComment, List } from './model/commentModel';
import { SucssInfoModel } from '../type';

// 获取发布以及删除的接口

enum Api {
  AddComment = '/comment/add',
  GetComment = '/comment/get',
  DeleteComment = '/comment/delete',
}

/**
 * @description - 发布的方法
 * @param {AddComment} params - 携带参数
 * @param {number} params.id - 美食的id
 * @param {string} params.content - 评论的内容
 * @param {ErrorMessageMode} mode - 错误提示
 * @returns
 */

export function addComment(params: AddComment, mode: ErrorMessageMode = 'modal') {
  return defHttp.post<SucssInfoModel>(
    {
      url: Api.AddComment,
      params,
    },
    {
      errorMessageMode: mode,
    },
  );
}

/**
 * @description - 获取评论的方法
 * @param {GetComment} params - 携带参数
 * @param {number} params.id - 美食的id
 * @param {number} params.page - 页码
 * @param {number} params.pageSize - 每页的数量
 * @param {ErrorMessageMode} mode - 错误提示
 * @returns
 */

export function getComment(params: GetComment, mode: ErrorMessageMode = 'modal') {
  return defHttp.get<SucssInfoModel<List[]>>(
    {
      url: Api.GetComment,
      params,
    },
    {
      errorMessageMode: mode,
    },
  );
}

/**
 * @description - 删除评论的方法
 * @param {number} id - 评论的id
 * @returns
 */

export const removeComment = (id: number) => {
  return defHttp.delete<SucssInfoModel>(
    {
      url: `${Api.DeleteComment}/${id}`,
    },
    {
      successMessageMode: 'message',
      errorMessageMode: 'modal',
    },
  );
};
