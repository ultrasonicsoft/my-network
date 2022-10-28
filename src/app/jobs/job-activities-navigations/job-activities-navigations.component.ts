import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'job-activities-navigations',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './job-activities-navigations.component.html',
  styleUrls: ['./job-activities-navigations.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class JobActivitiesNavigationsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
