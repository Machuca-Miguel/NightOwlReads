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

  ngOnInit(): void {
  }
}
