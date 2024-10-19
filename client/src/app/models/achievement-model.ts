import { AchievementCategory } from '../common/enums/achievement-category';
import { IdInterface } from './base-model';

export interface AchievementInterface extends IdInterface  {
  name: string;
  category: AchievementCategory;
  description: string;
  achievedAt: Date;
}

export class Achievement implements AchievementInterface {
  id!: string;
  name: string;
  category: AchievementCategory;
  description: string;
  achievedAt: Date;

  constructor(achievement: AchievementInterface) {
    this.id = achievement.id!;
    this.name = achievement.name;
    this.category = achievement.category;
    this.description = achievement.description;
    this.achievedAt = achievement.achievedAt;
  }

  public static create(params: AchievementInterface): Achievement {
    return new Achievement(params);
  }
}
