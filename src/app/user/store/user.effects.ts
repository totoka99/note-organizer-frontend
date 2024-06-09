import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { UserService } from '../services/user.service';
import { LoginUser } from '../interfaces/loginUser';
import {
  catchError,
  exhaustMap,
  map,
  of,
  switchMap,
  tap
} from 'rxjs';
import {
  getUserDetails,
  loginUserAction,
  loginUserErrorAction,
  logoutUserAction,
  registerUserAction,
  registrationSuccessfulAcction,
  requestNewPassword,
  requestNewPasswordSuccessful,
  requestNewPasswordUnsuccessful,
  setJwtTokenAction,
  setUserAction
} from './user.actions';
import { User } from '../user';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { RegisterUser } from '../interfaces/registerUser';
import { NotificationsService } from 'src/app/core/notifications/notifications.service';
import { PasswordRequest } from '../interfaces/passwordRequest';

@Injectable()
export class UserEffects {
  constructor(
    private readonly router: Router,
    private readonly actions$: Actions,
    private readonly userService: UserService,
    private readonly notificationService: NotificationsService
  ) {}

  public readonly loginUser = createEffect(() =>
    this.actions$.pipe(
      ofType(loginUserAction),
      switchMap((action: LoginUser) =>
        this.userService.loginUser(action).pipe(
          map((token: string) => {
            this.router.navigate(['/notes/note-menu']);
            this.notificationService.showNotification(
              'Login successful '
            );
            return setJwtTokenAction({
              token: token
            });
          }),
          catchError((error: HttpErrorResponse) => {
            this.notificationService.showNotification(
              'Wrong username or password',
              'Close',
              2000
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
  public readonly logoutUser = createEffect(
    () =>
      this.actions$.pipe(
        ofType(logoutUserAction),
        tap(() => {
          this.notificationService.showNotification(
            'Logout successful'
          );
        })
      ),
    { dispatch: false }
  );
  public readonly registerUser = createEffect(() =>
    this.actions$.pipe(
      ofType(registerUserAction),
      switchMap((action: RegisterUser) =>
        this.userService.registerUser(action).pipe(
          map(() => {
            this.router.navigate(['/login']);
            this.notificationService.showNotification(
              'Account created'
            );
            return registrationSuccessfulAcction;
          }),
          catchError((error: HttpErrorResponse) => {
            this.notificationService.showNotification(
              'error: ' + error.error.detail,
              'Close',
              3000
            );
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
  public readonly requestNewPassword = createEffect(() =>
    this.actions$.pipe(
      ofType(requestNewPassword),
      switchMap((passwordRequest: PasswordRequest) =>
        this.userService
          .requestnewPassword(passwordRequest)
          .pipe(
            map((response) => {
              this.notificationService.showNotification(
                'new Password requested'
              );
              return requestNewPasswordSuccessful();
            }),
            catchError((error) => {
              this.notificationService.showNotification(
                'request failed'
              );
              return of(requestNewPasswordUnsuccessful());
            })
          )
      )
    )
  );
}
