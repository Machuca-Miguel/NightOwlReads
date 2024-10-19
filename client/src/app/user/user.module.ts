import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { SharedModule } from '../shared/shared.module';
import { UserRoutingModule } from './user-routing.module';
import { UserBookshelvesComponent } from './user-bookshelves/user-bookshelves.component';
import { UserFriendsComponent } from './user-friends/user-friends.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserStatsComponent } from './user-stats/user-stats.component';



@NgModule({
  declarations: [
    UserComponent,
    UserProfileComponent,
    UserBookshelvesComponent,
    UserFriendsComponent,
    UserStatsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    UserRoutingModule,
  ],
})
export class UserModule { }
