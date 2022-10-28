import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'new-feature-announcement',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './new-feature-announcement.component.html',
  styleUrls: ['./new-feature-announcement.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewFeatureAnnouncementComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
