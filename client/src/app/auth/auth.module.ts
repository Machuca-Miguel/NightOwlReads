import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthModalComponent } from './auth-modal/auth-modal.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    AuthModalComponent,

  ],
  imports: [
    SharedModule
  ],
  exports: [
    LoginComponent,
    RegisterComponent,
    AuthModalComponent,
  ]
})
export class AuthModule { }
