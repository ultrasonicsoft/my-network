import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'profile-overview',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile-overview.component.html',
  styleUrls: ['./profile-overview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileOverviewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
