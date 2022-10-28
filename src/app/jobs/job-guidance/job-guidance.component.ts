import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'job-guidance',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './job-guidance.component.html',
  styleUrls: ['./job-guidance.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class JobGuidanceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
