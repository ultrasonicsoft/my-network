import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'job-update',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './job-update.component.html',
  styleUrls: ['./job-update.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class JobUpdateComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
