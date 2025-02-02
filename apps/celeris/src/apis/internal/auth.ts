import type { UserInfo } from 'celeris-types';
import { Get, Post } from '../interceptor';
import { DefRes } from '../type';

// Define the API endpoint URLs as an enum
enum API {
  Login = '/auth/login',
  Logout = '/auth/logout',
  UserInfo = '/user/info',
  PermissionCode = '/auth/permission-code',
}

// Define the parameters for the login API
export interface LoginParams {
  username: string;
  password: string;
}

// Define a function to call the login API
export function loginApi(params: LoginParams) {
  return Post<DefRes<UserInfo>>('/auth/login', { ...params });
}

// Define a function to call the logout API
export function logoutApi() {
  // Make a GET request to the logout API endpoint
  return Post<DefRes<null>>('/auth/logout');
}

// Define a function to call the user info API
export function userInfoApi() {
  return Get<DefRes<UserInfo>>('/user/info');
}

// Define a function to call the permission code API
export function permissionCodeApi() {
  return Get<DefRes<string[]>>('/auth/permission');
}

export { API };
