import { AchievementCategory } from '../common/enums/achievement-category';
import { BaseModelIdName, IdInterface } from './base-model';

export interface AchievementInterface extends IdInterface  {
  name: string;
  category: AchievementCategory;
  description: string;
  achievedAt?: Date;
}

export class Achievement extends BaseModelIdName<AchievementInterface> implements AchievementInterface {
  override id!: string;
  override name!: string;
  category: AchievementCategory;
  description: string;
  achievedAt?: Date;

  constructor(achievement: AchievementInterface) {
    super(achievement);

    this.id = achievement.id!;
    this.name = achievement.name;
    this.category = achievement.category;
    this.description = achievement.description;
    this.achievedAt = achievement.achievedAt;
  }

  public static create(params: AchievementInterface): Achievement {
    const achievement = new Achievement(params);
    achievement.populate(params);
    return achievement;
  }
  public override populate(params: Partial<AchievementInterface>): this {
    super.populate(params);
    return this;
  }
}
