import { createReducer, on } from '@ngrx/store';
import { User } from '../user.interface';
import { SetSelectedNote } from '../../notes/interfaces';
import { setSelectedNoteAction } from '../../notes/store/note.actions';
import {
  logoutUserAction,
  setJwtTokenAction,
  setUserAction
} from './user.actions';

export interface UserState {
  user: User | null;
  token: string | null;
}

export const initialState: UserState = {
  user: null,
  token: null
};

export const userReducer = createReducer(
  initialState,
  on(setUserAction, (state: UserState, user: User) => ({
    ...state,
    user: user
  })),
  on(setJwtTokenAction, (state: UserState, prop: any) => ({
    ...state,
    token: prop.token
  })),
  on(logoutUserAction, (state: UserState) => ({
    ...state,
    user: null,
    token: null
  }))
);
