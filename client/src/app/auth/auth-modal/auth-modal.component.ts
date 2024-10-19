import { DialogRef } from '@angular/cdk/dialog';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-auth-modal',
  templateUrl: './auth-modal.component.html',
  styleUrls: ['./auth-modal.component.scss'],
})
export class AuthModalComponent implements OnInit {
  public showLoginModal!: boolean;
  public transitionText!: boolean;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
  public dialogRef: MatDialogRef<AuthModalComponent>,

) {}

  ngOnInit() {
    this.showLoginModal = this.data.showLoginModal;
  }

  toggleView(value: boolean) {
    this.transitionText = true;
    this.showLoginModal = value;
  }
}
