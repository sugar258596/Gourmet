import { GetUserInfoModel } from '@/api/sys/model/userModel';

export interface ListParams {
  id: number;
  content: string;
  createdAt: string;
  updatedAt: string;
  user: Pick<GetUserInfoModel, 'userId' | 'username' | 'avatar'>;
  replies: ListParams[];
}

export interface CommetnParmas {
  List: ListParams[];
}

/**
 * @description 发布评论参数
 */
export interface AddParams {
  id: number;
  content: string;
}

/**
 * @description 获取评论参数
 */
export interface GetParams {
  id?: number;
  page?: number;
  pageSize?: number;
}