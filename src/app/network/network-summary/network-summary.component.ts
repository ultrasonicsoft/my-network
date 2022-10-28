import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'network-summary',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './network-summary.component.html',
  styleUrls: ['./network-summary.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NetworkSummaryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
