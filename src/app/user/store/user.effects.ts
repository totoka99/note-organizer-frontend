import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { UserService } from '../services/user.service';
import { LoginUser } from '../interfaces/loginUser';
import { catchError, map, of, switchMap } from 'rxjs';
import {
  loginUserAction,
  logoutUserAction,
  setUserAction
} from './user.actions';
import { setSelectedNoteAction } from 'src/app/notes/store/note.actions';
import { User } from '../user';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable()
export class UserEffects {
  constructor(
    private readonly router: Router,
    private readonly actions$: Actions,
    private readonly userService: UserService
  ) {}

  public readonly loginUser = createEffect(() =>
    this.actions$.pipe(
      ofType(loginUserAction),
      switchMap((action: LoginUser) =>
        this.userService.loginUser(action).pipe(
          map((user: User) => {
            console.log(user);
            this.router.navigate(['/notes/note-list']);
            return setUserAction(new User(user.username, user.email));
          }),
          catchError((error: HttpErrorResponse) => {
            console.log(error);
            return of(setUserAction(new User('name', 'email')));
          })
        )
      )
    )
  );
}
