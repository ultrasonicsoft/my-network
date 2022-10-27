import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'groups-overview',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './groups-overview.component.html',
  styleUrls: ['./groups-overview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GroupsOverviewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
