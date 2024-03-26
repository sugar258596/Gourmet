import { GetUserInfoModel } from '@/api/sys/model/authModel';

export interface AddParams {
  username: string;
  password: string;
  Email: string;
  [k: string]: string;
}
export interface SearchParams {
  username: string;
  page: number;
  pagination: number;
  [k: string]: string | number;
}

export interface SearchInfoModel {
  List: GetUserInfoModel[];
  length: number;
}
