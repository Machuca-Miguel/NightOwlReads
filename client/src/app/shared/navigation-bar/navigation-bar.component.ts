import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from 'src/app/auth/auth.service';
import { AuthModalComponent } from '../../auth/auth-modal/auth-modal.component';
import { UserApiService } from 'src/app/services/api/user-api.service';
import { User } from 'src/app/models/user';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss'],
})
export class NavigationBarComponent implements OnInit {
  public user!: Observable<User | null>;
  public isLogged$  = this.authService.authState;


  constructor(
    public dialog: MatDialog,
    private authService: AuthService,
    private router: Router,
    public userApi: UserApiService,
    private cdr: ChangeDetectorRef
  ) {}

  public ngOnInit(): void {

    this.authService.authState.subscribe((isLogged) => {
      if (isLogged) {
        this.user = this.userApi.getUserInfo();
      }
    });
  }

  public openAuthModal(): void {
    this.dialog.open(AuthModalComponent, {
      data: { showLoginModal: true },
    });
  }

  public openRegisterModal(): void {
    this.dialog.open(AuthModalComponent, {
      data: { showLoginModal: false },
    });
  }

  public logout(): void {
    this.authService.logout();
    this.router.navigate(['/']);
    this.cdr.detectChanges()

  }

  navigateTo(route: string): void {
    this.router.navigate([route]);
  }
}
