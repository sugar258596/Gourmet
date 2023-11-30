/**
 * @description: 登录的参数
 */

export interface LoginParams {
  username: string;
  password: string;
  swxCode: string;
}

/**
 * @description: 登录返回的信息
 */

export interface LoginResultModel {
  userId: string | number;
  token: string;
}

/**
 * @description 获取用户信息返回值
 */

export interface GetUserInfoModel {
  // 用户id
  userId: string | number;
  // 用户名
  username: string;
  // 头像
  avatar: string;
  // 邮箱
  Email: string;
  // 介绍
  roles: RoleInfo[];
}

/**
 * @description: 注册的参数
 */

export interface RegisterParms {
  username: string;
  password: string;
  SecondaryPassword: string;
  Email: string;
}

export interface RoleInfo {
  roleName: string;
  value: string;
}
