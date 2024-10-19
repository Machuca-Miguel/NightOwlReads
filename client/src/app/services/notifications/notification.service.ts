import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  private defaultDuration = 3000;

  constructor(private snackBar: MatSnackBar) {}

  private showMessage(
    message: string,
    action: string | undefined,
    config: MatSnackBarConfig
  ) {
    this.snackBar.open(message, action, config);
  }

  success(message: string, action: string = 'Ok', duration?: number, position?: 'top' | 'bottom') {
    const config: MatSnackBarConfig = {
      duration: duration || this.defaultDuration,
      panelClass: ['success-snackbar'],
      verticalPosition: position || 'bottom',
      horizontalPosition: 'center',
      politeness: 'polite',
    };
    this.showMessage(message, action, config);
  }

  error(message: string,  action: string = 'Ok', duration?: number, position?: 'top' | 'bottom') {
    const config: MatSnackBarConfig = {
      duration: duration || this.defaultDuration,
      panelClass: ['error-snackbar'],
      verticalPosition: position || 'bottom',
      horizontalPosition: 'center',
      politeness: 'assertive',
    };
    this.showMessage(message, action, config);
  }

  general(message: string, action: string = 'Ok', duration?: number, position?: 'top' | 'bottom') {
    const config: MatSnackBarConfig = {
      duration: duration || this.defaultDuration,
      panelClass: ['general-snackbar'],
      verticalPosition: position || 'bottom',
      horizontalPosition: 'center',
      politeness: 'polite',
    };
    this.showMessage(message, action, config);
  }
}
