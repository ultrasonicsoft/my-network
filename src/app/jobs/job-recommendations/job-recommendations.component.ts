import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'job-recommendations',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './job-recommendations.component.html',
  styleUrls: ['./job-recommendations.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class JobRecommendationsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
