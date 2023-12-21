export type SucssInfoModel<T = any> = {
  data: T;
  message: string;
  code: number;
};

export interface ErrorInfoModel {
  code: number;
  message: string;
  time: string;
  path: string;
}
