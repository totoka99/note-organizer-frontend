import { Injectable } from '@angular/core';
import {
  MatSnackBarModule,
  MatSnackBar
} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {
  constructor(private snackBar: MatSnackBar) {}

  showNotification(
    message: string,
    action: string = 'Close',
    duration: number = 1500
  ) {
    this.snackBar.open(message, action, {
      duration: duration
    });
  }
}
