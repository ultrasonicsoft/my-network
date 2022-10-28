import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConnectionsRecommendationEntryComponent } from './connections-recommendation-entry/connections-recommendation-entry.component';

@Component({
  selector: 'connections-recommendation',
  standalone: true,
  imports: [
    CommonModule,
    ConnectionsRecommendationEntryComponent,

  ],
  templateUrl: './connections-recommendation.component.html',
  styleUrls: ['./connections-recommendation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConnectionsRecommendationComponent implements OnInit {

  recommendations = [1, 2, 3, 4, 5];

  constructor() { }

  ngOnInit(): void {
  }

}
