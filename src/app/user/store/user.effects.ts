import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { UserService } from '../services/user.service';
import { LoginUser } from '../interfaces/loginUser';
import { catchError, map, of, switchMap } from 'rxjs';
import {
  getUserDetails,
  loginUserAction,
  setJwtTokenAction,
  setUserAction
} from './user.actions';
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
          map((token: string) => {
            this.router.navigate(['/notes/note-menu']);
            return setJwtTokenAction({
              user: action,
              token: token
            });
          }),
          catchError((error: HttpErrorResponse) => {
            console.log(error);
            return of(
              setUserAction(new User(1, 'name', 'email'))
            );
          })
        )
      )
    )
  );
  public readonly retrieveUser = createEffect(() =>
    this.actions$.pipe(
      ofType(setJwtTokenAction),
      switchMap((action) => of(getUserDetails(action.user)))
    )
  );
  public readonly getUserDetails = createEffect(() =>
    this.actions$.pipe(
      ofType(getUserDetails),
      switchMap((action: LoginUser) =>
        this.userService
          .getUserDetails(action)
          .pipe(map((user: User) => setUserAction(user)))
      )
    )
  );
}
