import {
  Component,
  Input,
  AfterViewInit,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { User } from 'src/app/models/user';
import { UserApiService } from 'src/app/services/api/user-api.service';
import { Achievement } from 'src/app/models/achievement-model';
import { AchievementApiService } from 'src/app/services/api/achievement-api.service';
import { AchievementCategory } from 'src/app/common/enums/achievement-category';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent implements OnInit {
  public user!: User;
  public achievements: Achievement[] = [];

  constructor(
    public userApi: UserApiService,
    public achievementApi: AchievementApiService
  ) {}

  ngOnInit(): void {
    this.userApi.getUserInfo().subscribe((user) => {
      if (user !== null) {
        this.user = user;
        this.user.socialMedia = [
          'Instagram',
          'Facebook',
          'LinkedIn',
          'Tiktok',
          'Pinterest',
        ];

        this.achievementApi
          .getAchievements(user.id)
          .subscribe((allAchievements) => {
            this.achievements = allAchievements.map((achievement) =>
              Achievement.create(achievement)
            );
          });
      }
    });
  }
}
