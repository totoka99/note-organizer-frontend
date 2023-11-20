import { User } from '../user';

export interface LoginUser {
  username: string;
  password: string;
}
export interface UserToken {
  token: string;
  user: User;
}
