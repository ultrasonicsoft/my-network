import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'followers-recommendation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './followers-recommendation.component.html',
  styleUrls: ['./followers-recommendation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FollowersRecommendationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
