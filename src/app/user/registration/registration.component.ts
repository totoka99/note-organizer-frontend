import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  genders = ['male', 'female'];
  signupForm!: FormGroup;

  constructor() {}

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      userData: new FormGroup({
        username: new FormControl(
          null,
          Validators.required
        ),
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
    console.log(this.signupForm);
  }
  onAddHobby() {
    (<FormArray>this.signupForm.get('hobbies')).push(
      new FormControl(null, Validators.required)
    );
  }
}
