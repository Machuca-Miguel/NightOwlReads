import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnInit {
  @Input() rating: number = 0;
  @Input() totalRatings: number = 0;
  @Input() showRating : boolean = false;
  @Input() size: string = '24px';

  stars: number[] = [];

  ngOnInit(): void {
    this.stars = Array(5).fill(0).map((_, i) => i + 1);
    this.rating = parseFloat(this.rating.toFixed(1));

  }


  getStarIcon(star: number): string {
    if (this.rating >= star) {
      return 'star';
    } else if (this.rating >= star - 0.5) {
      return 'star_half';
    } else {
      return 'star_outline';
    }
  }
}
