import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
import { Store } from '@ngrx/store';
import { loginUserAction } from '../../store/user.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      userData: new FormGroup({
        email: new FormControl(null, [
          Validators.email,
          Validators.required
        ]),
        password: new FormControl(null, [
          Validators.required,
          Validators.minLength(10)
        ])
      })
    });
  }
  onSubmit() {
    this.store.dispatch(
      loginUserAction({
        username: this.loginForm.get('userData.email')?.value,
        password: this.loginForm.get('userData.password')?.value
      })
    );
  }
}
