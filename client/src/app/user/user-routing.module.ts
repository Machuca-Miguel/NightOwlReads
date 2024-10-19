import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserBookshelvesComponent } from './user-bookshelves/user-bookshelves.component';
import { UserFriendsComponent } from './user-friends/user-friends.component';
import { UserStatsComponent } from './user-stats/user-stats.component';

const routes: Routes = [
  {
    path: '',
    component: UserComponent,
    children: [
      { path: 'profile', component: UserProfileComponent },
      { path: 'bookshelves', component: UserBookshelvesComponent },
      { path: 'friends', component: UserFriendsComponent },
      { path: 'stats', component: UserStatsComponent },
      { path: '', redirectTo: 'profile', pathMatch: 'full' },

    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule { }
