import { createAction, props } from '@ngrx/store';
import { LoginUser } from '../interfaces/loginUser';
import { RegisterUser } from '../interfaces/registerUser';
import { User } from '../user';

export const loginUserAction = createAction(
  '[USER] Login user',
  props<LoginUser>()
);
export const setUserAction = createAction(
  '[USER] Set Login user',
  props<User>()
);
export const registerUserAction = createAction(
  ' [USER] Register user',
  props<RegisterUser>()
);
export const logoutUserAction = createAction(' [USER] logout User Action ');
