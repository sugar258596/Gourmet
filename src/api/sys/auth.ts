import { defHttp } from '/@/utils/http/axios';
import { LoginParams, LoginResultModel, RegisterParms, GetUserInfoModel } from './model/authModel';

import { ErrorMessageMode } from '/#/axios';

enum Api {
  Login = '/auth/login',
  GetUserInfo = '/auth/userInfo',
  GetPermCode = '/auth/code',
  Register = '/auth/register',
  Logout = '/auth/logout',
}

export const GetPermCode = Api.GetPermCode;

/**
 * @description 用户登录
 * @param {LoginParams} params - 请求参数
 * @param mode - 错误信息提示类型
 * @returns  {LoginResultModel}
 */
export const loginApi = (params: LoginParams, mode: ErrorMessageMode = 'modal') => {
  return defHttp.post<LoginResultModel>(
    {
      url: Api.Login,
      params,
    },
    {
      errorMessageMode: mode,
    },
  );
};

/**
 * @description 获取用户信息
 */
export const getUserInfo = () => {
  return defHttp.get<GetUserInfoModel>({ url: Api.GetUserInfo }, { errorMessageMode: 'none' });
};

/**
 * @description 用户注册
 * @param {LoginParams} params - 请求参数
 * @param mode
 * @returns
 */
export const registerApi = (params: LoginParams, mode: ErrorMessageMode = 'modal') => {
  return defHttp.post<RegisterParms>(
    {
      url: Api.Register,
      params,
    },
    {
      errorMessageMode: mode,
    },
  );
};

/**
 *
 *@description 用户退出
 */
export const doLogout = () => {
  return defHttp.post<LoginResultModel>({
    url: Api.Logout,
  });
};
