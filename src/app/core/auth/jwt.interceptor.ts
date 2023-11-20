import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { Store } from '@ngrx/store';
import { tokenSelector } from 'src/app/user/store/user.selector';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(
    private cokie: CookieService,
    private store: Store
  ) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    // const token = this.cokie.get('jwt-auth');

    if (
      request.url.includes('auth/registration') ||
      request.url.includes('api/auth/sign-in')
    ) {
      return next.handle(request);
    }
    let authToken;
    this.store
      .select(tokenSelector)
      .subscribe((data) => (authToken = data));

    const modifiedRequest = request.clone({
      setHeaders: {
        Authorization: 'Bearer ' + authToken
      }
    });
    return next.handle(modifiedRequest);
  }
}
