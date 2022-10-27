import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'organization-overview',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './organization-overview.component.html',
  styleUrls: ['./organization-overview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OrganizationOverviewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
