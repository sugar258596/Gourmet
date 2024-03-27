import { GetUserInfoModel } from '../../sys/model/userModel';

interface Image {
  filename: string;
  imgURL: string;
  size: number;
  type: string;
}

export interface ListTpye {
  id: number;
  title: string;
  description: string;
  imageList: Image[];
  rating: number;
  createdAt: string;
  updatedAt: string;
  user: Pick<GetUserInfoModel, 'userId' | 'username' | 'avatar'>;
}

/**
 * @description - 发布的参数
 */
export interface AddParams {
  title: string;
  description: string;
  files: FileList;
}

/**
 * @description - 查询的参数
 */

export interface GetParams {
  title?: string;
  page?: number;
  pageSize?: number;
}

export interface GetInfoModel {
  List: ListTpye[];
  length: number;
}
