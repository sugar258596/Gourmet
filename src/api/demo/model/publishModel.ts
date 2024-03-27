interface Image {
  filename: string;
  imgURL: string;
  size: number;
  type: string;
}

export interface List {
  id: number;
  title: string;
  description: string;
  imageList: Image[];
  rating: number;
  createdAt: string;
  updatedAt: string;
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
  List: List[];
  length: number;
}
