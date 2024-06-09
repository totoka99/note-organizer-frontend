import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  pwResetCode?: string;
  myForm!: FormGroup;
  inputsMatch: boolean = false;
  valueChangesSubscription!: Subscription;

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.pwResetCode = this.route.snapshot.params['pwResetCode'];
    this.myForm = this.fb.group({
      password: ['', Validators.required],
      repeatPassword: ['', Validators.required]
    });
    this.valueChangesSubscription =
      this.myForm.valueChanges.subscribe(() => {
        this.inputsMatch =
          this.myForm.get('password')?.value ===
          this.myForm.get('repeatPassword')?.value;
      });
  }
  submitForm() {
    if (this.myForm.valid) {
      const formData = this.myForm.value;
      console.log('Form submitted:', formData);
      // Perform further actions like sending data to a server
    }
  }
  ngOnDestroy(): void {
    this.valueChangesSubscription.unsubscribe();
  }
}
