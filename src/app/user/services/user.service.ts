import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
  HttpParams,
  HttpResponse
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginUser } from '../interfaces/loginUser';
import { map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';
import { User } from '../user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private readonly httpclient: HttpClient) {}

  // public loginUser(loginUser: LoginUser) {
  //   return this.httpclient.post<any>('http://localhost:8080/api/auth/sign-in', loginUser).pipe(
  //     map((response: any) => {
  //       console.log();
  //       return response;
  //     })
  //   );
  // }
  public loginUser(loginUser: LoginUser): Observable<any> {
    return this.httpclient.post<User>(
      'http://localhost:8080/api/auth/sign-in',
      loginUser
    );
  }
}
