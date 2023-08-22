import { createReducer, on } from '@ngrx/store';
import { User } from '../user.interface';
import { SetSelectedNote } from '../../notes/interfaces';
import { setSelectedNoteAction } from '../../notes/store/note.actions';
import {
  loginUserAction,
  logoutUserAction,
  setUserAction
} from './user.actions';
import { LoginUser } from '../interfaces/loginUser';

export interface UserState {
  user: User | null;
}

export const initialState: UserState = {
  user: null
};

export const userReducer = createReducer(
  initialState,
  on(
    setSelectedNoteAction,
    (state: UserState, setSelectedNote: SetSelectedNote) => ({
      ...state,
      user: null
    })
  ),
  on(setUserAction, (state: UserState, user: User) => ({
    ...state,
    user: user
  })),
  on(logoutUserAction, (state: UserState) => ({
    ...state,
    user: null
  }))
);
