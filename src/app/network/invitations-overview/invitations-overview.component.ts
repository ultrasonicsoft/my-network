import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'invitations-overview',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './invitations-overview.component.html',
  styleUrls: ['./invitations-overview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InvitationsOverviewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
