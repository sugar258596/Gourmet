interface Address {
  // id
  id: number;
  // 地址
  address: string;
  // 昵称
  addressName: string;
  // 电话
  phone: string;
  //邮政编码
  PostalCode: number;
  // 状态
  static: string;
}

export interface SearchInfoModel {
  List: Address[];
  length: number;
}

export type AddParams = Omit<Address, 'id' | 'static'>;

export interface SearchParams {
  name?: string;
  page?: number;
  pagination?: number;
}
