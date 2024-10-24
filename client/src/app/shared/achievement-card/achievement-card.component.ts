import { Component, Input, OnInit } from '@angular/core';
import { Achievement } from 'src/app/models/achievement-model';
import { AchievementCategory } from 'src/app/common/enums/achievement-category';
@Component({
  selector: 'app-achievement-card',
  templateUrl: './achievement-card.component.html',
  styleUrls: ['./achievement-card.component.scss'],
})
export class AchievementCardComponent implements OnInit {
  @Input() achievement!: Achievement;
  constructor() {}

  ngOnInit(): void {}
  public setAchievementStyle(): string {
    let className: string = '';

    switch (this.achievement.category) {
      case AchievementCategory.BRONZE:
        className = 'bronze';
        break;
      case AchievementCategory.SILVER:
        className = 'silver';
        break;
      case AchievementCategory.GOLD:
        className = 'gold';
        break;
    }
    if (this.achievement.achievedAt !== null) {
      className += ' achieved';
    }

    return className;
  }
}
