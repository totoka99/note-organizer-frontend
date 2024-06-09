import { createAction, props } from '@ngrx/store';
import { LoginUser } from '../interfaces/loginUser';
import { RegisterUser } from '../interfaces/registerUser';
import { User } from '../user';
import { PasswordRequest } from '../interfaces/passwordRequest';

export const loginUserAction = createAction(
  '[USER] Login user',
  props<LoginUser>()
);
export const loginUserErrorAction = createAction(
  '[USER] Login Error'
);
export const setUserAction = createAction(
  '[USER] Set Login user',
  props<User>()
);
export const registerUserAction = createAction(
  ' [USER] Register user',
  props<RegisterUser>()
);
export const setJwtTokenAction = createAction(
  '[USER] Set jwt token',
  props<{ token: string }>()
);
export const getUserDetails = createAction(
  '[USER] get user drteails'
);
export const logoutUserAction = createAction(
  ' [USER] logout User Action '
);
export const registrationSuccessfulAcction = createAction(
  '[USER] Registration successful'
);
export const requestNewPassword = createAction(
  '[USER] New password requested',
  props<PasswordRequest>()
);
export const requestNewPasswordSuccessful = createAction(
  '[USER] New password request successful'
);
export const requestNewPasswordUnsuccessful = createAction(
  '[USER] New password request unsuccessful'
);
