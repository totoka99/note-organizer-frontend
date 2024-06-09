import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import { Store } from '@ngrx/store';
import { requestNewPassword } from '../../store/user.actions';

@Component({
  selector: 'app-forgotten-password',
  templateUrl: './forgotten-password.component.html',
  styleUrls: ['./forgotten-password.component.scss']
})
export class ForgottenPasswordComponent implements OnInit {
  myForm!: FormGroup;

  constructor(private fb: FormBuilder, private store: Store) {}

  ngOnInit(): void {
    this.myForm = this.fb.group({
      emailAddress: ['', Validators.required]
    });
  }
  submitForm() {
    if (this.myForm.valid) {
      const formData = this.myForm.value;
      console.log('Form submitted:', formData);
      this.store.dispatch(
        requestNewPassword({
          emailAddress: this.myForm.get('emailAddress')?.value
        })
      );
    }
  }
}
