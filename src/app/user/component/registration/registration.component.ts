import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
import { Store } from '@ngrx/store';
import { registerUserAction } from '../../store/user.actions';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  signupForm!: FormGroup;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      userData: new FormGroup({
        username: new FormControl(null, Validators.required),
        email: new FormControl(null, [
          Validators.email,
          Validators.required
        ]),
        password: new FormControl(null, [
          Validators.required,
          Validators.minLength(5)
        ])
      }),
      gender: new FormControl('male')
    });
  }
  onSubmit() {
    this.store.dispatch(
      registerUserAction({
        username: this.signupForm.get('userData.username')
          ?.value,
        password: this.signupForm.get('userData.password')
          ?.value,
        email: this.signupForm.get('userData.email')?.value
      })
    );
  }
}
