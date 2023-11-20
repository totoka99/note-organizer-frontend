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
import { RegisterUser } from '../interfaces/registerUser';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url: string = environment.backendUrl;
  constructor(private readonly httpclient: HttpClient) {}

  public loginUser(loginUser: LoginUser): Observable<any> {
    return this.httpclient.post(
      this.url + 'auth/sign-in',
      loginUser,
      { responseType: 'text' }
    );
  }
  public registerUser(registerUser: RegisterUser) {
    return this.httpclient.post(
      this.url + 'auth/registration',
      registerUser
    );
  }
  public getUserDetails() {
    return this.httpclient.get<User>(
      this.url + 'user/user-details'
    );
  }
}
