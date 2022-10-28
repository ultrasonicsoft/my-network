import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'recent-job-searches',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './recent-job-searches.component.html',
  styleUrls: ['./recent-job-searches.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RecentJobSearchesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
