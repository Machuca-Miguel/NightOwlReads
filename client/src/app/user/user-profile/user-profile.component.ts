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
export class UserProfileComponent implements OnInit, AfterViewInit {
  public user!: User;
  public achievements: Achievement[] = [];
  @ViewChild('achievementsContainer') achievementsContainer!: ElementRef;

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
          .getAchievementsByUserId(this.user.id!)
          .subscribe((achievements) => {
            this.achievements = [
              {
                id: '1',
                name: 'Ultimate Librarian',
                category: AchievementCategory.GOLD,
                description:
                  "You have reached the pinnacle of literary wisdom. With your encyclopedic knowledge and passion for books, you've become an essential reference for the community. Keep organizing, recommending, and discovering new reads!",
                achievedAt: new Date(),
              },
              {
                id: '2',
                name: 'Ultimate Librarian',
                category: AchievementCategory.SILVER,
                description:
                  "You have reached the pinnacle of literary wisdom. With your encyclopedic knowledge and passion for books, you've become an essential reference for the community. Keep organizing, recommending, and discovering new reads!",
                achievedAt: new Date(),
              },
              {
                id: '3',
                name: 'Ultimate Librarian',
                category: AchievementCategory.BRONZE,
                description:
                  "You have reached the pinnacle of literary wisdom. With your encyclopedic knowledge and passion for books, you've become an essential reference for the community. Keep organizing, recommending, and discovering new reads!",
                achievedAt: new Date(),
              },
              {
                id: '1',
                name: 'Ultimate Librarian',
                category: AchievementCategory.GOLD,
                description:
                  "You have reached the pinnacle of literary wisdom. With your encyclopedic knowledge and passion for books, you've become an essential reference for the community. Keep organizing, recommending, and discovering new reads!",
                achievedAt: new Date(),
              },
              {
                id: '2',
                name: 'Ultimate Librarian',
                category: AchievementCategory.SILVER,
                description:
                  "You have reached the pinnacle of literary wisdom. With your encyclopedic knowledge and passion for books, you've become an essential reference for the community. Keep organizing, recommending, and discovering new reads!",
                achievedAt: new Date(),
              },
              {
                id: '3',
                name: 'Ultimate Librarian',
                category: AchievementCategory.BRONZE,
                description:
                  "You have reached the pinnacle of literary wisdom. With your encyclopedic knowledge and passion for books, you've become an essential reference for the community. Keep organizing, recommending, and discovering new reads!",
                achievedAt: new Date(),
              },{
                id: '1',
                name: 'Ultimate Librarian',
                category: AchievementCategory.GOLD,
                description:
                  "You have reached the pinnacle of literary wisdom. With your encyclopedic knowledge and passion for books, you've become an essential reference for the community. Keep organizing, recommending, and discovering new reads!",
                achievedAt: new Date(),
              },
              {
                id: '2',
                name: 'Ultimate Librarian',
                category: AchievementCategory.SILVER,
                description:
                  "You have reached the pinnacle of literary wisdom. With your encyclopedic knowledge and passion for books, you've become an essential reference for the community. Keep organizing, recommending, and discovering new reads!",
                achievedAt: new Date(),
              },
              {
                id: '3',
                name: 'Ultimate Librarian',
                category: AchievementCategory.BRONZE,
                description:
                  "You have reached the pinnacle of literary wisdom. With your encyclopedic knowledge and passion for books, you've become an essential reference for the community. Keep organizing, recommending, and discovering new reads!",
                achievedAt: new Date(),
              },
              {
                id: '1',
                name: 'Ultimate Librarian',
                category: AchievementCategory.GOLD,
                description:
                  "You have reached the pinnacle of literary wisdom. With your encyclopedic knowledge and passion for books, you've become an essential reference for the community. Keep organizing, recommending, and discovering new reads!",
                achievedAt: new Date(),
              },
              {
                id: '2',
                name: 'Ultimate Librarian',
                category: AchievementCategory.SILVER,
                description:
                  "You have reached the pinnacle of literary wisdom. With your encyclopedic knowledge and passion for books, you've become an essential reference for the community. Keep organizing, recommending, and discovering new reads!",
                achievedAt: new Date(),
              },
              {
                id: '3',
                name: 'Ultimate Librarian',
                category: AchievementCategory.BRONZE,
                description:
                  "You have reached the pinnacle of literary wisdom. With your encyclopedic knowledge and passion for books, you've become an essential reference for the community. Keep organizing, recommending, and discovering new reads!",
                achievedAt: new Date(),
              },
            ];
          });
      }
    });
  }
  ngAfterViewInit(): void {
    const container = this.achievementsContainer.nativeElement;
    let isDown = false;
    let startX: number;
    let scrollLeft: number;

    container.addEventListener('mousedown', (e: MouseEvent) => {
      isDown = true;
      container.classList.add('active');
      startX = e.pageX - container.offsetLeft;
      scrollLeft = container.scrollLeft;
    });

    container.addEventListener('mouseleave', () => {
      isDown = false;
      container.classList.remove('active');
    });

    container.addEventListener('mouseup', () => {
      isDown = false;
      container.classList.remove('active');
    });

    container.addEventListener('mousemove', (e: MouseEvent) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - container.offsetLeft;
      const walk = (x - startX) * 3; // scroll-fast
      container.scrollLeft = scrollLeft - walk;
    });
  }
}
