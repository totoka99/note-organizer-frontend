import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { UserService } from '../services/user.service';
import { LoginUser } from '../interfaces/loginUser';
import { catchError, map, of, switchMap } from 'rxjs';
import {
  getUserDetails,
  loginUserAction,
  loginUserErrorAction,
  registerUserAction,
  registrationSuccesfulAcction,
  setJwtTokenAction,
  setUserAction
} from './user.actions';
import { User } from '../user';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { RegisterUser } from '../interfaces/registerUser';

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
              token: token
            });
          }),
          catchError((error: HttpErrorResponse) => {
            window.alert(
              error.status +
                'cant login wrong username or password'
            );
            return of(loginUserErrorAction());
          })
        )
      )
    )
  );
  public readonly retrieveUser = createEffect(() =>
    this.actions$.pipe(
      ofType(setJwtTokenAction),
      switchMap(() => of(getUserDetails()))
    )
  );
  public readonly registerUser = createEffect(() =>
    this.actions$.pipe(
      ofType(registerUserAction),
      switchMap((action: RegisterUser) =>
        this.userService.registerUser(action).pipe(
          map(() => {
            this.router.navigate(['/login']);
            return registrationSuccesfulAcction();
          }),
          catchError((error: HttpErrorResponse) => {
            window.alert(error.error.title);
            return of(loginUserErrorAction());
          })
        )
      )
    )
  );
  public readonly getUserDetails = createEffect(() =>
    this.actions$.pipe(
      ofType(getUserDetails),
      switchMap(() =>
        this.userService
          .getUserDetails()
          .pipe(map((user: User) => setUserAction(user)))
      )
    )
  );
}
