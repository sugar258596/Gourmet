import { GetUserInfoModel } from '@/api/sys/model/userModel';

export interface List {
  id: number;
  comment: string;
  createdAt: string;
  updatedAt: string;
  user: Pick<GetUserInfoModel, 'userId' | 'username' | 'avatar'>;
  replies: List[];
}

/**
 * @description 发布评论参数
 */
export interface AddComment {
  id: number;
  content: string;
}

/**
 * @description 获取评论参数
 */
export interface GetComment {
  id?: number;
  page?: number;
  pageSize?: number;
}
